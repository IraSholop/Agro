import css from './Corn.module.css';

export const Corn = () => {
  return (
    <>
      <div className={css.corn}>
        <div className={css.cont}>
            
          <i className={css.title}>Кукурудза</i>
          <img
            src="https://www.syngenta.ua/sites/g/files/kgtney1466/files/styles/syngenta_large_4_3/public/media/image/2023/02/09/corn_teaser_website_570x428_ida_23.jpg?itok=QBkt3_0J"
            alt="Corn"
            className={css.img}
          />
        </div>
        <div className={css.text}>
          <p>
            Кукурудза – рослина теплолюбна, тому ділянка для неї має бути
            сонячною і захищеною від вітру. Найкращим ґрунтом для кукурудзи
            вважається добре дренований родючий і повітропроникний чорнозем, у
            якому до кукурудзи росли капуста, картопля, буряк, кабачки,
            помідори, огірки і патисони. У відкритий ґрунт кукурудзу висаджують,
            коли їй уже не зможуть зашкодити заморозки – у травні-червні.
            Зниження температури повітря до +3°С може уповільнити зростання
            сіянців аж до повної зупинки. Якщо температура опуститься ще нижче,
            розсада загине.
          </p>
        </div>
      </div>
    </>
  );
};
