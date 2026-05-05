import json
from pathlib import Path

repo = Path(r"c:\Users\User\Documents\GitHub\Eapcet1")
exam_path = repo / "new-exam-temp-may6-shift1.json"
transcript_path = Path(r"c:\Users\User\AppData\Roaming\Code\User\workspaceStorage\055cbb485ea1aa251514df8ad04bd706\GitHub.copilot-chat\transcripts\fcf7467f-643f-4c22-acc7-541590e3c05b.jsonl")

payload = None
with transcript_path.open("r", encoding="utf-8") as f:
    for line in f:
        line = line.strip()
        if not line:
            continue
        try:
            obj = json.loads(line)
        except Exception:
            continue
        if obj.get("type") != "user.message":
            continue
        content = (obj.get("data") or {}).get("content", "")
        if isinstance(content, str) and content.startswith('{"questions":[{"qno":92'):
            payload = content

if payload is None:
    raise SystemExit("Could not find 92-160 payload in transcript")

normalized = payload.replace("\r", " ").replace("\n", " ").replace("\t", " ")
while "  " in normalized:
    normalized = normalized.replace("  ", " ")

chunk = json.loads(normalized)
new_questions = chunk.get("questions", [])
replace_by_id = {q.get("id"): q for q in new_questions if isinstance(q, dict) and q.get("id")}

with exam_path.open("r", encoding="utf-8-sig") as f:
    exam_doc = json.load(f)

exam = exam_doc["exams"][0]
questions = exam.get("questions", [])

updated = 0
for i, q in enumerate(questions):
    qid = q.get("id") if isinstance(q, dict) else None
    if qid in replace_by_id:
        questions[i] = replace_by_id[qid]
        updated += 1

existing_ids = {q.get("id") for q in questions if isinstance(q, dict)}
added = 0
for qid, q in replace_by_id.items():
    if qid not in existing_ids:
        questions.append(q)
        added += 1


def rank(item):
    qid = item.get("id", "")
    if qid.startswith("maths-"):
        return (1, int(qid.split("-")[-1]))
    if qid.startswith("physics-"):
        return (2, int(qid.split("-")[-1]))
    if qid.startswith("chemistry-"):
        return (3, int(qid.split("-")[-1]))
    return (9, 9999)

questions.sort(key=rank)
exam["questions"] = questions

with exam_path.open("w", encoding="utf-8") as f:
    json.dump(exam_doc, f, ensure_ascii=False, indent=2)
    f.write("\n")

print(f"merged updated={updated} added={added} incoming={len(new_questions)} total={len(questions)}")
