function answer(){
  var question1 = document.quiz.q1.value;
  var question2 = document.quiz.q2.value;
  var question3 = document.quiz.q3.value;
  var question4 = document.quiz.q4.value;
  var question5 = document.quiz.q5.value;
  
  var correctAns = 0;

  if (question1 == "1b"){
    correctAns++;
  }
  if (question2 == "2a"){
    correctAns++;
  }
  if (question3 == "3d"){
    correctAns++;
  }
  if (question4 == "4c"){
    correctAns++;
  }
  if (question5 == "5d"){
    correctAns++;
  }
  
  var totalScore = 5;
  var grade = (correctAns/totalScore)*100;
  var message = ["<div style='color: green;'>You Passed</div>", "<div style='color: red;'>You Failed</div>"];
  var dept;

  if(grade > 50){
    dept = 0;
  }else{
    dept = 1;
  }
  

  

  // document.getElementById("result").innerHTML = "you got " + correctAns + " questions correct.";

  // document.getElementById("msg").innerHTML = message[dept];

  document.write("you got " + correctAns + " questions correct.");

  document.write(message[dept]);

}