import React from "react";
import styles from "./basic_button.module.scss"

interface IBasicButton extends React.HtmlHTMLAttributes<HTMLButtonElement> {
    variant?: "text" | "contained" | "outlined" | undefined;
    color?: "primary" | "secondary" | undefined;
}


const BasicButton: React.FC<IBasicButton> = ({children, variant, color, ...rest}) => {
    return (
        <button {...rest}
                className={[
                    styles.content,
                    styles[`variant_${variant}`],
                    styles[`variant_${variant}_color_${color}`]
                ].join(' ')}>
            {children}
        </button>
    )
}


export {BasicButton}
