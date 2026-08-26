import React from "react";
import Header from "./components/header/Header";
import HeaderTable from "./components/headerTable/headerTable";
// import CategoryTable from "./components/categorytable/categoryTable";
import PriceListClient from "./components/showinfo/priceListClient";


import Papa from "papaparse";
import { nanoid } from "nanoid";

const url = "https://docs.google.com/spreadsheets/d/e/2PACX-1vTLxuGZdqHNd4WOc1IUYf_U_pR8jTpELHONnZ5xOIN6hMq9YCQRMjW73q69heqFfBwdS_Z5EDwBB2tn/pub?output=csv";




async function getGoogleSheetData() {
    let headers = [];
    let objPositions = {};
    let name = undefined;
    try {
    const response = await fetch(url);
    if (!response.ok) {
      throw new Error('Не удалось загрузить данные из Google Таблиц');
    }
    const csvText = await response.text();
    const parsed = Papa.parse(csvText, {
      header: true,
      complete: (result) => {
              Object.keys(result.data[0]).forEach((el, ind, arr) => {
                if (ind != arr.length - 1) {
                  headers.push(el);
                }
              });
              for (let i = 0; i < result.data.length; i++) {
                if (Object.values(result.data[i]).join("").length === 0)
                  continue;
                if (
                  Object.values(result.data[i])[0].length != 0 &&
                  Object.values(result.data[i])[1].length === 0
                ) {
                  name = Object.values(result.data[i])[0];
                  objPositions[`${name}`] = [];
                  continue;
                }
                let obj = result.data[i];
                obj.id = nanoid();
                objPositions[`${name}`].push(obj);
              }
          }
    });

    return {
        headers,objPositions
    }
  } catch (error) {
    console.error('Ошибка при работе с Google Sheets:', error);
    return [];
  }
}


export default async function GoogleSheetsPage() {
  // Данные загружаются прямо на сервере перед отправкой HTML клиенту
  const data = await getGoogleSheetData();
  console.log(data)

  
  return (
    <div id="root">
        <Header/>
        <PriceListClient initialPositions={data.objPositions} headerTable={data.headers} />
        
    </div>
    
  )
   
     
}