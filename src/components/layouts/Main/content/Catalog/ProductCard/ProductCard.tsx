import styles from "./productCard.module.scss"
import React from "react";
import {IProduct} from "../../../../../../types/types";
import {Checkbox} from "../../../../../ui/Checkbox/Checkbox";

interface IProductProps {
    product: IProduct
}

const ProductCard: React.FC<IProductProps> = ({product}) => {
    return (
        <article className={styles.content}>
            <div className={styles.content__container}>
                <figure className={styles.image_block}>
                    <img src={product.image}/>
                </figure>
                <div className={styles.info_block}>
                    {product.name}
                    <Checkbox label="Сравнить"/>
                </div>
                <div className={styles.price_block}>
                    {product.price}
                </div>
            </div>
        </article>
    )
}


export {ProductCard}
