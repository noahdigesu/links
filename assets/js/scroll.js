// Scroll progress
window.onscroll = function () {
	updateScrollProgress();
};

function updateScrollProgress() {
	var winScroll =
		document.body.scrollLeft || document.documentElement.scrollLeft;
	var width =
		document.documentElement.scrollWidth -
		document.documentElement.clientWidth;
	var scrolled = (winScroll / width) * 100;
	document.getElementById("myBar").style.width = scrolled + "%";
}

// Horizontal scroll
const stop = HorizontalScroll();