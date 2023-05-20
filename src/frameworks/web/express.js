import bodyParser from 'body-parser';
import helmet from 'helmet';
import compression from 'compression';

export default function expressConfig(app) {
    app.use(compression());
    app.use(helmet());
    app.use(bodyParser.urlencoded({ extended: true }));
    app.use(bodyParser.json());

    app.use((req,res,next)=> {
        // Website you wish to allow to connect
        // res.setHeader('Access-Control-Allow-Origin', 'http://some-accepted-origin');
        // Request methods you wish to allow
        res.setHeader(
            'Access-Control-Allow-Methods',
            'GET, POST, OPTIONS, PUT, PATCH, DELETE'
        );
        // Request headers you wish to allow
        res.setHeader(
            'Access-Control-Allow-Headers',
            'X-Requested-With, Content-type, Authorization, Cache-control, Pragma'
        );
        // Pass to next layer of middleware
        next();
    })
}