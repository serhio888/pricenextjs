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
    <div className="price" id="price">
      <div className="price-head">
        <h2 className="display">Прайс</h2>
        <p className="price-note">
          Нажмите на название, чтобы прочитать описание процедуры.
        </p>
      </div>
      <div className="toolbar-sentinel" aria-hidden="true"></div>
      {/* <div className="searchpanel">
        <input
          type="text"
          onChange={searchHandler}
          value={searchPosition}
          placeholder="Введите услугу или препарат"
          maxLength={15}
          id="input-search"
        />
      </div> */}
      <div className="toolbar">
        <div className="search">
          <input
            type="search"
            onChange={searchHandler}
            value={searchPosition}
            placeholder="Введите услугу или препарат"
            maxLength={15}
            id="input-search"
            autoComplete="off"
            aria-label="Поиск услуги или препарата"
          />
        </div>
        <p
          className="search-count"
          id="search-count"
          role="status"
          hidden=""
        ></p>
      </div>

      <div className="container">
        <div className="table" id="price-table">
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
    </div>
  );
}
