import React, {InputHTMLAttributes} from "react";
import styles from "./number_input.module.scss"
import {TSliderValues} from "../../RangeSlider/RangeSlider";

interface INumberInputProps extends InputHTMLAttributes<HTMLInputElement> {
    value: number;
    setValue: (value: number) => void;
}

const NumberInput: React.FC<INumberInputProps> = ({value, setValue, ...rest}) => {

    return (
        <input
            {...rest}
            value={value}
            onChange={event => setValue(Number(event.currentTarget.value))}
            type="number"
            className={styles.content}
        />
    )
}



export {NumberInput}
