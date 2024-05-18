import Animal from '../interfaces/Animal';
import Chance from 'chance';

const ANIMALS_NUMBER = 350;

class AnimalModel {
    id: number;
    name: string;
    age: number;
    type: string;
    static chance: Chance.Chance = new Chance();

    constructor(id:number, name: string, age: number, type: string) {
        this.id = id;
        this.name = name;
        this.age = age;
        this.type = type;
    }

    static fromJSON(json: Animal): AnimalModel {
        return new AnimalModel(json.id, json.name, json.age, json.type);
    }

    static fetchAll(): AnimalModel[] {
        return [...Array(ANIMALS_NUMBER).keys()].map(id => {
            return new AnimalModel(id, this.chance.animal(), this.chance.age(), this.chance.animal());
        });
    }
}

export default AnimalModel;