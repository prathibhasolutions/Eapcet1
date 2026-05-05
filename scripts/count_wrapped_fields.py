import json
from pathlib import Path
p=Path(r"c:\Users\User\Documents\GitHub\Eapcet1\new-exam-temp-may6-shift1.json")
obj=json.loads(p.read_text(encoding="utf-8-sig"))
qs=obj["exams"][0]["questions"]

def qno(qid):
    if qid.startswith("maths-"): return int(qid.split("-")[1])
    if qid.startswith("physics-"): return 80+int(qid.split("-")[1])
    if qid.startswith("chemistry-"): return 120+int(qid.split("-")[1])
    return -1

wrapped=0
for q in qs:
    n=qno(q.get("id",""))
    if n<92 or n>160: continue
    vals=[q.get("text","")]+[o.get("text","") for o in q.get("options",[])]
    for t in vals:
        if isinstance(t,str) and t.startswith("$") and t.endswith("$"):
            wrapped += 1
print("fully_wrapped_fields", wrapped)
