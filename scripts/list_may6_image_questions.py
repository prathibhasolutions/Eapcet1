import json
from pathlib import Path

p = Path(r"c:\Users\User\Documents\GitHub\Eapcet1\new-exam-temp-may6-shift1.json")
obj = json.loads(p.read_text(encoding="utf-8-sig"))
qs = obj["exams"][0]["questions"]

rows=[]
for q in qs:
    qno = q.get("qno")
    qimg = bool(q.get("image", ""))
    oimg = any(bool(o.get("image", "")) for o in q.get("options", []))
    if qimg or oimg:
        rows.append((qno, q.get("id"), qimg, oimg))

print("count", len(rows))
print("qnos", ",".join(str(r[0]) for r in rows))
print("details")
for r in rows:
    print(f"q{r[0]} {r[1]} question_image={r[2]} option_image={r[3]}")
