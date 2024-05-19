import { Request, Response } from 'express';
import AnimalModel from '../models/Animal.model';

export default class AnimalController {
    static getAnimals = async (req: Request, res: Response) => {
        const query: string = req.query.q?.toString().toLowerCase() || '';
        const animals: AnimalModel[] = await AnimalModel.fetchAll();
        const result: AnimalModel[] = animals.filter(animal => {
            return animal.name.toLowerCase().includes(query) || animal.type.toLowerCase().includes(query);
        });
        res.json(result);
    }
}