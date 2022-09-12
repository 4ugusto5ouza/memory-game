import "./styles.css";

export interface CardProps {
  id: string;
  flipped?: boolean;
  emoji: string;
  handleClick?: (id: string) => void;
}
export const Card = ({
  id,
  flipped = false,
  emoji,
  handleClick,
}: CardProps) => {
  const cardContentClassNames = ["card_content"];
  flipped && cardContentClassNames.push("card_content--flipped");

  function handleClickFn(id: string) {
    if (handleClick) {
      handleClick(id);
    }
  }

  return (
    <div className="card" onClick={() => handleClickFn(id)}>
      <div className={cardContentClassNames.join(" ")}>
        <div className="card_face card_face--front">?</div>
        <div className="card_face card_face--back">{emoji}</div>
      </div>
    </div>
  );
};
