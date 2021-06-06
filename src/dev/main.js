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
      fixedWidth: "420px",
    },
    420: {
      gap: "2rem",
      padding: {
        left: "4rem",
        right: "4rem",
      },
      fixedWidth: "360px",
    },
    380: {
      fixedWidth: "330px",
    },
		360: {
			fixedWidth: "310px",
		},
		340: {
			fixedWidth: "290px",
		},
  },
}).mount();
