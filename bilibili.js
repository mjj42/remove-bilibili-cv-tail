// ==UserScript==
// @name         b站复制专栏内容无后缀
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  try to take over the world!
// @author       You
// @match        https://www.bilibili.com/read/*
// @icon         https://img.tukuppt.com/png_preview/00/29/01/Bf0p0pbcyi.jpg!/fw/780
// @grant        none
// ==/UserScript==

(function() {// @match        *://*/*
    'use strict';
    [...document.querySelectorAll('*')].forEach(item=>{
    item.oncopy = function(e) {
        e.stopPropagation();
    }
});

    
})();