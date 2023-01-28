/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    container: {
      center: true,
      padding: "1rem",
    },
    // Edit screen sizes
    screens: {
      sm: "576px",
      md: "768px",
      lg: "992px",
      xl: "1200px",
    },
    extend: {
      fontSize: {
        'body': '1.05em',
        'h1': '3.052em',
        'h2': '2.441em',
        'h3': '1.953em',
        'h4': '1.563em',
        'h5': '1.25em',
        'button': '1.155em',
        'small': '0.85rem',
        'small2x': '0.75rem',
      },
    },
  },
  plugins: [],
};
