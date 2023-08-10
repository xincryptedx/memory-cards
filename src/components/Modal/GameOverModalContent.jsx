/* eslint-disable react/prop-types */
function GameOverModalContent({
  setGameOverModalOpen,
  message,
  onQuit,
  onNewGame,
}) {
  const onModalEvent = (fn) => {
    setGameOverModalOpen(false);
    fn();
  };

  return (
    <>
      <p>{message}</p>
      <button onClick={() => onModalEvent(onNewGame)}>New Game</button>
      <button onClick={() => onModalEvent(onQuit)}>Quit</button>
    </>
  );
}

export default GameOverModalContent;
