/** @type {import('next').NextConfig} */
const nextTranslate = require('next-translate');

module.exports = nextTranslate({
  reactStrictMode: true,
  images: {
    domains: ['scontent-hel3-1.cdninstagram.com'],
    fallback: true,
  },
});
