import styles from "./range_slider.module.scss"
import React from "react";


export type TSliderValues = {min: number; max: number}

interface IRangeSliderProps {
    initialRange: TSliderValues;
    step: number;
    sliderValues: TSliderValues;
    onChangeSlider: (value: number, isLeftSlider?: boolean) => void;
}

const RangeSlider: React.FC<IRangeSliderProps> = ({sliderValues, initialRange, step, onChangeSlider}) => {
    const minPos = Math.round((sliderValues.min - initialRange.min) / (initialRange.max - initialRange.min) * 100)
    const maxPos = Math.round((sliderValues.max - initialRange.min) / (initialRange.max - initialRange.min) * 100)

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
                onChange={event => onChangeSlider(Number(event.currentTarget.value), true)}
                value={sliderValues.min}
                min={initialRange.min}
                max={initialRange.max}
                step={step}
                type="range"
            />
            <input
                onChange={event => onChangeSlider(Number(event.currentTarget.value), false)}
                value={sliderValues.max}
                min={initialRange.min}
                max={initialRange.max}
                step={step}
                type="range"
            />

        </div>
    )
}


export {RangeSlider}
