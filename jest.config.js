process.env.VUE_CLI_BABEL_TARGET_NODE = true;
process.env.VUE_CLI_BABEL_TRANSPILE_MODULES = true;
module.exports = {
  cache: true,
  verbose: true,
  preset: '@vue/cli-plugin-unit-jest/presets/no-babel',
  moduleFileExtensions: [
    "js", "json", "vue"
  ],
  transformIgnorePatterns: ["/node_modules/(?!vue-awesome)"],
  transform: {
    '^.+\\.vue$': 'vue-jest',
    '.+\\.(css|styl|less|sass|scss|svg|png|jpg|ttf|woff|woff2)$': 'jest-transform-stub',
    "^.+\\.js$": "<rootDir>/node_modules/babel-jest"
  },
  preset: '@vue/cli-plugin-unit-jest',
  collectCoverage: true,
  snapshotSerializers: [
    'jest-serializer-vue'
  ],
  testMatch: [

      "**/test/specs/**",
  ],
  testURL: 'http://localhost/',
  watchPlugins: [
    'jest-watch-typeahead/filename',
    'jest-watch-typeahead/testname'
  ],
  globals: {
    'js-jest': {
      babelConfig: true
    }
  },
  moduleNameMapper: {
   
    "^@/(.*)$": "<rootDir>/$1",
    "^webpack$": "webpack-4",
    "^webpack/(.*)": "webpack-4/$1",
  },
  transformIgnorePatterns: ['<rootDir>/node_modules/']
}