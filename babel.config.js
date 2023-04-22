module.exports = function(api) {
  api.cache(true);
  return {
    presets: ['babel-preset-expo'],
    plugins: [
      [
        'module:react-native-dotenv',
        {
          envName: 'APP_ENV',
          moduleName: '@env',
          path: '.env',
        },
      ],
      [
        'module-resolver',
        {
          root: ['./src'],
          alias: {
            '@/components': './src/components',
            '@/assets': './src/assets',
            '@/theme': './src/theme',
            '@/lib': './src/lib',
            '@/services': './src/services',
            '@/utils': './src/utils',
            '@/contexts': './src/contexts',
            '@/hooks': './src/hooks',
          },
        },
      ],
    ],
  };
};
