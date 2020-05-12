// ==UserScript==
// @name         【哈工大深圳】自动填写每日体温检查表
// @namespace    https://github.com/phantomseeds/-TemperMonkey-autofillform
// @version      0.1
// @description  别问，问就是懒
// @author       exuper
// @include      *://www.wjx.cn*
// @grant        none
// ==/UserScript==

document.getElementById("q1_1").click()
document.getElementById("q2").value="学号";
document.getElementById("q3").value="姓名";
document.getElementById("q4").value=36+Math.round(10*Math.random())/10;
// 焦点落在输入框，防止右侧进度条未满
document.getElementById("q2").focus()
document.getElementById("q3").focus()
document.getElementById("q4").focus()
document.getElementById("q2").focus()

var id, quest, i
for (i = 5; i < 15; i++){
    id = "div" + String(i)
    quest = "q" + String(i) + "_2"
    if (document.getElementById(id).style.display != "none") {
		document.getElementById(quest).click();
	}
}

// 提交
//document.getElementById("submit_button").click()