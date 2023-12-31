import css from './Sunflower.module.css';

export const Sunflower = () => {
  return (
    <>
      <div className={css.sunflower}>
        <div className={css.cont}>
          <i className={css.title}>Соняшник</i>
          <img
            src="https://vnis.com.ua/upload/vnis/shop_3/1/2/3/item_1237/shop_items_catalog_image1237.jpg"
            alt="Sunflower"
            className={css.img}
          />
        </div>
        <div className={css.text}>
          <p>
            Посадка: посів насіння у відкритий ґрунт – у кінці квітня або на
            початку травня, коли ґрунт на глибині 10 см прогріється до 8-12 ˚C.
            Освітлення: яскраве сонячне світло. Ґрунт: будь-які, окрім кислих,
            болотистих і засолених, але більше підходять родючі ґрунти з умістом
            глини. Полив: частий і рясний. Найбільше потрібна волога до того, як
            рослина сформує 4 пари листя, а потім під час бутонізації, цвітіння
            й наливу насіння. У спеку полив має бути щоденним, а в посуху
            ділянку потрібно поливати 2-3 рази на день. Підживлення: регулярні
            впродовж усього періоду вегетації із застосуванням як органічних,
            так і мінеральних добрив. Спосіб унесення основних елементів –
            кореневий, мікроелементами рослина забезпечується при позакореневих
            підживленнях. Розмноження: насіннєве – розсадне та безрозсадне.
            Шкідники: степові цвіркуни, довгоносики, підгризаючі совки, піщані
            смерди, лугові метелики, дротяники, хрущі та їхні личинки,
            рослиноїдні блішки, попелиці. Хвороби: пероноспороз (несправжня
            борошниста роса), ембелізія (чорна плямистість), фомопсис (сіра
            плямистість), фомоз стебла, вугільна (попеляста) гниль, суха гниль,
            вертицильозний вілт, сіра гниль, альтернаріоз (бура плямистість),
            склерозатінкуоз (біла гниль), аскохітоз, борошниста роса, іржа,
            вовчок, бактеріоз, вірусна мозаїка та позеленіння квіток.
          </p>
        </div>
      </div>
    </>
  );
};
