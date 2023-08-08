import { useState, useEffect } from "react";

function useCardImage(power, suit) {
  const [image, setImage] = useState();

  useEffect(() => {
    const fetchImage = async () => {
      const response = await fetch(
        `https://deckofcardsapi.com/api/deck/new/draw/?cards=${power[0]}${suit[0]}`
      );
      const data = await response.json();
      setImage(data.cards[0].image);
    };

    fetchImage();
  }, [power, suit]);

  return image;
}

export default useCardImage;
