import json
from pathlib import Path
p = Path(r"c:\Users\User\Documents\GitHub\Eapcet1\new-exam-temp-may6-shift1.json")
obj = json.loads(p.read_text(encoding="utf-8-sig"))
qs = obj["exams"][0]["questions"]

ids=[]
for q in qs:
    qid=q.get("id","")
    ids.append(qid)

def qno(qid):
    if qid.startswith("maths-"): return int(qid.split("-")[1])
    if qid.startswith("physics-"): return 80+int(qid.split("-")[1])
    if qid.startswith("chemistry-"): return 120+int(qid.split("-")[1])
    return -1

subset=[q for q in qs if 92<=qno(q.get("id",""))<=160]
non_ascii=0
for q in subset:
    texts=[q.get("text","")]+[o.get("text","") for o in q.get("options",[])]
    if any(any(ord(ch)>127 for ch in t) for t in texts):
        non_ascii += 1

from collections import Counter
c=Counter(ids)
dup=sum(1 for k,v in c.items() if v>1)

sections=Counter(q.get("section","") for q in qs)
print("total",len(qs))
print("dup_ids",dup)
print("sections",dict(sections))
print("subset_92_160",len(subset))
print("subset_with_non_ascii",non_ascii)
