// import path from "node:path"
const path = require("node:path");
// Requried to fix Swiper CSS imports during jest executions, it transforms imports into filenames
module.exports = {
  process(sourceText, sourcePath, options) {
    return {
      code: `module.exports = ${JSON.stringify(path.basename(sourcePath))};`,
    };
  },
};
