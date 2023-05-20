import bodyParser from 'body-parser';

export default function expressConfig(app) {
    app.use(bodyParser.urlencoded({ extended: true }));
    app.use(bodyParser.json());
}