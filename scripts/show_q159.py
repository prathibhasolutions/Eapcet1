import json
from pathlib import Path
p = Path(r"c:\Users\User\Documents\GitHub\Eapcet1\new-exam-temp-may6-shift1.json")
obj = json.loads(p.read_text(encoding="utf-8-sig"))
for q in obj["exams"][0]["questions"]:
    if q.get("id") == "chemistry-39":
        print("Q:", q.get("text"))
        for o in q.get("options",[]):
            print(o.get("id"),":",o.get("text"))
        break
