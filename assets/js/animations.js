const cards = document.querySelectorAll(".card");

[...cards].forEach(function (card, i) {
    setTimeout(function () {
        card.classList.add("slide-in-top");
    }, i * 200);
});