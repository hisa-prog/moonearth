const defaultTheme = require("tailwindcss/defaultTheme");
module.exports = {
  purge: ["./pages/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}"],
  content: [],
  theme: {
    extend: {
      fontFamily: {
        poppins: "Poppins",
        raitor: "Raitor",
        prompt: "Prompt",
      },
      fontSize: {
        "thin-m": ["0.625rem", "0.75rem"], //['10px', '12px']
        "thin-m-l": ["0.6875rem", "0.875rem"], //['11px', '14px']
        "thin-l": ["0.75rem", "1rem"], //['12px', '16px']
        "thin-lg": ["0.8125rem", "1.25rem"], //['13px', '20px']
        "xs-h": ["0.875rem", "1rem"], //['14px', '16px']
        "xs-md": ["0.875rem", "1.125rem"], //['14px', '18px']
        "xs-xl": ["0.875rem", "1.25rem"], //['14px', '20px']
        "xs-xl-l": ["0.9375rem", "1.25rem"], //['15px', '20px']
        "lg-xs": ["1rem", "1.5rem"], //['16px', '24px']
        "lg-xs-s": ["1rem", "1.25rem"], //['16px', '20px']
        "lg-s": ["1.125rem", "1.25rem"], //['18px', '20px']
        "lg-md": ["1.125rem", "1.5rem"], //['18px', '24px']
        "lg-l": ["1.125rem", "1.75rem"], //['18px', '28px']
        "base-m": ["1rem", "1.125rem"], //['16px', '18px']
        "7xl-h": ["4.5rem", "5.375rem"], //['72px', '86px']
        "6xl-h": ["4rem", "4.75rem"], //['64px', '76px']
        "6xl-l": ["4.25rem", "4.5rem"], //['68px', '72px']
        "3xl-s": ["1.875rem", "2.5rem"], //['32px', '40px']
        "3xl-h": ["2rem", "2.5rem"], //['32px', '40px']
        "4xl-h": ["2.25rem", "3.375rem"], //['36px', '54px']
        "4xl-m": ["2.5rem", "3rem"], //['40px', '48px']
        "4xl-md": ["2.6875rem", "3.25rem"], //['43px', '52px']
        "4xl-md-s": ["2.5rem", "2.625rem"], //['40px', '42px']
        "4xl-md-m": ["2.5rem", "2.75rem"], //['40px', '44px']
        "4xl-md-l": ["2.5rem", "3rem"], //['40px', '48px']
        "4xl-l": ["3rem", "3.75rem"], //['48px', '60px']
        "2xl-h": ["1.5rem", "1.75rem"], //['24px', '28px']
        "2xl-l": ["1.5rem", "2.25rem"], //['24px', '36px']
        "2xl-xs": ["1.75rem", "2rem"], //['28px', '32px']
        "2xl-s": ["1.75rem", "2.625rem"], //['28px', '42px']
        "2xl-sm": ["1.75rem", "2.375rem"], //['28px', '38px']
        "2xl-m": ["1.375rem", "1.75rem"], //['22px', '28px']
        "2xl-m-l": ["1.375rem", "2rem"], //['22px', '32px']
        "2xl-md": ["1.5rem", "2rem"], //['24px', '32px']
        "xl-m": ["1.25rem", "1.375rem"], //['20px', '22px']
        "xl-md": ["1.25rem", "1.5rem"], //['20px', '24px']
        numbers: ["3.5rem", "5.75rem"], //['56px', '92px']
        "numbers-md": ["2.625rem", "2.75rem"], //['42px', '44px']
      },
      maxWidth: {
        mobile: "375px",
        "8xl": "1440px",
        "13xl": "1920px",
      },
      height: {
        footer: "100px",
        planet: "100px",
        planetCard: "30rem",
        roadMapCard: "31rem",
      },
      width: {
        footer: "100px",
        planet: "100px",
      },
      colors: {
        "line-gray-1": "rgba(255, 255, 255, 0.2)",
        "line-gray": "rgba(255, 255, 255, 0.3)",
        "line-gray-3": "rgba(255, 255, 255, 0.6)",
        "button-default": "#F8C07F",
        "button-hover": "#BB8A52",
        "button-active": "#BB8A52",
        footer: "#312C2C",
        "feature-card": "#201C1B",
        "bg-mobile": "#000000",
        completed: "#62A8CF",
        "coming-soon": "#EDC9A0",
        "header-fixed": "#3C3636",
        grayBg: "#1D1D1D",
        "overlay-gray": "rgba(13, 12, 12, 0.8)",
        nftCard: "#151515",
        nftCardBorder: "#4F4F4F",
      },
      backgroundImage: {
        mainScreen: "url('/images/mobileMain.webp')",
        bgLinearGradient:
          "linear-gradient(178.17deg, rgba(130, 114, 96, 0.3) 1.97%, rgba(111, 100, 88, 0.3) 48.04%, rgba(81, 78, 74, 0.3) 97.59%)",
        bgLinearGradientSlide:
          "linear-gradient(311.17deg, #1D1D1D -10.33%, rgba(255, 255, 255, 0.08) -10.32%, rgba(129, 129, 129, 0.11) 103%)",
        LinearGradientNFTCard:
          "linear-gradient(153.67deg, rgba(255, 255, 255, 0.06) 48.68%, rgba(255, 255, 255, 0) 137.52%)",
        bgSlideModal: "linear-gradient(107.75deg, #171717 0%, #2D2D2D 100%)",
        space: "url('/images/bg-new.webp')",
      },
      borderRadius: {
        "30px": "30px",
        "20px": "20px",
      },
      gridTemplateColumns: {
        "2-44/56": "44% 56%",
        "2-40/60": "40% 60%",
      },
      blur: {
        "153px": "153px",
        "62px": "62px",
        "6px": "6px",
      },
      transitionDuration: {
        800: "800ms",
      },
      letterSpacing: {
        "06em": "0.06em",
        "02em": "0.2em",
      },
      boxShadow: {
        characters: "0 15px 64px 85px rgb(0 0 0)",
      },
    },
    screens: {
      ms: "360px",
      mm: "375px",
      ml: "425px",
      sm: "640px",
      md: "768px",
      lg: "1024px",
      "1lg": "1140px",
      xl: "1280px",
      "1xl": "1320px",
      xxl: "1440px",
      "2xl": "1536px",
      "2xl-s": "1700px",
      "3xl": "1920px",
      "4xl-s": "1980px",
      "4xl": "2200px",
      "5xl": "2500px",
      "min-h-640": { raw: "(min-height: 640px)" },
      ...defaultTheme.screens,
    },
  },
  variants: {
    extend: {
      textDecoration: ["active", "focus"],
      fill: ["hover", "focus", "active"],
      backgroundColor: ["group-focus"],
      visibility: ["hover", "focus", "group-hover"],
    },
  },
  plugins: [],
};
