import {useContext, useEffect, useState} from "react";
import {fetchAllProducts} from "../../../../../../store/asyncActions/fetchProducts";
import {ProductFilterContext} from "../../../../../../contexts/ProductFilterContext";
import {useProducts} from "../../../../../../hooks/useProducts";
import {useAppDispatch, useAppSelector} from "../../../../../../hooks/redux";
import {selectProducts} from "../../../../../../store/reducers/productsSlice";
import {ProductsList} from "../ProductsList/ProductsList";
import styles from "./products.module.scss"
import {AdvancedFilter} from "../AdvancedFilter/AdvancedFilter";


const Products = () => {
    const dispatch = useAppDispatch()
    const [page, setPage] = useState(1)
    const [limit, setLimit] = useState(10)
    const {filter, setFilter} = useContext(ProductFilterContext)

    const {products, isLoading, error, totalCount} = useAppSelector(selectProducts)

    const filteredProducts = useProducts(products, filter.sort, filter.group, filter.query)



    useEffect(() => {
        dispatch(fetchAllProducts({page, limit}))
    }, [page, limit])

    return (
        <section className={styles.content}>
            <AdvancedFilter/>
            <ProductsList
                limit={limit}
                filter={filter}
                setLimit={setLimit}
                setFilter={setFilter}
                products={filteredProducts}
                isLoading={isLoading}
                error={error}
                totalCount={totalCount}
                setPage={setPage}
            />

        </section>
    )
}

export {Products}
