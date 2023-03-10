module.exports = function (api) {
  api.cache(true);
  return {
    presets: ["babel-preset-expo"],
    plugins: [
      [
        "module-resolver",
        {
          extensions: [
            ".js",
            ".jsx",
            ".ts",
            ".tsx",
            ".android.js",
            ".android.tsx",
            ".ios.js",
            ".ios.tsx",
            ".svg",
            ".png",
          ],
          root: ["./"],
          alias: {
            assets: "./src/assets",
            screens: "./src/screens",
            navigation: "./src/navigation",
            components: "./src/components",
          },
        },
      ],
    ],
  };
};
