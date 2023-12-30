import React from "react";
import {NavMenu} from "./content/NavMenu/NavMenu";
import {Phone} from "./content/Phone/Phone";

const HeaderTop = () => {
    return (
        <div className="header-top">
            <div className="header-top__container">
                <NavMenu/>
                <Phone/>

            </div>
        </div>
    )
}


export {HeaderTop}
