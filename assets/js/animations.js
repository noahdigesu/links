// Cards
const cards = document.querySelectorAll(".card");
const magicLines = document.querySelectorAll(".magic-line");

[...magicLines].forEach(function (line, i) {
    setTimeout(function () {
		line.classList.add("appear");
	}, i * 500);
});

[...cards].forEach(function (card, i) {
	setTimeout(function () {
		card.classList.add("slide-in-top");
	}, i * 500 + 500);

	setTimeout(function () {
		[...magicLines][i].style.right = 0;
		[...magicLines][i].classList.add("disappear");
	}, i * 500 + 500 + 1500);
});

// Marquee

const marquee = document.querySelector(".marquee");

setTimeout(() => {
	marquee.style.animationPlayState = "running";
}, 500 + 500 + 1500 + [...cards].length);

const marqueeLetters = document.querySelectorAll(".marquee svg path");

[...marqueeLetters].forEach(function (letter, i) {
	setTimeout(function () {
		letter.classList.add("stroke-in");
	}, i * 300);
});