module.exports = function (api) {
  api.cache(true);
  return {
    presets: ["babel-preset-expo"],
    plugins: [
      "nativewind/babel",
      "react-native-reanimated/plugin",
      [
        "module-resolver",
        {
          extensions: [".ios.js", ".android.js", ".js", ".ts", ".tsx", ".json"],
          alias: {
            components: "./src/components",
            assets: "./assets",
            screens: "./src/screens",
            utils: "./src/utils",
          },
        },
      ],
    ],
  };
};
