import styles from "./advancedFilter.module.scss"
import {RangeSlider, TSliderValues} from "../../../../../ui/RangeSlider/RangeSlider";
import {useState} from "react";
import {NumberInput} from "../../../../../ui/Inputs/NumberInput/NumberInput";


const AdvancedFilter = () => {
    const [priceRange, setPriceRange] = useState<TSliderValues>({min: 0, max: 1800})
    const [minValueNumberInput, setMinValueNumberInput] = useState(priceRange.min)
    const [maxValueNumberInput, setMaxValueNumberInput] = useState(priceRange.max)
    const [sliderValues, setSliderValue] = useState<TSliderValues>(priceRange)

    // передать setSliderValue в input!!!

    return (
        <div className={styles.content}>
            <span>Цена:</span>

            <div className={styles.range_input_wrapper}>
                <NumberInput
                    value={minValueNumberInput}
                    setValue={(value: number) => setMinValueNumberInput(value)}
                />
                <NumberInput
                    value={maxValueNumberInput}
                    setValue={(value: number) => setMaxValueNumberInput(value)}
                />

            </div>

            <RangeSlider
                initialRange={priceRange}
                step={10}
                sliderValues={sliderValues}
                setSliderValue={setSliderValue}
                setMinValue={setMinValueNumberInput}
                setMaxValue={setMaxValueNumberInput}
            />

        </div>
    )
}


export {AdvancedFilter}
