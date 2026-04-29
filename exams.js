(function () {
  function makeQuestions(sectionName, count, sectionSlug, keyStartOffset) {
    var questions = [];
    var options = ["A", "B", "C", "D"];
    for (var i = 1; i <= count; i++) {
      var answer = options[(i + keyStartOffset) % 4];
      questions.push({
        id: sectionSlug + "-" + i,
        section: sectionName,
        image: "assets/exams/eapcet-daily-001/" + sectionSlug + "/q" + i + ".jpg",
        options: options,
        correct: answer
      });
    }
    return questions;
  }

  window.EXAMS = [
    {
      id: "eapcet-daily-001",
      title: "EAPCET Daily Mock Test - 001",
      date: "2026-04-29",
      durationMinutes: 180,
      marksPerQuestion: 1,
      negativeMark: 0,
      sections: [
        { key: "maths", title: "Maths", count: 80, start: 1, end: 80 },
        { key: "physics", title: "Physics", count: 40, start: 81, end: 120 },
        { key: "chemistry", title: "Chemistry", count: 40, start: 121, end: 160 }
      ],
      questions: []
    }
  ];

  var exam = window.EXAMS[0];
  exam.questions = []
    .concat(makeQuestions("Maths", 80, "maths", 0))
    .concat(makeQuestions("Physics", 40, "physics", 1))
    .concat(makeQuestions("Chemistry", 40, "chemistry", 2));
})();