import express from 'express';
import cors from 'cors';
import UserRoute from './routes/UserRoutes.js'

const app = express();
const port = 5000;
const running = `Aplikasi Server Restful API sedang berjalan pada port ${port}, dan silahkan diakses pada http://localhost:${port}`;
app.use(cors());
app.use(express.json());
app.use(UserRoute);


app.listen(port, ()=> console.log(running));