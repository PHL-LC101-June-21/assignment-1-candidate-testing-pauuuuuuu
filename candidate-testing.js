const input = require('readline-sync');
// TODO 2: modify your quiz app to ask 5 questions //

// TODO 1.1a: Define candidateName 

// TODO 1.2a: Define question, correctAnswer, and candidateAnswer //



const questions = [
  "1) Who was the first American woman in space? ",	
  "2) True or false: 5 kilometer == 5000 meters? ",	
  "3) (5 + 3)/2 * 10 = ? ",	 
  "4) Given the array [8, 'Orbit', 'Trajectory', 45], what entry is at index 2? ", 	
  "6) What is the minimum crew size for the ISS? "	
];
const correctAnswers = [
  "Sally Ride", 
  "true", 
  "40", 
  "Trajectory", 
  "3"
];
let candidateName = "";
let candidateAnswers = [];
let answerQuestions = []; 
let question = "Who was the first American woman in space?";
let correctAnswer = "Sally Ride";
let candidateAnswer = " ";

// TODO 1.1b: Ask for candidate's name 
function askForName() {
  let candidateName = input.question("Please, write your name: ");
  console.log("Hello, " + candidateName + "!");
}


function askQuestion() {
  // TODO 1.2b: Ask candidate the question and assign the response as candidateAnswer// 
  for (let i = 0; i < 5; i++){
    let answerQuestions = input.question(questions[i]);
    candidateAnswers.push(answerQuestions);
  
   if (correctAnswers[i].toLowerCase() === candidateAnswers[i].toLowerCase()) { 
     console.log(`Your Answer: ${candidateAnswers[i]} \nCorrect Answer: ${correctAnswers[i]} \n`);
   } else { 
     console.log(`Your Answer: ${candidateAnswers[i]} \nThe correct answer: ${correctAnswers[i]}\n`);
   }
  }
   
}

function gradeQuiz(candidateAnswers) {
  let correctCount = 0
  for (let i = 0; i < 5; i++){
    if (candidateAnswers[i].toLowerCase() === correctAnswers[i].toLowerCase()) {
      correctCount += 1
    }
  }

  const grade = ((correctCount)/5) *100; 
  console.log(`>>> ${grade} out of 100% <<<`);
  if(grade >= 80) {
    console.log("\n>>>Status: Passed<<<")
  } else {
    console.log(">>>Status: Failed<<<")
  }

  return grade;
}

function runProgram() {
  askForName();
  askQuestion();
  gradeQuiz(this.candidateAnswers);
  return;
}

// Don't write any code below this line //
// And don't change these or your program will not run as expected //
module.exports = {
  candidateName: candidateName,
  question: question,
  correctAnswer: correctAnswer,
  candidateAnswer: candidateAnswer,
  questions: questions,
  correctAnswers: correctAnswers,
  candidateAnswers: candidateAnswers,
  gradeQuiz: gradeQuiz,
  runProgram: runProgram
};
