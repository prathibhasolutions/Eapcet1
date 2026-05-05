import json
from pathlib import Path
p = Path(r"c:\Users\User\Documents\GitHub\Eapcet1\new-exam-temp-may6-shift1.json")
obj = json.loads(p.read_text(encoding="utf-8-sig"))
qs = obj["exams"][0]["questions"]
count=0
for q in qs:
    qid=q.get("id","")
    if qid.startswith("physics-"):
        qno=80+int(qid.split("-")[1])
    elif qid.startswith("chemistry-"):
        qno=120+int(qid.split("-")[1])
    else:
        continue
    if qno<92:
        continue
    texts=[q.get("text","")]+[o.get("text","") for o in q.get("options",[])]
    badchars=sorted({ch for t in texts for ch in t if ord(ch)>127})
    if badchars:
        count+=1
        print(qno,qid,''.join(badchars[:20]),len(badchars))
print('with_non_ascii',count)
