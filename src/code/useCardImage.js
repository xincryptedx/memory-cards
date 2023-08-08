import { useState, useEffect } from "react";

function useCardImage(power, suit) {
  const [image, setImage] = useState();
  const cardCode = `${power[0]}${suit[0]}`.toUpperCase();

  useEffect(() => {
    const fetchImage = async () => {
      const response = await fetch(
        `https://deckofcardsapi.com/api/deck/new/draw/?cards=${cardCode}`
      );
      const data = await response.json();
      setImage(data.cards[0].image);
    };

    fetchImage();
  }, [cardCode]);

  return image;
}

export default useCardImage;
