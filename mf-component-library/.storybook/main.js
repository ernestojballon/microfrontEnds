module.exports = {
  "stories": [
    "../projects/component-lib/src/**/*.stories.mdx",
    "../projects/component-lib/src/**/*.stories.@(js|jsx|ts|tsx)"
  ],
  "addons": [
    "@storybook/addon-links",
    "@storybook/addon-essentials",
    "@storybook/addon-interactions"
  ],
  "framework": "@storybook/angular",
  "core": {
    "builder": "webpack5"
  }
}