import React, {HTMLAttributes, InputHTMLAttributes} from "react";
import styles from "./input.module.scss"

interface IInputProps extends InputHTMLAttributes<HTMLInputElement> {

}

const Input: React.FC<IInputProps> = ({...rest}) => {
    return (
        <input
            className={styles.content}
            {...rest}
        />
    )
}


export {Input}
