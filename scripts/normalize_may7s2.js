const fs = require('fs');
const path = require('path');

// Read the raw pasted file (we'll write it first)
const raw = fs.readFileSync(path.join(__dirname, '..', '_may7s2_raw.json'), 'utf8');
const data = JSON.parse(raw);

const exam = data.exams[0];
exam.id = 'may7th-shift2';
exam.title = 'May 7th (Shift 2)';
exam.date = '2026-05-07';
exam.sections = [
  { name: 'Maths', from: 1, to: 80 },
  { name: 'Physics', from: 81, to: 120 },
  { name: 'Chemistry', from: 121, to: 160 }
];

// Fix image paths
function fixPath(p) {
  if (!p) return p;
  return p
    .replace(/assets\/exams\/eapcet-pyq-2024\//g, 'assets/exams/may7th-shift2/')
    .replace(/\.jpg$/i, '.png');
}

exam.questions.forEach(q => {
  q.image = fixPath(q.image);
  q.options.forEach(o => { o.image = fixPath(o.image); });
});

const out = { exams: [exam] };
fs.writeFileSync(path.join(__dirname, '..', 'new-exam-temp-may7-shift2.json'), JSON.stringify(out, null, 2), 'utf8');
console.log('Done. Questions:', exam.questions.length);
