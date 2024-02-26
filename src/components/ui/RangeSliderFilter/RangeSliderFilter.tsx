import styles from "./range_slider_filter.module.scss";
import {NumberInput} from "../Inputs/NumberInput/NumberInput";
import {RangeSlider, TSliderValues} from "../RangeSlider/RangeSlider";
import React from "react";


interface IRangeSliderFilterProps {
    title: string;
    range: TSliderValues;
    sliderStep: number;
    minValueNumberInput: number;
    setMinValueNumberInput: React.Dispatch<React.SetStateAction<number>>;
    maxValueNumberInput: number;
    setMaxValueNumberInput: React.Dispatch<React.SetStateAction<number>>;
    sliderValues: TSliderValues;
    setSliderValue: React.Dispatch<React.SetStateAction<TSliderValues>>;
}

const RangeSliderFilter: React.FC<IRangeSliderFilterProps> = (
    {
        title,
        range,
        sliderStep,
        minValueNumberInput,
        setMinValueNumberInput,
        maxValueNumberInput,
        setMaxValueNumberInput,
        sliderValues,
        setSliderValue,

    }) => {

    const onKeyDownNumberInput = (event: React.KeyboardEvent<HTMLInputElement>, isMinInput: boolean) => {
        let currentValue = Number(event.currentTarget.value)

        currentValue = currentValue <= range.min ? range.min : currentValue
        currentValue = currentValue >= range.max ? range.max : currentValue

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
            <span className={styles.title}>{title}</span>

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
                initialRange={range}
                step={sliderStep}
                sliderValues={sliderValues}
                onChangeSlider={onChangeSlider}
            />

        </div>
    )
}


export {RangeSliderFilter}
