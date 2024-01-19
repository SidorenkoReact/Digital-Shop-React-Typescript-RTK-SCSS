import React, {HTMLAttributes} from "react";
import styles from "./select.module.scss"


interface ISelectProps extends HTMLAttributes<HTMLSelectElement> {
    option: Array<{
        name: string;
        value: string;
    }>;
    defaultOption?: string;
}

const Select: React.FC<ISelectProps> = ({option, defaultOption, ...rest}) => {


    return (
        <select {...rest} className={styles.content}>
            {defaultOption && <option>{defaultOption}</option>}
            {option.map(option => <option value={option.value} key={option.value}>{option.name}</option>)}
        </select>
    )
}


export {Select}
