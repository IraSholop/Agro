import css from './Wheat.module.css'

export const Wheat= ()=> {
    return(
        <>
        <div className={css.wheat}>
        <div className={css.cont}>
        <i className={css.title}>Пшениця</i>
        <img src="https://agrotimes.ua/wp-content/uploads/2023/04/pshenyczya.jpg" alt="Пшениця" className={css.img}/>
        </div>
        <div className={css.text}>
        <p>Оптимальним періодом для посіву озимої культури вважають кінець вересня і початок жовтня (25.09-05.10). Якщо проводити польові операції у цей час, рослина встигає розкущитися, утворити корінь і пагони, а також сформувати стійкість до температури та шкідливих організмів.</p>
        <p>Рекомендовані строки посівів озимої пшениці для різних областей України:</p>
        <ul>
        <li>Київська, Чернігівська, Черкаська – 05.09 – 15.09;</li>
        <li>Тернопільська, Вінницька, Волинська, Хмельницька – 05.09 – 20.09;</li>
        <li>Запорізька, Дніпропетровська – 05.09 – 25.09;</li>
        <li>Львівська, Одеська, Херсонська, Миколаївська, Сумська, Харківська, Полтавська – 10.09 – 25.09;</li>
        <li>Кіровоградська – 15.09 – 20.09;</li>
        <li>Рівненська – 15.09 – 25.09.</li>
        </ul>
        </div>
        </div>
        </>
    )
}