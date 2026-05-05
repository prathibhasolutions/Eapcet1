import json
from pathlib import Path

p = Path(r"c:\Users\User\Documents\GitHub\Eapcet1\new-exam-temp-may6-shift1.json")
obj = json.loads(p.read_text(encoding="utf-8-sig"))
qs = obj["exams"][0]["questions"]


def parse_id(qid: str):
    if qid.startswith("maths-"):
        return "maths", int(qid.split("-")[1])
    if qid.startswith("physics-"):
        return "physics", int(qid.split("-")[1])
    if qid.startswith("chemistry-"):
        return "chemistry", int(qid.split("-")[1])
    return None, None

changed = 0
for q in qs:
    qid = q.get("id", "")
    section_key, local = parse_id(qid)
    if not section_key:
        continue

    if q.get("image", ""):
        new_q_path = f"assets/exams/may6th-shift1/{section_key}/questions/q{local}.png"
        if q["image"] != new_q_path:
            q["image"] = new_q_path
            changed += 1

    for opt in q.get("options", []):
        if opt.get("image", ""):
            opt_id = str(opt.get("id", "")).lower()
            new_o_path = f"assets/exams/may6th-shift1/{section_key}/options/q{local}-opt-{opt_id}.png"
            if opt["image"] != new_o_path:
                opt["image"] = new_o_path
                changed += 1

p.write_text(json.dumps(obj, ensure_ascii=False, indent=2) + "\n", encoding="utf-8")
print("paths_updated", changed)
