const path = require('path');
const fs = require('fs');
const merge = require("deepmerge");
const ALLOWED_FRAMEWORK = ['shopify', 'bigcommerce', 'shopify_local'];
const withFrameworkConfig = (defaultConfig = {}) => {
  let framework = defaultConfig?.framework?.name;
  if(!framework) {
    throw new Error('Missing API framework');
  }
  if(!ALLOWED_FRAMEWORK.includes(framework)) {
    throw new Error(`The framework '${framework}' isn\'t supported`)
  }

  if(framework === ALLOWED_FRAMEWORK[2]) framework = ALLOWED_FRAMEWORK[0];
  const frameworkNextConfig = require(path.join('../', framework, 'next.config'));
  const tsPath = path.join(process.cwd(), 'tsconfig.json');
  const tsConfig = require(tsPath);
  tsConfig.compilerOptions.paths['@framework'] = [`framework/${framework}`];
  tsConfig.compilerOptions.paths['@framework/*'] = [`framework/${framework}/*`];
  fs.writeFileSync(tsPath, JSON.stringify(tsConfig, null, 2))
  return merge(defaultConfig, frameworkNextConfig);
}

module.exports = { withFrameworkConfig }