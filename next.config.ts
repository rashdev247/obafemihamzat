import type { NextConfig } from "next";

type RemotePattern = NonNullable<
  NonNullable<NextConfig["images"]>["remotePatterns"]
>[number];

function getBlobRemotePattern(): RemotePattern | null {
  const blobApiUrl = process.env.NEXT_PUBLIC_BLOB_API_URL;

  if (!blobApiUrl) {
    return null;
  }

  try {
    const parsedUrl = new URL(blobApiUrl);
    const protocol = parsedUrl.protocol.replace(":", "");

    if (protocol !== "http" && protocol !== "https") {
      return null;
    }

    return {
      protocol,
      hostname: parsedUrl.hostname,
      port: parsedUrl.port || undefined,
      pathname: `${parsedUrl.pathname.replace(/\/+$/, "")}/**`,
    };
  } catch {
    return null;
  }
}

const blobRemotePattern = getBlobRemotePattern();

const nextConfig: NextConfig = {
  /* config options here */
  reactStrictMode: true,
  output: "standalone",
  
  // Performance optimizations
  compress: true,
  poweredByHeader: false,
  
  // Image optimization
  images: {
    remotePatterns: [
      ...(blobRemotePattern ? [blobRemotePattern] : []),
      {
        protocol: 'https',
        hostname: 'pluralpublic.blob.core.windows.net',
        pathname: '/website/**',
      },
      {
      protocol: 'https',
      hostname: 'images.ctfassets.net', // Contentful CDN
      pathname: '/**',
    },
      {
        protocol: 'https',
        hostname: 'res.cloudinary.com',
        pathname: '/duafntunw/**',
      },
    ],
    formats: ['image/avif', 'image/webp'],
    minimumCacheTTL: 60,
  },
  
  // Experimental features for better performance
  experimental: {
    optimizePackageImports: ['framer-motion', 'lucide-react', 'react-icons', 'embla-carousel-react'],
  },
  async rewrites() {
    return [
      {
        source: "/help-desk/privacy-policy/:slug*",
        destination:
          "https://myneo.privacy-policy.plural.health/:slug*",
      },
    ];
  },
  
  async headers() {
    return [
      {
        source: '/:all*(svg|jpg|jpeg|png|gif|ico|webp|avif)',
        headers: [
          {
            key: 'Cache-Control',
            value: 'public, max-age=31536000, immutable',
          },
        ],
      },
      {
        source: '/fonts/:path*',
        headers: [
          {
            key: 'Cache-Control',
            value: 'public, max-age=31536000, immutable',
          },
        ],
      },
    ];
  },
  
  // Webpack optimizations
  webpack: (config, { dev, isServer }) => {
    // Production optimizations
    if (!dev && !isServer) {
      config.optimization = {
        ...config.optimization,
        splitChunks: {
          chunks: 'all',
          cacheGroups: {
            vendor: {
              test: /[\\/]node_modules[\\/]/,
              name: 'vendors',
              chunks: 'all',
            },
            framerMotion: {
              test: /[\\/]node_modules[\\/]framer-motion[\\/]/,
              name: 'framer-motion',
              chunks: 'all',
              priority: 10,
            },
            common: {
              name: 'common',
              minChunks: 2,
              chunks: 'all',
              enforce: true,
            },
          },
        },
      };
    }
    
    return config;
  },
}

export default nextConfig;
