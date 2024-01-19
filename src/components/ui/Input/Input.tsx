import React, {HTMLAttributes, InputHTMLAttributes} from "react";
import styles from "./input.module.scss"

interface IInputProps extends InputHTMLAttributes<HTMLInputElement> {

}

const Input: React.FC<IInputProps> = ({...rest}) => {
    return (
        <input
            {...rest}
            className={styles.content}
        />
    )
}


export {Input}
