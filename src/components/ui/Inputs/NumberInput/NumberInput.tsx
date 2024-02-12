import React, {InputHTMLAttributes, useEffect, useState} from "react";
import styles from "./number_input.module.scss"

interface INumberInputProps extends InputHTMLAttributes<HTMLInputElement> {
    currentValue: number;
    onKeyDownInput: (event: React.KeyboardEvent<HTMLInputElement>, isMin: boolean) => void;
}

const NumberInput: React.FC<INumberInputProps> = ({currentValue, onKeyDownInput, ...rest}) => {
    const [value, setValue] = useState<string | number>(currentValue)

    useEffect(() => {
        setValue(currentValue)
    }, [currentValue])

    return (
        <input
            {...rest}
            value={value}
            onChange={event => setValue(event.currentTarget.value.replace(/[^0-9]/g, ''))}
            onKeyDown={event => event.key === "Enter" && onKeyDownInput(event, true)}
            type="text"
            className={styles.content}
        />
    )
}


export {NumberInput}
