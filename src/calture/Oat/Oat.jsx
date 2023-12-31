import css from './Oat.module.css';

export const Oat = () => {
  return (
    <>
      <div className={css.oat}>
        <div className={css.cont}>
          <i className={css.title}>Овес</i>
          <img
            src="https://jitnicaagro.by/wp-content/uploads/2020/12/1.jpg"
            alt="Rye"
            className={css.img}
          />
        </div>
        <div className={css.text}>
          <p>
            Овес як сидерат можна сіяти як навесні, так і восени. Восени
            посадити його потрібно відразу після збору врожаю. Це захистить
            неприкритий ґрунт від вимерзання та очистить його від шкідників. Це
            холодостійкий і вологолюбний злак. Тому сіяти його потрібно в
            холодну, сиру пору, найкраще в жовтні. Зазначимо, що восени потрібно
            брати матеріалу для посадки більше, ніж навесні, у разі вимерзання
            якоїсь кількості насіння. При суцільному розподілі насіння беремо 2
            кг на сотку, а при посадці в борозенки - у 2 рази менше. Сидерат
            висівати розсипом на великих ділянках або рядами на невеликих дачних
            угіддях.
          </p>
        </div>
      </div>
    </>
  );
};
