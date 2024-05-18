import AnimalInterface from "./AnimalInterface";

interface ContextInterface {
    animals: AnimalInterface[];
    setAnimals: (data: AnimalInterface[]) => void;
}

export default ContextInterface;