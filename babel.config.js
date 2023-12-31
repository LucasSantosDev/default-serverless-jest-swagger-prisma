module.exports = {
  presets: [
    ['@babel/preset-env', { targets: { node: 'current' } }],
    '@babel/preset-typescript',
  ],
  plugins: [
    [
      'module-resolver',
      {
        root: ['./src'],
        alias: {
          '@functions': './src/functions',
          '@libs': './src/libs',
          '@repositories': './src/repositories',
          '@config': './src/config',
        },
      },
    ],
  ],
}
