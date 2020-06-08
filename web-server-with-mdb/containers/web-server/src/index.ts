import * as express from 'express'
import * as os from 'os';
import {MongoClient} from "mongodb";


const connectMongoDB = async (host:string = 'localhost') => {
    const username = 'root';
    const password = 'root';
    const uri = `mongodb://${username}:${password}@${host}`;
    const client = new MongoClient(uri, {useNewUrlParser: true, useUnifiedTopology: true});

    console.log(`Try to connect: ${uri}`);
    await client.connect((err, db) => { if(err) console.log(`MongoDB Error:`, err) });
    return client;
}


const main = async () =>
{

    const app = express();
    const port = 8080;
    const hostname = os.hostname;

    app.get('/', (req, res) => res.send(`Hello, This is ${hostname} \n`));
    app.get('/mongodb/:dbname', async (req, res) => {

        const client = await connectMongoDB(req.params.dbname);
        const databases = await client.db().admin().listDatabases();
        res.send(`Mongodb, collection is,  ${JSON.stringify(databases)} \n`)}

    );

    app.listen(port, () => console.log(`Web Server running at http://localhost:${port}`));

}


main()
