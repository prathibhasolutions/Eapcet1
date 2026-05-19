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

print(f"Total questions: {len(questions)}")
print(f"First question ID: {questions[0]['id']}")
print(f"Question 45 ID: {questions[44]['id']}")
print(f"Question 46 ID: {questions[45]['id']}")
print(f"Question 90 ID: {questions[89]['id']}")
print(f"Question 91 ID: {questions[90]['id']}")
print(f"Last question ID: {questions[179]['id']}")

# Rename based on position:
# Position 0-44 (first 45): rename to chemistry-1 to chemistry-45
for i in range(45):
    questions[i]['id'] = f"chemistry-{i+1}"
    questions[i]['section'] = "Chemistry"

# Position 45-89 (next 45): rename to biology-1 to biology-45
for i in range(45, 90):
    questions[i]['id'] = f"biology-{i-44}"
    questions[i]['section'] = "Biology"

# Position 90-179 (last 90): rename to physics-1 to physics-45
# But wait, that's 90 questions, not 45. Let me check the structure again.
# Actually if it's 180 total: 45 + 45 + 90 = 180
# So last 90 should be split into physics somehow... but physics should only be 45.
# The user said "last 90m are biology named wrong" - so they ARE biology!
# Let me re-read: "last 90m are biology named wrong"
# So positions 90-179 should be biology-46 to biology-90? No wait...
# 
# Actually I think the structure should be:
# - Chemistry: 45 questions
# - Biology: 90 questions  
# - Physics: 45 questions
# Total = 180
#
# But the user is saying the last 90 are biology. So:
# Position 0-44: physics (currently), should be chemistry
# Position 45-89: chemistry (currently), should be biology (first half)
# Position 90-179: biology (currently), should be biology (second half) + physics
#
# Hmm, this is confusing. Let me re-read one more time:
# "first 45 questions are physics, but it is named chemistry" 
# "next 45 are chemistry. but named wrong"
# "last 90m are biology named wrong"
#
# So:
# Pos 0-44: physics ID, should be chemistry ID (chem 1-45)
# Pos 45-89: chemistry ID, should be biology ID (bio 1-45)  
# Pos 90-179: biology ID, should be physics ID? or biology ID (bio 46-90)?
#
# Wait, physics is supposed to be 45, not 90. And biology is supposed to be 90.
# So if last 90 are biology, that means:
# Pos 0-44: physics -> chemistry
# Pos 45-89: chemistry -> ??? 
# Pos 90-179: biology -> biology (but they're already biology, just renumbered)
#
# Actually I think the issue is:
# - First 45 are labeled "physics-X" but should be "chemistry-1" to "chemistry-45"
# - Next 45 are labeled "chemistry-X" but should be "biology-1" to "biology-45"
# - Last 90 are labeled "biology-X" but should be "biology-46" to "biology-90"
#
# That makes sense! And would use up all 45 + 45 + 90 = 180.

for i in range(90, 180):
    questions[i]['id'] = f"biology-{i-44}"
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
