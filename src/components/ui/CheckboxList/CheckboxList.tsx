import React, {useState} from "react";
import {Checkbox} from "../Checkbox/Checkbox";
import styles from "./checkbox_list.module.scss"
import {SearchInput} from "../Inputs/SearchInput/SearchInput";
import {FlexContainer} from "../Containers/FlexContainer/FlexContainer";

type TCheckboxItem = {
    id: number;
    name: string;
    checked: boolean;
}

interface ICheckboxListProps {
    firstItem?: TCheckboxItem | undefined;
    items: Array<TCheckboxItem>;
    hasSearchInput?: boolean | undefined;
}

const CheckboxList: React.FC<ICheckboxListProps> = ({firstItem, items, hasSearchInput}) => {
    const [allChecked, setAllChecked] = useState(false)
    // логика чекбоксов массив объектов
    // сделать универсальным placeholder
    return (
        <div className={styles.content}>
            {hasSearchInput &&
                <FlexContainer width="90%" spacing="sm">
                    <SearchInput variant={"secondary"}/>
                </FlexContainer>
            }
            {firstItem &&
                <Checkbox
                    onChange={() => setAllChecked(prev => !prev)}
                    checked={allChecked}
                    label={firstItem.name}
                    className={styles.first_item}
                />
            }
            <div className={styles.items_list}>

                {items.map(item =>
                    <Checkbox
                        onChange={() => {}}
                        checked={allChecked && allChecked}
                        label={item.name}
                        key={item.id}
                        className={styles.item}
                    />
                )}
            </div>
        </div>
    )
}



export {CheckboxList}
