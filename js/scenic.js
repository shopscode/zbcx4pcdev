"use strict";
window.onload = function () {
    var t = document.getElementById("pic-container"),
        e = document.getElementById("right"),
        s = document.getElementById("left"),
        c = 0,
        n = t.children.length,
        l = Math.floor(screen.width / t.children[0].clientWidth);
    n > l && (e.style.cssText = "opacity:1"), e.onclick = function () {
        c++, c < n ? n - c > l ? (t.style.cssText = "transform:translateX(-" + 100 * c + "%)", e.style.cssText = "opacity:1", c + l + 1 === n && (e.style.cssText = "opacity:0")) : (e.style.cssText = "opacity:0", c--) : (c = n, s.style.cssText = "opacity:1", t.style.cssText = "transform:translateX(-" + 100 * c + "%)"), s.style.cssText = c > 0 ? "opacity:1" : "opacity:0"
    }, s.onclick = function () {
        c--, c >= 0 ? (t.style.cssText = "transform:translateX(-" + 100 * c + "%)", e.style.cssText = "opacity:1", 0 === c && (s.style.cssText = "opacity:0")) : (c = 0, s.style.cssText = "opacity:0")
    }
};
