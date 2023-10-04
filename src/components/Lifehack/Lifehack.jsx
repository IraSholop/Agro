import { useEffect } from 'react';
import { useState } from 'react';
import css from './Lifehack.module.css'
export const Lifehack = () => {
const [weather, setWeather] = useState(null);
//    9a9d63974ac94bec8ce94517232409
useEffect(()=>{
    fetch('http://api.weatherapi.com/v1/current.json?key=9a9d63974ac94bec8ce94517232409&q=Kyiv&aqi=no').then(res=>res.json()).then(data=>{
        console.log(data.current)
    setWeather(data.current)})
},[])
  return(
    <>
    <ul className={css.list}>
        <li className={css.item}>
            <img src="https://analit-pribor.com.ua/wp-content/uploads/2022/08/zlaki-2.jpg" alt="lifehack1" className={css.img}/>
            <h2 className={css.title}>Холодостійкі овочі, які варто передусім садити навесні</h2>
            <p className={css.text}>Що садити навесні на городі передусім? Відповідь на це питання одна – холодостійкі культури.</p>
            <span className={css.span}>20/02/2023</span>
            <a href="https://ukr.media/garden/429148/">Read more</a>
        </li>
        <li className={css.item}>
            <img src="https://www.apteka-sadivnyka.ua/upload/iblock/03f/03f37508890b7a0622433fd707dedb5e.jpg" alt="lifehack2" className={css.img}/>
            <h2 className={css.title}>Корисні лайфхаки, які стануть у пригоді під час вирощування розсади</h2>
            <p className={css.text}>Виростити розсаду можна за допомогою кількох хороших і влучних лайфхаків.</p>
            <span className={css.span}>25/03/2023</span>
            <a href="https://ukr.media/garden/429148/">Read more</a>
        </li>
        <li className={css.item}>
            {weather !== null && <div className={css.weather}>
                <h1 className={css.weathtitle}>{weather.condition.text}</h1>
                <div className={css.icon}></div>
                <p>{Math.round(weather.temp_c)}°C</p>
            </div> }
        </li>
        <li className={css.item}>
            <img src="https://upload.wikimedia.org/wikipedia/commons/c/c4/Crop_near_Mold%2C_Flintshire.JPG" alt="lifehack3" className={css.img}/>
            <h2 className={css.title}>Посівна озимої пшениці</h2>
            <p className={css.text}>Озима пшениця — головна за важливістю культура в Україні, яка поступається за обсягами вирощування тільки кукурудзі, проте має значення стратегічної харчової культури.</p>
            <span className={css.span}>12/05/2023</span>
            <a href="https://ukr.media/garden/429148/">Read more</a>
        </li>
        <li className={css.item}>
            <img src="https://agrarii-razom.com.ua/sites/default/files/klasif/5937.jpg" alt="lifehack4" className={css.img}/>
            <h2 className={css.title}>Сумісність рослин: які овочі добре ростуть поруч</h2>
            <p className={css.text}>Овочі, зелень і квіти допомагають один одному у зростанні шляхом поліпшення ґрунту.</p>
            <span className={css.span}>10/03/2023</span>
            <a href="https://agrarii-razom.com.ua/article/sumisnist-roslin-na-gorodi-yaki-ovochi-dobre-rostut-poruch">Read more</a>
        </li>
        <li className={css.item}>
            <img src="https://images.prom.ua/3749230899_w640_h2048_kultury_na_posiw3.jpeg?fresh=1&PIMAGE_ID=3749230899" alt="lifehack5" className={css.img}/>
            <h2 className={css.title}>Найбільш популярні культури для посіву</h2>
            <p className={css.text}>Багато фермерів роблять ставку на вирощування пшениці та інших зернових культур (ячмінь, жито). Найрентабельніші овочеві культури це:</p>
            <span className={css.span}>02/07/2023</span>
            <a href="https://agrospray.in.ua/ua/a474421-samye-vostrebovannye-kultury.html">Read more</a>
        </li>
        
    </ul>
    </>
  )
}