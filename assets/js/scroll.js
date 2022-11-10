// Scroll progress
window.onscroll = function () {
	if (window.matchMedia("(max-width: 640px)").matches) {
		updateScrollProgressMobile();
	} else {
		updateScrollProgressDesktop();
	}
};

function updateScrollProgressDesktop() {
	var winScroll =
		document.body.scrollLeft || document.documentElement.scrollLeft;
	var width =
		document.documentElement.scrollWidth -
		document.documentElement.clientWidth;
	var scrolled = (winScroll / width) * 100;
	document.getElementById("myBar").style.width = scrolled + "%";
}

function updateScrollProgressMobile() {
	var winScroll =
		document.body.scrollTop || document.documentElement.scrollTop;
	var height =
		document.documentElement.scrollHeight -
		document.documentElement.clientHeight;
	var scrolled = (winScroll / height) * 100;
	document.getElementById("myBar").style.width = scrolled + "%";
}