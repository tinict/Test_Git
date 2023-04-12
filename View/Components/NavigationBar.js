"use strict";

import { newElement } from "../../Lib/VieStar/Core.js";
import { Menu } from "../Components/Menu.js"

export const NavigationBar = () => {
    return newElement`
        <ul class='NavigationBar'>
            <li class='Nav__item'>
                <a href='#'>
                    <div class='icon'>
                        <i class="fas fa-home fill"></i>
                    </div>
                    <h1 class='title'>TRANG CHỦ</h1>
                </a>
            </li>
            <li class='Nav__item'>
                <a href='#'>
                    <div class='icon'>
                        <i class="fas fa-list-ul fill"></i>
                    </div>
                    <h1 class='title'>DANH MỤC</h1>
                </a>
                ${Menu()}
            </li>
            <li class='Nav__item'>
                <a href='#'>
                    <div class='icon'>
                        <i class="fas fa-shopping-cart fill"></i>
                    </div>
                    <h1 class='title'>GIỎ HÀNG</h1>
                </a>
            </li>
            <li class='Nav__item'>
                <a href='#'>
                    <div class='icon'>
                        <i class="fas fa-clipboard-list fill"></i>
                    </div>
                    <h1 class='title'>CHÍNH SÁCH</h1>
                </a>
            </li>
        </ul>
    `;
};