/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        gray: {
          "100": "#807a7a",
          "200": "#1d243e",
          "300": "#1c233d",
          "400": "#141736",
          "500": "#060518",
          "600": "rgba(0, 0, 0, 0.3)",
          "700": "rgba(255, 255, 255, 0.5)",
          "800": "rgba(0, 0, 0, 0.5)",
          "900": "rgba(255, 255, 255, 0.8)",
        },
        dimgray: {
          "100": "#575e73",
          "200": "#545c71",
        },
        "background-dropdown-background-color": "#fff",
        fuchsia: "#fa24fa",
        darkslategray: {
          "100": "#30384d",
          "200": "#343434",
          "300": "#1e2b4b",
        },
        butt3: "#e5e5e5",
        lightsteelblue: "rgba(191, 196, 238, 0.1)",
        "controls-divider-color-20": "#e1e3e7",
        "text-color-100": "#070707",
        "text-color-60": "#737373",
        "controls-secondary-control-color-60": "#2563eb",
        "controls-neutral-control-layer-color-60": "#5a6689",
        "controls-neutral-control-color-40": "#f2f3f5",
        "controls-neutral-control-color-70": "#dbdde5",
        blueviolet: {
          "100": "#9747ff",
          "200": "#3f38dd",
        },
        silver: "#c4c4c4",
        mediumorchid: {
          "100": "#bf68e2",
          "200": "#b769da",
          "300": "#ab4dcc",
          "400": "#9e4fc2",
        },
        black: "#000",
        ghostwhite: "#f6f7fb",
        darkgray: {
          "100": "#989aa6",
          "200": "rgba(178, 178, 178, 0.5)",
        },
        gainsboro: {
          "100": "#e6e6e6",
          "200": "rgba(230, 230, 230, 0.09)",
        },
        "color-primary-blue": "#c367e6",
        "color-typography-title": "#120d26",
        "text-2nd-lightest": "#ddddde",
        "gray-4": "#bdbdbd",
      },
      spacing: {},
      fontFamily: {
        "space-grotesk": "'Space Grotesk'",
        poppins: "Poppins",
        "dm-mono": "'DM Mono'",
        inter: "Inter",
        mini: "'Product Sans'",
        "open-sans": "'Open Sans'",
      },
      borderRadius: {
        "8xs": "5px",
        "3xs": "10px",
        "6xs-1": "6.1px",
        "mini-9": "14.9px",
        "xs-2": "11.2px",
        "11xl": "30px",
        xl: "20px",
        "81xl": "100px",
        mini: "15px",
        sm: "14px",
        "19xl": "38px",
        "8xs-3": "4.3px",
      },
    },
    fontSize: {
      sm: "14px",
      base: "16px",
      xl: "20px",
      smi: "13px",
      "8xl-4": "27.4px",
      "3xl": "22px",
      xs: "12px",
      lg: "18px",
      "3xs": "10px",
      "5xs": "8px",
      "17xl": "36px",
      "10xl": "29px",
      "41xl": "60px",
      "29xl": "48px",
      "2xl-2": "21.2px",
      mid: "17px",
      "base-7": "16.7px",
      "7xl-1": "26.1px",
      "2xl": "21px",
      "10xl-9": "29.9px",
      "5xl": "24px",
      "14xl-6": "33.6px",
      "8xl": "27px",
      "11xl": "30px",
      "7xl": "26px",
      mini: "15px",
      "6xl": "25px",
      inherit: "inherit",
    },
    screens: {
      mq1125: {
        raw: "screen and (max-width: 1125px)",
      },
      mq1025: {
        raw: "screen and (max-width: 1025px)",
      },
      mq900: {
        raw: "screen and (max-width: 900px)",
      },
      mq750: {
        raw: "screen and (max-width: 750px)",
      },
      mq700: {
        raw: "screen and (max-width: 700px)",
      },
      mq450: {
        raw: "screen and (max-width: 450px)",
      },
    },
  },
  corePlugins: {
    preflight: false,
  },
};
