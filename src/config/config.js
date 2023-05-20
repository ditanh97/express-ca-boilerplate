export default {
    port: process.env.PORT || 4000,
    ip: process.env.HOST || '0.0.0.0',
    mongo: {
      uri: process.env.MONGO_URL || 'mongodb://127.0.0.1:27017/db_node_ca'
    }
  };
  