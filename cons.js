/*!
 * Cons v1.0.0
 * Copyright 2020 İbrahim Sanduvaç (https://www.truncgil.com)
 * Licensed under MIT
 */
class Cons {
    constructor(o = !0, r = "dark") {
        this.mode = o, this.theme = r
    }
    debug(o, r = {
        color: "#fff",
        fontSize: "12px",
        backgroundColor: "transparent",
        border: "none"
    }, e = "", n = !0, t = "DEBUG") {
        if (this.mode) {
            if (n) {
                let o = new Date;
                n = [o.getDate(), o.getMonth() + 1, o.getFullYear()].join("-") + " " + [o.getHours(), o.getMinutes(), o.getSeconds()].join(":")
            } else n = "";
            let d = "yellow; ";
            if ("light" != this.theme && 1 !== this.theme || (d = "#555; font-weight: bold; "), "string" == typeof r) "primary" == r ? console.log("%c" + t + "%c\n" + o + " %c\n " + n, "border: 1px solid tomato; padding: 3px 5px; margin-bottom: 4px; font-weight: bolder; font-size: 10px; border-radius: 3px; color: gold;", "padding: .4rem 1.25rem; margin-bottom: 1rem; border: 1px solid transparent; border-radius: .25rem;color: #004085;background-color: #cce5ff;border-color: #b8daff;" + e, "color: " + d + " font-size: .7rem;") : "secondary" == r ? console.log("%c" + t + "%c\n" + o + " %c\n " + n, "border: 1px solid tomato; padding: 3px 5px; margin-bottom: 4px; font-weight: bolder; font-size: 10px; border-radius: 3px; color: gold;", "padding: .4rem 1.25rem; margin-bottom: 1rem; border: 1px solid transparent; border-radius: .25rem;color: #383d41;background-color: #e2e3e5;border-color: #d6d8db;" + e, "color: " + d + " font-size: .7rem;") : "success" == r ? console.log("%c" + t + "%c\n" + o + " %c\n " + n, "border: 1px solid tomato; padding: 3px 5px; margin-bottom: 4px; font-weight: bolder; font-size: 10px; border-radius: 3px; color: gold;", "padding: .4rem 1.25rem; margin-bottom: 1rem; border: 1px solid transparent; border-radius: .25rem;color: #155724;background-color: #d4edda;border-color: #c3e6cb;" + e, "color: " + d + " font-size: .7rem;") : "danger" == r ? console.log("%c" + t + "%c\n" + o + " %c\n " + n, "border: 1px solid tomato; padding: 3px 5px; margin-bottom: 4px; font-weight: bolder; font-size: 10px; border-radius: 3px; color: gold;", "padding: .4rem 1.25rem; margin-bottom: 1rem; border: 1px solid transparent; border-radius: .25rem;color: #856404;background-color: #f8d7da;border-color: #f5c6cb;" + e, "color: " + d + " font-size: .7rem;") : "warning" == r ? console.log("%c" + t + "%c\n" + o + " %c\n " + n, "border: 1px solid tomato; padding: 3px 5px; margin-bottom: 4px; font-weight: bolder; font-size: 10px; border-radius: 3px; color: gold;", "padding: .4rem 1.25rem; margin-bottom: 1rem; border: 1px solid transparent; border-radius: .25rem;color: #721c24;background-color: #fff3cd;border-color: #ffeeba;" + e, "color: " + d + " font-size: .7rem;") : "info" == r ? console.log("%c" + t + "%c\n" + o + " %c\n " + n, "border: 1px solid tomato; padding: 3px 5px; margin-bottom: 4px; font-weight: bolder; font-size: 10px; border-radius: 3px; color: gold;", "padding: .4rem 1.25rem; margin-bottom: 1rem; border: 1px solid transparent; border-radius: .25rem;color: #0c5460;background-color: #d1ecf1;border-color: #bee5eb;" + e, "color: " + d + " font-size: .7rem;") : "light" == r ? console.log("%c" + t + "%c\n" + o + " %c\n " + n, "border: 1px solid tomato; padding: 3px 5px; margin-bottom: 4px; font-weight: bolder; font-size: 10px; border-radius: 3px; color: gold;", "padding: .4rem 1.25rem; margin-bottom: 1rem; border: 1px solid transparent; border-radius: .25rem;color: #818182;background-color: #fefefe;border-color: #fdfdfe;" + e, "color: " + d + " font-size: .7rem;") : "dark" == r ? console.log("%c" + t + "%c\n" + o + " %c\n " + n, "border: 1px solid tomato; padding: 3px 5px; margin-bottom: 4px; font-weight: bolder; font-size: 10px; border-radius: 3px; color: gold;", "padding: .4rem 1.25rem; margin-bottom: 1rem; border: 1px solid transparent; border-radius: .25rem;color: #1b1e21;background-color: #d6d8d9;border-color: #c6c8ca;" + e, "color: " + d + " font-size: .7rem;") : console.log("%c" + t + "%c\n" + o + " %c\n " + n, "border: 1px solid tomato; padding: 3px 5px; margin-bottom: 4px; font-weight: bolder; font-size: 10px; border-radius: 3px; color: gold;", "color: " + r + "; font-size: .85rem; " + e, "color: " + d + " font-size: .7rem; margin-left: 55%;");
            else if ("number" == typeof r)
                if ("light" == this.theme || 1 == this.theme) switch (r) {
                    case 0:
                        console.log("%c" + t + "%c\n" + o + " %c\n " + n, "border: 1px solid tomato; padding: 3px 5px; margin-bottom: 4px; font-weight: bolder; font-size: 10px; border-radius: 3px; color: orangered;", "font-size: .85rem; " + e, "color: " + d + " font-size: .7rem; margin-left: 55%;");
                        break;
                    case 1:
                        console.log("%c" + t + "%c\n" + o + " %c\n " + n, "border: 1px solid tomato; padding: 3px 5px; margin-bottom: 4px; font-weight: bolder; font-size: 10px; border-radius: 3px; color: orangered;", "color: orangered; font-size: .85rem; " + e, "color: " + d + " font-size: .7rem; margin-left: 55%;");
                        break;
                    case 2:
                        console.log("%c" + t + "%c\n" + o + " %c\n " + n, "border: 1px solid tomato; padding: 3px 5px; margin-bottom: 4px; font-weight: bolder; font-size: 10px; border-radius: 3px; color: orangered;", "color: darkorange; font-size: .85rem; " + e, "color: " + d + " font-size: .7rem; margin-left: 55%;");
                        break;
                    case 3:
                        console.log("%c" + t + "%c\n" + o + " %c\n " + n, "border: 1px solid tomato; padding: 3px 5px; margin-bottom: 4px; font-weight: bolder; font-size: 10px; border-radius: 3px; color: orangered;", "color: tomato; font-size: .85rem; " + e, "color: " + d + " font-size: .7rem; margin-left: 55%;");
                        break;
                    case 4:
                        console.log("%c" + t + "%c\n" + o + " %c\n " + n, "border: 1px solid tomato; padding: 3px 5px; margin-bottom: 4px; font-weight: bolder; font-size: 10px; border-radius: 3px; color: orangered;", "color: darkgreen; font-size: .85rem; " + e, "color: " + d + " font-size: .7rem; margin-left: 55%;");
                        break;
                    case 5:
                        console.log("%c" + t + "%c\n" + o + " %c\n " + n, "border: 1px solid tomato; padding: 3px 5px; margin-bottom: 4px; font-weight: bolder; font-size: 10px; border-radius: 3px; color: orangered;", "color: cadetblue; font-size: .85rem; " + e, "color: " + d + " font-size: .7rem; margin-left: 55%;");
                        break;
                    case 6:
                        console.log("%c" + t + "%c\n" + o + " %c\n " + n, "border: 1px solid tomato; padding: 3px 5px; margin-bottom: 4px; font-weight: bolder; font-size: 10px; border-radius: 3px; color: orangered;", "color: darkviolet; font-size: .85rem; " + e, "color: " + d + " font-size: .7rem; margin-left: 55%;");
                        break;
                    case 7:
                        console.log("%c" + t + "%c\n" + o + " %c\n " + n, "border: 1px solid tomato; padding: 3px 5px; margin-bottom: 4px; font-weight: bolder; font-size: 10px; border-radius: 3px; color: orangered;", "color: slateblue; font-size: .85rem; " + e, "color: " + d + " font-size: .7rem; margin-left: 55%;");
                        break;
                    case 8:
                        console.log("%c" + t + "%c\n" + o + " %c\n " + n, "border: 1px solid tomato; padding: 3px 5px; margin-bottom: 4px; font-weight: bolder; font-size: 10px; border-radius: 3px; color: orangered;", "color: olive; font-size: .85rem; " + e, "color: " + d + " font-size: .7rem; margin-left: 55%;");
                        break;
                    case 9:
                        console.log("%c" + t + "%c\n" + o + " %c\n " + n, "border: 1px solid tomato; padding: 3px 5px; margin-bottom: 4px; font-weight: bolder; font-size: 10px; border-radius: 3px; color: orangered;", "color: fuchsia; font-size: .85rem; " + e, "color: " + d + " font-size: .7rem; margin-left: 55%;");
                        break;
                    case 10:
                        console.log("%c" + t + "%c\n" + o + " %c\n " + n, "border: 1px solid tomato; padding: 3px 5px; margin-bottom: 4px; font-weight: bolder; font-size: 10px; border-radius: 3px; color: orangered;", "color: darkcyan; font-size: .85rem; " + e, "color: #555; font-size: .7rem; margin-left: 55%; font-weight: bold;")
                } else switch (r) {
                    case 0:
                        console.log("%c" + t + "%c\n" + o + " %c\n " + n, "border: 1px solid tomato; padding: 3px 5px; margin-bottom: 4px; font-weight: bolder; font-size: 10px; border-radius: 3px; color: gold;", "font-size: .85rem; " + e, "color: " + d + " font-size: .7rem; margin-left: 55%;");
                        break;
                    case 1:
                        console.log("%c" + t + "%c\n" + o + " %c\n " + n, "border: 1px solid tomato; padding: 3px 5px; margin-bottom: 4px; font-weight: bolder; font-size: 10px; border-radius: 3px; color: gold;", "color: yellow; font-size: .85rem; " + e, "color: " + d + " font-size: .7rem; margin-left: 55%;");
                        break;
                    case 2:
                        console.log("%c" + t + "%c\n" + o + " %c\n " + n, "border: 1px solid tomato; padding: 3px 5px; margin-bottom: 4px; font-weight: bolder; font-size: 10px; border-radius: 3px; color: gold;", "color: cyan; font-size: .85rem; " + e, "color: " + d + " font-size: .7rem; margin-left: 55%;");
                        break;
                    case 3:
                        console.log("%c" + t + "%c\n" + o + " %c\n " + n, "border: 1px solid tomato; padding: 3px 5px; margin-bottom: 4px; font-weight: bolder; font-size: 10px; border-radius: 3px; color: gold;", "color: tomato; font-size: .85rem; " + e, "color: " + d + " font-size: .7rem; margin-left: 55%;");
                        break;
                    case 4:
                        console.log("%c" + t + "%c\n" + o + " %c\n " + n, "border: 1px solid tomato; padding: 3px 5px; margin-bottom: 4px; font-weight: bolder; font-size: 10px; border-radius: 3px; color: gold;", "color: mediumspringgreen; font-size: .85rem; " + e, "color: " + d + " font-size: .7rem; margin-left: 55%;");
                        break;
                    case 5:
                        console.log("%c" + t + "%c\n" + o + " %c\n " + n, "border: 1px solid tomato; padding: 3px 5px; margin-bottom: 4px; font-weight: bolder; font-size: 10px; border-radius: 3px; color: gold;", "color: lightskyblue; font-size: .85rem; " + e, "color: " + d + " font-size: .7rem; margin-left: 55%;");
                        break;
                    case 6:
                        console.log("%c" + t + "%c\n" + o + " %c\n " + n, "border: 1px solid tomato; padding: 3px 5px; margin-bottom: 4px; font-weight: bolder; font-size: 10px; border-radius: 3px; color: gold;", "color: magenta; font-size: .85rem; " + e, "color: " + d + " font-size: .7rem; margin-left: 55%;");
                        break;
                    case 7:
                        console.log("%c" + t + "%c\n" + o + " %c\n " + n, "border: 1px solid tomato; padding: 3px 5px; margin-bottom: 4px; font-weight: bolder; font-size: 10px; border-radius: 3px; color: gold;", "color: violet; font-size: .85rem; " + e, "color: " + d + " font-size: .7rem; margin-left: 55%;");
                        break;
                    case 8:
                        console.log("%c" + t + "%c\n" + o + " %c\n " + n, "border: 1px solid tomato; padding: 3px 5px; margin-bottom: 4px; font-weight: bolder; font-size: 10px; border-radius: 3px; color: gold;", "color: powderblue; font-size: .85rem; " + e, "color: " + d + " font-size: .7rem; margin-left: 55%;");
                        break;
                    case 9:
                        console.log("%c" + t + "%c\n" + o + " %c\n " + n, "border: 1px solid tomato; padding: 3px 5px; margin-bottom: 4px; font-weight: bolder; font-size: 10px; border-radius: 3px; color: gold;", "color: pink; font-size: .85rem; " + e, "color: " + d + " font-size: .7rem; margin-left: 55%;");
                        break;
                    case 10:
                        console.log("%c" + t + "%c\n" + o + " %c\n " + n, "border: 1px solid tomato; padding: 3px 5px; margin-bottom: 4px; font-weight: bolder; font-size: 10px; border-radius: 3px; color: gold;", "color: greenyellow; font-size: .85rem; " + e, "color: " + d + " font-size: .7rem; margin-left: 55%;")
                } else "object" == typeof r ? "light" == this.theme || 1 === this.theme ? (r = {
                    color: "#222",
                    fontSize: r.fontSize,
                    backgroundColor: r.backgroundColor,
                    border: r.border
                }, console.log("%c" + t + "%c\n" + o + "%c\n " + n, "border: 1px solid tomato; padding: 3px 5px; margin-bottom: 4px; font-weight: bolder; font-size: 10px; border-radius: 3px; color: orangered;", "color: " + r.color + "; font-size: " + r.fontSize + "; background-color: " + r.backgroundColor + "; border: " + r.border + "; " + e, "color: " + d + " font-size: .7rem; margin-left: 55%;")) : console.log("%c" + t + "%c\n" + o + "%c\n " + n, "border: 1px solid tomato; padding: 3px 5px; margin-bottom: 4px; font-weight: bolder; font-size: 10px; border-radius: 3px; color: gold;", "color: " + r.color + "; font-size: " + r.fontSize + "; background-color: " + r.backgroundColor + "; border: " + r.border + "; " + e, "color: " + d + " font-size: .7rem; margin-left: 55%;") : !1 === r && console.log(o)
        }
    }
}