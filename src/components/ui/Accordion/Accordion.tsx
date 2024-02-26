import React, {useState} from "react";
import styles from "./accordion.module.scss"
import {Icon} from "../Icon/Icon";



const AccordionItem: React.FC<{title: string; isCollapsed: boolean; children: React.ReactNode;}> = ({title, isCollapsed, children}) => {
    const [isOpen, setIsOpen] = useState(isCollapsed)


    return (
        <div className={styles.item}>
            <div onClick={() => setIsOpen(prev => !prev)} className={styles.title_icon_wrapper}>
                <div className={!isOpen ? styles.title : styles.title_isOpen}>{title}</div>
                <div className={styles.icon}>
                    {isOpen
                        ? <Icon iconId="collapse_up" width="16" height="16"/>
                        : <Icon iconId="collapse_down" width="16" height="16"/>}
                </div>
            </div>
            {isOpen &&
                    <div className={styles.item_content}>
                        {children}
                    </div>}
        </div>
    )
}


interface IAccordion {
    items: Array<{
        title: string;
        content: React.ReactNode;
        isCollapsed: boolean;
    }>
}

const Accordion: React.FC<IAccordion> = ({items}) => (

    <div className={styles.content}>
        {items.map(item =>
            <AccordionItem
                title={item.title}
                key={item.title}
                isCollapsed={item.isCollapsed}
            >
                {item.content}
            </AccordionItem>
        )}
    </div>
)

export {Accordion}
