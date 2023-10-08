
import React from "react";
import classNames from "classnames";
import "./card.css";

const Card = ({ onClick, card, index, isInactive, isFlipped, isDisabled }) => {

    const handleClick = () => {
        !isFlipped && !isDisabled && onClick(index);
      };
      return (
        <div
          className={classNames("card", {
            "is-flipped": isFlipped,
            "is-inactive": isInactive
          })}
          onClick={handleClick}
        >
          <div className="card-face card-font-face">
            <img src='https://res.cloudinary.com/dosghtja7/image/upload/v1696729580/assets/games/memory_hamlet/s3kv7y7cvo2qzcznt8gc.png' alt="pokeball" />
          </div>
          <div className="card-face card-back-face">
            <img src={card.image} alt="pokeball" />
          </div>
        </div>
      );

}

export default Card;