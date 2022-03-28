module.exports = ({ env }) => ({
  auth: {
    secret: env('ADMIN_JWT_SECRET', 'c7d16f4b09a162813e70deef6a7a9adc'),
  },
});
