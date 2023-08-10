/* eslint-disable react/prop-types */
function HelpModalContent({ setHelpModalOpen }) {
  return (
    <>
      <h1>How to Play</h1>
      <p>{`-Click or tap a card to get a point.
             -If you click or tap a card more than once, you lose!
             -Click or tap all cards once to win the round.
             -Keep going to see how high of a score you can get!`}</p>
      <button onClick={() => setHelpModalOpen(false)}>OK</button>
    </>
  );
}

export default HelpModalContent;
