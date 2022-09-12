import { useState } from "react";
import { CardProps } from "../../components/Card";
import { Grid } from "../../components/Grid";
import { cards } from "../../data/cards";
import { duplicateRegenerateSortArray } from "../../utils/cards-utils";
import "./styles.css";

export function App() {
  const [stateCards, setStateCards] = useState(() =>
    duplicateRegenerateSortArray<CardProps>(cards)
  );
  function handleClick(id: string) {
    const newStateCards = stateCards.map((card) => {
      if (card.id !== id) return card;

      if (card.flipped) return card;

      card.flipped = true;

      return card;
    });

    setStateCards(newStateCards);
  }

  return (
    <div className="App">
      <Grid cards={stateCards} handleClick={handleClick} />
    </div>
  );
}
