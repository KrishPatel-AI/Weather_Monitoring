const districtData = {
  Mehsana: Array.from({ length: 26 }, (_, i) => {
    const year = 2000 + i;

    return {
      year,

      rainfall: Math.floor(750 + Math.random() * 150),

      temperature: Math.floor(28 + Math.random() * 8),

      humidity: Math.floor(55 + Math.random() * 10),
    };
  }),

  Patan: Array.from({ length: 26 }, (_, i) => {
    const year = 2000 + i;

    return {
      year,

      rainfall: Math.floor(700 + Math.random() * 120),

      temperature: Math.floor(27 + Math.random() * 7),

      humidity: Math.floor(60 + Math.random() * 8),
    };
  }),

  Ahmedabad: Array.from({ length: 26 }, (_, i) => {
    const year = 2000 + i;

    return {
      year,

      rainfall: Math.floor(800 + Math.random() * 150),

      temperature: Math.floor(30 + Math.random() * 7),

      humidity: Math.floor(50 + Math.random() * 10),
    };
  }),

  Gandhinagar: Array.from({ length: 26 }, (_, i) => {
    const year = 2000 + i;

    return {
      year,

      rainfall: Math.floor(750 + Math.random() * 130),

      temperature: Math.floor(29 + Math.random() * 7),

      humidity: Math.floor(58 + Math.random() * 7),
    };
  }),
};

export default districtData;
