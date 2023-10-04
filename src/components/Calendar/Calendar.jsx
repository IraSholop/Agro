import React, { useState } from 'react';
import Calendar from 'react-calendar';
import css from './Calendar.module.css'
import  'react-calendar/dist/Calendar.css' ;

export default function Calen() {
  const [value, setValue] = useState(new Date());

  const onChange =(nextValue) => {
    setValue(nextValue);
  }

  return (
    <Calendar
      onChange={onChange}
      value={value}
      tileClassName={css.tileClassName}
    />
  );
}