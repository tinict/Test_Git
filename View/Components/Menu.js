'use strict';

import { newElement } from "../../Lib/VieStar/Core.js"

export const Menu = () => {
    return newElement`
        <div class="Menu">
            <ul class="Menu__Box">
                <li class="MenuItem">
                    <a href="#">Laptop Gaming</a>
                </li>
                <li class="MenuItem">
                    <a href="#">Laptop Design</a>
                </li>
                <li class="MenuItem">
                    <a href="#">Laptop sinh viên</a>
                </li>
                <li class="MenuItem">
                    <a href="#">Laptop Business</a>
                </li>
            </ul>
        </div>
    `;
}  