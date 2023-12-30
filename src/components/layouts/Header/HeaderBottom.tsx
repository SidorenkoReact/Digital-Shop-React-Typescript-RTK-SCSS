import React from "react";


const HeaderBottom = () => {
    return (
        <div className="header-bottom">
            <div className="header-bottom__container">

                <button style={{height: 40, width: 200}}>Каталог</button>
                <input placeholder="Поиск по сайту" style={{width: 400}}/>
                <button>Сравнение</button>
                <button>Избранное</button>
                <button>Корзина</button>
                <button>User</button>
            </div>
        </div>
    )
}


export {HeaderBottom}
