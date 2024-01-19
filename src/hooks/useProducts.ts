import {IProduct} from "../types/types";
import {useMemo} from "react";


const useSortProducts = (products: IProduct[], type: string) => {
    return useMemo(() => {
        if (type === "price_asc")
            return [...products].sort((a, b) => a["price"] - b["price"])

        if (type === "price_desc") {
            return [...products].sort((a, b) => b["price"] - a["price"])
        }

        return products

    }, [products, type])
}


const useGroupProducts = (products: IProduct[], type: string) => {
    return useMemo(() => {
        if (type === "brand") {
            return [...products].sort((a, b) => a[type].localeCompare(b[type]))
        }
        return products
    }, [products, type])
}




export const useProducts = (products: IProduct[], sort: string, group: string, query: string) => {
    const sortedProducts = useSortProducts(products, sort)
    const groupedAndSortedProducts = useGroupProducts(sortedProducts, group)

    return useMemo(() => {
        return [...groupedAndSortedProducts].filter(product => product.name.toLowerCase().includes(query.toLowerCase()))

    }, [groupedAndSortedProducts, sort, group, query])
}
