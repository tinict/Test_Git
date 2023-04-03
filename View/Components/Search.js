"use strict";

import { newElement } from "../../Lib/VieStar/Core.js";

export const Search = () => {
    return newElement`
        <div class="Search">
            <div class="Search__box">
                <div class="Search__left">
                    <input type="search" placeholder="Nhập mã hoặc sản phẩm">
                </div>
                <div class="Search__right">
                    <div class="icon">
                        <i class="fas fa-search"></i>
                    </div>
                </div>
            </div>
        </div>
    `
};