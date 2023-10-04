import { Barley } from "calture/Barley/Barley";
import { Corn } from "calture/Corn/Corn";
import { Oat } from "calture/Oat/Oat";
import { Rye } from "calture/Rye/Rye";
import { Sunflower } from "calture/Sunflower/Sunflower";
import { Wheat } from "calture/Wheat/Wheat";
import Calen from "components/Calendar/Calendar"
import ChartComponent from "Diagram/Diagram";
import { useState } from "react"
import css from './Agro.module.css'


export const Agro =()=>{
   const [value, setVAlue] = useState('Пшениця');

   const clickBtn = e => {
      setVAlue(e.target.innerText)
   }

   console.log(value);
    return(
        <>
        <div className={css.container}>
        <ul className={css.list} onClick={clickBtn}>
            <li className={css.item}>Пшениця</li>
            <li className={css.item}>Жито</li>
            <li className={css.item}>Кукурудза</li>
            <li className={css.item}>Овес</li>
            <li className={css.item}>Ячмінь</li>
            <li className={css.item}>Соняшник</li>
        </ul>
        <div className={css.calendar}>
        <Calen/>
        </div>
        </div>
          {value === 'Пшениця' && <Wheat/>}
          {value === 'Жито' && <Rye/>}
          {value === 'Кукурудза' && <Corn/>}
          {value === 'Овес' && <Oat/>}
          {value === 'Ячмінь' && <Barley/>}
          {value === 'Соняшник' && <Sunflower/>}
          <ChartComponent/>
        </>
    )
}