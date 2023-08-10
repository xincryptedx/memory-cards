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
      <h1>{message}</h1>
      <button onClick={() => onModalEvent(onNewGame)} autoFocus={true}>
        New Game
      </button>
      <button onClick={() => onModalEvent(onQuit)}>Quit</button>
    </>
  );
}

export default GameOverModalContent;
