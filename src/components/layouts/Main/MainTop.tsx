import React from "react";
import {LoginButton} from "./content/LoginButton/LoginButton";
import {PromoInfoSlider} from "./content/PromoInfoSlider/PromoInfoSlider";


const MainTop = () => {
    return (
        <div className="main-top">
            <div className="main-top__container">
                <LoginButton/>
                <PromoInfoSlider/>

            </div>
        </div>
    )
}


export {MainTop}
