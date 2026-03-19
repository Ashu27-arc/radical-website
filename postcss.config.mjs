import purgecss from "@fullhuman/postcss-purgecss";

const config = {
  plugins: {
    "@tailwindcss/postcss": {},
  },
};

if (process.env.NODE_ENV === "production") {
  config.plugins["@fullhuman/postcss-purgecss"] = purgecss({
    content: [
      "./app/**/*.{js,ts,jsx,tsx}",
      "./pages/**/*.{js,ts,jsx,tsx}",
      "./components/**/*.{js,ts,jsx,tsx}",
    ],
    defaultExtractor: (content) =>
      content.match(/[\w-/:]+(?<!:)/g) || [],
    safelist: ["active", "show", "open"],
  });
}

export default config;