import json
from pathlib import Path
p = Path(r"c:\Users\User\Documents\GitHub\Eapcet1\new-exam-temp-may6-shift1.json")
obj = json.loads(p.read_text(encoding="utf-8-sig"))
qs = obj["exams"][0]["questions"]
issues=[]
for q in qs:
    qid=q.get("id","")
    if qid.startswith("physics-"):
        n=int(qid.split("-")[1]); qno=80+n
    elif qid.startswith("chemistry-"):
        n=int(qid.split("-")[1]); qno=120+n
    else:
        continue
    if qno<92:
        continue
    texts=[q.get("text","")]+[o.get("text","") for o in q.get("options",[])]
    bad=[]
    for t in texts:
        if any(x in t for x in ["â","Â","€™","€‹","âˆ’","â‰","â†","â€"]):
            bad.append("mojibake")
        if "\\r\\n" in t:
            bad.append("literal_crlf")
        if "\n" in t:
            bad.append("newline")
        if "dfrac" in t and "\\\\dfrac" in t:
            bad.append("dup_latex")
    if bad:
        issues.append((qno,qid,sorted(set(bad))))
print("issues",len(issues))
for row in issues:
    print(row)
