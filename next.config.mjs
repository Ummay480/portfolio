// next.config.mjs

/**
 * @type {import('next').NextConfig}
 */
const nextConfig = {
    reactStrictMode: true,
  
    images: {
      domains: ['your-domain.com'], // Specify any required domains
    },
  
    webpack: (config) => {
      config.module.rules.push({
        test: /\.(mp4|webm|ogg|swf|ogv)$/,
        type: 'asset/resource',
        generator: {
          filename: 'static/videos/[name].[hash][ext]',
        },
      });
  
      return config;
    },
  };
  
  export default nextConfig;
  