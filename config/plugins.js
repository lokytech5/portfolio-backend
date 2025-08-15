// config/plugins.js
module.exports = {
  upload: {
    config: {
      provider: 'local',
      providerOptions: {
        sizeLimit: 52428800, // 50MB
      },
      actionOptions: {
        upload: {},
        delete: {},
      },
    },
  },
};
