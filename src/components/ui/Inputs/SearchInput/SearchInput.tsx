import styles from "./search_input.module.scss"
import {Icon} from "../../Icon/Icon";
import React, {MouseEventHandler, useRef, useState} from "react";


interface ISearchInputProps {
    variant?: "transparent" | "primary" | "secondary" | undefined;
}

const SearchInput: React.FC<ISearchInputProps> = ({variant}) => {
    const [value, setValue] = useState('')
    const inputRef = useRef<HTMLInputElement>(null)

    const onClickIconClear = () => {
        setValue('')
        inputRef.current?.focus()
    }

    return (
        <div className={[styles.content, styles[`variant_${variant}`]].join(' ')}>
            <input
                value={value}
                onChange={event => setValue(event.currentTarget.value)}
                placeholder="Поиск по фильтрам"
                ref={inputRef}
            />

            {value &&
                <>
                    <Icon
                        onClick={onClickIconClear}
                        iconId="clear"
                        className={styles.close_icon}
                    />
                    <div className={styles.separator}></div>
                </>
            }

            <Icon
                iconId="magnified"
                className={styles.magnified_icon}
            />
        </div>

    )
}


export {SearchInput}
