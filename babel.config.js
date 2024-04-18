module.exports = {
  presets: [
    "@babel/preset-react",
    "@babel/preset-env",
    "@babel/preset-typescript",
  ],
  plugins: [
    [
      "module-resolver",
      {
        root: ["./src"],
        extensions: [".ts", ".tsx", ".jsx", ".js", ".json"],
        alias: {
          "@": "./src",
          "@components": "./src/components",
          "@pages": "./src/pages",
          "@assets": "./src/assets",
        },
      },
    ],
  ],
};
