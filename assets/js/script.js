$(".button").each(function (index) {
	let button = $(this);

	setTimeout(function () {
		button.addClass("fade-in");
	}, 100 * index);
});

setTimeout(function () {
	$("#medium-articles").addClass("fade-in");
}, 600);

$(document).ready(function () {
	addArticles();
});

async function addArticles() {
	await $.getJSON(
		"https://api.rss2json.com/v1/api.json?rss_url=https://medium.com/feed/@noahdigesu",
		function (data) {
			let items = data.items;
			for (let i = 0; i < items.length; ++i) {
				$("#medium-articles ul").append(
					"<li>" +
						`<a href='${items[i].link}' class='button long' target='_blank'` +
						`>${items[i].title}</a>` +
						"</li>"
				);
			}
		}
	).catch(function () {
		setTimeout(function () {
			$("#medium-articles").append(
				"<div class='alert error fade-in'><p>Couldn't load articles ! 😞</p><p id='try-again'>Try again</p></div>"
			);
		}, 2500);
	});
	fadeInArticles();
}

function fadeInArticles() {
	setTimeout(function () {
		$("#medium-articles ul li a").each(function (index) {
			let button = $(this);

			setTimeout(function () {
				button.addClass("fade-in");
			}, 100 * index);
		});
	}, 500);
}

$(document).on("click", "#try-again", function () {
	location.reload();
});
