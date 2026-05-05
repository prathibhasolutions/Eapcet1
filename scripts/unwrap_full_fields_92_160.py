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

changed=0
for q in qs:
    n=qno(q.get("id",""))
    if n<92 or n>160:
        continue
    t=q.get("text","")
    if isinstance(t,str) and t.startswith("$") and t.endswith("$") and len(t)>=2:
        q["text"]=t[1:-1].strip()
        changed+=1
    for o in q.get("options",[]):
        ot=o.get("text","")
        if isinstance(ot,str) and ot.startswith("$") and ot.endswith("$") and len(ot)>=2:
            o["text"]=ot[1:-1].strip()
            changed+=1

p.write_text(json.dumps(obj, ensure_ascii=False, indent=2)+"\n", encoding="utf-8")
print("unwrapped_fields", changed)
