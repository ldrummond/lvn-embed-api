const path = require("path");

module.exports = {
  entry: "./lib/index.js",
  output: {
    filename: "lvn_embed_api.js",
    path: path.resolve(__dirname, "dist"),
  },
};
