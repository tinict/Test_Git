"use strict";
import { Render } from "../../Lib/VieStar/Core.js";

Render('Templates\\Home', 'Header', '#root');
Render('Components', 'Search', '.header__center');
Render('Components', 'Menu', '.header__center');