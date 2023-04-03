"use strict";

import { newElement } from "../../Lib/VieStar/Core.js";

export const NavigationBar = () => {
    return newElement`
        <ul class='NavigationBar'>
            <li class='Nav__item'>
                <a href='#'>
                    <div class='icon'>
                        <i class="fas fa-home"></i>
                    </div>
                    <h1 class='title'>TRANG CHỦ</h1>
                </a>
            </li>
            <li class='Nav__item'>
                <a href='#'>
                    <div class='icon'>
                        <i class="fas fa-list-ul"></i>
                    </div>
                    <h1 class='title'>DANH MỤC</h1>
                </a>
            </li>
            <li class='Nav__item'>
                <a href='#'>
                    <div class='icon'>
                        <i class="fas fa-shopping-cart"></i>
                    </div>
                    <h1 class='title'>GIỎ HÀNG</h1>
                </a>
            </li>
            <li class='Nav__item'>
                <a href='#'>
                    <div class='icon'>
                        <i class="fas fa-clipboard-list"></i>
                    </div>
                    <h1 class='title'>CHÍNH SÁCH</h1>
                </a>
            </li>
        </ul>
    `;
};