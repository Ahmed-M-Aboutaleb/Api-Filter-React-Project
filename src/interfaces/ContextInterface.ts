import AnimalInterface from "./AnimalInterface";

export default interface ContextInterface {
    animals: AnimalInterface[];
    setAnimals: (data: AnimalInterface[]) => void;
}