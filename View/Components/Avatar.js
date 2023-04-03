"use strict";

import { newElement } from "../../Lib/VieStar/Core.js";

export const Avatar = () => {
    return newElement`
        <div class='avatar'>
            <a href='#'>
                <div class='avatar__img'>
                    <i class="fas fa-user"></i>
                </div>
                <span class='userName'>ĐĂNG NHẬP</span>
            </a>
        </div>
    `;
};