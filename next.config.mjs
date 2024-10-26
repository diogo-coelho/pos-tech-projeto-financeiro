/** @type {import('next').NextConfig} */
const nextConfig = {
  webpack(config) {
    const cssLoaderRule = config.module.rules.find(rule => {
      return rule.test && rule.test.toString().includes('scss');
    });

    if (cssLoaderRule) {
      const cssModuleRule = cssLoaderRule.use.find(loader => loader.loader && loader.loader.includes('css-loader'));
      if (cssModuleRule) {
        cssModuleRule.options.modules = {
          localIdentName: '[local]', // Usa o nome da classe como está
        };
      }
    }

    config.module.rules.push({
      test: /\.svg$/,
      use: ['@svgr/webpack'],
    });

    return config;
  },
};

export default nextConfig;
