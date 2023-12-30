import React from "react";
import {BrandSlider} from "./content/BrandSlider/BrandSlider";
import {HistorySlider} from "./content/HistorySlider/HistorySlider";


const MainBottom = () => {
    return (
        <div className="main-bottom">
            <div className="main-bottom__container">
                <BrandSlider/>
                <HistorySlider/>

            </div>
        </div>
    )
}



export {MainBottom}
