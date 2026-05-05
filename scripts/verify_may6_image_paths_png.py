import json
from pathlib import Path
from collections import Counter
p = Path(r"c:\Users\User\Documents\GitHub\Eapcet1\new-exam-temp-may6-shift1.json")
obj = json.loads(p.read_text(encoding="utf-8-sig"))
qs = obj["exams"][0]["questions"]

bad=[]
all_non_empty=[]
for q in qs:
    qi=q.get("image","")
    if qi:
        all_non_empty.append(qi)
        if not qi.startswith("assets/exams/may6th-shift1/") or not qi.endswith(".png"):
            bad.append((q.get("id"),"Q",qi))
    for o in q.get("options",[]):
        oi=o.get("image","")
        if oi:
            all_non_empty.append(oi)
            if not oi.startswith("assets/exams/may6th-shift1/") or not oi.endswith(".png"):
                bad.append((q.get("id"),f"OPT-{o.get('id')}",oi))

print("non_empty_paths", len(all_non_empty))
print("invalid_paths", len(bad))
for b in bad[:20]:
    print(b)

ids=[q.get("id","") for q in qs]
dup=sum(1 for _,c in Counter(ids).items() if c>1)
print("total",len(qs),"dup_ids",dup)
for q in qs:
    if q.get("id") in {"physics-14","chemistry-35","chemistry-37","chemistry-38"}:
        print(q.get("id"), q.get("image"))
        for o in q.get("options",[]):
            if o.get("image",""):
                print("  ",o.get("id"),o.get("image"))
