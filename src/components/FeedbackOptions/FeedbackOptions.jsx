export const FeedbackOptions = ({ onLeaveFeedback }) => {
  return (
    <>
      <button onClick={onLeaveFeedback}>Good</button>
      <button onClick={onLeaveFeedback}>Neutral</button>
      <button onClick={onLeaveFeedback}>Bad</button>
    </>
  );
};
