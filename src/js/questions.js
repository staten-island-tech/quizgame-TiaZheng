//another object constructor function, refers to the answer choices aspect
function Question(text, choices, answer) {
    this.text = text;
    this.choices = choices;
    this.answer = answer;
  }
  //new property to the object constructor function "Questions", if the choice selected is equal to the answer, it is correct
  Question.prototype.isCorrectAnswer = function(choice) {
    return this.answer === choice;
  };

const questions = [
    new Question("Who is the current highest rated chess player? ", ["Magnus Carlsen", "Fabiano Cauana","Bobby Fisher", "Ding Liren"], "Magnus Carlsen"),
    new Question("What is the most important piece in chess?", ["Queen", "Pawn", "King", "Rook"], "King"),
    new Question("How many squares does a chess board have in total?", ["56", "64","72", "58"], "64"),
    new Question("En passant is a special rule in chess that involves which of the following pieces?", ["Knight", "Bishop", "Rook", "Pawn"], "Pawn"),
    new Question("Bonus! Tia's favorite white chess opening to play is...?", ["Italian Game", "Sicilian Defense", "The Queen's Gambit", "All of the above!"], "Italian Game")
];

export {questions};