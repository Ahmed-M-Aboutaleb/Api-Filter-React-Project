import express, { Application } from 'express';
import cors from 'cors';
import AnimalController from './controllers/Animal.controller';

const app: Application = express();
const port: number | string = process.env.PORT || 8000;

app.use(cors());
app.use(express.json());


app.get('/', AnimalController.getAnimals);

app.listen(port, () => {
    console.log(`Server is Fire at http://localhost:${port} 🔥`);
});