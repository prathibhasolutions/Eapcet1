import json
from pathlib import Path
p = Path(r"c:\Users\User\Documents\GitHub\Eapcet1\new-exam-temp-may6-shift1.json")
obj = json.loads(p.read_text(encoding="utf-8-sig"))
qs = obj["exams"][0]["questions"]
paths = []
for q in qs:
    qi = q.get("image", "")
    if qi:
        paths.append((q.get("id"), "Q", qi))
    for o in q.get("options", []):
        oi = o.get("image", "")
        if oi:
            paths.append((q.get("id"), f"OPT-{o.get('id')}", oi))
print("non_empty_image_paths", len(paths))
for row in paths[:300]:
    print(row[0], row[1], row[2])
