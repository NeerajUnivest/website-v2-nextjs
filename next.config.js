/** @type {import('next').NextConfig} */
const nextConfig = {
  env: {
    apiBaseURL: 'https://api.univest.in',
  },
  i18n: {
    locales: ['en'],
    defaultLocale: 'en',
  },
  eslint: {
    ignoreDuringBuilds: true
  },
  // exports: {
  //   distDir: 'build',
  // },
  reactStrictMode: true,
  images: {
    domains: [
      'storage.googleapis.com',
      'univest-prod.s3.ap-south-1.amazonaws.com',
      'univest-staging.s3.ap-south-1.amazonaws.com',
      'public-assets-univest.s3.ap-south-1.amazonaws.com',
      'univest.s3.ap-south-1.amazonaws.com',
      'cdn-icons-png.flaticon.com',
    ],
  },
}

module.exports = nextConfig
