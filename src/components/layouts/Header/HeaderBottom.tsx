import React, {useContext, useState} from "react";
import {ButtonsMenu} from "./content/ButtonsMenu/ButtonsMenu";
import {Input} from "../../ui/Input/Input";
import {ProductFilterContext} from "../../../contexts/ProductFilterContext";


const HeaderBottom = () => {
    const [searchValue, setSearchValue] = useState("")
    const {filter, setFilter} = useContext(ProductFilterContext)

    // const onChangeSearchInput = () => {
    //     console.log(filter)
    // }

    return (
        <div className="header-bottom">
            <div className="header-bottom__container">

                <button style={{height: 40, width: 200}}>Каталог</button>
                <Input
                    onChange={event => setFilter(prev => ({...prev, query: event.target.value}))}
                    value={filter.query}
                    type="search"
                    placeholder="Поиск по сайту"
                />
                <ButtonsMenu/>
            </div>
        </div>
    )
}


export {HeaderBottom}
