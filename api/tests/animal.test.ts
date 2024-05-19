import { Request, Response } from 'express';
import AnimalController from '../src/controllers/Animal.controller';
import AnimalModel from '../src/models/Animal.model';

describe('Animal Controller', () => {
    it('Should return an array of animals', () => {
        const req = { query: { q: '' } } as unknown as Request;
        const res = { json: jest.fn() } as unknown as Response;
        const animals = AnimalController.getAnimals(req, res);
        expect(animals).toEqual(expect.arrayContaining([]));
    });
});

describe('Animal Model', () => {
    it('Should return an array of animals', async () => {
        const animals = await AnimalModel.fetchAll();
        expect(animals).toEqual(expect.arrayContaining([]));
    });

    it('Should return an animal', async () => {
        const data = {id: 1, name: 'Dog', age: 5, type: 'Dog'};
        const animal = await AnimalModel.fromJSON(data);
        expect(animal).toHaveProperty('id');
        expect(animal).toHaveProperty('name');
        expect(animal).toHaveProperty('age');
        expect(animal).toHaveProperty('type');
        expect(animal.id).toBe(data.id);
        expect(animal.name).toBe(data.name);
        expect(animal.age).toBe(data.age);
        expect(animal.type).toBe(data.type);
    });
});