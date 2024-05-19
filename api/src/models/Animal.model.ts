import Animal from '../interfaces/Animal';
import Chance from 'chance';

const ANIMALS_NUMBER = 350;

export default class AnimalModel {
    id: number;
    name: string;
    age: number;
    type: string;
    static chance: Chance.Chance = new Chance();

    constructor(animal: Animal) {
        this.id = animal.id;
        this.name = animal.name;
        this.age = animal.age;
        this.type = animal.type;
    }

    static fromJSON(json: Animal): AnimalModel {
        return new AnimalModel(json);
    }

    static fetchAll(): AnimalModel[] {
        return [...Array(ANIMALS_NUMBER).keys()].map(id => {
            const animal = {id: id, name: this.chance.animal(), age: this.chance.age(), type: this.chance.animal()};
            return new AnimalModel(animal);
        });
    }
}