import { NavLink } from "react-router-dom"
import css from './Navigation.module.css'
export const Navigation = () => {
 return(
     <nav className={css.nav}>
        <h1 className={css.title}>Agro</h1>
        <ul className={css.list}>
            <li >
            <NavLink to='/' className={css.item} activeclassname={'active'}>
            Home
           </NavLink>
            </li>
            <li >
            <NavLink to='/agro-crops' className={css.item}  activeclassname={'active'}>
            Agri-crops
        </NavLink>
            </li>
            <li >
            <NavLink to='/form' className={css.item} activeclassname={'active'}>
            Harvest
        </NavLink>
            </li>
            <li >
            <NavLink to='/weather' className={css.item} activeclassname={'active'}>
            Weather
        </NavLink>
            </li>
        </ul>
     </nav>

 )
}
