module.exports = ({ env }) => [
  'strapi::errors',
  {
    name: 'strapi::security',
    config: {
      contentSecurityPolicy: {
        useDefaults: true,
        directives: {
          'connect-src': ["'self'", 'http:'],
          'img-src': ["'self'", 'data:', 'blob:', `${process.env.AWS_BUCKET_NAME}.s3.${process.env.AWS_REGION}.amazonaws.com`],
          'media-src': ["'self'", 'data:', 'blob:', `${process.env.AWS_BUCKET_NAME}.s3.${process.env.AWS_REGION}.amazonaws.com`],
          upgradeInsecureRequests: null,
        },
      },
    },
  },
  {
    name: 'strapi::cors',
    config: {
      enabled: true,
      origin: [
        'http://localhost:3000',  // Local development URL
        'https://app.egetwhy.club', // Production URL
        'https://portfolio-project-rho-gold.vercel.app', // Fronten URL
        'https://portfolio-project-rho-gold.vercel.app', // Production URL for frontend

      ],
    },
  },
  'strapi::poweredBy',
  'strapi::logger',
  'strapi::query',
  'strapi::body',
  'strapi::session',
  'strapi::favicon',
  'strapi::public',
];
