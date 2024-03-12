module.exports = {
  presets: ['module:@react-native/babel-preset'],
  plugins: [
    [
      'module-resolver',
      {
        cwd: 'babelrc',
        extensions: ['.ios.js', '.android.js', '.js', '.ts', '.tsx', '.json'],
        alias: {
          src: './src',
        },
      },
    ],
    'jest-hoist',
    [
      'module:react-native-dotenv',
      {
        safe: true,
        allowUndefined: true,
      },
    ],
  ],
};
