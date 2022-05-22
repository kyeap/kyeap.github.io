import React, {useEffect, useState} from 'react';
import { Helmet } from 'react-helmet';
// import App from '../components/App';
// import '../style/awp.scss';
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";



export default () => {
  const [stockWeeklyHigh, setStockWeeklyHigh] = useState({});
  const [goldWeeklyHigh, setGoldWeeklyHigh] = useState({});
  const [bondWeeklyHigh, setBondWeeklyHigh] = useState({});

  // const [costStock, setCostStock] = useState(10000);
  // const [costBond, setCostBond] = useState(10000);
  // const [costGold, setCostGold] = useState(10000);

  const [buyDate, setBuyDate] = useState(new Date('2020-01-01'));
  const [stockNum, setStockNum] = useState(100);
  const [bondNum, setBondNum] = useState(100);
  const [goldNum, setGoldNum] = useState(100);
  const [cash, setCash] = useState(10000);

  const [stock, setStock] = useState("VUSA.LON");
  const [bond, setBond] = useState("INXG.LON");
  const [gold, setGold] = useState("SGLD.LON");

  // const [totalCost, setTotalCost] = useState(0);

  const duration = (Math.round(new Date() - buyDate)/(7 * 24 * 60 * 60 * 1000)+1) //number of weeks since bought

  useEffect(() => {
    const getStock = async() => await fetch(`https://www.alphavantage.co/query?function=TIME_SERIES_WEEKLY&symbol=${stock}&apikey=MC9ST99K30HA6HRB`).then(res => res.json()).then(data => setStockWeeklyHigh(data["Weekly Time Series"]));
    const getGold = async() => await fetch(`https://www.alphavantage.co/query?function=TIME_SERIES_WEEKLY&symbol=${gold}&apikey=MC9ST99K30HA6HRB`).then(res => res.json()).then(data => setGoldWeeklyHigh(data["Weekly Time Series"]));
    const getBond = async() => await fetch(`https://www.alphavantage.co/query?function=TIME_SERIES_WEEKLY&symbol=${bond}&apikey=MC9ST99K30HA6HRB`).then(res => res.json()).then(data => setBondWeeklyHigh(data["Weekly Time Series"]));
    
    getStock();
    getGold();
    getBond();
  },[])

  let combinedArr = [];
  if (Object.keys(stockWeeklyHigh).length >0 && Object.keys(goldWeeklyHigh).length > 0 && Object.keys(bondWeeklyHigh).length > 0) {
    for (let i=0; i<duration-1; i++) {
      let date, stockPrice, goldPrice,bondPrice;
      if (Object.entries(stockWeeklyHigh)[i] != undefined) {
        date = Object.entries(stockWeeklyHigh)[i][0];
        stockPrice = Object.entries(stockWeeklyHigh)[i][1]["2. high"];
      }
      if (Object.entries(goldWeeklyHigh)[i] != undefined) {
        goldPrice = Object.entries(goldWeeklyHigh)[i][1]["2. high"];
      }
      if (Object.entries(bondWeeklyHigh)[i] != undefined) {
        bondPrice = Object.entries(bondWeeklyHigh)[i][1]["2. high"];
      }
      const combinedObj = {
        "date":date,
        "stock":stockPrice,
        "gold":goldPrice,
        "bond":bondPrice
      }
      combinedArr.push(combinedObj);
    }
  }
  
  const buyWeekFridayMS = buyDate.setDate( buyDate.getDate() + 5 - buyDate.getDay());
  console.log('rerendered');

  let buyWeekObj,totalCost;
  if (combinedArr.length > 0 ) {
    buyWeekObj = combinedArr.find(obj => new Date(obj.date).getTime() == buyWeekFridayMS);
    totalCost = (buyWeekObj.gold * goldNum + buyWeekObj.bond * bondNum + buyWeekObj.stock * stockNum);
  }

  
  return (
    <>
      <DatePicker selected={buyDate} onChange={(date) => setBuyDate(date)} />
      <label>Number of Stock:</label>
      <input type="number" value={stockNum} onChange={(e) => setStockNum(e.target.value)}></input>
      <label>Number of Gold:</label>
      <input type="number" value={goldNum} onChange={(e) => setGoldNum(e.target.value)}></input>
      <label>Number of Bond:</label>
      <input type="number" value={bondNum} onChange={(e) => setBondNum(e.target.value)}></input>

      <div>Some components</div>
      <table>
        <tr>
          <th>Week</th>
          <th>Total Earning(£)</th>
          <th>Stock(%)</th>
          <th>Bond(%)</th>
          <th>Gold(%)</th>
          <th>Cash(%)</th>
        </tr>
        <tbody>
      {
      //  Object.entries(stockWeeklyHigh).map((week,index) => {
        combinedArr.map((week) => {
          // const high = week[1]["2. high"];
          const currentStockPrice = week.stock * stockNum;
          const currentBondPrice = week.bond * bondNum;
          const currentGoldPrice = week.gold * goldNum;

          const totalPortfolio = currentStockPrice + currentBondPrice + currentGoldPrice;
          const totalEarning = totalPortfolio - totalCost;

          const stockPercentage = (currentStockPrice/totalPortfolio*100).toFixed(2);
          const bondPercentage = (currentBondPrice/totalPortfolio*100).toFixed(2);
          const goldPercentage = (currentGoldPrice/totalPortfolio*100).toFixed(2);
          const cashPercentage = (cash/totalPortfolio*100).toFixed(2);


          // const profit = ((currentPrice - cost)/cost).toFixed(2);
          return(
            <tr>
              <td>
                <div>{week.date}</div>
              </td>
              <td>
                <div>{totalEarning.toFixed(2)}</div>
              </td>
              <td>
                <div>{stockPercentage}</div>
              </td>
              <td>
                <div>{bondPercentage}</div>
              </td>
              <td>
                <div>{goldPercentage}</div>
              </td>
              <td>
                <div>{cashPercentage}</div>
              </td>
            </tr>
          )
        })
      }
        </tbody>
        </table>
    </>
  );
};
