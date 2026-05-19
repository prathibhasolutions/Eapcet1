import json
import re
import os
from pathlib import Path

def run():
    file_path = "neet-2017-print.html"
    with open(file_path, "r", encoding="utf-8") as f:
        content = f.read()

    # Search for any script tag containing "const edata =" or "var edata ="
    match = re.search(r'const\s+edata\s*=\s*(.*?);\s*</script>', content, re.DOTALL)
    if not match:
        match = re.search(r'<script id="edata".*?>(.*?)</script>', content, re.DOTALL)
    
    if not match:
        print("JSON data not found")
        return

    json_str = match.group(1).strip()
    try:
        data = json.loads(json_str)
    except Exception as e:
        print(f"Failed to parse JSON: {e}")
        # print("First 100 chars of data:", json_str[:100])
        return

    renames = []
    json_updates = 0
    questions = data['exams'][0]['questions']
    for q in questions:
        parts = q['id'].split('-')
        if len(parts) < 2: continue
        section = parts[0]
        n = parts[1]
        if q.get('image'):
            old_path = q['image']
            ext = os.path.splitext(old_path)[1] or ".jpg"
            new_path = f"assets/exams/neet/{section}/q{n}{ext}"
            if old_path != new_path:
                renames.append((old_path, new_path))
                q['image'] = new_path
                json_updates += 1
        for o in q.get('options', []):
            if o.get('image'):
                old_path = o['image']
                ext = os.path.splitext(old_path)[1] or ".jpg"
                letter = o['id'].lower()
                new_path = f"assets/exams/neet/{section}/q{n}-opt-{letter}{ext}"
                if old_path != new_path:
                    renames.append((old_path, new_path))
                    o['image'] = new_path
                    json_updates += 1

    renamed_count = 0
    missing_count = 0
    for old, new in renames:
        if os.path.exists(old):
            if not os.path.exists(new):
                os.makedirs(os.path.dirname(new), exist_ok=True)
                os.rename(old, new)
                renamed_count += 1
            else:
                pass
        else:
            missing_count += 1

    new_json_str = json.dumps(data, separators=(',', ':'))
    new_content = content.replace(json_str, new_json_str)
    with open(file_path, "w", encoding="utf-8") as f:
        f.write(new_content)

    print(f"JSON updates: {json_updates}")
    print(f"Files renamed: {renamed_count}")
    print(f"Files missing: {missing_count}")

run()
