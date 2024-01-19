import {Header} from "./Header/Header";
import {Outlet} from "react-router-dom";
import {Footer} from "./Footer/Footer";
import {Main} from "./Main/Main";


const Layout = () => {
    return (
        <>
            <Header/>
            <Main>
                <Outlet/>
            </Main>
            <Footer/>
        </>
    )
}


export {Layout}
