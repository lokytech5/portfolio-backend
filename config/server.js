// config/server.js
module.exports = ({ env }) => ({
  host: env('HOST', '0.0.0.0'),
  port: env.int('PORT', 1337),
  url: env('PUBLIC_URL', 'https://api.plugfolio.cloud'), // 👈 tell Strapi the public HTTPS URL
  proxy: true,                                           // 👈 trust X-Forwarded-* from Nginx
  app: { keys: env.array('APP_KEYS') },
  webhooks: {
    populateRelations: env.bool('WEBHOOKS_POPULATE_RELATIONS', false),
  },
});
