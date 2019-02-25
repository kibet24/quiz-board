function check() {
    var quiz1 = document.quiz.quiz1.val;
    var quiz2 = document.quiz.quiz2.val;
    var quiz3 = document.quiz.quiz3.val;
    var quiz4 = document.quiz.quiz4.val;
    var quiz5 = document.quiz.quiz5.val;
    var score = 0;
    if (quiz1 == "mark") {
        score = score  + 20;
    }
    ;
    if (quiz2 == "mark") {
        score = score + 20;
    }
    ;
    if (quiz3 == "mark") {
        score = score + 20;
    }
    ;
    if (quiz4 == "mark") {
        score = score + 20;
    }
    ;
    if (quiz5 == "mark") {
        score = score + 20;
    }
    ;
    document.getElementById("scoreline").style.visibility = "visible";
    document.getElementById().innerHTML = "You Scored: " + score + "%";
}
;
