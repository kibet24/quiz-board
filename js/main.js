 $("form#radio").submit(function(event){
   event.preventDefault();
   var quiz1 =parseInt($("input:radio[name=q1]:checked").val());
   var quiz2 =parseInt($("input:radio[name=q2]:checked").val());
   var quiz3 =parseInt($("input:radio[name=q3]:checked").val());
   var quiz4 =parseInt($("input:radio[name=q4]:checked").val());
   var quiz5 =parseInt($("input:radio[name=q5]:checked").val());
   var total = (quiz1+quiz2+quiz3+quiz4+quiz5);
   var percentage = ((total/25)*100);
   $("#score").text("You have scored: "+percentage+"%");
   if (percentage>=80) {
     $("#comment").text("You have passed excellently, congratulations!!");
   }
   else if ((percentage>=50)&&(percentage<79)) {
     $("#comment").text("You have performed fairly");
   }
   else {
     $("#comment").text("You have scored poorly please retake the test");
   }
   $("#refresh").click(function(){
    $("#score").empty();
    $("#comment").empty();
   });
