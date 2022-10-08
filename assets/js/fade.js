$(".button").each(function (index) {
	let button = $(this);

	setTimeout(function () {
		button.addClass("fade-in");
	}, 100 * index);
});