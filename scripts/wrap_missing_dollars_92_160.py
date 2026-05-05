import json
from pathlib import Path

p = Path(r"c:\Users\User\Documents\GitHub\Eapcet1\new-exam-temp-may6-shift1.json")
obj = json.loads(p.read_text(encoding="utf-8-sig"))
qs = obj["exams"][0]["questions"]


def qno_from_id(qid: str):
    if qid.startswith("maths-"):
        return int(qid.split("-")[1])
    if qid.startswith("physics-"):
        return 80 + int(qid.split("-")[1])
    if qid.startswith("chemistry-"):
        return 120 + int(qid.split("-")[1])
    return -1


def wrap_if_needed(s: str):
    if not isinstance(s, str):
        return s, False
    t = s.strip()
    if "\\" in t and "$" not in t:
        return f"${t}$", True
    return s, False

q_changed = 0
field_changed = 0
for q in qs:
    n = qno_from_id(q.get("id", ""))
    if n < 92 or n > 160:
        continue

    changed_here = False

    new_text, changed = wrap_if_needed(q.get("text", ""))
    if changed:
        q["text"] = new_text
        field_changed += 1
        changed_here = True

    for opt in q.get("options", []):
        new_opt_text, changed = wrap_if_needed(opt.get("text", ""))
        if changed:
            opt["text"] = new_opt_text
            field_changed += 1
            changed_here = True

    if changed_here:
        q_changed += 1

p.write_text(json.dumps(obj, ensure_ascii=False, indent=2) + "\n", encoding="utf-8")
print(f"questions_changed={q_changed} fields_wrapped={field_changed}")
