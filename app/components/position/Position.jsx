import Image from "next/image";

import down from "../../../public/assets/down.png";
import up from "../../../public/assets/up.png";

const Position = ({ position, showInfo, descriptionHandler }) => {
  let arrow = showInfo.includes(position.id);
  return (
    <article className="position" data-open={arrow}>
      <button
        className="position-info"
        type="button"
        aria-expanded={arrow}
        onClick={() => descriptionHandler(position.id)}
      >
        <div className="position-name">
          {arrow ? (
            <span className="up">
              <Image src={up} alt="up" className="chevron" />
            </span>
          ) : (
            <span className="down">
              <Image src={down} alt="down" className="chevron" />
            </span>
          )}
          <span className="name">{position["Наименование"]}</span>
        </div>
        <div className="unit_price position-duration">
          <span>{position["Длительность"]}</span>
        </div>
        <div className="unit_price position-price">
          <span>{position["цена"]}&nbsp;₽</span>
        </div>
      </button>
      {arrow ? (
        <div className="description">
          <div>
            <p>{position["Описание"]}</p>
          </div>
        </div>
      ) : null}
    </article>
  );
};

export default Position;
