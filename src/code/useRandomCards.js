import { useState, useEffect } from "react";

function useRandomCards(difficulty) {
  const [cardsData, setCardsData] = useState();

  useEffect(() => {
    const fetchCards = async () => {
      const response = await fetch(
        `https://deckofcardsapi.com/api/deck/new/draw/?count=${difficulty}`
      );
      const { cards } = await response.json();
      setCardsData(cards);
    };

    fetchCards();
  }, [difficulty]);

  return cardsData;
}

export default useRandomCards;
