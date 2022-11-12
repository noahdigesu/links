let mm = new MagnetMouse({
	magnet: {
		element: ".magnet" /* Element to magnet */,
		class: "magnet-mouse-active" /* Adds a class when the magnet effect begins */,
		enabled: true /* Enables the magnet effect */,
		distance: 10 /* Distance (in px) when the magnet effect around element activates */,
		position:
			"center" /* Position of mouse relative to the element when magnet effect is active */,
	},
	// follow: {
	// 	element: ".follow-mouse" /* Element that follows the mouse */,
	// 	class: "follow-mouse-active" /* Add class to element that follows the mouse when enter in the magnet effect */,
	// },
	throttle: 10 /* Time (in ms) between each eventListener calls */,
	inCallback: null /* Callback when mouse enters in the magnet effect */,
	outCallback: null /* Callback when mouse leaves in the magnet effect */,
});


mm.init();