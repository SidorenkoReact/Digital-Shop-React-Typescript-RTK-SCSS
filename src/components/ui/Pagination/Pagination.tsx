import React from "react";
import styles from "./pagination.module.scss"

interface IPagination {
    pagesArray: number[];
    onClickPage: React.Dispatch<React.SetStateAction<number>>
}


const Pagination: React.FC<IPagination> = ({pagesArray, onClickPage}) => {

    return (
        <div className={styles.content}>
            {pagesArray.map(page =>
                <div
                    onClick={() => onClickPage(page)}
                    className={styles.page}
                    key={page}>{page}
                </div>
            )}
        </div>
    )
}


export {Pagination}
