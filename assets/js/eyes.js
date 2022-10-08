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
