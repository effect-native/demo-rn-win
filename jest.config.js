module.exports = {
  preset: 'react-native',
  transformIgnorePatterns: [
    'node_modules/(?!(?:\\.pnpm/[^/]+/node_modules/)?(react-native|@react-native|@react-native-community|@react-navigation|@rnx-kit|@react-native-windows|react-native-vector-icons)/)',
  ],
};
