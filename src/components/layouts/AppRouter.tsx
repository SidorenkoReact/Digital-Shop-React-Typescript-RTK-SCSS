import {Route, Routes} from "react-router-dom";
import {Layout} from "./Layout";
import {HomePage} from "../pages/HomePage/HomePage";
import {CatalogPage} from "../pages/CatalogPage/CatalogPage";
import {ProductFilterProvider} from "../../contexts/ProductFilterContext";


const AppRouter = () => {
    return (
        <Routes>
            <Route path="/" element={<Layout/>}>
                {/*<Route index element={<HomePage/>}/>*/}
                <Route path="/" element={<CatalogPage/>}/>
            </Route>
        </Routes>
    )
}


export {AppRouter}
