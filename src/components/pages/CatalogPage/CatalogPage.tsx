import {Products} from "../../layouts/Main/content/Products/Products";
import {BreadCrumbList} from "../../layouts/Main/content/BreadCrumbList/BreadCrumbList";


const CatalogPage = () => {
    return (
        <div>
            <BreadCrumbList/>
            <h1>Смартфоны 943 товара</h1>
            <Products/>
        </div>
    )
}


export {CatalogPage}
