

import React, { useState } from "react";
import "./index.css";

function GrandTest() {

  const [showResults, setShowResults] = useState(false);
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [score, setScore] = useState(0);

  const questions = [
    {
        text: "What is the capital of America?",
        options: [
          { id: 0, text: "1: New York City", isCorrect: false },
          { id: 1, text: "2: Boston", isCorrect: false },
          { id: 2, text: "3: Santa Fe", isCorrect: false },
          { id: 3, text: "4: Washington DC", isCorrect: true },
        ],
      },
      {
        text: "What is the capital of America?",
        options: [
          { id: 0, text: "1: New York City", isCorrect: false },
          { id: 1, text: "2: Boston", isCorrect: false },
          { id: 2, text: "3: Santa Fe", isCorrect: false },
          { id: 3, text: "4: Washington DC", isCorrect: true },
        ],
      },
      {
        text: "What is the capital of America?",
        options: [
          { id: 0, text: "1: New York City", isCorrect: false },
          { id: 1, text: "2: Boston", isCorrect: false },
          { id: 2, text: "3: Santa Fe", isCorrect: false },
          { id: 3, text: "4: Washington DC", isCorrect: true },
        ],
      },
      {
        text: "What is the capital of America?",
        options: [
          { id: 0, text: "1: New York City", isCorrect: false },
          { id: 1, text: "2: Boston", isCorrect: false },
          { id: 2, text: "3: Santa Fe", isCorrect: false },
          { id: 3, text: "4: Washington DC", isCorrect: true },
        ],
      },
      {
        text: "What is the capital of America?",
        options: [
          { id: 0, text: "1: New York City", isCorrect: false },
          { id: 1, text: "2: Boston", isCorrect: false },
          { id: 2, text: "3: Santa Fe", isCorrect: false },
          { id: 3, text: "4: Washington DC", isCorrect: true },
        ],
      },
      {
        text: "What is the capital of America?",
        options: [
          { id: 0, text: "1: New York City", isCorrect: false },
          { id: 1, text: "2: Boston", isCorrect: false },
          { id: 2, text: "3: Santa Fe", isCorrect: false },
          { id: 3, text: "4: Washington DC", isCorrect: true },
        ],
      },
      {
        text: "What is the capital of America?",
        options: [
          { id: 0, text: "1: New York City", isCorrect: false },
          { id: 1, text: "2: Boston", isCorrect: false },
          { id: 2, text: "3: Santa Fe", isCorrect: false },
          { id: 3, text: "4: Washington DC", isCorrect: true },
        ],
      },
      {
        text: "What is the capital of America?",
        options: [
          { id: 0, text: "1: New York City", isCorrect: false },
          { id: 1, text: "2: Boston", isCorrect: false },
          { id: 2, text: "3: Santa Fe", isCorrect: false },
          { id: 3, text: "4: Washington DC", isCorrect: true },
        ],
      },
      {
        text: "What is the capital of America?",
        options: [
          { id: 0, text: "1: New York City", isCorrect: false },
          { id: 1, text: "2: Boston", isCorrect: false },
          { id: 2, text: "3: Santa Fe", isCorrect: false },
          { id: 3, text: "4: Washington DC", isCorrect: true },
        ],
      },
      {
        text: "What is the capital of America?",
        options: [
          { id: 0, text: "1: New York City", isCorrect: false },
          { id: 1, text: "2: Boston", isCorrect: false },
          { id: 2, text: "3: Santa Fe", isCorrect: false },
          { id: 3, text: "4: Washington DC", isCorrect: true },
        ],
      },
      {
        text: "What is the capital of America?",
        options: [
          { id: 0, text: "1: New York City", isCorrect: false },
          { id: 1, text: "2: Boston", isCorrect: false },
          { id: 2, text: "3: Santa Fe", isCorrect: false },
          { id: 3, text: "4: Washington DC", isCorrect: true },
        ],
      },
      {
        text: "What is the capital of America?",
        options: [
          { id: 0, text: "1: New York City", isCorrect: false },
          { id: 1, text: "2: Boston", isCorrect: false },
          { id: 2, text: "3: Santa Fe", isCorrect: false },
          { id: 3, text: "4: Washington DC", isCorrect: true },
        ],
      },
      {
        text: "What is the capital of America?",
        options: [
          { id: 0, text: "1: New York City", isCorrect: false },
          { id: 1, text: "2: Boston", isCorrect: false },
          { id: 2, text: "3: Santa Fe", isCorrect: false },
          { id: 3, text: "4: Washington DC", isCorrect: true },
        ],
      },
      {
        text: "What is the capital of America?",
        options: [
          { id: 0, text: "1: New York City", isCorrect: false },
          { id: 1, text: "2: Boston", isCorrect: false },
          { id: 2, text: "3: Santa Fe", isCorrect: false },
          { id: 3, text: "4: Washington DC", isCorrect: true },
        ],
      },
      {
        text: "What is the capital of America?",
        options: [
          { id: 0, text: "1: New York City", isCorrect: false },
          { id: 1, text: "2: Boston", isCorrect: false },
          { id: 2, text: "3: Santa Fe", isCorrect: false },
          { id: 3, text: "4: Washington DC", isCorrect: true },
        ],
      },

      
  ];


  const optionClicked = (isCorrect) => {
    if (isCorrect) {
      setScore(score + 1);
    }

    if (currentQuestion + 1 < questions.length) {
      setCurrentQuestion(currentQuestion + 1);
    } else {
      setShowResults(true);
    }
  };



  const HomePage = () => {
    setScore(0);
    setCurrentQuestion(0);
    setShowResults(false);
  };

  return (
    <div className="App">
        <div className="header-container">
            <h1>Egnify Grand Test</h1>
            <div>
                <button type="submit" onClick={()=>{setShowResults(true)}}>Submit</button>
            </div>
        </div>

      {showResults ? (

        <div className="final-results">
          <h1>Egnify Grand Test</h1>
          <div>
            <h2>{score} / {questions.length}</h2> 
            <div>
                <p>Marks Scored: {score}</p>
            </div>
            <div>
                <p>Total Marks: {questions.length}</p>
            </div>
          </div>
        
          <button onClick={() => HomePage()}>Home</button>
          
        </div>
      ) : (

        <div className="question-card">
       <div className="box-container">
       <h2>
            <span className="number">{currentQuestion + 1}</span> Multiple Answer Type
          </h2>
          <div >
              <input type="checkbox" id="checkbox"/>
              <label htmlFor="checkbox">
                    Review Later
              </label>
          </div>
       </div>
         
          <h3 className="question-text">{questions[currentQuestion].text}</h3>

          <ul>
            {questions[currentQuestion].options.map((option) => {
              return (
                <li
                  key={option.id}
                  onClick={() => optionClicked(option.isCorrect)}
                  className="correct list"
                >
                  {option.text}
                </li>
              );
            })}
          </ul>
          <hr/>
          <div className="footer-container">
              <button type="button" className="footer-button">Preview</button>
              <button type="button" className="footer-button">Next</button>
              </div>
        </div>
      )}
    </div>
  );
}

export default GrandTest;