import { createTerminus } from '@godaddy/terminus';
import logger from '../common/logger.js';

export default function serverConfig(app, mongoose, serverInit, config){
    function onSignal() {
        console.log('server is starting cleanup');
        return new Promise((resolve, reject) => {
          mongoose
            .disconnect(false)
            .then(() => {
              console.info('Mongoose has disconnected');
              resolve();
            })
            .catch(reject);
        });
    }
      
    function onShutdown() {
        console.log('cleanup finished, server is shutting down');
    }
      
    function healthCheck() {
        console.log("mongoose di healthcheck")
        if (
            mongoose.connection.readyState === 0 ||
            mongoose.connection.readyState === 3
          ) {
            return Promise.reject(new Error('Mongoose has disconnected'));
          }
          // CONNECTING_TO_MONGO
          if (mongoose.connection.readyState === 2) {
            return Promise.reject(new Error('Mongoose is connecting'));
          }
          // CONNECTED_TO_MONGO
          console.log("connected")
          return Promise.resolve();
    }

    function startServer(){
        createTerminus(serverInit, {
            logger: console.log,
            signal: 'SIGINT',
            healthChecks: {
              '/healthcheck': healthCheck
            },
            onSignal,
            onShutdown
        })
        .listen(config.port, config.ip, () => {
          const info = `Server listening on http://${config.ip}:${config.port} in ${app.get('env')}`;
          console.log(info);
          logger.info(info);
        });
    }
    return {startServer};
}