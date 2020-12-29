import React from "react";
import Button from "./Button";

const Typer = (props) => {
    const { newWord, inputValue, setInputValue, disabled, timer, animation, handleInput, handleStart} = props;

    return (
        <div className="typeRacer">
            <div className="wordOutput">
                <p>{newWord}</p>
            </div>
            <div className="time">
                <p style={{ animation: animation !== null ? animation : "" }}>{timer}</p>
            </div>
            <div className="wordValues">
                <input
                    type="text"
                    onKeyPress={e => handleInput(e)}
                    disabled={disabled && disabled}
                    value={inputValue}
                    placeholder={disabled ? "" : "Start Typing..."}
                    onChange={(e) => setInputValue(e.target.value)}/>
                <Button
                    handleStart={handleStart}
                    disabled={disabled}
                />
            </div>
        </div>
    );
};

export default Typer;