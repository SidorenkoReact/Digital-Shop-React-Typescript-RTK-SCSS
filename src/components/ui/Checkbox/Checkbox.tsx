import React, {InputHTMLAttributes} from "react";


interface ICheckboxProps extends InputHTMLAttributes<HTMLInputElement>{
    label: string;
}

const Checkbox: React.FC<ICheckboxProps> = ({label,...rest}) => {
    return (
        <label>
            <span>{label}</span>
            <input {...rest} type="checkbox"/>
        </label>
    )
}


export {Checkbox}
