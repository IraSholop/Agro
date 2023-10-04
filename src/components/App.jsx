import { Route, Routes } from 'react-router-dom';
import { Agro } from './Agro/Agro';
import { Form } from './Form/Form';
import { HomePage } from './HomePage/HomePage';
import { Layout } from './Layout/Layout';
import { Weather } from './Weather/Weather';

export function App() {
  return (
   <Routes>
    <Route path='/' element={<Layout/>}>
    <Route index element={<HomePage/>} />
    <Route path='/agro-crops' element={<Agro/>}/>
    <Route path='/weather' element={<Weather/>}/>
    <Route path='/form' element={<Form/>}/>
    </Route>
   </Routes>
  );
};
