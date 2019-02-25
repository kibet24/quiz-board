$("document").ready(function(){
    $("h1").css("color", "red");

  });

  $(document).ready(function() {
    $("#test").submit(function(event){
      event.preventDefault();
      var question1 = parseInt($("[name=Q1]:checked").val());
      var question2 = parseInt($("[name=Q2]:checked").val());
      var question3= parseInt($("[name=Q3]:checked").val());
      var question4= parseInt($("[name=Q4]:checked").val());
      var question5= parseInt($("[name=Q5]:checked").val());

      var score = parseInt(question1+question2+question3+question4+question5);

      if (score >=80 ) {
        $("#input").text("You Scored: " + score + " Excellent work.");
      }
      else if (score >=50 && score <= 79  ){
        $("#input").text("You Scored: " + score + " Nice Try");
      }
      else {
        $("#input").text("You scored: " + score + " Below Average")
      }
    });
   });
