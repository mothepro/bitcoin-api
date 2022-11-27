import express from "express"
import {urlencoded, json} from 'body-parser'
import rpcMethods from './routes/api.js'

const app = express();

app.use(urlencoded({ extended: false }));
app.use(json());

app.use("/api", rpcMethods);

const port = process.env.PORT || 4444;

server = app.listen(port, () => console.log(`Server running on port ${port}`));
