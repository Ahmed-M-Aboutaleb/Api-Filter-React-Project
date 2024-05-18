import { Request, Response } from 'express';
import AnimalModel from '../models/Animal.model';

class AnimalController {
    getAnimals = async (req: Request, res: Response) => {
        const query: string = req.query.q?.toString().toLowerCase() || '';
        const animals: AnimalModel[] = await AnimalModel.fetchAll();
        const result: AnimalModel[] = animals.filter(animal => {
            return animal.name.toLowerCase().includes(query) || animal.type.toLowerCase().includes(query);
        });
        res.json(result);
    }
}

export default new AnimalController();