"use strict";

import { newElement } from "../Lib/VieStar/Core.js";
import { Header, SubHeader } from "./Templates/Home/Header.js"

const app = () => {
    return newElement`
        <div class='container'>
            ${Header()}
            ${SubHeader()}
        </div>
    `
};


const ElementRoot = document.querySelector('#root');
ElementRoot.innerHTML = app();
