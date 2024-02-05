import {Products} from "../../layouts/Main/content/Catalog/Products/Products";
import {BreadCrumbList} from "../../layouts/Main/content/Catalog/BreadCrumbList/BreadCrumbList";


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
