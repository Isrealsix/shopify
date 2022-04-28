/** @type {import('next').NextConfig} */
const { withFrameworkConfig } = require('./framework/common/config');

const nextConfig = {
  reactStrictMode: true,
  i18n: {
    locales: ['en-US', 'ru'],
    defaultLocale: 'en-US'
  }
}

module.exports = withFrameworkConfig(nextConfig);

console.log('next.config.js', JSON.stringify(module.exports, null, 2))