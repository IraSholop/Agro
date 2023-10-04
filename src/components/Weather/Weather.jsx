import { useState } from "react"
import { useEffect } from "react"
import LineChart from "./Diagr";
import PieChart from "./DiagrTwo";
import css from './Weather.module.css'

export const Weather =()=>{
    const [weather, setWeather] = useState(null);
    useEffect(()=>{
        fetch('http://api.weatherapi.com/v1/current.json?key=9a9d63974ac94bec8ce94517232409&q=Kyiv&aqi=no').then(res=>res.json()).then(data=>{
            console.log(data.current)
        setWeather(data.current)})
    },[])
    return(
        <div className={css.back}>
        <div className={css.cont}>
        <div className={css.item}>
            {weather !== null && <div className={css.weather}>
                <h1 className={css.weathtitle}>{weather.condition.text}</h1>
                <div className={css.icon}></div>
                <p>{Math.round(weather.temp_c)}°C</p>
            </div> }
        </div>
        <div><PieChart/></div>
        </div>
        <LineChart/>
        </div>
    )
}