import { useState } from "react";

function useRandomCards(difficulty) {
  const [cards, setCards] = useState([]);
  const fetchCards = async () => {
    const response = await fetch(
      `https://deckofcardsapi.com/api/deck/new/draw/?count=${difficulty}`
    );
    const returnData = await response.json();
    setCards(returnData.cards);
  };

  fetchCards();

  return cards;
}

export default useRandomCards;
