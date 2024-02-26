import React, {InputHTMLAttributes} from "react";


interface ICheckboxProps extends InputHTMLAttributes<HTMLInputElement>{
    label: string;
}

const Checkbox: React.FC<ICheckboxProps> = ({label, className,...rest}) => {
    return (
        <label className={className}>
            <input {...rest} type="checkbox"/>
            <span>{label}</span>
        </label>
    )
}


export {Checkbox}
