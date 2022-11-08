const cards = document.querySelectorAll(".card");
let magicLines = document.querySelectorAll(".magic-line");
magicLines = [...magicLines];

[...cards].forEach(function (card, i) {
	setTimeout(function () {
		card.classList.add("slide-in-top");
	}, i * 500);
    setTimeout(function () {
        magicLines[i].classList.add("disappear");
    }, i * 500 + 1500);
});
