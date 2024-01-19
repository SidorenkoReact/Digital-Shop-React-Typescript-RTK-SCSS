import styles from "./products.module.scss"
import {useContext, useEffect, useState} from "react";
import {IProduct} from "../../../../../types/types";
import {ProductService} from "../../../../../API/productService";
import {useFetching} from "../../../../../hooks/useFetching";
import {ProductsSortFilter} from "../ProductsSortFilter/ProductsSortFilter";
import {Pagination} from "../../../../ui/Pagination/Pagination";
import {getPageArray, getTotalPageCount} from "../../../../../utils/pages";
import {ProductCard} from "../ProductCard/ProductCard";
import {ProductFilterContext} from "../../../../../contexts/ProductFilterContext";
import {useProducts} from "../../../../../hooks/useProducts";


const Products = () => {
    const [products, setProducts] = useState<IProduct[]>([])
    const [page, setPage] = useState(1)
    const [limit, setLimit] = useState(10)
    const {filter, setFilter} = useContext(ProductFilterContext)
    const [totalProductsCount, setTotalProductsCount] = useState(0)

    const [fetchProducts, isLoadingProducts, errorProducts] = useFetching(async () => {
        const response = await ProductService.getAllProducts(page, limit)
        setProducts(response.data)
        setTotalProductsCount(response.headers['x-total-count'])
    })

    const filteredProducts = useProducts(products, filter.sort, filter.group, filter.query)
    const pagesArray = getPageArray(getTotalPageCount(limit, totalProductsCount))


    useEffect(() => {
       fetchProducts()
    }, [page, limit])

    return (
        <section className={styles.content}>
            <div style={{width:360, height:"100vh", backgroundColor:"#e2d6d1"}} className="product-filter">

            </div>
            <div style={{ width:"100%", backgroundColor:"#deeae4", paddingLeft: 22}}>
                <ProductsSortFilter
                    limit={limit}
                    filter={filter}
                    setLimit={setLimit}
                    setFilter={setFilter}
                />
                {errorProducts && <h1>{errorProducts}</h1>}
                {isLoadingProducts && <h1>Loading...</h1>}
                {filteredProducts.map(product =>
                    <ProductCard product={product} key={product.id}/>
                )}
                <Pagination
                    onClickPage={setPage}
                    pagesArray={pagesArray}
                />
            </div>
        </section>
    )
}

export {Products}
