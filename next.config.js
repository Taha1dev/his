module.exports = {
  webpack: (config, { isServer }) => {
    // ...
    config.module.rules.push({
      test: /\.(png|jpe?g|gif|svg)$/i,
      use: [
        {
          loader: '@next/asset-optimizer',
          options: {
            // ...
          },
        },
        {
          loader: 'url-loader',
          options: {
            limit: 8192,
            name: '[name].[hash].[ext]',
            outputPath: 'static/images',
            generator: {
              filename: 'static/images/[hash][ext]',
            },
          },
        },
      ],
    })
    // ...
    return config
  },
}