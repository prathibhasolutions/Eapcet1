# May 6th Shift 2 Image Path Conventions

Use PNG images only.

## Base folder
assets/exams/may6th-shift2/

## Section folders
- maths/questions/
- maths/options/
- physics/questions/
- physics/options/
- chemistry/questions/
- chemistry/options/

## Question image naming
- q1.png, q2.png, ..., q160.png
- Example JSON value:
  "image": "assets/exams/may6th-shift2/maths/questions/q1.png"

## Option image naming
- q<questionNumber>-opt-A.png
- q<questionNumber>-opt-B.png
- q<questionNumber>-opt-C.png
- q<questionNumber>-opt-D.png
- Example JSON value:
  "image": "assets/exams/may6th-shift2/physics/options/q95-opt-C.png"

## Notes
- Keep paths aligned with question section.
- If a question/option has no image, keep "image": "".
- Use lowercase file names and .png extension only.
