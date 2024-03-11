import React, {HTMLAttributes} from "react";
import styles from "./icon_button.module.scss"


interface IButtonProps extends HTMLAttributes<HTMLButtonElement> {
    image?: string
}

const IconButton: React.FC<IButtonProps> = ({image, children, ...rest}) => {

    if (image)
        return (
            <button {...rest} className={styles.content}>
                <img src={image} className={styles.image}/>
                <label className={styles.name}>
                    {children}
                </label>

            </button>
        )

    return (
        <button {...rest} className={styles.content}>
            {children}
        </button>
    )
}


export {IconButton}
