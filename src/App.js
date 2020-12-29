import React, { useState, useEffect } from "react";
import Words from "./components/Words";
import Container from "./components/Container";
import Typer from "./components/Typer";
import Results from "./components/Results";
import "./App.css";

const App = () => {
  const [word, setWord] = useState(Words);
  const [newWord, setNewWord] = useState(word[0]);
  const [disabled, setDisabled] = useState(true);
  const [currentResults, setCurrentResults] = useState([]);
  const [wrongResults, setWrongResults] = useState([]);
  const [countCorrect, setCountCorrect] = useState(0);
  const [timer, setTimer] = useState(30);
  const [inputValue, setInputValue] = useState("");
  const [animation, setAnimation] = useState(null);
  
  let randomWord = Math.floor(Math.random() * word.length);

  const checkAnswer = () => {
    if (inputValue.trim() === newWord){
      setCurrentResults((prevCurrent) => [...prevCurrent, newWord]);
      setCountCorrect(prevCorrect => prevCorrect + 1);
      return;
    }
    setWrongResults((prevWrong) => [...prevWrong, inputValue.trim()]);
    return;
  };

  const handleInput = e => {
    if (e.charCode === 13 && inputValue.trim() !== "") {
      checkAnswer();
      setNewWord(word[randomWord]);
      setInputValue("");
    }
  };

  const handleStart = () => {
    setDisabled(!disabled);
    setCurrentResults([]);
    setWrongResults([]);
    setCountCorrect(0);
    setInputValue("");
  };

  useEffect(() => {
    if (timer <= 30 && timer !== 0 && disabled === false) {
      setTimeout(() => setTimer((prevTime) => prevTime - 1), 1000);
    } else if (disabled) {
      setTimer(30);
      setAnimation(null);
    } else if (timer === 0) {
      setDisabled(true);
    }

    if (timer <= 10) {
      setAnimation("scaleNumber 2s infinite");
    }
  }, [disabled, timer]);
  
  useEffect(() => { 
    setNewWord(word[randomWord]);
  }, []);

  return (
    <div className="App">
      <Container>
        <Typer
          newWord={newWord}
          inputValue={inputValue}
          setInputValue={setInputValue}
          disabled={disabled}
          timer={timer}
          animation={animation}
          handleInput={handleInput}
          handleStart={handleStart}
        />
        </Container>
        <Results
          count={countCorrect}
          correct={currentResults}
          errors={wrongResults}
        />
    </div>
  );
}

export default App;
