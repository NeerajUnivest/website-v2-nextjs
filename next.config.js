/** @type {import('next').NextConfig} */
const nextConfig = {
  env: {
    apiBaseURL: 'https://api.univest.in',
    NEXT_PUBLIC_POSTHOG_KEY: 'phc_6s9yEXvuiMEvVw5q9Fp2XZFRM4XAskq6H5fbBf9MTLh',
    NEXT_PUBLIC_POSTHOG_HOST: 'https://us.posthog.com',
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
  redirects: async () => [
    {
      source: '/:path*',
      has: [{ type: 'host', value: 'www.univest.in' }],
      destination: 'https://univest.in/:path*',
      permanent: true
    },
    // {
    //   source: '/:path*',
    //   statusCode: 404,
    //   destination: 'https://univest.in/blog/:path*',
    //   permanent: true,
    // },
  ]
}

module.exports = nextConfig
