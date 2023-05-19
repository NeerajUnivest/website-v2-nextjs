/** @type {import('next').NextConfig} */
const nextConfig = {
  i18n: {
    locales: ['en'],
    defaultLocale: 'en',
  },
  reactStrictMode: true,
  images: {
    domains: [
      'univest-prod.s3.ap-south-1.amazonaws.com',
      'univest-staging.s3.ap-south-1.amazonaws.com',
      'public-assets-univest.s3.ap-south-1.amazonaws.com',
      'univest.s3.ap-south-1.amazonaws.com',
      'cdn-icons-png.flaticon.com',
      'aws-news-feed.s3.ap-south-1.amazonaws.com'
    ],
  },
}

module.exports = nextConfig
