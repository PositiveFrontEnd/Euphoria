module.exports = {
  testEnvironment: "jsdom",
  moduleNameMapper: {
    "^.+\\.(css|less|scss)$": "identity-obj-proxy",
    "\\.(svg)$": "<rootDir>/src/tests/__mocks__/svgMock.js",
    "swiper/css": "<rootDir>/node_modules/swiper/swiper.min.css",
  },
  transform: {
    "^.+\\.(ts|js|jsx)$": "babel-jest",
    "^.+\\.(css)$": "<rootDir>/src/tests/jest.transform.js",
  },
  transformIgnorePatterns: [
    "/node_modules/(?!swiper|swiper/react|ssr-window|dom7)",
  ],
  setupFilesAfterEnv: ["<rootDir>/setupTests.js"],
};
