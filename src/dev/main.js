new Splide(".splide", {
  gap: "6rem",
  padding: {
    left: "10rem",
    right: "10rem",
  },
  // cover: true,
  type: "loop",
  height: "40rem",
  // fixedWidth: "500px",
  focus: "center",
  perPage: 3,
  rewind: true,
  autoplay: true,
  interval: 10000,
  pauseOnHover: true,
  pauseOnFocus: true,
  resetProgress: true,
  drag: true,
  flickMaxPages: 1,

  breakpoints: {
    1520: {
      perPage: 2,
    },
    900: {
      perPage: 1,
    },
    480: {
      gap: "2rem",
      padding: {
        left: "4rem",
        right: "4rem",
      },
      fixedWidth: "400px",
    },
    380: {
      fixedWidth: "340px",
    },
		360: {
			fixedWidth: "320px",
		},
		340: {
			fixedWidth: "300px",
		},
  },
}).mount();
