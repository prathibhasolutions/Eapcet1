import json
import re
from bs4 import BeautifulSoup

def check_html(file_path):
    with open(file_path, 'r', encoding='utf-8') as f:
        content = f.read()
    
    soup = BeautifulSoup(content, 'html.parser')
    script_tag = soup.find(id='edata')
    if not script_tag:
        print("No #edata tag found.")
        return

    try:
        data = json.loads(script_tag.string)
        # Use first exam as per script
        exam = data['exams'][0]
    except Exception as e:
        print(f"Error parsing JSON: {e}")
        return

    mismatches = []

    def get_expected_base(qid):
        # Example qid: neet-2017-physics-q1
        parts = qid.split('-')
        if len(parts) >= 4:
            section = parts[2].lower()
            num = parts[3].replace('q', '')
            return f"assets/exams/neet/{section}/q{num}"
        return None

    for q in exam.get('questions', []):
        qid = q.get('id', '')
        base = get_expected_base(qid)
        if not base:
            continue

        # Check question image
        img = q.get('image', '')
        if img:
            ext = img.split('.')[-1]
            expected = f"{base}.{ext}"
            if img != expected:
                mismatches.append(f"Q {qid} Image: Got {img}, Expected {expected}")

        # Check options
        for i, opt in enumerate(q.get('options', [])):
            opt_img = opt.get('image', '')
            if opt_img:
                ext = opt_img.split('.')[-1]
                # extract letter suffix: -opt-a.png
                match = re.search(r'-opt-([a-z])\.', opt_img)
                letter = match.group(1) if match else chr(97 + i)
                expected = f"{base}-opt-{letter}.{ext}"
                if opt_img != expected:
                    mismatches.append(f"Q {qid} Opt {i} Image: Got {opt_img}, Expected {expected}")

    print(f"Total mismatches: {len(mismatches)}")
    for m in mismatches[:10]:
        print(m)

check_html('neet-2017-print.html')
