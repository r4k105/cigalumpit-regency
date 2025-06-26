import express from 'express';
import cors from 'cors';

const app = express();
const port = 5000;
const running = `Aplikasi Server Restful API sedang berjalan pada port ${port}, dan silahkan diakses pada http://localhost:${port}`;
app.use(cors());
app.use(express.json());

app.get('/', (req,res) => {
    res.send(`Server API ${port} running`)
})


app.listen(port, ()=> console.log(running));