import React from "react";


const Contacts = () => {
    return (
        <div className="footer__contacts">
            <div className="footer__contacts-holder"
                 style={{display: "flex", width: 100, whiteSpace: "normal"}}>
                8-800-54-54-999 (c 9:00 до 18:00)

                Адреса магазинов в г. Хабаровск
                Следите за новинками и акциями:

                Введите email и подпишитесь
                ↵
                Подписываясь на рассылку, Вы соглашаетесь
                c условиями политики конфиденциальности и политики обработки персональных данных
                Нашли ошибку на сайте? Выделите текст с ошибкой, нажмите Ctrl+Enter и напишите нам
            </div>
        </div>
    )
}


export {Contacts}
