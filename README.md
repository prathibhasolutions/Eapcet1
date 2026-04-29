# EAPCET Mock Test Platform (GitHub Pages)

Static NTA-style mock test platform for daily exams.

## Features

- Exam list with Start Test action
- Instruction/consent screen before exam
- Student name capture
- 3 sections with NTA-like split
  - Maths: 80
  - Physics: 40
  - Chemistry: 40
- Total questions: 160
- Question palette for navigation (section-wise)
- 4 radio options per question (A/B/C/D)
- 180-minute timer with auto-submit
- Manual submit button
- Result report with:
  - Attempted answers
  - Correct key
  - Correct/Wrong/Not attempted status
  - Score summary
- Save result to Google Sheet (via Apps Script endpoint)
- Auto-download result PDF on submission (manual or timer auto-submit)

## Files

- `index.html` - UI layout
- `styles.css` - responsive styling
- `exams.js` - exam data (daily test config)
- `app.js` - exam engine and result logic

## Add Daily Exam

Edit `exams.js` and add an exam object to `window.EXAMS`.

Question image convention used by default:

- `assets/exams/<exam-id>/maths/q1.jpg ... q80.jpg`
- `assets/exams/<exam-id>/physics/q1.jpg ... q40.jpg`
- `assets/exams/<exam-id>/chemistry/q1.jpg ... q40.jpg`

If image is missing, placeholder appears.

## Google Sheet Save Setup

1. Create a Google Sheet.
2. Open Extensions -> Apps Script.
3. Use script like below and deploy as Web App (Anyone with link):

```javascript
function doPost(e) {
  var sheet = SpreadsheetApp.getActiveSpreadsheet().getSheetByName('Results') || SpreadsheetApp.getActiveSpreadsheet().insertSheet('Results');
  var data = JSON.parse(e.postData.contents || '{}');
  sheet.appendRow([
    new Date(),
    data.examId || '',
    data.examTitle || '',
    data.studentName || '',
    data.autoSubmitted || false,
    data.total || 0,
    data.attempted || 0,
    data.correct || 0,
    data.wrong || 0,
    data.score || 0,
    JSON.stringify(data.answers || {}),
    JSON.stringify(data.resultRows || [])
  ]);
  return ContentService.createTextOutput(JSON.stringify({ ok: true })).setMimeType(ContentService.MimeType.JSON);
}
```

4. Copy deployment URL.
5. Paste URL in `app.js` at `GOOGLE_SHEET_WEBAPP_URL`.

## GitHub Pages Deploy

1. Push this repo to GitHub.
2. Go to Settings -> Pages.
3. Source: Deploy from branch.
4. Branch: `main` and folder `/root`.
5. Open published URL.

## Important Note

This app is client-side only for GitHub Pages. For production proctoring/security, move to server-backed architecture.
