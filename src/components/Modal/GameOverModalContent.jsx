/* eslint-disable react/prop-types */
function GameOverModalContent({ message }) {
  return (
    <>
      <p>{message}</p>
      <button>New Game</button>
      <button>Quit</button>
    </>
  );
}

export default GameOverModalContent;
