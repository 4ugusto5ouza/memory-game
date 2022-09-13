import { useRef, useState } from "react";
import { CardProps } from "../../components/Card";
import { Grid } from "../../components/Grid";
import { cards } from "../../data/cards";
import { duplicateRegenerateSortArray } from "../../utils/cards-utils";
import "./styles.css";

export function App() {
  const [stateCards, setStateCards] = useState(() =>
    duplicateRegenerateSortArray<CardProps>(cards)
  );
  const [matches, setMatches] = useState(0);
  const [moves, setMoves] = useState(0);

  const firstCard = useRef<CardProps | null>(null);
  const secondCard = useRef<CardProps | null>(null);
  const unflip = useRef<boolean>(false);

  function handleClick(id: string) {
    const newStateCards = stateCards.map((card) => {
      if (card.id !== id) return card;

      if (card.flipped) return card;

      if (unflip.current && firstCard.current && secondCard.current) {
        firstCard.current.flipped = false;
        secondCard.current.flipped = false;
        firstCard.current = null;
        secondCard.current = null;
        unflip.current = false;
      }

      card.flipped = true;

      if (!firstCard.current) {
        firstCard.current = card;
      } else if (!secondCard.current) {
        secondCard.current = card;
        setMoves((m) => m + 1);
      }

      if (firstCard.current.emoji === secondCard.current?.emoji) {
        firstCard.current = null;
        secondCard.current = null;
        setMatches((mt) => mt + 1);
      } else {
        unflip.current = true;
      }

      return card;
    });

    setStateCards(newStateCards);
  }

  function handleResetClick() {
    setStateCards(duplicateRegenerateSortArray(cards));
    firstCard.current = null;
    secondCard.current = null;
    unflip.current = false;
    setMoves(0);
    setMatches(0);
  }

  return (
    <div className="App">
      <div className="text">
        <h1>Jogo da mémoria</h1>
        <p>
          Movimentos: {moves} | Acertos: {matches}{" "}
          <button onClick={handleResetClick}>Reiniciar</button>
        </p>
      </div>
      <Grid cards={stateCards} handleClick={handleClick} />
    </div>
  );
}
