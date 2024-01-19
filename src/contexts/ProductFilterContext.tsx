import React, {createContext, useState} from "react";
import {IFilterTypes} from "../types/types";


type TProductFilterContext = {
    filter: IFilterTypes;
    setFilter: React.Dispatch<React.SetStateAction<IFilterTypes>>
}

export const ProductFilterContext = createContext<TProductFilterContext>(null!)

interface IProductFilterProviderProps {
    children: React.ReactNode
}

export const ProductFilterProvider: React.FC<IProductFilterProviderProps> = ({children}) => {
    const [filter, setFilter] = useState({sort: "price_asc", group: "none", query: ""})

    return (
        <ProductFilterContext.Provider value={{filter, setFilter}}>
            {children}
        </ProductFilterContext.Provider>
    )
}
