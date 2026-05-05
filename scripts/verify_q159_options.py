import json
from pathlib import Path
p = Path(r"c:\Users\User\Documents\GitHub\Eapcet1\new-exam-temp-may6-shift1.json")
obj = json.loads(p.read_text(encoding="utf-8-sig"))
for q in obj["exams"][0]["questions"]:
    if q.get("id") == "chemistry-39":
        for o in q.get("options",[]):
            t=o.get("text","")
            ok=t.startswith("$") and t.endswith("$")
            print(o.get("id"), ok, t)
        break
print("json_ok", len(obj["exams"][0]["questions"]))
