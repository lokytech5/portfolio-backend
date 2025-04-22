module.exports = {
  upload: {
    config: {
      provider: '@strapi/provider-upload-aws-s3',
      providerOptions: {
        accessKeyId: process.env.AWS_ACCESS_KEY_ID,
        secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY,
        region: 'us-east-1',
        params: {
          Bucket: 'portfolio-media-assets-v1',
          ACL: null,
        },
        baseUrl: 'https://portfolio-media-assets-v1.s3.us-east-1.amazonaws.com', // 👈 add this
      },
    },
  },
};