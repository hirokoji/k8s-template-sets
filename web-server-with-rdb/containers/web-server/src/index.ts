import * as express from 'express'
import * as os from 'os';

const app = express();
const port = 8080;
const hostname = os.hostname;

app.get('/', (req, res) => res.send(`Hello, I am ${hostname} \n`));
app.listen(port, () => console.log(`Web Server running at http://localhost:${port}`));