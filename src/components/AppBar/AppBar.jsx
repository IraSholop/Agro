import { Navigation } from "components/Navigation/Navigation";
import css from './AppBar.module.css'
export default function AppBar(){
    return(
        <header className={css.header}> 
            <Navigation/>
            <div className={css.search}>
      <input type="text" className={css.input} placeholder="Search..."/>
      <div className={css.icon}>
      </div>
    </div>
        </header>

    )
}