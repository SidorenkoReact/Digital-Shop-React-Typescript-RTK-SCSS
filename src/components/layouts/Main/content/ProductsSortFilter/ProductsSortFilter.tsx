import {Select} from "../../../../ui/Select/Select";
import React from "react";
import styles from "./productSortFilter.module.scss"
import {IFilterTypes} from "../../../../../types/types";

interface IProductSortFilterProps {
    limit: number;
    filter: IFilterTypes;
    setLimit: React.Dispatch<React.SetStateAction<number>>;
    setFilter: React.Dispatch<React.SetStateAction<IFilterTypes>>;
}

const ProductsSortFilter: React.FC<IProductSortFilterProps> = ({filter, limit, setLimit, setFilter}) => {

    return (
        <div className={styles.content} >
            <Select
                onChange={(event: React.ChangeEvent<HTMLSelectElement>) => setFilter(prev => ({...prev, sort: event.target.value}))}
                defaultValue={filter.sort}
                option={[
                {name: "сначала недорогие", value: "price_asc"},
                {name: "сначала дорогие", value: "price_desc"},
                ]}
            />
            <Select
                onChange={(event: React.ChangeEvent<HTMLSelectElement>) => setFilter(prev => ({...prev, group: event.target.value}))}
                defaultValue={filter.group}
                option={[
                    {name: "по производителю", value: "brand"},
                    {name: "отсутствует", value: "none"},
                ]}
            />
            <Select
                onChange={(event: React.ChangeEvent<HTMLSelectElement>)  => setLimit(Number(event.target.value))}
                defaultValue={limit}
                option={[
                {name: "5", value: "5"},
                {name: "10", value: "10"},
                {name: "25", value: "25"},
                {name: "Все", value: "-1"}]}
            />
            <div style={{width:20, height: 20, backgroundColor: "grey"}}>

            </div>
        </div>
    )
}

export {ProductsSortFilter}
