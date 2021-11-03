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

if (
	!/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(
		navigator.userAgent
	)
) {
	var pupil = document.getElementsByClassName("eye-container");
	document.onmousemove = function () {
		//get horizontal and vertical position of mouse
		var x = (event.clientX * 200) / window.innerWidth;
		var y = (event.clientY * 200) / window.innerHeight;

		if (y <= 85 && y >= 15 && x <= 85 && x >= 15) {
			for (var i = 0; i < 2; i++) {
				pupil[i].style.left = `${x}%`;
				pupil[i].style.top = `${y}%`;
				pupil[i].style.transform = `translate3D(-${x}%, -${y}%, 0)`;
			}
		} else if (y > 85) {
			for (var i = 0; i < 2; i++) {
				pupil[i].style.left = `${x}%`;
				pupil[i].style.top = `85%`;
				pupil[i].style.transform = `translate3D(-${x}%, -85%, 0)`;
			}
		} else if (y < 15) {
			for (var i = 0; i < 2; i++) {
				pupil[i].style.left = `${x}%`;
				pupil[i].style.top = `15%`;
				pupil[i].style.transform = `translate3D(-${x}%, -15%, 0)`;
			}
		} else if (x > 75) {
			for (var i = 0; i < 2; i++) {
				pupil[i].style.left = `75%`;
				pupil[i].style.top = `${y}%`;
				pupil[i].style.transform = `translate3D(-75%, -${y}%, 0)`;
			}
		} else if (x < 25) {
			for (var i = 0; i < 2; i++) {
				pupil[i].style.left = `25%`;
				pupil[i].style.top = `${y}%`;
				pupil[i].style.transform = `translate3D(-25%, -${y}%, 0)`;
			}
		}
	};
}
