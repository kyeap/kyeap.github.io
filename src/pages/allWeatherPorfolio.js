import React, {useEffect, useState} from 'react';
import { Helmet } from 'react-helmet';
// import App from '../components/App';
// import '../style/awp.scss';


export default () => {
  const [stockWeeklyHigh, setStockWeeklyHigh] = useState({});
  const [goldWeeklyHigh, setGoldWeeklyHigh] = useState({});
  const [cost, setCost] = useState(10000);
  const [stock, setStock] = useState("VUSA.LON");
  const [bond, setBond] = useState("");
  const [gold, setGold] = useState("SGLD.LON");
  const [duration, setDuration] = useState(52);

  useEffect(() => {
    const getStock = async() => await fetch(`https://www.alphavantage.co/query?function=TIME_SERIES_WEEKLY&symbol=${stock}&apikey=MC9ST99K30HA6HRB`).then(res => res.json()).then(data => setStockWeeklyHigh(data["Weekly Time Series"]));
    const getGold = async() => await fetch(`https://www.alphavantage.co/query?function=TIME_SERIES_WEEKLY&symbol=${gold}&apikey=MC9ST99K30HA6HRB`).then(res => res.json()).then(data => setGoldWeeklyHigh(data["Weekly Time Series"]));
    getStock();
    getGold();
  },[])

  let combinedArr = [];
  if (stockWeeklyHigh != null && goldWeeklyHigh != null) {
    for (let i=0; i<Object.entries(stockWeeklyHigh).length; i++) {
      let date, stockPrice, goldPrice;
      if (Object.entries(stockWeeklyHigh)[i] != undefined) {
        date = Object.entries(stockWeeklyHigh)[i][0];
        stockPrice = Object.entries(stockWeeklyHigh)[i][1]["2. high"];
      }
      if (Object.entries(goldWeeklyHigh)[i] != undefined) {
        goldPrice = Object.entries(goldWeeklyHigh)[i][1]["2. high"];
      }
      const combinedObj = {
        "date":date,
        "stock":stockPrice,
        "gold":goldPrice,
      }
      combinedArr.push(combinedObj);
    }
  }

  console.log(combinedArr);
  
  return (
    <>
      <div>Some components</div>
      <table>
        <tr>
          <th>Week</th>
          <th>High</th>
          <th>Cost</th>
          <th>Stock</th>
          <th>Bond</th>
          <th>Gold</th>
          <th>Cash</th>
          <th>Profit</th>
        </tr>
        <tbody>
      {
       Object.entries(stockWeeklyHigh).map((week,index) => {
        const startHigh = Object.entries(stockWeeklyHigh)[duration-1][1]["2. high"];
        const sharenum = cost/startHigh;
        if (index < duration){
          const high = week[1]["2. high"];
          const currentPrice = high * sharenum;
          const profit = ((currentPrice - cost)/cost).toFixed(2);
          return(
                <tr>
                  <td>
                    <div>{week[0]}</div>
                  </td>
                  <td>
                    <div>{high}</div>
                  </td>
                  <td>
                    <div>{currentPrice.toFixed(2)}</div>
                  </td>
                  <td>
                    {profit}%
                  </td>
                </tr>
          )
          // } 
        }})}
        </tbody>
        </table>
    </>
  );
};
