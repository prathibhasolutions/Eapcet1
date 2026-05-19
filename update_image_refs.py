import json
import re
import os
import shutil

html_file = "neet-2017-print.html"

if not os.path.exists(html_file):
    print(f"Error: {html_file} not found")
    sys.exit(1)

with open(html_file, "r", encoding="utf-8") as f:
    content = f.read()

pattern_script = re.compile(r"(<script id=\"edata\" type=\"application/json\">)(.*?)(</script>)", re.DOTALL)
match_script = pattern_script.search(content)

if not match_script:
    print("Error: script tag with id=\"edata\" not found")
    sys.exit(1)

prefix, json_str, suffix = match_script.groups()
data = json.loads(json_str)

q_image_refs_changed = 0
opt_image_refs_changed = 0
files_renamed = 0
missing_source_files = 0

def update_path(old_path, new_section, new_n, p_type=\"q\", letter=None):
    pattern = r"assets/exams/neet/([^/]+)/q(\d+)(?:-opt-([a-z]))?\.(\w+)"
    m = re.match(pattern, old_path)
    if not m:
        return old_path, False
    
    old_section, old_num, old_letter, ext = m.groups()
    
    if p_type == \"q\":
        new_path = f\"assets/exams/neet/{new_section}/q{new_n}.{ext}\"
    else:
        new_path = f\"assets/exams/neet/{new_section}/q{new_n}-opt-{letter}.{ext}\"
    
    if old_path == new_path:
        return old_path, False
    
    old_full_path = old_path.replace(\"/\", os.sep)
    new_full_path = new_path.replace(\"/\", os.sep)
    
    global files_renamed, missing_source_files
    if os.path.exists(old_full_path):
        if not os.path.exists(new_full_path):
            os.makedirs(os.path.dirname(new_full_path), exist_ok=True)
            shutil.move(old_full_path, new_full_path)
            files_renamed += 1
    else:
        missing_source_files += 1

    return new_path, True

for q in data:
    qid = q.get(\"id\", \"\")
    if \"-\" not in qid:
        continue
    
    section, n = qid.split(\"-\", 1)
    
    if q.get(\"image\"):
        new_img, changed = update_path(q[\"image\"], section, n, p_type=\"q\")
        if changed:
            q[\"image\"] = new_img
            q_image_refs_changed += 1
            
    for opt in q.get(\"options\", []):
        if opt.get(\"image\"):
            letter = opt.get(\"letter\", \"\").lower()
            new_img, changed = update_path(opt[\"image\"], section, n, p_type=\"opt\", letter=letter)
            if changed:
                opt[\"image\"] = new_img
                opt_image_refs_changed += 1

new_json_str = json.dumps(data, indent=2)
new_content = content[:match_script.start(2)] + new_json_str + content[match_script.end(2):]

with open(html_file, \"w\", encoding=\"utf-8\") as f:
    f.write(new_content)

print(f\"Question image refs changed: {q_image_refs_changed}\")
print(f\"Option image refs changed: {opt_image_refs_changed}\")
print(f\"Files renamed: {files_renamed}\")
print(f\"Missing source files: {missing_source_files}\")
