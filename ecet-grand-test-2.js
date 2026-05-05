(function () {
  var root = window.BUNDLED_EXAMS;
  if (!root || !Array.isArray(root.exams)) return;

  var NEW_EXAM_ID = "ecet-grand-test-2";
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
    xhr.open("GET", "new-exam-temp-ecet-grand-test-2.json", false);
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
    newExam.title = "AP ECET PYP - Mechanical Engg. 06th May 2025 Shift 2";
    newExam.date = "2025-05-06";
    root.exams.push(newExam);
  } catch (e) {
    // Keep app functional if payload is missing or invalid JSON.
  }
})();
