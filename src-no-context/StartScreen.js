function StartScreen({ numQuestions, dispatch }) {
  return (
    <div className="start">
      <h2>Welcome to the Quiz!</h2>
      <h3>{numQuestions} questions to test your React knowledge</h3>
      <button onClick={() => dispatch({ type: "start" })} className="btn btn-ui">
        Let's Start
      </button>
    </div>
  );
}
export default StartScreen;
