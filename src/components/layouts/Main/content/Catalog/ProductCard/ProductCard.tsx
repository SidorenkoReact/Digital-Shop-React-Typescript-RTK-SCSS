import styles from "./productCard.module.scss"
import React from "react";
import {IProduct} from "../../../../../../types/types";
import {Checkbox} from "../../../../../ui/Checkbox/Checkbox";
import {Icon} from "../../../../../ui/Icon/Icon";
import { Rating } from "../../../../../ui/Rating/Rating";
import {BasicButton} from "../../../../../ui/BasicButton/BasicButton";

interface IProductProps {
    product: IProduct
}

const ProductCard: React.FC<IProductProps> = ({product}) => {
    return (
        <article className={styles.content}>
            <div className={styles.content__container}>
                <figure className={styles.image_area}>
                    <img src={product.image}/>
                </figure>
                <div className={styles.info_area}>
                    {product.name}
                </div>

                <div className={styles.widgets_area}>
                    <Checkbox label="Сравнить"/>
                    <Rating/>
                </div>
                <div className={styles.availability_area}>
                    наличие
                </div>

                <div className={styles.price_area}>
                    {product.price} ₽
                    <BasicButton variant="outlined" color="primary">
                        Купить
                    </BasicButton>
                </div>
            </div>
        </article>
    )
}


export {ProductCard}
