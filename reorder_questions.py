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

# Separate by type
chemistry_qs = [q for q in questions if q['id'].startswith('chemistry-')]
biology_qs = [q for q in questions if q['id'].startswith('biology-')]
physics_qs = [q for q in questions if q['id'].startswith('physics-')]

# Sort each section by their local number
chemistry_qs.sort(key=lambda q: int(q['id'].split('-')[1]))
biology_qs.sort(key=lambda q: int(q['id'].split('-')[1]))
physics_qs.sort(key=lambda q: int(q['id'].split('-')[1]))

# Combine in correct order: Chemistry, Biology, Physics
reordered_questions = chemistry_qs + biology_qs + physics_qs

# Update the data structure
data['exams'][0]['questions'] = reordered_questions

# Convert back to JSON string (compact, no extra whitespace)
new_json_str = json.dumps(data, separators=(',', ':'))

# Replace JSON in HTML - use lambda function to avoid escape sequence issues
new_html = re.sub(
    r'<script id="edata" type="application/json">.*?</script>',
    lambda m: '<script id="edata" type="application/json">' + new_json_str + '</script>',
    html_content,
    flags=re.DOTALL
)

# Write back to file
with open(html_file, 'w', encoding='utf-8') as f:
    f.write(new_html)

print(f"✓ Reordered questions successfully!")
print(f"  Chemistry: {len(chemistry_qs)} questions (Q.1-Q.45)")
print(f"  Biology: {len(biology_qs)} questions (Q.46-Q.135)")
print(f"  Physics: {len(physics_qs)} questions (Q.136-Q.180)")
print(f"  Total: {len(reordered_questions)} questions")
