import styles from "./advancedFilter.module.scss"
import {RangeSlider, TSliderValues} from "../../../../../ui/RangeSlider/RangeSlider";
import React, {useState} from "react";
import {NumberInput} from "../../../../../ui/Inputs/NumberInput/NumberInput";
import {RangeSliderFilter} from "../../../../../ui/RangeSliderFilter/RangeSliderFilter";
import {SearchInput} from "../../../../../ui/Inputs/SearchInput/SearchInput";
import {Accordion} from "../../../../../ui/Accordion/Accordion";
import {CheckboxList} from "../../../../../ui/CheckboxList/CheckboxList";
import {BasicButton} from "../../../../../ui/BasicButton/BasicButton";
import {FlexContainer} from "../../../../../ui/Containers/FlexContainer/FlexContainer";
import {Icon} from "../../../../../ui/Icon/Icon";


const AdvancedFilter = () => {
    const [priceRange, setPriceRange] = useState<TSliderValues>({min: 0, max: 1800})
    const [minValueNumberInput, setMinValueNumberInput] = useState(priceRange.min)
    const [maxValueNumberInput, setMaxValueNumberInput] = useState(priceRange.max)
    const [sliderValues, setSliderValue] = useState<TSliderValues>(priceRange)
    const sliderStep = 5

    const brandsList = [{id: 0, name: "Apple", checked: false}, {id: 1, name: "Samsung", checked: false}, {id: 2, name: "JBL", checked: false}]
    const ratingsList = [{id: 0, name: "4,5 и выше", checked: false}, {id: 1, name: "4 и выше", checked: false}, {id: 2, name: "3,5 выше", checked: false}, {id: 3, name: "3 выше", checked: false}]
    const colorsList = [{id: 0, name: "белый", checked: false}, {id: 1, name: "голубой", checked: false}, {id: 2, name: "зеленый", checked: false}, {id: 3, name: "серый", checked: false}, {id: 4, name: "синий", checked: false}, {id: 5, name: "черный", checked: false}]


    return (
        <div className={styles.content}>
            <SearchInput/>
            <RangeSliderFilter
                title={"Цена"}
                range={priceRange}
                sliderStep={sliderStep}
                minValueNumberInput={minValueNumberInput}
                setMinValueNumberInput={setMinValueNumberInput}
                maxValueNumberInput={maxValueNumberInput}
                setMaxValueNumberInput={setMaxValueNumberInput}
                sliderValues={sliderValues}
                setSliderValue={setSliderValue}
            />
            <FlexContainer>
            <Accordion items={[
                {
                    title: "Бренд",
                    content: <CheckboxList
                                items={brandsList}
                                firstItem={{id: 0, name:"Все производители", checked: false}}
                                hasSearchInput={true}
                            />,
                    isCollapsed: true
                },
                {
                    title: "Рейтинг",
                    content: <CheckboxList items={ratingsList}/>,
                    isCollapsed: true
                },
                {
                    title: "Цвет",
                    content: <CheckboxList items={colorsList}/>,
                    isCollapsed: true
                }
            ]}/>
                <FlexContainer width="70%" spacing="md">
                    <BasicButton variant="contained" color="primary">Применить</BasicButton>
                    <BasicButton variant="outlined" color="secondary">Сбросить</BasicButton>
                </FlexContainer>
            </FlexContainer>

        </div>
    )
}


export {AdvancedFilter}
