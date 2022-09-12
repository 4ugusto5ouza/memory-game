import { Card, CardProps } from "../Card";
import "./styles.css";

export interface GridProps {
  cards: CardProps[];
  handleClick: (id: string) => void;
}

export const Grid = ({ cards, handleClick }: GridProps) => {
  return (
    <div className="grid">
      {cards.map((card) => {
        return (
          <Card
            key={card.id}
            id={card.id}
            emoji={card.emoji}
            flipped={card.flipped}
            handleClick={handleClick}
          />
        );
      })}
    </div>
  );
};
