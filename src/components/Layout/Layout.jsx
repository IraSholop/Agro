import AppBar from "components/AppBar/AppBar"
import { Suspense } from "react"
import { Outlet } from "react-router-dom"
import css from  './Layout.module.css'

export const Layout = () => {
    return(
        <div>
            <AppBar/>
            <Suspense fallback={null}>
                <Outlet/>
            </Suspense>
            <footer className={css.footer}></footer>
        </div>
    )
}