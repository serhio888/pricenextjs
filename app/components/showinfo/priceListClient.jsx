"use client";

import React, { useState, useMemo } from "react";
import CategoryTable from "../categorytable/categoryTable";
import HeaderTable from "../headerTable/headerTable";

export default function PriceListClient({ initialPositions, headerTable }) {
  const [searchPosition, setSearchPosition] = useState("");
  const [descriptionArray, setDescriptionArray] = useState([]);

  const searchHandler = (e) => {
    setSearchPosition(e.target.value);
  };

  const showInfoHandler = (id) => {
    if (descriptionArray.includes(id)) {
      setDescriptionArray(descriptionArray.filter((elem) => elem !== id));
    } else {
      setDescriptionArray([...descriptionArray, id]);
    }
  };

  // Оптимизированный поиск через useMemo вместо функции searchPos()
  // Пересчитывается только при изменении строки поиска
  const needPosition = useMemo(() => {
    if (!searchPosition.trim()) return initialPositions;

    const reg = new RegExp(`${searchPosition}`, "gi");
    const obj = {};

    for (let category in initialPositions) {
      const filtered = initialPositions[category].filter((pos) =>
        pos["Наименование"]?.match(reg),
      );

      if (filtered.length > 0) {
        obj[category] = filtered;
      }
    }

    return obj;
  }, [searchPosition, initialPositions]);

  return (
    <>
      <div className="searchpanel">
        <input
          type="text"
          onChange={searchHandler}
          value={searchPosition}
          placeholder="Введите услугу или препарат"
          maxLength={15}
          id="input-search"
        />
      </div>

      <div className="container">
        <div className="table">
          <HeaderTable header={headerTable} />
          {Object.keys(needPosition).map((key) => (
            <CategoryTable
              key={key}
              category={key}
              positions={needPosition[key]}
              showInfo={descriptionArray}
              descriptionHandler={showInfoHandler}
            />
          ))}
        </div>
      </div>
    </>
  );
}
