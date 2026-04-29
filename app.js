(function () {
  var state = {
    exam: null,
    studentName: "",
    answers: {},
    marked: {},
    visited: {},
    currentQuestionIndex: 0,
    currentPaletteSection: "maths",
    timerSeconds: 0,
    timerEndAt: 0,
    timerRef: null,
    submitted: false
  };

  var SESSION_STORAGE_KEY = "eapcet-active-exam-session-v1";
  var RESULT_STORAGE_KEY = "eapcet-result-v1";
  var IMPORTED_EXAMS_STORAGE_KEY = "eapcet-imported-exams-v1";

  // Replace with your deployed Google Apps Script Web App URL.
  var GOOGLE_SHEET_WEBAPP_URL = "";

  var screens = {
    home: document.getElementById("homeScreen"),
    instruction: document.getElementById("instructionScreen"),
    exam: document.getElementById("examScreen"),
    result: document.getElementById("resultScreen"),
    editExam: document.getElementById("editExamScreen")
  };

  var editingExamId = null;

  function showScreen(name) {
    Object.keys(screens).forEach(function (key) {
      screens[key].classList.toggle("active", key === name);
    });
  }

  function escapeHtml(text) {
    var map = { "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#039;" };
    return String(text || "").replace(/[&<>"']/g, function (m) { return map[m]; });
  }

  function slugify(value) {
    return String(value || "")
      .trim()
      .toLowerCase()
      .replace(/[^a-z0-9]+/g, "-")
      .replace(/^-+|-+$/g, "") || "section";
  }

  function safeTypeset(root) {
    if (!root || !window.MathJax || typeof window.MathJax.typesetPromise !== "function") return;
    window.MathJax.typesetPromise([root]).catch(function () {
      // Ignore rendering errors to avoid blocking exam flow.
    });
  }

  function toOptionObject(opt, index) {
    var fallbackId = String.fromCharCode(65 + index);
    if (typeof opt === "string") {
      return { id: opt, text: "Option " + opt, image: "" };
    }
    if (opt && typeof opt === "object") {
      var id = String(opt.id || fallbackId);
      return {
        id: id,
        text: opt.text != null ? String(opt.text) : (opt.label != null ? String(opt.label) : ("Option " + id)),
        image: opt.image || opt.imageUrl || ""
      };
    }
    return { id: fallbackId, text: "Option " + fallbackId, image: "" };
  }

  function normalizeQuestion(question, index) {
    var q = question && typeof question === "object" ? question : {};
    var options = Array.isArray(q.options) ? q.options : ["A", "B", "C", "D"];

    return {
      id: q.id || ("q-" + (index + 1)),
      section: q.section || "General",
      text: q.text != null ? String(q.text) : "",
      image: q.image || q.imageUrl || "",
      options: options.map(function (opt, i) { return toOptionObject(opt, i); }),
      correct: q.correct || q.correctOption || "A"
    };
  }

  function buildSectionsFromQuestions(questions) {
    var list = [];
    var start = 1;
    var grouped = {};

    questions.forEach(function (q) {
      var title = q.section || "General";
      grouped[title] = (grouped[title] || 0) + 1;
    });

    Object.keys(grouped).forEach(function (title) {
      var count = grouped[title];
      list.push({
        key: slugify(title),
        title: title,
        count: count,
        start: start,
        end: start + count - 1
      });
      start += count;
    });

    if (!list.length) {
      return [{ key: "general", title: "General", count: questions.length, start: 1, end: questions.length }];
    }
    return list;
  }

  function normalizeExam(exam) {
    if (!exam || typeof exam !== "object") return null;
    var questions = Array.isArray(exam.questions) ? exam.questions.map(normalizeQuestion) : [];
    var sections = Array.isArray(exam.sections) && exam.sections.length ? exam.sections : buildSectionsFromQuestions(questions);

    var fixedSections = sections.map(function (s) {
      return {
        key: s.key || slugify(s.title),
        title: s.title || s.key || "Section",
        count: Number(s.count) || 0,
        start: Number(s.start) || 1,
        end: Number(s.end) || 1
      };
    });

    // If provided section ranges don't match available questions, rebuild from question.section.
    var maxEnd = 0;
    var badRange = false;
    fixedSections.forEach(function (s) {
      if (s.start < 1 || s.end < s.start) badRange = true;
      if (s.end > maxEnd) maxEnd = s.end;
    });
    if (!questions.length || badRange || maxEnd > questions.length) {
      fixedSections = buildSectionsFromQuestions(questions);
    }

    return {
      id: String(exam.id || ("exam-" + Date.now())),
      title: String(exam.title || "Mock Test"),
      date: String(exam.date || new Date().toISOString().slice(0, 10)),
      durationMinutes: Number(exam.durationMinutes || 180),
      marksPerQuestion: Number(exam.marksPerQuestion || 1),
      negativeMark: Number(exam.negativeMark || 0),
      sections: fixedSections,
      questions: questions
    };
  }

  function readImportedExams() {
    try {
      var raw = localStorage.getItem(IMPORTED_EXAMS_STORAGE_KEY);
      if (!raw) return [];
      var parsed = JSON.parse(raw);
      if (!Array.isArray(parsed)) return [];
      return parsed.map(normalizeExam).filter(Boolean);
    } catch (e) {
      return [];
    }
  }

  function writeImportedExams(exams) {
    try {
      localStorage.setItem(IMPORTED_EXAMS_STORAGE_KEY, JSON.stringify(exams));
    } catch (e) {
      // Ignore storage failures.
    }
  }

  function getAllExams() {
    var base = Array.isArray(window.EXAMS) ? window.EXAMS.map(normalizeExam).filter(Boolean) : [];
    var bundledPayload = window.BUNDLED_EXAMS;
    var bundled = [];
    if (Array.isArray(bundledPayload)) bundled = bundledPayload;
    else if (bundledPayload && Array.isArray(bundledPayload.exams)) bundled = bundledPayload.exams;
    else if (bundledPayload && typeof bundledPayload === "object" && bundledPayload.questions) bundled = [bundledPayload];
    bundled = bundled.map(normalizeExam).filter(Boolean);

    var imported = readImportedExams();
    var map = {};

    base.forEach(function (exam) { map[exam.id] = exam; });
    bundled.forEach(function (exam) { map[exam.id] = exam; });
    imported.forEach(function (exam) { map[exam.id] = exam; });

    return Object.keys(map).map(function (id) { return map[id]; });
  }

  function findExamById(examId) {
    var exams = getAllExams();
    for (var i = 0; i < exams.length; i++) {
      if (exams[i].id === examId) return exams[i];
    }
    return null;
  }

  function renderExamList() {
    var examList = document.getElementById("examList");
    examList.innerHTML = "";

    var allExams = getAllExams();
    if (!allExams.length) {
      examList.innerHTML = "<div class='exam-item'><div><strong>No exams available</strong><p>Import or add an exam to continue.</p></div></div>";
      return;
    }

    allExams.forEach(function (exam) {
      var row = document.createElement("div");
      row.className = "exam-item";
      row.innerHTML = ""
        + "<div>"
        + "<strong>" + escapeHtml(exam.title) + "</strong>"
        + "<p>Date: " + escapeHtml(exam.date) + " | Questions: " + exam.questions.length + "</p>"
        + "</div>"
        + "<div class=\"exam-item-actions\">"
        + "<button class=\"btn\" data-exam-id=\"" + exam.id + "\">Start Test</button>"
        + "<button class=\"btn btn-secondary\" data-edit-id=\"" + exam.id + "\">Edit</button>"
        + "<button class=\"btn btn-danger\" data-delete-id=\"" + exam.id + "\">Delete</button>"
        + "</div>";
      examList.appendChild(row);
    });

    examList.querySelectorAll("button[data-exam-id]").forEach(function (btn) {
      btn.addEventListener("click", function () {
        var id = btn.getAttribute("data-exam-id");
        startInstructionFlow(id);
      });
    });

    examList.querySelectorAll("button[data-edit-id]").forEach(function (btn) {
      btn.addEventListener("click", function (e) {
        e.stopPropagation();
        var id = btn.getAttribute("data-edit-id");
        openExamEditor(id);
      });
    });

    examList.querySelectorAll("button[data-delete-id]").forEach(function (btn) {
      btn.addEventListener("click", function (e) {
        e.stopPropagation();
        var id = btn.getAttribute("data-delete-id");
        if (window.confirm("Are you sure you want to delete this exam? This cannot be undone.")) {
          deleteExam(id);
        }
      });
    });
  }

  function startInstructionFlow(examId) {
    state.exam = findExamById(examId);
    if (!state.exam) return;

    document.getElementById("instructionExamTitle").textContent = state.exam.title + " - Instructions";
    document.getElementById("studentName").value = "";
    document.getElementById("consentCheck").checked = false;
    showScreen("instruction");
  }

  function initExamSession() {
    state.answers = {};
    state.marked = {};
    state.visited = {};
    state.currentQuestionIndex = 0;
    state.currentPaletteSection = state.exam.sections[0] ? state.exam.sections[0].key : "maths";
    state.timerSeconds = state.exam.durationMinutes * 60;
    state.timerEndAt = Date.now() + (state.timerSeconds * 1000);
    state.submitted = false;

    document.getElementById("activeExamTitle").textContent = state.exam.title;
    document.getElementById("studentBadge").textContent = "Student: " + state.studentName;

    renderSectionTabs();
    renderPalette();
    renderQuestion();
    startTimer();
    showScreen("exam");
    saveExamSession();
  }

  function startTimer() {
    clearInterval(state.timerRef);
    refreshTimerFromEndAt();
    updateTimerDisplay();

    state.timerRef = setInterval(function () {
      refreshTimerFromEndAt();
      updateTimerDisplay();
      saveExamSession();

      if (state.timerSeconds <= 0) {
        clearInterval(state.timerRef);
        submitExam(true);
      }
    }, 1000);
  }

  function refreshTimerFromEndAt() {
    if (!state.timerEndAt) return;
    state.timerSeconds = Math.max(0, Math.ceil((state.timerEndAt - Date.now()) / 1000));
  }

  function updateTimerDisplay() {
    var sec = Math.max(0, state.timerSeconds);
    var m = Math.floor(sec / 60);
    var s = sec % 60;
    var text = String(m).padStart(2, "0") + ":" + String(s).padStart(2, "0");
    document.getElementById("timer").textContent = text;
  }

  function renderSectionTabs() {
    var tabs = document.getElementById("sectionTabs");
    tabs.innerHTML = "";

    state.exam.sections.forEach(function (sec) {
      var b = document.createElement("button");
      b.className = "tab" + (sec.key === state.currentPaletteSection ? " active" : "");
      b.textContent = sec.title;
      b.addEventListener("click", function () {
        state.currentPaletteSection = sec.key;
        renderSectionTabs();
        renderPalette();
        saveExamSession();
      });
      tabs.appendChild(b);
    });
  }

  function getSectionByQuestionIndex(qIndex) {
    var oneBased = qIndex + 1;
    for (var i = 0; i < state.exam.sections.length; i++) {
      var sec = state.exam.sections[i];
      if (oneBased >= sec.start && oneBased <= sec.end) return sec;
    }
    return state.exam.sections[0];
  }

  function getQuestionByIndex(qIndex) {
    return state.exam.questions[qIndex];
  }

  function getCorrectOptionId(question) {
    if (question && question.correct && typeof question.correct === "object" && question.correct.id) {
      return String(question.correct.id);
    }
    return String(question.correct || "");
  }

  function getOptionList(question) {
    if (!question || !Array.isArray(question.options)) return [];
    return question.options.map(function (opt, i) { return toOptionObject(opt, i); });
  }

  function renderMathInNode(node, html) {
    node.innerHTML = html || "";
    safeTypeset(node);
  }

  function setImageWithFallback(imageEl, wrapEl, src, fallbackTitle, fallbackPath) {
    if (!src) {
      wrapEl.classList.add("is-hidden");
      imageEl.removeAttribute("src");
      return;
    }

    wrapEl.classList.remove("is-hidden");
    imageEl.src = src;
    imageEl.onerror = function () {
      imageEl.onerror = null;
      imageEl.src = "data:image/svg+xml;charset=UTF-8," + encodeURIComponent(
        '<svg xmlns="http://www.w3.org/2000/svg" width="900" height="360">'
        + '<rect width="100%" height="100%" fill="#f8fafc"/>'
        + '<text x="50%" y="45%" text-anchor="middle" fill="#334155" font-size="22" font-family="Arial">' + escapeHtml(fallbackTitle) + '</text>'
        + '<text x="50%" y="57%" text-anchor="middle" fill="#64748b" font-size="14" font-family="Arial">' + escapeHtml(fallbackPath || "") + '</text>'
        + '</svg>'
      );
    };
  }

  function getPaletteBtnClass(qIndex) {
    var q = getQuestionByIndex(qIndex);
    var answered = !!state.answers[q.id];
    var isMarked = !!state.marked[q.id];
    var isVisited = !!state.visited[q.id];
    var isCurrent = qIndex === state.currentQuestionIndex;

    var cls = "pal-btn";
    if (isCurrent) cls += " pal-current";
    if (isMarked && answered) cls += " pal-marked-answered";
    else if (isMarked) cls += " pal-marked";
    else if (answered) cls += " pal-answered";
    else if (isVisited) cls += " pal-visited";
    return cls;
  }

  function renderPalette() {
    var palette = document.getElementById("questionPalette");
    palette.innerHTML = "";

    var sec = state.exam.sections.find(function (s) { return s.key === state.currentPaletteSection; });
    if (!sec) return;

    for (var i = sec.start; i <= sec.end; i++) {
      (function (qNo) {
        var qIndex = qNo - 1;
        var q = getQuestionByIndex(qIndex);
        var isMarkedAnswered = !!state.marked[q.id] && !!state.answers[q.id];

        var btn = document.createElement("button");
        btn.className = getPaletteBtnClass(qIndex);

        if (isMarkedAnswered) {
          btn.innerHTML = qNo + "<span class='pal-tick'>&#10003;</span>";
        } else {
          btn.textContent = qNo;
        }

        btn.addEventListener("click", function () {
          state.currentQuestionIndex = qIndex;
          renderQuestion();
          renderPalette();
          saveExamSession();
        });
        palette.appendChild(btn);
      })(i);
    }
  }

  function renderQuestion() {
    var qIndex = state.currentQuestionIndex;
    var q = getQuestionByIndex(qIndex);
    var sec = getSectionByQuestionIndex(qIndex);
    var options = getOptionList(q);

    state.visited[q.id] = true;

    document.getElementById("questionMeta").textContent = "Question " + (qIndex + 1) + " / " + state.exam.questions.length;
    document.getElementById("sectionMeta").textContent = sec.title;

    var markBtn = document.getElementById("markReviewBtn");
    if (markBtn) {
      markBtn.classList.toggle("active", !!state.marked[q.id]);
      markBtn.textContent = state.marked[q.id] ? "Marked for Review" : "Mark for Review";
    }

    var qTextWrap = document.getElementById("questionTextWrap");
    renderMathInNode(qTextWrap, q.text ? q.text : "");

    var image = document.getElementById("questionImage");
    var imageWrap = image.parentElement;
    image.alt = "Question " + (qIndex + 1);
    setImageWithFallback(image, imageWrap, q.image, "Question image missing", q.image);

    var selected = state.answers[q.id] || "";
    var wrap = document.getElementById("optionsWrap");
    wrap.innerHTML = "";

    options.forEach(function (opt) {
      var label = document.createElement("label");
      label.className = "opt";

      var radio = document.createElement("input");
      radio.type = "radio";
      radio.name = "option";
      radio.value = opt.id;
      radio.checked = selected === opt.id;

      var content = document.createElement("div");
      content.className = "opt-content";

      var txt = document.createElement("div");
      txt.className = "opt-text";
      txt.innerHTML = "<strong>" + escapeHtml(opt.id) + ".</strong> " + (opt.text || "");
      content.appendChild(txt);

      if (opt.image) {
        var img = document.createElement("img");
        img.className = "opt-img";
        img.alt = "Option " + opt.id;
        img.src = opt.image;
        img.onerror = function () {
          this.onerror = null;
          this.src = "data:image/svg+xml;charset=UTF-8," + encodeURIComponent(
            '<svg xmlns="http://www.w3.org/2000/svg" width="700" height="160">'
            + '<rect width="100%" height="100%" fill="#f8fafc"/>'
            + '<text x="50%" y="50%" text-anchor="middle" fill="#475569" font-size="18" font-family="Arial">Option image missing</text>'
            + '</svg>'
          );
        };
        content.appendChild(img);
      }

      label.appendChild(radio);
      label.appendChild(content);
      wrap.appendChild(label);

      safeTypeset(txt);
    });

    wrap.querySelectorAll("input[name='option']").forEach(function (radio) {
      radio.addEventListener("change", function () {
        state.answers[q.id] = radio.value;
        renderPalette();
        saveExamSession();
      });
    });

    var prevBtn = document.getElementById("prevBtn");
    var nextBtn = document.getElementById("nextBtn");

    prevBtn.disabled = qIndex === 0;
    nextBtn.disabled = qIndex === state.exam.questions.length - 1;
  }

  function wireMarkForReview() {
    var markBtn = document.getElementById("markReviewBtn");
    if (!markBtn) return;
    markBtn.addEventListener("click", function () {
      var q = getQuestionByIndex(state.currentQuestionIndex);
      state.marked[q.id] = !state.marked[q.id];
      renderQuestion();
      renderPalette();
      saveExamSession();
    });
  }

  function calculateResult() {
    var correct = 0;
    var attempted = 0;
    var rows = [];

    state.exam.questions.forEach(function (q, idx) {
      var correctId = getCorrectOptionId(q);
      var ans = state.answers[q.id] || "-";
      var status = "Not Attempted";
      if (ans !== "-") {
        attempted += 1;
        status = ans === correctId ? "Correct" : "Wrong";
      }
      if (ans === correctId) correct += 1;

      rows.push({
        no: idx + 1,
        section: q.section,
        selected: ans,
        correct: correctId,
        status: status
      });
    });

    var total = state.exam.questions.length;
    var wrong = attempted - correct;
    var score = (correct * state.exam.marksPerQuestion) - (wrong * state.exam.negativeMark);

    return {
      total: total,
      attempted: attempted,
      correct: correct,
      wrong: wrong,
      score: score,
      rows: rows
    };
  }

  function renderResult(result) {
    var submittedAt = result.submittedAt || new Date().toLocaleString();
    var summary = document.getElementById("resultSummary");
    summary.innerHTML = ""
      + kpi("Student", escapeHtml(state.studentName))
      + kpi("Total Questions", result.total)
      + kpi("Attempted", result.attempted)
      + kpi("Correct", result.correct)
      + kpi("Wrong", result.wrong)
      + kpi("Score", result.score)
      + kpi("Exam", escapeHtml(state.exam.title))
      + kpi("Submitted At", escapeHtml(submittedAt));

    var tbody = document.getElementById("resultTableBody");
    tbody.innerHTML = "";

    result.rows.forEach(function (r) {
      var tr = document.createElement("tr");
      var cls = r.status === "Correct" ? "status-ok" : r.status === "Wrong" ? "status-bad" : "status-na";
      tr.innerHTML = ""
        + "<td>" + r.no + "</td>"
        + "<td>" + escapeHtml(r.section) + "</td>"
        + "<td>" + escapeHtml(r.selected) + "</td>"
        + "<td>" + escapeHtml(r.correct) + "</td>"
        + "<td class='" + cls + "'>" + escapeHtml(r.status) + "</td>"
        + "<td><button class='btn btn-sm-view' data-qindex='" + (r.no - 1) + "'>View</button></td>";
      tbody.appendChild(tr);
    });

    tbody.querySelectorAll("button[data-qindex]").forEach(function (btn) {
      btn.addEventListener("click", function () {
        openQuestionModal(Number(btn.getAttribute("data-qindex")));
      });
    });

    showScreen("result");
  }

  function openQuestionModal(qIndex) {
    var modal = document.getElementById("qModal");
    var q = getQuestionByIndex(qIndex);
    var sec = getSectionByQuestionIndex(qIndex);
    var correctId = getCorrectOptionId(q);
    var options = getOptionList(q);

    document.getElementById("modalTitle").textContent = "Question " + (qIndex + 1);
    document.getElementById("modalQNo").textContent = "Q" + (qIndex + 1);
    document.getElementById("modalSection").textContent = sec.title;

    var modalQText = document.getElementById("modalQText");
    renderMathInNode(modalQText, q.text ? q.text : "");

    var img = document.getElementById("modalQImg");
    var imgWrap = img.parentElement;
    setImageWithFallback(img, imgWrap, q.image, "Image not available", q.image);

    var optionPreview = document.getElementById("modalOptionPreview");
    optionPreview.innerHTML = "";
    options.forEach(function (opt) {
      var row = document.createElement("div");
      row.className = "modal-option" + (opt.id === correctId ? " correct-opt" : "");

      var html = "<strong>" + escapeHtml(opt.id) + ".</strong> " + (opt.text || "");
      if (opt.image) {
        html += "<div style='margin-top:8px'><img class='opt-img' alt='Option " + escapeHtml(opt.id) + "' src='" + escapeHtml(opt.image) + "'></div>";
      }
      row.innerHTML = html;
      optionPreview.appendChild(row);
      safeTypeset(row);
    });

    var yourAns = (state.answers && state.answers[q.id]) || "-";
    var yourEl = document.getElementById("modalYourAns");
    yourEl.textContent = yourAns;
    yourEl.className = "modal-val" + (yourAns === correctId ? " modal-val-correct" : yourAns === "-" ? " modal-val-na" : " modal-val-wrong");

    document.getElementById("modalCorrectAns").textContent = correctId;

    modal.hidden = false;
    document.body.style.overflow = "hidden";
  }

  function closeQuestionModal() {
    var modal = document.getElementById("qModal");
    modal.hidden = true;
    document.body.style.overflow = "";
  }

  function getSubmissionSummary() {
    var summary = {
      total: state.exam.questions.length,
      answered: 0,
      notAnswered: 0,
      notVisited: 0,
      marked: 0,
      markedAnswered: 0
    };

    state.exam.questions.forEach(function (q) {
      var answered = !!state.answers[q.id];
      var visited = !!state.visited[q.id];
      var marked = !!state.marked[q.id];

      if (answered) summary.answered += 1;
      else summary.notAnswered += 1;

      if (!visited) summary.notVisited += 1;

      if (marked) summary.marked += 1;
      if (marked && answered) summary.markedAnswered += 1;
    });

    return summary;
  }

  function fillSubmitSummary() {
    var summary = getSubmissionSummary();
    document.getElementById("sumTotal").textContent = summary.total;
    document.getElementById("sumAnswered").textContent = summary.answered;
    document.getElementById("sumNotAnswered").textContent = summary.notAnswered;
    document.getElementById("sumNotVisited").textContent = summary.notVisited;
    document.getElementById("sumMarked").textContent = summary.marked;
    document.getElementById("sumMarkedAnswered").textContent = summary.markedAnswered;

    var backBtn = document.getElementById("submitBackBtn");
    var timeLeft = Math.max(0, state.timerSeconds || 0);
    backBtn.disabled = timeLeft <= 0;
  }

  function openSubmitModal() {
    fillSubmitSummary();
    var modal = document.getElementById("submitModal");
    modal.hidden = false;
    document.body.style.overflow = "hidden";
  }

  function closeSubmitModal() {
    var modal = document.getElementById("submitModal");
    if (!modal) return;
    modal.hidden = true;
    document.body.style.overflow = "";
  }

  function wireModal() {
    document.getElementById("modalCloseBtn").addEventListener("click", closeQuestionModal);
    document.getElementById("qModal").addEventListener("click", function (e) {
      if (e.target === this) closeQuestionModal();
    });

    document.getElementById("submitModalCloseBtn").addEventListener("click", closeSubmitModal);
    document.getElementById("submitModal").addEventListener("click", function (e) {
      if (e.target === this) closeSubmitModal();
    });

    document.getElementById("submitBackBtn").addEventListener("click", function () {
      closeSubmitModal();
    });

    document.getElementById("submitFinalBtn").addEventListener("click", function () {
      closeSubmitModal();
      submitExam(false);
    });

    document.addEventListener("keydown", function (e) {
      if (e.key === "Escape") {
        if (!document.getElementById("submitModal").hidden) {
          closeSubmitModal();
          return;
        }
        if (!document.getElementById("qModal").hidden) {
          closeQuestionModal();
        }
      }
    });
  }

  function saveResultSession(result) {
    if (!state.exam) return;
    var payload = {
      examId: state.exam.id,
      studentName: state.studentName,
      result: result
    };
    try {
      localStorage.setItem(RESULT_STORAGE_KEY, JSON.stringify(payload));
    } catch (e) {}
  }

  function clearResultSession() {
    try {
      localStorage.removeItem(RESULT_STORAGE_KEY);
    } catch (e) {}
  }

  function tryRestoreResultSession() {
    var raw;
    try {
      raw = localStorage.getItem(RESULT_STORAGE_KEY);
    } catch (e) {
      return false;
    }
    if (!raw) return false;

    var saved;
    try {
      saved = JSON.parse(raw);
    } catch (e) {
      clearResultSession();
      return false;
    }

    var exam = findExamById(saved.examId);
    if (!exam || !saved.result) {
      clearResultSession();
      return false;
    }

    state.exam = exam;
    state.studentName = saved.studentName || "";
    state.submitted = true;
    renderResult(saved.result);
    return true;
  }

  function kpi(label, value) {
    return "<div class='kpi'><p>" + label + "</p><strong>" + value + "</strong></div>";
  }

  function submitExam(isAutoSubmit) {
    if (state.submitted) return;
    state.submitted = true;
    closeSubmitModal();
    clearInterval(state.timerRef);
    clearExamSession();

    var result = calculateResult();
    result.submittedAt = new Date().toLocaleString();
    saveResultSession(result);
    renderResult(result);
    downloadResultPdf(result, isAutoSubmit);
    saveResultToGoogleSheet(result, isAutoSubmit);
  }

  function downloadResultPdf(result, isAutoSubmit) {
    if (!window.jspdf || !window.jspdf.jsPDF) return;

    var jsPDF = window.jspdf.jsPDF;
    var doc = new jsPDF({ unit: "pt", format: "a4" });
    var pageW = doc.internal.pageSize.getWidth();
    var pageH = doc.internal.pageSize.getHeight();
    var margin = 40;
    var y = margin;

    function writeLine(text, fontSize, gap) {
      if (y > pageH - margin) {
        doc.addPage();
        y = margin;
      }
      doc.setFontSize(fontSize || 11);
      doc.text(String(text || ""), margin, y);
      y += gap || 16;
    }

    function writeWrapped(label, value) {
      var content = String(label + ": " + value);
      var lines = doc.splitTextToSize(content, pageW - (margin * 2));
      lines.forEach(function (line) {
        writeLine(line, 11, 14);
      });
      y += 2;
    }

    doc.setFontSize(18);
    doc.text("EAPCET Mock Test Result", margin, y);
    y += 24;

    writeWrapped("Exam", state.exam.title);
    writeWrapped("Student", state.studentName || "-");
    writeWrapped("Submitted At", result.submittedAt || "-");
    writeWrapped("Submission Type", isAutoSubmit ? "Auto (Timer Completed)" : "Manual");
    y += 6;

    writeWrapped("Total Questions", result.total);
    writeWrapped("Attempted", result.attempted);
    writeWrapped("Correct", result.correct);
    writeWrapped("Wrong", result.wrong);
    writeWrapped("Score", result.score);
    y += 10;

    writeLine("Question-wise Details", 13, 18);
    writeLine("# | Section | Your Answer | Correct | Status", 10, 14);

    (result.rows || []).forEach(function (row) {
      var line = [
        row.no,
        row.section || "",
        row.selected || "-",
        row.correct || "-",
        row.status || "-"
      ].join(" | ");

      var lines = doc.splitTextToSize(line, pageW - (margin * 2));
      lines.forEach(function (l) {
        writeLine(l, 10, 13);
      });
    });

    var safeExam = String(state.exam.title || "exam").replace(/[^a-z0-9]+/gi, "-").replace(/^-+|-+$/g, "").toLowerCase();
    var safeStudent = String(state.studentName || "student").replace(/[^a-z0-9]+/gi, "-").replace(/^-+|-+$/g, "").toLowerCase();
    var stamp = new Date().toISOString().replace(/[.:]/g, "-");
    var fileName = [safeExam || "exam", safeStudent || "student", "result", stamp].join("_") + ".pdf";
    doc.save(fileName);
  }

  function saveExamSession() {
    if (!state.exam || state.submitted) return;

    var payload = {
      examId: state.exam.id,
      studentName: state.studentName,
      answers: state.answers,
      marked: state.marked,
      visited: state.visited,
      currentQuestionIndex: state.currentQuestionIndex,
      currentPaletteSection: state.currentPaletteSection,
      timerEndAt: state.timerEndAt
    };

    try {
      localStorage.setItem(SESSION_STORAGE_KEY, JSON.stringify(payload));
    } catch (e) {}
  }

  function clearExamSession() {
    try {
      localStorage.removeItem(SESSION_STORAGE_KEY);
    } catch (e) {}
  }

  function tryRestoreExamSession() {
    var raw;
    try {
      raw = localStorage.getItem(SESSION_STORAGE_KEY);
    } catch (e) {
      return false;
    }

    if (!raw) return false;

    var saved;
    try {
      saved = JSON.parse(raw);
    } catch (e) {
      clearExamSession();
      return false;
    }

    var exam = findExamById(saved.examId);
    if (!exam) {
      clearExamSession();
      return false;
    }

    state.exam = exam;
    state.studentName = saved.studentName || "";
    state.answers = saved.answers && typeof saved.answers === "object" ? saved.answers : {};
    state.marked = saved.marked && typeof saved.marked === "object" ? saved.marked : {};
    state.visited = saved.visited && typeof saved.visited === "object" ? saved.visited : {};
    state.currentQuestionIndex = Number(saved.currentQuestionIndex || 0);
    state.currentPaletteSection = saved.currentPaletteSection || (state.exam.sections[0] ? state.exam.sections[0].key : "maths");
    state.timerEndAt = Number(saved.timerEndAt || 0);
    state.submitted = false;

    if (state.currentQuestionIndex < 0) state.currentQuestionIndex = 0;
    if (state.currentQuestionIndex > state.exam.questions.length - 1) state.currentQuestionIndex = state.exam.questions.length - 1;

    var hasSection = state.exam.sections.some(function (s) { return s.key === state.currentPaletteSection; });
    if (!hasSection) state.currentPaletteSection = state.exam.sections[0] ? state.exam.sections[0].key : "maths";

    refreshTimerFromEndAt();
    if (state.timerSeconds <= 0) {
      clearExamSession();
      return false;
    }

    document.getElementById("activeExamTitle").textContent = state.exam.title;
    document.getElementById("studentBadge").textContent = "Student: " + state.studentName;

    renderSectionTabs();
    renderPalette();
    renderQuestion();
    startTimer();
    showScreen("exam");
    return true;
  }

  function saveResultToGoogleSheet(result, isAutoSubmit) {
    if (!GOOGLE_SHEET_WEBAPP_URL) return;

    var payload = {
      examId: state.exam.id,
      examTitle: state.exam.title,
      studentName: state.studentName,
      submittedAt: new Date().toISOString(),
      autoSubmitted: !!isAutoSubmit,
      total: result.total,
      attempted: result.attempted,
      correct: result.correct,
      wrong: result.wrong,
      score: result.score,
      answers: state.answers,
      resultRows: result.rows || []
    };

    fetch(GOOGLE_SHEET_WEBAPP_URL, {
      method: "POST",
      mode: "no-cors",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(payload)
    }).catch(function () {
      // Silent fail to avoid blocking result view.
    });
  }

  function parseImportedPayload(payload) {
    if (Array.isArray(payload)) return payload;
    if (payload && Array.isArray(payload.exams)) return payload.exams;
    if (payload && typeof payload === "object" && payload.questions) return [payload];
    return [];
  }

  function ensureUniqueExamId(exam, usedIds) {
    var baseId = String(exam.id || "exam");
    var nextId = baseId;
    var count = 1;

    while (usedIds[nextId]) {
      count += 1;
      nextId = baseId + "-copy-" + count;
    }

    exam.id = nextId;
    usedIds[nextId] = true;
    return exam;
  }

  function importExamJson(fileText) {
    var parsed;
    try {
      parsed = JSON.parse(fileText);
    } catch (e) {
      window.alert("Invalid JSON file.");
      return;
    }

    var incoming = parseImportedPayload(parsed).map(normalizeExam).filter(Boolean);
    if (!incoming.length) {
      window.alert("No valid exam data found. Expected exam object, array, or { exams: [...] }.");
      return;
    }

    var current = readImportedExams();
    var existing = getAllExams();
    var usedIds = {};
    var renamed = 0;

    existing.forEach(function (exam) {
      usedIds[exam.id] = true;
    });

    incoming = incoming.map(function (exam) {
      var originalId = exam.id;
      ensureUniqueExamId(exam, usedIds);
      if (exam.id !== originalId) renamed += 1;
      return exam;
    });

    var map = {};
    current.forEach(function (exam) { map[exam.id] = exam; });
    incoming.forEach(function (exam) { map[exam.id] = exam; });

    writeImportedExams(Object.keys(map).map(function (id) { return map[id]; }));
    renderExamList();
    if (renamed > 0) {
      window.alert("Imported " + incoming.length + " exam(s). " + renamed + " exam ID(s) were auto-renamed to avoid conflicts.");
      return;
    }
    window.alert("Imported " + incoming.length + " exam(s) successfully.");
  }

  function wireJsonImport() {
    var input = document.getElementById("examJsonInput");
    var btn = document.getElementById("importExamBtn");
    var btnAlt = document.getElementById("importExamBtnAlt");
    var importFromTextBtn = document.getElementById("importFromTextBtn");
    var jsonText = document.getElementById("examJsonText");
    if (!input || !btn) return;

    btn.addEventListener("click", function () {
      input.value = "";
      input.click();
    });

    if (btnAlt) {
      btnAlt.addEventListener("click", function () {
        input.value = "";
        input.click();
      });
    }

    input.addEventListener("change", function () {
      var file = input.files && input.files[0];
      if (!file) return;

      var reader = new FileReader();
      reader.onload = function () {
        importExamJson(String(reader.result || ""));
      };
      reader.onerror = function () {
        window.alert("Unable to read JSON file.");
      };
      reader.readAsText(file);
    });

    if (importFromTextBtn && jsonText) {
      importFromTextBtn.addEventListener("click", function () {
        var raw = String(jsonText.value || "").trim();
        if (!raw) {
          window.alert("Paste JSON content first.");
          return;
        }
        importExamJson(raw);
      });
    }
  }

  function openExamEditor(examId) {
    var exam = findExamById(examId);
    if (!exam) {
      window.alert("Exam not found.");
      return;
    }

    editingExamId = examId;
    loadExamForEdit(exam);
    showScreen("editExam");
  }

  function loadExamForEdit(exam) {
    document.getElementById("editExamTitle").value = exam.title || "";
    document.getElementById("editExamDate").value = exam.date || "";
    document.getElementById("editExamDuration").value = exam.durationMinutes || 180;
    document.getElementById("editExamMarks").value = exam.marksPerQuestion || 1;
    document.getElementById("editExamNegative").value = exam.negativeMark || 0;
    renderEditQuestions(exam.questions || []);
  }

  function renderEditQuestions(questions) {
    var wrap = document.getElementById("editQuestionsWrap");
    wrap.innerHTML = "";

    questions.forEach(function (q, idx) {
      var options = Array.isArray(q.options) ? q.options : ["A", "B", "C", "D"];
      var optionsText = options.map(function (opt) {
        return typeof opt === "string" ? opt : (opt.text || opt.id || opt);
      }).join(", ");

      var box = document.createElement("div");
      box.className = "question-edit-box";
      box.innerHTML = ""
        + "<div class=\"form-row\">"
        + "<label>Question " + (idx + 1) + "</label>"
        + "<textarea data-qid=\"" + escapeHtml(q.id || "") + "\" data-qidx=\"" + idx + "\" placeholder=\"Question text (supports LaTeX math)\">"
        + escapeHtml(q.text || "")
        + "</textarea>"
        + "</div>"
        + "<div class=\"form-row\">"
        + "<label>Image URL</label>"
        + "<input type=\"text\" data-qimg=\"" + idx + "\" placeholder=\"Image URL (optional)\" value=\"" + escapeHtml(q.image || "") + "\" />"
        + "</div>"
        + "<div class=\"form-row\">"
        + "<label>Options (comma-separated)</label>"
        + "<input type=\"text\" data-qopt=\"" + idx + "\" placeholder=\"A, B, C, D\" value=\"" + escapeHtml(optionsText) + "\" />"
        + "</div>"
        + "<div class=\"form-row\">"
        + "<label>Correct Answer</label>"
        + "<input type=\"text\" data-qcor=\"" + idx + "\" placeholder=\"Correct option (e.g., A)\" value=\"" + escapeHtml(getCorrectOptionId(q) || "") + "\" />"
        + "</div>"
        + "<div class=\"form-row\">"
        + "<label>Section</label>"
        + "<input type=\"text\" data-qsec=\"" + idx + "\" placeholder=\"Section name (e.g., Maths)\" value=\"" + escapeHtml(q.section || "") + "\" />"
        + "</div>"
        + "<button type=\"button\" class=\"question-edit-remove\" data-qremove=\"" + idx + "\">Remove Question</button>";
      wrap.appendChild(box);
    });

    wrap.querySelectorAll("button[data-qremove]").forEach(function (btn) {
      btn.addEventListener("click", function (e) {
        e.preventDefault();
        var exam = findExamById(editingExamId);
        if (exam && exam.questions) {
          var idx = Number(btn.getAttribute("data-qremove"));
          exam.questions.splice(idx, 1);
          renderEditQuestions(exam.questions);
        }
      });
    });
  }

  function deleteExam(examId) {
    var imported = readImportedExams();
    var filtered = imported.filter(function (e) { return e.id !== examId; });
    writeImportedExams(filtered);
    renderExamList();
    window.alert("Exam deleted successfully.");
  }

  function wireEvents() {
    wireMarkForReview();
    wireModal();
    wireJsonImport();

    document.getElementById("backToHomeBtn").addEventListener("click", function () {
      showScreen("home");
    });

    document.getElementById("consentForm").addEventListener("submit", function (e) {
      e.preventDefault();
      var name = (document.getElementById("studentName").value || "").trim();
      var ok = document.getElementById("consentCheck").checked;
      if (!name || !ok) return;

      state.studentName = name;
      initExamSession();
    });

    document.getElementById("prevBtn").addEventListener("click", function () {
      if (state.currentQuestionIndex > 0) {
        state.currentQuestionIndex -= 1;
        renderQuestion();
        renderPalette();
        saveExamSession();
      }
    });

    document.getElementById("nextBtn").addEventListener("click", function () {
      if (state.currentQuestionIndex < state.exam.questions.length - 1) {
        state.currentQuestionIndex += 1;
        renderQuestion();
        renderPalette();
        saveExamSession();
      }
    });

    document.getElementById("submitTestBtn").addEventListener("click", function () {
      openSubmitModal();
    });

    document.getElementById("goHomeBtn").addEventListener("click", function () {
      clearResultSession();
      showScreen("home");
    });

    document.getElementById("editExamBackBtn").addEventListener("click", function () {
      editingExamId = null;
      showScreen("home");
    });

    document.getElementById("editExamCancelBtn").addEventListener("click", function () {
      editingExamId = null;
      showScreen("home");
    });

    document.getElementById("addQuestionBtn").addEventListener("click", function (e) {
      e.preventDefault();
      var exam = findExamById(editingExamId);
      if (exam) {
        var newQ = {
          id: "q-new-" + Date.now(),
          section: "General",
          text: "",
          image: "",
          options: ["A", "B", "C", "D"],
          correct: "A"
        };
        exam.questions.push(newQ);
        renderEditQuestions(exam.questions);
      }
    });

    document.getElementById("editExamForm").addEventListener("submit", function (e) {
      e.preventDefault();
      var exam = findExamById(editingExamId);
      if (!exam) return;

      var title = (document.getElementById("editExamTitle").value || "").trim();
      var date = (document.getElementById("editExamDate").value || "").trim();
      var duration = Number(document.getElementById("editExamDuration").value || 180);
      var marks = Number(document.getElementById("editExamMarks").value || 1);
      var negative = Number(document.getElementById("editExamNegative").value || 0);

      if (!title || !date) {
        window.alert("Please fill in exam title and date.");
        return;
      }

      exam.title = title;
      exam.date = date;
      exam.durationMinutes = duration;
      exam.marksPerQuestion = marks;
      exam.negativeMark = negative;

      var wrap = document.getElementById("editQuestionsWrap");
      var textareas = wrap.querySelectorAll("textarea");
      textareas.forEach(function (ta, idx) {
        var qtext = ta.value;
        var qimg = document.querySelector("input[data-qimg='" + idx + "']").value;
        var qopt = (document.querySelector("input[data-qopt='" + idx + "']").value || "").split(",").map(function (s) { return s.trim(); });
        var qcor = (document.querySelector("input[data-qcor='" + idx + "']").value || "").trim();
        var qsec = (document.querySelector("input[data-qsec='" + idx + "']").value || "").trim();

        if (exam.questions[idx]) {
          exam.questions[idx].text = qtext;
          exam.questions[idx].image = qimg;
          exam.questions[idx].options = qopt.length > 0 ? qopt : ["A", "B", "C", "D"];
          exam.questions[idx].correct = qcor || "A";
          exam.questions[idx].section = qsec || "General";
        }
      });

      var imported = readImportedExams();
      var map = {};
      imported.forEach(function (e) { map[e.id] = e; });
      map[exam.id] = exam;
      writeImportedExams(Object.keys(map).map(function (id) { return map[id]; }));

      window.alert("Exam changes saved successfully!");
      editingExamId = null;
      renderExamList();
      showScreen("home");
    });
  }

  function initBrandLogo() {
    var candidates = [
      "assets/logo/prathibha-institute-logo.png",
      "assets/logo/logo.png",
      "assets/logo/logo.jpg",
      "assets/logo/logo.jpeg",
      "assets/logo/logo.webp",
      "assets/logo/logo.svg"
    ];

    var fallbackSvg = "data:image/svg+xml;charset=UTF-8," + encodeURIComponent(
      '<svg xmlns="http://www.w3.org/2000/svg" width="300" height="300">'
      + '<rect width="100%" height="100%" fill="#ffffff"/>'
      + '<circle cx="150" cy="150" r="140" fill="none" stroke="#0a2a6d" stroke-width="8"/>'
      + '<text x="50%" y="44%" text-anchor="middle" fill="#0a2a6d" font-size="78" font-family="Arial" font-weight="700">PI</text>'
      + '<text x="50%" y="62%" text-anchor="middle" fill="#0a2a6d" font-size="24" font-family="Arial" font-weight="700">PRATHIBHA</text>'
      + '<text x="50%" y="72%" text-anchor="middle" fill="#0a2a6d" font-size="22" font-family="Arial" font-weight="700">INSTITUTE</text>'
      + '</svg>'
    );

    function applyLogo(logoEl) {
      if (!logoEl) return;
      function tryLoad(index) {
        if (index >= candidates.length) {
          logoEl.src = fallbackSvg;
          return;
        }
        var test = new Image();
        test.onload = function () { logoEl.src = candidates[index]; };
        test.onerror = function () { tryLoad(index + 1); };
        test.src = candidates[index];
      }
      tryLoad(0);
    }

    applyLogo(document.getElementById("brandLogo"));
    applyLogo(document.getElementById("examLogo"));
  }

  function init() {
    initBrandLogo();
    renderExamList();
    wireEvents();

    if (tryRestoreExamSession()) return;
    if (tryRestoreResultSession()) return;

    showScreen("home");
  }

  init();
})();