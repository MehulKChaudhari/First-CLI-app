var readlineSync = require('readline-sync');
var userName = readlineSync.question('May I have your name? ');

var score =0;

console.log('Welcome ' + userName + " Let's see, How well do you know me?");

function letssee(question,answer){
  var userAnswer = readlineSync.question(question);

  if(userAnswer == answer){
    console.log("Correct! Thats my bro");
    console.log("You earned One Point");
    score++
  }else{
    console.log("duhh, That was so simple");
    console.log("No point for this");
  }

  console.log("Current Score:" , score);
  console.log("-*-*-*-*-*-*-*-*-*-*");

}
var questions = [{
  question: "What's my favourite Cuisine? ",
  answer: "Indian"
}, {
  question: "what's my pet name? ",
  answer:"Anu"
}, {
  question:"My favourite SuperHero? ",
  answer:"Iron Man"
}];

for (var i=0; i<questions.length; i++){
  var currentQuestion = questions[i];
  letssee(currentQuestion.question, currentQuestion.answer)
}
if (score== 3){
    console.log("Great Buddy ❤");
  }else if(score==2){
    console.log("Cool 😁");
  }else if(score==1){
    console.log("Nice 🙂");
  }else{
    console.log("Koi na 😉");
  }
  
  
  console.log("You have SCORED:", score);