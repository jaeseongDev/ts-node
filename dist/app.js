"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const config_1 = __importDefault(require("config"));
const port = config_1.default.get("port");
const host = config_1.default.get("host");
console.log(port);
console.log(host);
// const app = express()
// app.get('/', (req, res, next) => {
//   res.send('Hello')
// })
// app.listen(8080, () => {
//     console.log('Server running')
// })
