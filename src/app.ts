import express from "express";
import config from "config";

const port = config.get("port") as number;
const host = config.get("host") as string;

// const app = express()

// app.get('/', (req, res, next) => {
//   res.send('Hello')
// })

// app.listen(8080, () => {
//     console.log('Server running')
// })