#!/usr/bin/env python3
import json
import re

html_file = r"c:\Users\User\Documents\GitHub\Eapcet1\neet-2017-print.html"

# Read HTML
with open(html_file, 'r', encoding='utf-8') as f:
    html_content = f.read()

# Extract JSON from <script id="edata">
match = re.search(r'<script id="edata" type="application/json">(.*?)</script>', html_content, re.DOTALL)
if not match:
    print("ERROR: Could not find JSON data in HTML")
    exit(1)

json_str = match.group(1)
data = json.loads(json_str)

# Get questions array
questions = data['exams'][0]['questions']

# Keep section metadata aligned with required order.
data['exams'][0]['sections'] = [
    {"key": "physics", "title": "Physics", "count": 45, "start": 1, "end": 45},
    {"key": "chemistry", "title": "Chemistry", "count": 45, "start": 46, "end": 90},
    {"key": "biology", "title": "Biology", "count": 90, "start": 91, "end": 180},
]

print(f"Total questions: {len(questions)}")
print(f"First question ID: {questions[0]['id']}")
print(f"Question 45 ID: {questions[44]['id']}")
print(f"Question 46 ID: {questions[45]['id']}")
print(f"Question 90 ID: {questions[89]['id']}")
print(f"Question 91 ID: {questions[90]['id']}")
print(f"Last question ID: {questions[179]['id']}")

# Rename based on position:
# Position 0-44 (first 45): rename to physics-1 to physics-45
for i in range(45):
    questions[i]['id'] = f"physics-{i+1}"
    questions[i]['section'] = "Physics"

# Position 45-89 (next 45): rename to chemistry-1 to chemistry-45
for i in range(45, 90):
    questions[i]['id'] = f"chemistry-{i-44}"
    questions[i]['section'] = "Chemistry"

# Position 90-179 (last 90): rename to biology-1 to biology-90
for i in range(90, 180):
    questions[i]['id'] = f"biology-{i-89}"
    questions[i]['section'] = "Biology"

print("\nAfter renaming:")
print(f"First question ID: {questions[0]['id']}")
print(f"Question 45 ID: {questions[44]['id']}")
print(f"Question 46 ID: {questions[45]['id']}")
print(f"Question 90 ID: {questions[89]['id']}")
print(f"Question 91 ID: {questions[90]['id']}")
print(f"Last question ID: {questions[179]['id']}")

# Convert back to JSON string (compact)
new_json_str = json.dumps(data, separators=(',', ':'))

# Replace JSON in HTML
new_html = re.sub(
    r'<script id="edata" type="application/json">.*?</script>',
    lambda m: '<script id="edata" type="application/json">' + new_json_str + '</script>',
    html_content,
    flags=re.DOTALL
)

# Write back to file
with open(html_file, 'w', encoding='utf-8') as f:
    f.write(new_html)

print(f"\n✓ Renamed all questions successfully!")
print(f"  Questions 1-45: physics-1 to physics-45 (Physics)")
print(f"  Questions 46-90: chemistry-1 to chemistry-45 (Chemistry)")
print(f"  Questions 91-180: biology-1 to biology-90 (Biology)")
