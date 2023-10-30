import { useState } from 'react';
import css from './Form.module.css';

export const Form = () => {
    const [state, setState] = useState('');

   const handleSubmit = (e) => {
    e.preventDefault();
   const {crop, data} = e.target;
   const s = crop.value;
   const v = data.value;
       setState({s, v});
    }
    

    return(
        <div className={css.flex}>
        <div className={css.container}>
         <h1 className={css.title}>Визначити збір урожаю</h1>
        <form action="" className={css.form} onSubmit={handleSubmit}>
         <label htmlFor="" className={css.label}>
            Вкажіть культуру збору
            <input type="text" className={css.input} name='crop'/>
         </label>
         <label htmlFor="" className={css.label}>
            Вкажіть дату посадки
            <input type="text" className={css.input} name='data'/>
         </label>
         <button type='submit' className={css.btn}>Submit</button>
        </form>
        </div>
        </div>
    )
    
}