import React from "react";


const PromoInfoSlider = () => {
    return (
        <div className="main-top__carousel-holder"
             style={{display: "flex", justifyContent: "space-between", width: "100%", marginLeft: 20}}>
            <div style={{width: 180, height: 180, backgroundColor: "#e3ab96"}}>
                carousel(item 1)
            </div>

            <div style={{width: 180, height: 180, backgroundColor: "#e3ab96"}}>
                carousel(item 2)
            </div>

            <div style={{width: 180, height: 180, backgroundColor: "#e3ab96"}}>
                carousel(item 3)
            </div>

            <div style={{width: 180, height: 180, backgroundColor: "#e3ab96"}}>
                carousel(item 4)
            </div>
        </div>
    )
}


export {PromoInfoSlider}
