import React from "react";

const Results = (props) => {
    const { count, correct, errors } = props;
    return (
        <div className="results">
            <div className="title">
                <p>Correct answers: {count}</p>
            </div>
            <div className="resultsContainer">
                <div className="correctResults">
                    {correct.map((word, idx) => (
                        <div key={idx} className="row">
                            <p>{word}</p>
                       </div>
                   ))}
                </div>
                <div className="wrongResults">
                    {errors.map((word, idx) => (
                        <div className="row">
                            <p>{word}</p>
                        </div>
                    ))}
                </div>
            </div>
       </div> 
    );
};
export default Results;