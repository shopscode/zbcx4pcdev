"use strict";

function loop(e) {
	var t = $(".content." + e),
		o = t.find(".hoverable");
	timer[e] = setInterval(function() {
		var e = t.find(".hoverable.active").index(),
			n = ++e === o.length ? 0 : e;
		o.removeClass("active"), o.eq(n).addClass("active")
	}, 2500)
}
function setPageLoop(e) {
	setHover(e), loop(e)
}
function onControlerClick(e) {
	$(".tab__controler .btn").each(function(e, t) {
		$(t).removeClass("active"), $(".tab__content > .content").eq(e).css("display", "none")
	}), $(".tab__controler").find("." + e).addClass("active"), $(".tab__content ." + e).css("display", "block")
}
function setHover(e) {
	var t = $("." + e + " .img__container .hoverable");
	t.hover(function() {
		timer[e] && clearInterval(timer[e]), t.removeClass("active"), $(this).addClass("active")
	}, function() {
		loop(e)
	})
}
$(function() {
	$(".preview").click(function() {
		var e = $(this).attr("data-src");
		$("#source").attr("src", e), $("#video-container").css("opacity", 1).css("display", "flex"), document.getElementById("videoone").load(), document.getElementById("videoone").play()
	}), $("#closeVideo").click(function() {
		document.getElementById("videoone").pause(), $("#video-container").css("opacity", 0), setTimeout(function() {
			$("#video-container").css("display", " none")
		}, 500)
	}), setPageLoop("bike"), setPageLoop("ebike"), setPageLoop("car"), setPageLoop("scenic-bike"), setPageLoop("electrombile"), $(".tab__content > .content.bike").css("display", " block"), $("#Glide").glide({
		type: "carousel"
	}), $(".glide__slide.clickAble").click(function() {
		window.location.href = "./business.html"
	})
});
var timer = {};
