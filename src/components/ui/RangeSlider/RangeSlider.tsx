import styles from "./range_slider.module.scss"
import React from "react";


export type TSliderValues = {min: number; max: number}

interface IRangeSliderProps {
    initialRange: TSliderValues;
    step: number;
    sliderValues: TSliderValues;
    setSliderValue: React.Dispatch<React.SetStateAction<TSliderValues>>
    setMinValue: React.Dispatch<React.SetStateAction<number>>
    setMaxValue: React.Dispatch<React.SetStateAction<number>>
}

const RangeSlider: React.FC<IRangeSliderProps> = ({sliderValues, setSliderValue, initialRange, step, setMinValue, setMaxValue}) => {

    const minPos = Math.round((sliderValues.min - initialRange.min) / (initialRange.max - initialRange.min) * 100)
    const maxPos = Math.round((sliderValues.max - initialRange.min) / (initialRange.max - initialRange.min) * 100)

    const onChangeMinValueInput = (value: number) => {
        if (value < sliderValues.max) {
            const currentRange = {...sliderValues, min: value}
            setSliderValue(currentRange)
            setMinValue(currentRange.min)
        }
    }

    const onChangeMaxValueInput = (value: number) => {
        if (value > sliderValues.min) {
            const currentRange = {...sliderValues, max: value}
            setSliderValue(currentRange)
            setMaxValue(currentRange.max)
        }
    }

    return (
        <div className={styles.content}>

            <div className={styles.control_wrapper}>
                <div className={styles.rail}>
                    <div
                        style={{left: `${minPos}%`, right: `${100 - maxPos}%`}}
                        className={styles.progress}>
                    </div>
                </div>
            </div>

            <input
                onChange={event => onChangeMinValueInput(Number(event.currentTarget.value))}
                value={sliderValues.min}
                min={initialRange.min}
                max={initialRange.max}
                step={step}
                type="range"
            />
            <input
                onChange={event => onChangeMaxValueInput(Number(event.currentTarget.value))}
                value={sliderValues.max}
                min={initialRange.min}
                max={initialRange.max}
                step={step}
                type="range"
            />
            <span style={{zIndex: 1, pointerEvents: "none"}}>
                {sliderValues.min} : {sliderValues.max}
            </span>

        </div>
    )
}


export {RangeSlider}
