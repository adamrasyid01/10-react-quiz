import React from "react";

export default function FinishScreen({ points, maxPossiblePoints, highscore, dispatch }) {
  const percentage = (points / maxPossiblePoints) * 100;

  let emoji;
  if (percentage === 100) emoji = "🏆";
  else if (percentage >= 80) emoji = "🎉";
  else if (percentage >= 50) emoji = "😊";
  else emoji = "😞";
  return (
    <>
      <p className="result">
        You Scored <strong>{points}</strong>out of {maxPossiblePoints} ({Math.ceil(percentage)}%) {emoji}
      </p>
      <p className="highscore">(Highscore : {highscore} points)</p>
      <button onClick={() => dispatch({ type: "restart" })} className="btn btn-ui">
        Restart
      </button>
    </>
  );
}
