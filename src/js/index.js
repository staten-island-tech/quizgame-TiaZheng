console.log("Hello")


//object constructor function
//this refers to the property from what scope it is in
//refers to the whole question aspect
function Quiz(questions) {
  this.score = 0;//original score
  this.questions = questions;
  this.questionIndex = 0;//first question index
}
//prototype allows you to add new property to object constructor function "Quiz", returns the question
Quiz.prototype.getQuestionIndex = function() {
  return this.questions[this.questionIndex];
}

//if the answer to this question is correct, add a score
Quiz.prototype.guess = function(answer) {
  if(this.getQuestionIndex().isCorrectAnswer(answer)) {
      this.score++;
  }

  this.questionIndex++;
}

//quiz is finish if the question index is equal to the question length
Quiz.prototype.isEnded = function() {
  return this.questionIndex === this.questions.length;
}

// //another object constructor function, refers to the answer choices aspect
// function Question(text, choices, answer) {
//   this.text = text;
//   this.choices = choices;
//   this.answer = answer;
// }
// //new property to the object constructor function "Questions", if the choice selected is equal to the answer, it is correct
// Question.prototype.isCorrectAnswer = function(choice) {
//   return this.answer === choice;
// }

//if quiz ends, run show score function, if not, keep showing next questions
function final() {
  if(quiz.isEnded()) {
      showScores();
  }
  else {
    let element = document.getElementById("question");
      if (element) element.innerHTML = quiz.getQuestionIndex().text;

      // let choices = quiz.getQuestionIndex().choices;
      // choices.forEach((choice, x) => {
      //    let element = document.getElementById("choice" + x);
      //   console.log(element, choice);
        
      //   if (element) {
      //  element.innerText = choice;
      //  guess("btn" + x, choice);
      //   }
      //   })

        let choices = quiz.getQuestionIndex().choices;
      choices.forEach((choices, i) => {
         let element = document.getElementById("choice" + i );
       element.innerText = choices;
       guess("btn" + i, choices);
     });

    showProgress();
  }
};
      // show next questions
    //   let element = document.getElementById("question");
    //   element.innerHTML = quiz.getQuestionIndex().text;

    //   let choices = quiz.getQuestionIndex().choices;
    //   choices.forEach((choices, x) => {
    //      let element = document.getElementById("choice" + x);
    //    element.innerHtml = choices;
    //    guess("btn" + x, choices);
    //  });
     
    

      // show corresponding answer choices to each question
      // let choices = quiz.getQuestionIndex().choices;
      // for(let i = 0; i < choices.length; i++) {
      //     let element = document.getElementById("choice" + i);
      //     element.innerHTML = choices[i];
      //     guess("btn" + i, choices[i]);
      // }
  

      // //run showProgress function

//       let choices = quiz.getQuestionIndex().choices;
//       // loop through each choice and display on page
//       choices.forEach((choice, x) => {
//         console.log(choice);
//         //let choiceText = choices[x]; //connects choice text to its number
//         let choiceId = "choice" + x; //refers to html ids: "choice0", "choice1", etc
//         this.populateIdWithHTML(choiceId, choice);
//         this.checkAnswer(choiceId, choice);
//       });

//       for(i = 0; i < grounds.length; i++) {
//         grounds[i].show();
//     }
// grounds.forEach(item => item.show())












//function to click the button to select answer
function guess(id, guess) {
  let button = document.getElementById(id);
  button.onclick = function() {
      quiz.guess(guess);
      final();
  }
};
//innerHteml refers to the text shown
//index starts with 0, so plus 1 to get current question number
function showProgress() {
  let currentQuestionNumber = quiz.questionIndex + 1;
  let element = document.getElementById("progress");
  element.innerHTML = "Question " + currentQuestionNumber + " of " + quiz.questions.length;
};

//function to show the score result at the end of the quiz
function showScores() {
  let gameOverHTML = "<h1>Result</h1>";
  gameOverHTML += "<h2 id='score'> Your scores: " + quiz.score + "</h2>";
  let element = document.getElementById("quiz");
  element.innerHTML = gameOverHTML;
};

// create questions+answers
/*const questions = [
  new Question("Who is the current highest rated chess player? ", ["Magnus Carlsen", "Fabiano Cauana","Bobby Fisher", "Ding Liren"], "Magnus Carlsen"),
  new Question("What is the most important piece in chess?", ["Queen", "Pawn", "King", "Rook"], "King"),
  new Question("How many squares does a chess board have in total?", ["56", "64","72", "58"], "64"),
  new Question("En passant is a special rule in chess that involves which of the following pieces?", ["Knight", "Bishop", "Rook", "Pawn"], "Pawn"),
  new Question("Bonus! Tia's favorite white chess opening to play is...?", ["Italian Game", "Sicilian Defense", "The Queen's Gambit", "All of the above!"], "Italian Game")
];*/

import { questions } from "./questions.js";

//new operator ceates new object that binds to "this", adds "return this" at the end 
// create quiz
const quiz = new Quiz(questions);

// display quiz
final();


