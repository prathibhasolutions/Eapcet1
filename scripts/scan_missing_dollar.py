import json
from pathlib import Path

p = Path(r"c:\Users\User\Documents\GitHub\Eapcet1\new-exam-temp-may6-shift1.json")
obj = json.loads(p.read_text(encoding="utf-8-sig"))
qs = obj["exams"][0]["questions"]


def qno(qid):
    if qid.startswith("maths-"):
        return int(qid.split("-")[1])
    if qid.startswith("physics-"):
        return 80 + int(qid.split("-")[1])
    if qid.startswith("chemistry-"):
        return 120 + int(qid.split("-")[1])
    return -1

hits = []
for q in qs:
    n = qno(q.get("id", ""))
    if n < 92 or n > 160:
        continue
    if "\\" in q.get("text", "") and "$" not in q.get("text", ""):
        hits.append((n, q.get("id"), "qtext", q.get("text", "")[:120]))
    for o in q.get("options", []):
        if "\\" in o.get("text", "") and "$" not in o.get("text", ""):
            hits.append((n, q.get("id"), f"opt-{o.get('id')}", o.get("text", "")[:120]))

print("missing_dollar_fields", len(hits))
for h in hits[:120]:
    print(h)
