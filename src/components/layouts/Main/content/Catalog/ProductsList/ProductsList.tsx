import {ProductsSortFilter} from "../ProductsSortFilter/ProductsSortFilter";
import {ProductCard} from "../ProductCard/ProductCard";
import {Pagination} from "../../../../../ui/Pagination/Pagination";
import {IFilterTypes, IProduct} from "../../../../../../types/types";
import React from "react";
import {getPageArray, getTotalPageCount} from "../../../../../../utils/pages";
import styles from "./productsList.module.scss"


interface IProductsListProps {
    limit: number;
    filter: IFilterTypes;
    setLimit: React.Dispatch<React.SetStateAction<number>>;
    setFilter: React.Dispatch<React.SetStateAction<IFilterTypes>>;

    products: IProduct[];
    isLoading: boolean;
    error: string;
    totalCount: number;

    setPage: React.Dispatch<React.SetStateAction<number>>;
}

const ProductsList: React.FC<IProductsListProps> = (
    {
        filter,
        limit,
        setFilter,
        setLimit,
        products,
        isLoading,
        error,
        totalCount,
        setPage
    }) => {

    const pagesArray = getPageArray(getTotalPageCount(limit, totalCount))

    return (
        <div className={styles.content}>
            <ProductsSortFilter
                limit={limit}
                filter={filter}
                setLimit={setLimit}
                setFilter={setFilter}
            />

            {error && <h1>{error}</h1>}
            {isLoading && <h1>Loading...</h1>}
            {products.map(product =>
                <ProductCard product={product} key={product.id}/>
            )}

            <Pagination
                onClickPage={setPage}
                pagesArray={pagesArray}
            />
        </div>
    )
}


export {ProductsList}
