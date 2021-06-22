const input = require('readline-sync');
// TODO 2: modify your quiz app to ask 5 questions //

// TODO 1.1a: Define candidateName 

// TODO 1.2a: Define question, correctAnswer, and candidateAnswer //
//let question = "Who was the first American woman in space? ";
//let correctAnswer = "Sally Ride";
//let candidateAnswer = "";
//let questions;
//let correctAnswers;
//let candidateAnswers;

let questions = ['Who was the first American woman in space?',
              'True or false: 5 kilometer == 5000 meters?',
              '(5 + 3)/2 * 10 = ?',
              //'Given the array  \[8, 'Orbit', 'Trajectory', 45] \, what entry is at index 2?',
              'What is the minimum crew size for the ISS?'];

//   for (let i = 0; i < questions.length; i++) {
//   let item = questions[i];
//   console.log(questions);
// }



let correctAnswers = ["Sally Ride",
                  "true",
                  "40",
                  "Trajectory",
                  "3"];              

//function askForName() {}
// TODO 1.1b: Ask for candidate's name 
    let candidateName = input.question("Please, write your name: ");
    console.log("Hello, " + candidateName + "!");

//function askQuestion() {
  // TODO 1.2b: Ask candidate the question and assign the response as candidateAnswer// 
  // let answerQuestion = input.question(question);
  // console.log(answerQuestion); 

  let answerQuestion = input.question(questions);
  console.log(answerQuestion); 



//function gradeQuiz(candidateAnswers) {//
  // TODO 1.2c: Let the candidate know if they have answered the question correctly or incorrectly //
 
  // if(correctAnswer == answerQuestion) {
  //   console.log('Good job, your answer is correct!');
   
  //  } else {
  //    console.log("Sorry, it is not correct.");
  //  }

if(correctAnswers == answerQuestion) {
    console.log('Good job, your answer is correct!');
   
   } else {
     console.log("Sorry, it is not correct.");
   }  
//let grade;
  
//return grade;//


//function runProgram() {//
 // askForName();//
  // TODO 1.1c: Ask for candidate's name //

  
//  askQuestion();
//   gradeQuiz(this.candidateAnswers);
// }

// Don't write any code below this line //
// And don't change these or your program will not run as expected //
// //module.exports = {//
//   candidateName: candidateName,//
//   question: question,//
//   correctAnswer: correctAnswer,//
//   candidateAnswer: candidateAnswer,//
//   questions: questions,//
//   correctAnswers: correctAnswers,//
//   candidateAnswers: candidateAnswers,//
//   gradeQuiz: gradeQuiz,//
//   runProgram: runProgram//
// };//

