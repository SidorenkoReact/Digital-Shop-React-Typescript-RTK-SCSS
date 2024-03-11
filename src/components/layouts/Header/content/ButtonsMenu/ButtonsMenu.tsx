import React from "react";

import compareImage from "../../../../../assets/image/compare.png"
import favoritesImage from "../../../../../assets/image/favorites.png"
import cartImage from "../../../../../assets/image/cart.png"
import profileImage from "../../../../../assets/image/profile.png"
import styles from "./buttonsMenu.module.scss"
import { IconButton } from "../../../../ui/IconButton/IconButton";

const ButtonsMenu = () => {
    return (
        <nav className={styles.content} style={{}}>
            <IconButton image={compareImage}>
                Сравнить
            </IconButton>
            <IconButton image={favoritesImage}>
                Избранное
            </IconButton>
            <IconButton image={cartImage}>
                Корзина
            </IconButton>
            <IconButton image={profileImage}>
                Кабинет
            </IconButton>
        </nav>
    )
}


export {ButtonsMenu}
