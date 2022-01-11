import React, { useEffect , useState } from 'react'
import "./style.css"
const Covid = () => {

const [data,setData] = useState([]);




const getCovidData = async ()=>{
    try {
        const res = await fetch('https://api.apify.com/v2/key-value-stores/toDWvRj1JpTXiM8FF/records/LATEST?disableRedirect=true');
const actualData = await res.json();
// console.log(actualData);
setData(actualData);
    }catch (err){
        console.log(err);
    }


}
    useEffect(() => {      
      getCovidData();
    },[])
  return (
    <>
      
    <section>
  
    <h1 className="h21"> covid tracker</h1>

      <ul>
      <div className="divider">
          <li className="card card1">
<div className="card_main">
<div className="card_inner">
    <p className="card_name"> <span>our</span> country</p>
    <p className="card_total card_small"> india</p>
</div>
</div>
          </li>
          <li className="card card2">
<div className="card_main">
<div className="card_inner">
    <p className="card_name"> <span>Total</span> Active</p>
    <p className="card_total card_small">{data.activeCases}</p>
</div>
</div>
          </li>
          <li className="card card3">
<div className="card_main">
<div className="card_inner">
    <p className="card_name"> <span>Total</span> recover</p>
    <p className="card_total card_small"> {data.recovered}</p>
</div>
</div>

          </li>
          </div>
<div className="divi">
          <li className="card card4" >
<div className="card_main">
<div className="card_inner" >
    <p className="card_name"> <span>Total</span> Death</p>
    <p className="card_total card_small"> {data.deaths}</p>
</div>
</div>
          </li>
          <li className="card card5">
<div className="card_main">
<div className="card_inner">
    <p className="card_name"> <span>Total</span> cases</p>
    <p className="card_total card_small"> {data.totalCases}</p>
</div>
</div>
          </li>
          <li className="card card6">
<div className="card_main">
<div className="card_inner">
    <p className="card_name"> <span>Last </span> Update</p>
    <p className="card_total card_small"> {data.lastUpdatedAtApify}</p>
</div>
</div>
          </li>
          </div>
      </ul>
      </section>
    </>
  )
}

export default Covid
