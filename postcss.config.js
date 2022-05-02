// module.exports = {
//   plugins: [
//     "tailwindcss",
//     "postcss-nesting",
//     "autoprefixer"
//   ]
// }

// module.exports = {
//   plugins: [
//     'postcss-import',
//     'tailwindcss',
//     'tailwindcss/nesting',
//     'postcss-nesting',
//     'autoprefixer'
//   ]
// }


// postcss.config.js
// fixed warning of: 'CSS nesting has not been configured correctly'
module.exports = {
  plugins: {
    'postcss-import': {},
    'postcss-nesting': {},
    'tailwindcss/nesting': {},
    tailwindcss: {},
    autoprefixer: {},
  }
}