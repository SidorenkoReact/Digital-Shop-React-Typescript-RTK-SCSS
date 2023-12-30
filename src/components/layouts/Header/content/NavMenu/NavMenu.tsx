import React from "react";
import styles from "./NavMenu.module.scss"


const NavMenu = () => {
    return (
        <ul className={styles.list}>
            <li className={styles.list__item}>Хабаровск</li>
            <li className={styles.list__item}>Акции</li>
            <li className={styles.list__item}>Магазины</li>
            <li className={styles.list__item}>Покупателям</li>
            <li className={styles.list__item}>Юридическим лицам</li>
            <li className={styles.list__item}>Клуб</li>
        </ul>
    )
}


export {NavMenu}
