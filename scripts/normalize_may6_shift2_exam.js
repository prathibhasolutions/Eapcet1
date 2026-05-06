const fs = require('fs');
const path = require('path');

const filePath = path.join(__dirname, '..', 'new-exam-temp-may6-shift2.json');

function normalizePngPath(p) {
  if (!p || typeof p !== 'string') return '';
  let out = p.replace(/\\/g, '/');
  out = out.replace(/assets\/exams\/[^/]+\//, 'assets/exams/may6th-shift2/');
  out = out.replace(/\.(jpg|jpeg|webp|gif)$/i, '.png');
  return out;
}

function sectionKeyFromQuestionNumber(n) {
  if (n >= 1 && n <= 80) return 'maths';
  if (n >= 81 && n <= 120) return 'physics';
  return 'chemistry';
}

function ensureQuestionImagePath(q, qNum) {
  // Keep empty image for text-only questions. Force PNG and exam-specific path when image exists or review is needed.
  if (q.needsReview === true || (typeof q.image === 'string' && q.image.trim() !== '')) {
    const section = sectionKeyFromQuestionNumber(qNum);
    q.image = `assets/exams/may6th-shift2/${section}/questions/q${qNum}.png`;
  } else {
    q.image = '';
  }
}

function ensureOptionImagePaths(q, qNum) {
  const section = sectionKeyFromQuestionNumber(qNum);
  if (!Array.isArray(q.options)) return;
  q.options.forEach((opt) => {
    const id = String(opt.id || '').toUpperCase();
    if (!['A', 'B', 'C', 'D'].includes(id)) return;
    if (typeof opt.image === 'string' && opt.image.trim() !== '') {
      opt.image = `assets/exams/may6th-shift2/${section}/options/q${qNum}-opt-${id}.png`;
    } else {
      opt.image = '';
    }
  });
}

function main() {
  const raw = fs.readFileSync(filePath, 'utf8');
  const data = JSON.parse(raw);

  if (!data || !Array.isArray(data.exams) || data.exams.length === 0) {
    throw new Error('Invalid file shape: expected { exams: [ ... ] }.');
  }

  const exam = data.exams[0];
  exam.id = 'may6th-shift2';
  exam.title = 'May 6th (Shift 2)';
  exam.date = '2026-05-06';
  exam.durationMinutes = 180;
  exam.marksPerQuestion = 1;
  exam.negativeMark = 0;
  exam.sections = [
    { key: 'maths', title: 'Maths', count: 80, start: 1, end: 80 },
    { key: 'physics', title: 'Physics', count: 40, start: 81, end: 120 },
    { key: 'chemistry', title: 'Chemistry', count: 40, start: 121, end: 160 }
  ];

  if (!Array.isArray(exam.questions)) exam.questions = [];

  exam.questions.forEach((q, idx) => {
    const qNum = idx + 1;
    q.id = `${sectionKeyFromQuestionNumber(qNum)}-${qNum}`;
    q.section = qNum <= 80 ? 'Maths' : qNum <= 120 ? 'Physics' : 'Chemistry';

    q.image = normalizePngPath(q.image);
    ensureQuestionImagePath(q, qNum);
    ensureOptionImagePaths(q, qNum);
  });

  fs.writeFileSync(filePath, JSON.stringify(data, null, 2) + '\n', 'utf8');

  console.log(`Normalized exam metadata and image paths in: ${filePath}`);
  console.log(`Question count: ${exam.questions.length}`);
}

main();
