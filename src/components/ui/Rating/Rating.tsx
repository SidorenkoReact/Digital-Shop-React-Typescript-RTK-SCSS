import styles from "./rating.module.scss"
import {useState} from "react";
import { Icon } from "../Icon/Icon";


const Rating = () => {
    const [rating, setRating] = useState(0)
    const [hover, setHover] = useState(0)

    return (
        <div className={styles.content}>
                {[...Array(5)].map((_, index) => {
                    index+=1
                    return(
                        <Icon
                            onClick={() => setRating(index)}
                            onMouseEnter={() => setHover(index)}
                            onMouseLeave={() => setHover(0)}
                            className={[styles.star_icon, index <= (hover || rating) && styles.checked].join(' ')}
                            style={{scale: index === hover ? "1.2" : "1"}}
                            key={index}
                            iconId="star"
                        />
                    )
                }
            )}
        </div>
    )
}

export {Rating}
