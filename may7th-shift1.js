(function () {
  var root = window.BUNDLED_EXAMS;
  if (!root || !Array.isArray(root.exams)) return;

  var NEW_EXAM_ID = "may7th-shift1";
  var existing = root.exams.some(function (exam) {
    return exam && exam.id === NEW_EXAM_ID;
  });
  if (existing) return;

  function pickExamFromPayload(payload) {
    if (!payload) return null;
    if (Array.isArray(payload)) return payload[0] || null;
    if (payload.exams && Array.isArray(payload.exams)) return payload.exams[0] || null;
    if (payload.questions && Array.isArray(payload.questions)) return payload;
    return null;
  }

  function loadPayload() {
    var xhr = new XMLHttpRequest();
    xhr.open("GET", "new-exam-temp-may7-shift1.json", false);
    xhr.send(null);
    if (xhr.status < 200 || xhr.status >= 300) return null;
    return JSON.parse(xhr.responseText);
  }

  try {
    var payload = loadPayload();
    var source = pickExamFromPayload(payload);
    if (!source) return;

    var newExam = JSON.parse(JSON.stringify(source));
    newExam.id = NEW_EXAM_ID;
    newExam.title = "May 7th (Shift 1)";
    newExam.date = "2026-05-07";
    root.exams.push(newExam);
  } catch (e) {
    // Keep app functional if payload is missing or invalid JSON.
  }
})();
