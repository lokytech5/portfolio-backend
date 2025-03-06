module.exports = ({ env }) => [
  'strapi::errors',
  {
    name: 'strapi::security',
    config: {
      contentSecurityPolicy: {
        useDefaults: true,
        directives: {
          // 'connect-src': ["'self'", 'http:'],
          'connect-src': ["'self'", 'https:', 'http:', env('APP_URL', '')],
          'img-src': ["'self'", 'data:', 'blob:', 'res.cloudinary.com'],
          'media-src': ["'self'", 'data:', 'blob:', 'res.cloudinary.com'],
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
        'https://portfolio-project-rho-gold.vercel.app', // Production URL for frontend
        'https://bkv3minaqq.us-east-1.awsapprunner.com' // App Runner URL
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
