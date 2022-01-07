$(document).ready(function () {
	checkForDevice();
	fadeInButtons()
	fadeInTitles();
	getArticlesFromAPI();
});

function fadeInButtons() {
	$(".button").each(function (index) {
		let button = $(this);

		setTimeout(function () {
			button.addClass("fade-in");
		}, 100 * index);
	});
}

function fadeInTitles() {
	setTimeout(function () {
		$("#medium-articles").addClass("fade-in");
	}, 600);
}

function getArticlesFromAPI() {
	axios.get("https://api.rss2json.com/v1/api.json?rss_url=https://medium.com/feed/@noahdigesu")
		.then((response) => {
			let items = response.data.items;

			if (items.length !== 0) {
				for (let i = 0; i < items.length; ++i) {
					$("#medium-articles ul").append(
						"<li>" +
							`<a href='${items[i].link}' class='button long' target='_blank'` +
							`>${items[i].title}</a>` +
						"</li>"
					);
				}
			} else {
				$("#medium-articles").append(
					"<div class='alert error fade-in'><p>No articles found ! 😬</p><p id='try-again' onclick='javascript:window.location.reload()'>Try again</p></div>"
				);
			}

			fadeInArticles()
		})
		.catch(() => {
			$("#medium-articles").append(
				"<div class='alert error fade-in'><p>Error trying to fetch articles 😞</p><p id='try-again' onclick='javascript:window.location.reload()'>Try again</p></div>"
			);
		});
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

function checkForDevice() {
	if (
		!/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(
			navigator.userAgent
		)
	) {
		let pupil = document.getElementsByClassName("eye-container");
		document.onmousemove = function () {
			//get horizontal and vertical position of mouse
			let x = (event.clientX * 200) / window.innerWidth;
			let y = (event.clientY * 200) / window.innerHeight;

			if (y <= 85 && y >= 15 && x <= 85 && x >= 15) {
				for (let i = 0; i < 2; i++) {
					pupil[i].style.left = `${x}%`;
					pupil[i].style.top = `${y}%`;
					pupil[i].style.transform = `translate3D(-${x}%, -${y}%, 0)`;
				}
			} else if (y > 85) {
				for (let i = 0; i < 2; i++) {
					pupil[i].style.left = `${x}%`;
					pupil[i].style.top = `85%`;
					pupil[i].style.transform = `translate3D(-${x}%, -85%, 0)`;
				}
			} else if (y < 15) {
				for (let i = 0; i < 2; i++) {
					pupil[i].style.left = `${x}%`;
					pupil[i].style.top = `15%`;
					pupil[i].style.transform = `translate3D(-${x}%, -15%, 0)`;
				}
			} else if (x > 75) {
				for (let i = 0; i < 2; i++) {
					pupil[i].style.left = `75%`;
					pupil[i].style.top = `${y}%`;
					pupil[i].style.transform = `translate3D(-75%, -${y}%, 0)`;
				}
			} else if (x < 25) {
				for (let i = 0; i < 2; i++) {
					pupil[i].style.left = `25%`;
					pupil[i].style.top = `${y}%`;
					pupil[i].style.transform = `translate3D(-25%, -${y}%, 0)`;
				}
			}
		};
	}
}