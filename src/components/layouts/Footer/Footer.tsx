import React from "react";
import {CustomerInfoMenu} from "./content/CustomerInfoMenu/CustomerInfoMenu";
import {CompanyInfoMenu} from "./content/CompanyInfoMenu/CompanyInfoMenu";
import {Contacts} from "./content/Contacts/Contacts";


const Footer = () => {
    return (
        <footer className="footer">
            <div className="footer__container">
                <CustomerInfoMenu/>
                <CompanyInfoMenu/>
                <Contacts/>

            </div>
        </footer>
    )
}


export {Footer}
