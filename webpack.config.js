
const createExpoWebpackConfigAsync = require('@expo/webpack-config');

module.exports = async function (env, argv) {
  const config = await createExpoWebpackConfigAsync(env, argv);
  // Customize the config before returning it.
  // Resolve relative reference ../Utilities/Platform using react-native-web
  config.resolve.alias['../Utilities/Platform'] = 'react-native-web/dist/exports/Platform';
  return config;
};
