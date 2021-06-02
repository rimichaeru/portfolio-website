new Splide( ".splide", {
	gap: "6rem",
	padding: {
		left: "10rem",
		right: "10rem"
	},
	// cover: true,
	type: "loop",
	height: "40rem",
	// fixedWidth: "500px", 
	focus: "center",
	perPage: 3,
	rewind : true,
	autoplay: true,
	interval: 10000,
	pauseOnHover: true,
	pauseOnFocus: true,
	resetProgress: true,
	drag: true,
	flickMaxPages: 1,

}  ).mount();

