import { fileURLToPath } from 'url';
import { dirname, join } from 'path';
import withBundleAnalyzer from '@next/bundle-analyzer';
/** @type {import('next').NextConfig} */

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const bundleAnalyzer = withBundleAnalyzer({
	enabled: process.env.ANALYZE === 'true',
})

const nextConfig = {
  sassOptions: {
    includePaths: [join(__dirname, 'src/sass')],
    prependData: `@import "main.sass"`,
  },
  images:{
    remotePatterns:[
      {
        hostname:'cdn.shopify.com',
        protocol:'https'
      }
    ]
  }
};

export default bundleAnalyzer(nextConfig);