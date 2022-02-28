import React, { useState } from "react";
import "./index.css";
import {TiTick} from 'react-icons/ti'
import {BiMessageRoundedCheck} from 'react-icons/bi'
import { MdEscalatorWarning } from 'react-icons/md'

function GrandTest() {

  const [showResults, setShowResults] = useState(false);
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [score, setScore] = useState(0);
  const [negScore,setNegScore] = useState(0);

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
        text: 'What is the capital of France?',
        options: [
          { id: 0, text: "1: New York City", isCorrect: false },
          { id: 1, text: "2: London", isCorrect: false },
          { id: 2, text: "3: Paris", isCorrect: true },
          { id: 3, text: "4: Dublin", isCorrect: false },
        ],
      },
      {
        text: 'Who is CEO of Tesla?',
        options: [
          { id: 0, text: "1: New York City", isCorrect: false },
          { id: 1, text: "2: Boston", isCorrect: false },
          { id: 2, text: "3: Santa Fe", isCorrect: false },
          { id: 3, text: "4: Washington DC", isCorrect: true },
        ],
      },
      {
        text:'The iPhone was created by which company?',
        options: [
          { id: 0, text: "1: Apple", isCorrect: true },
          { id: 1, text: "2: Intel", isCorrect: false },
          { id: 2, text: "3: Amazon", isCorrect: false },
          { id: 3, text: "4: Microsoft", isCorrect: false },
        ],
      },
      {
        text: 'How many Harry Potter books are there?',
        options: [
          { id: 0, text: "1: 1", isCorrect: false },
          { id: 1, text: "2: 4", isCorrect: false },
          { id: 2, text: "3: 6", isCorrect: false },
          { id: 3, text: "4: 7", isCorrect: true },
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
        text: 'What is the capital of France?',
        options: [
          { id: 0, text: "1: New York City", isCorrect: false },
          { id: 1, text: "2: London", isCorrect: false },
          { id: 2, text: "3: Paris", isCorrect: true },
          { id: 3, text: "4: Dublin", isCorrect: false },
        ],
      },
      {
        text: 'Who is CEO of Tesla?',
        options: [
          { id: 0, text: "1: New York City", isCorrect: false },
          { id: 1, text: "2: Boston", isCorrect: false },
          { id: 2, text: "3: Santa Fe", isCorrect: false },
          { id: 3, text: "4: Washington DC", isCorrect: true },
        ],
      },
      {
        text:'The iPhone was created by which company?',
        options: [
          { id: 0, text: "1: Apple", isCorrect: true },
          { id: 1, text: "2: Intel", isCorrect: false },
          { id: 2, text: "3: Amazon", isCorrect: false },
          { id: 3, text: "4: Microsoft", isCorrect: false },
        ],
      },
      {
        text: 'How many Harry Potter books are there?',
        options: [
          { id: 0, text: "1: 1", isCorrect: false },
          { id: 1, text: "2: 4", isCorrect: false },
          { id: 2, text: "3: 6", isCorrect: false },
          { id: 3, text: "4: 7", isCorrect: true },
        ],
      },    
  ];

     
  const optionClicked = (isCorrect) => {
    if (isCorrect) {
      setScore(score + 1);
    }
    if (!isCorrect){
      setNegScore(negScore-1);
    }
    if (currentQuestion + 1 < questions.length) {
      setCurrentQuestion(currentQuestion + 1);
    } else {
      setShowResults(true);
    }
  };

  const handelPreview=()=>{
    if (currentQuestion + 1 < questions.length) {
      setCurrentQuestion(currentQuestion - 1);
    }
  };

  const handleNext = ()=>{
    if (currentQuestion + 1 < questions.length) {
      setCurrentQuestion(currentQuestion + 1);
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
            <h1 className="container-heaing">Egnify Grand Test</h1>
            <div>
                <button type="submit" onClick={()=>{setShowResults(true)}}>Submit</button>
            </div>
        </div>

      {showResults ? (

        <div className="final-results">
          <h1 className="final-heading">Egnify Grand Test</h1>
          <div className="result-conatiner">
            <div className="score-container">
              <h2 className="score-heading"><span className="score-span">{score}</span> <span className="span-ques">/ {questions.length} </span></h2>
            </div>
            <div>
              <div className="para-align">
                <TiTick/>
                <p className="mark-para">Marks Scored: <span className="score-span">{score} M</span></p> 
              </div>
              <div className="para-align">
                <TiTick/>
                <p className="mark-para">Negitive Scored: <span className="neg-span">{negScore} M</span></p> 
              </div>
              <div className="para-align"> 
                <BiMessageRoundedCheck/>
                <p className="mark-para">Total Marks: <span className="total-ques">{questions.length} M</span></p>
              </div>
            </div>
            <div className="error-image">
                <MdEscalatorWarning className='img-2'/>
            </div>
          </div>
        
          <button className="home-button" onClick={() => HomePage()}>Home</button>
          
        </div>
      ) : (

        <div className="question-card">
          <div className="box-container">
            <div className="number-container">
              <h1 className="number">{currentQuestion + 1} </h1>
              <h2 className="heading-view">Multiple Answer Type</h2>
            </div>
            <div className="label-container">
                <input type="checkbox" id="checkbox"/>
                <label htmlFor="checkbox" className="label-box">
                      Review Later
                </label>
            </div>
          </div>
         <div className="Question-container">
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
         </div>
         
          <hr/>
          <div className="footer-container">
              <button disabled={currentQuestion<=0}  type="button" className="footer-button" onClick={handelPreview}>&larr; Preview</button>
              <button  disabled={currentQuestion===questions.length} type="button" className="footer-button" onClick={handleNext}>Next &rarr;</button>
              </div>
        </div>
      )}
    </div>
  );
}

export default GrandTest;