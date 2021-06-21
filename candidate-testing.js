const input = require('readline-sync');
// TODO 2: modify your quiz app to ask 5 questions //

// TODO 1.1a: Define candidateName 

// TODO 1.2a: Define question, correctAnswer, and candidateAnswer //
let question = "Who was the first American woman in space? ";
let correctAnswer = "Sally Ride";
let candidateAnswer = "";
let questions;
let correctAnswers;
let candidateAnswers;


// TODO 1.1b: Ask for candidate's name 
  let candidateName = input.question("Please, write your name: ");
  console.log("Hello, " + candidateName + "!");


  // TODO 1.2b: Ask candidate the question and assign the response as candidateAnswer
  
  
  let answerQuestion = input.question(question);
  console.log(answerQuestion); 


  // TODO 1.2c: Let the candidate know if they have answered the question correctly or incorrectly //
 
  if(correctAnswer == answerQuestion) {
    console.log('Good job, your answer is correct!');
   
   } else {
     console.log("Sorry, it is not correct.");
   }
  

  // TODO 1.1c: Ask for candidate's name //

