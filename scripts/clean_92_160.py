import json
import re
from pathlib import Path

p = Path(r"c:\Users\User\Documents\GitHub\Eapcet1\new-exam-temp-may6-shift1.json")
obj = json.loads(p.read_text(encoding="utf-8-sig"))
qs = obj["exams"][0]["questions"]

REPL = {
    "\u200b": "",   # zero-width space
    "\u2212": "-",  # minus sign
    "\u2013": "-",  # en dash
    "\u2014": "-",  # em dash
    "\u2192": "->", # right arrow
    "\u2223": "|",  # divides/vertical bar
}


def qno_from_id(qid: str):
    if qid.startswith("maths-"):
        return int(qid.split("-")[1])
    if qid.startswith("physics-"):
        return 80 + int(qid.split("-")[1])
    if qid.startswith("chemistry-"):
        return 120 + int(qid.split("-")[1])
    return None


def clean_text(s: str) -> str:
    if not isinstance(s, str):
        return s
    t = s.replace("\r\n", " ").replace("\n", " ").replace("\r", " ")
    for old, new in REPL.items():
        t = t.replace(old, new)
    t = re.sub(r"\s+", " ", t).strip()
    return t

changed = 0
for q in qs:
    qid = q.get("id", "")
    qno = qno_from_id(qid)
    if qno is None or qno < 92 or qno > 160:
        continue

    before_q = json.dumps(q, ensure_ascii=False, sort_keys=True)
    q["text"] = clean_text(q.get("text", ""))
    for opt in q.get("options", []):
        opt["text"] = clean_text(opt.get("text", ""))
    q["issue"] = clean_text(q.get("issue", ""))
    after_q = json.dumps(q, ensure_ascii=False, sort_keys=True)
    if before_q != after_q:
        changed += 1

p.write_text(json.dumps(obj, ensure_ascii=False, indent=2) + "\n", encoding="utf-8")
print(f"cleaned_questions={changed}")
