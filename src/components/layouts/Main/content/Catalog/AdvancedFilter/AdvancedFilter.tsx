import styles from "./advancedFilter.module.scss"
import {RangeSlider, TSliderValues} from "../../../../../ui/RangeSlider/RangeSlider";
import React, {useState} from "react";
import {NumberInput} from "../../../../../ui/Inputs/NumberInput/NumberInput";


const AdvancedFilter = () => {
    const [priceRange, setPriceRange] = useState<TSliderValues>({min: 0, max: 1800})
    const [minValueNumberInput, setMinValueNumberInput] = useState(priceRange.min)
    const [maxValueNumberInput, setMaxValueNumberInput] = useState(priceRange.max)
    const [sliderValues, setSliderValue] = useState<TSliderValues>(priceRange)
    const sliderStep = 5

    const onKeyDownNumberInput = (event: React.KeyboardEvent<HTMLInputElement>, isMinInput: boolean) => {
        let currentValue = Number(event.currentTarget.value)

        currentValue = currentValue <= priceRange.min ? priceRange.min : currentValue
        currentValue = currentValue >= priceRange.max ? priceRange.max : currentValue

        if (isMinInput) {
            if (currentValue < maxValueNumberInput) {
                setMinValueNumberInput(currentValue)
                setSliderValue(prev => ({...prev, min: currentValue}))

            } else {
                setMinValueNumberInput(maxValueNumberInput)
                setSliderValue(prev => ({...prev, min: maxValueNumberInput}))
            }
        }

        if (!isMinInput) {
            if (currentValue > minValueNumberInput) {
                setMaxValueNumberInput(currentValue)
                setSliderValue(prev => ({...prev, max: currentValue}))

            } else {
                setMaxValueNumberInput(minValueNumberInput)
                setSliderValue(prev => ({...prev, max: minValueNumberInput}))
            }
        }

        event.currentTarget.blur()
    }

    const onChangeSlider = (value: number, isLeftSlider?: boolean) => {
        if (isLeftSlider) {
            if (value + sliderStep < sliderValues.max) {
                const currentRange = {...sliderValues, min: value}
                setSliderValue(currentRange)
                setMinValueNumberInput(currentRange.min)

            } else {
                const currentRange = {...sliderValues, max: value}
                setSliderValue(currentRange)
                setMaxValueNumberInput(currentRange.max)
            }
        }

        if (!isLeftSlider) {
            if (value - sliderStep > sliderValues.min ) {
                const currentRange = {...sliderValues, max: value}
                setSliderValue(currentRange)
                setMaxValueNumberInput(currentRange.max)

            } else {
                const currentRange = {...sliderValues, min: value}
                setSliderValue(currentRange)
                setMinValueNumberInput(currentRange.min)
            }
        }
    }

    return (
        <div className={styles.content}>
            <span>Цена:</span>

            <div className={styles.range_input_wrapper}>
                <NumberInput
                    currentValue={minValueNumberInput}
                    onKeyDownInput={event => onKeyDownNumberInput(event, true)}
                />
                <NumberInput
                    currentValue={maxValueNumberInput}
                    onKeyDownInput={event => onKeyDownNumberInput(event, false)}
                />

            </div>

            <RangeSlider
                initialRange={priceRange}
                step={sliderStep}
                sliderValues={sliderValues}
                onChangeSlider={onChangeSlider}
            />

        </div>
    )
}


export {AdvancedFilter}
