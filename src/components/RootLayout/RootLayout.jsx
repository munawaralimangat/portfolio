import { Outlet } from 'react-router-dom'
import Header from '../Header/Header';

const RootLayout = ()=>{
    return (
        <>
        <header>
            <Header/>
        </header>
        <main>
        <Outlet/>
        </main>
        <footer>
            footer
        </footer>
        </>
    )
}

export default RootLayout;