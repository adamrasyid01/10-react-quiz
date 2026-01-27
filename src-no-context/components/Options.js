import React from "react";
import { useQuiz } from "../contexts/QuizContext";

function Options({ question }) {
  const { answer, dispatch } = useQuiz();
  const hasAnswered = answer !== null;
  return (
    <div className="options">
      {question.options.map((option, index) => (
        <button
          onClick={() => dispatch({ type: "newAnswer", payload: index })}
          className={`btn btn-option ${answer === index ? "answer" : ""} ${
            hasAnswered ? (index === question.correctOption ? "correct" : "wrong") : ""
          }`}
          key={option}
          disabled={hasAnswered}
        >
          {option}
        </button>
      ))}
    </div>
  );
}

export default Options;
