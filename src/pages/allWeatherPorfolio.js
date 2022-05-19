import React, {useEffect, useState} from 'react';
import { Helmet } from 'react-helmet';
// import App from '../components/App';
// import '../style/awp.scss';


export default () => {
  const [weeklyHigh, setWeeklyHigh] = useState({});
  const [cost, setCost] = useState(10000);
  const [stock, setStock] = useState("VUSA.LON");
  const [bond, setBond] = useState("");
  const [gold, setGold] = useState("");
  const [duration, setDuration] = useState(52);
  useEffect(() => {
     const getStock = async() => await fetch(`https://www.alphavantage.co/query?function=TIME_SERIES_WEEKLY&symbol=${stock}&apikey=MC9ST99K30HA6HRB`).then(res => res.json()).then(data => setWeeklyHigh(data["Weekly Time Series"]));
    getStock();
  },[])
  
  return (
    <>
      <div>Some components</div>
      <table>
        <tr>
          <th>Week</th>
          <th>High</th>
          <th>Cost</th>
          <th>Profit</th>
        </tr>
        <tbody>
      {
       Object.entries(weeklyHigh).map((week,index) => {
        const startHigh = Object.entries(weeklyHigh)[duration-1][1]["2. high"];
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
