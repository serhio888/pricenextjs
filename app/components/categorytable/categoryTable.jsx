import React from "react";
import "./categorytable.css";
import Position from "../position/Position";

const CategoryTable = ({
  positions,
  category,
  showInfo,
  descriptionHandler,
}) => {
  return (
    <section className="categorytable reveal is-visible">
      <h2 className="category display">{category}</h2>

      {positions.map((el, index) => {
        return (
          <React.Fragment key={index}>
            <Position
              position={el}
              showInfo={showInfo}
              descriptionHandler={descriptionHandler}
            />
            {/* <article class="position" data-open="false">
              <button
                class="position-info"
                type="button"
                aria-expanded="false"
                aria-controls="position-1-description"
              >
                <div class="position-name">
                  <span class="chevron" aria-hidden="true"></span>
                  <span class="name">Экспресс ЛИФТИНГ-уход</span>
                </div>
                <div class="unit-price position-duration">50 мин</div>
                <div class="unit-price position-price">1 500&nbsp;₽</div>
              </button>
              <div class="description" id="position-1-description">
                <div>
                  <p>
                    Процедура мгновенно подтянутого эффекта без реабилитации с
                    использованием лёгкого пилинга и интенсивно омолаживающих
                    концентратов и маски. Активные компоненты разглаживают
                    мелкие морщинки, сужают поры, улучшают цвет лица. В
                    результате кожа становится более упругой, свежей и сияющей
                    сразу после сеанса.
                  </p>
                </div>
              </div>
            </article> */}
          </React.Fragment>
        );
      })}
    </section>
  );
};

export default CategoryTable;
