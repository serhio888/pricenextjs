import Image from "next/image";

import down from "../../../public/assets/down.png";
import up from "../../../public/assets/up.png";

const Position = ({ position, showInfo, descriptionHandler }) => {
  let arrow = showInfo.includes(position.id);

  return (
    <div className="position">
      <div
        className="position-info"
        onClick={() => descriptionHandler(position.id)}
      >
        <div className="position-name">
          {arrow ? (
            <span className="up">
              <Image src={up} alt="up" />
            </span>
          ) : (
            <span className="down">
              <Image src={down} alt="down" />
            </span>
          )}
          <span className="name">{position["Наименование"]}</span>
        </div>
        <div className="unit_price">
          <span>{position["Продолжительность процедуры"]}</span>
        </div>
        <div className="unit_price">
          <span>{position["цена, ₽"]}</span>
        </div>
      </div>
      {arrow ? (
        <div className="description">
          <p>{position["Описание"]}</p>
        </div>
      ) : null}
    </div>
  );
};

export default Position;
