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
          </React.Fragment>
        );
      })}
    </section>
  );
};

export default CategoryTable;
