import React from "react";
import styles from "./flex_container.module.scss"


interface IFlexContainer {
    children: React.ReactNode;
    width?: string | undefined;
    height?: string | undefined;
    spacing?: "xs" | "sm" | "sm-md" | "md" | "lg" | "xl" | undefined;
}

const FlexContainer: React.FC<IFlexContainer> = ({children, width, spacing, height}) => {

    return (
        <div className={[styles.content, styles[`spacing_${spacing}`]].join(' ')}>
            <div className={styles.wrapper} style={{width, height}}>
                {children}
            </div>
        </div>
    )
}


export {FlexContainer}
