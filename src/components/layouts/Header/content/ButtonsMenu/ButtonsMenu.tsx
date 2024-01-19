import React from "react";
import { Button } from "../../../../ui/Button/Button";
import compareImage from "../../../../../assets/image/compare.png"
import favoritesImage from "../../../../../assets/image/favorites.png"
import cartImage from "../../../../../assets/image/cart.png"
import profileImage from "../../../../../assets/image/profile.png"
import styles from "./buttonsMenu.module.scss"

const ButtonsMenu = () => {
    return (
        <nav className={styles.content} style={{}}>
            <Button image={compareImage}>
                Сравнить
            </Button>
            <Button image={favoritesImage}>
                Избранное
            </Button>
            <Button image={cartImage}>
                Корзина
            </Button>
            <Button image={profileImage}>
                Кабинет
            </Button>
        </nav>
    )
}


export {ButtonsMenu}
