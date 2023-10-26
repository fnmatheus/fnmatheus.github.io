/** @type {import('next').NextConfig} */

module.exports = {
  webpack5: true,

  webpack(config) {
    config.resolve.fallback = {
      ...config.resolve.fallback,  

      fs: false,
    };

    config.module.rules.push({
      test: /\.svg$/i,
      use: [{ loader: '@svgr/webpack', options: { icon: true }}],
    })

    return config
  },
}
