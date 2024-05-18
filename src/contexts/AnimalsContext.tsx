import { FC, ReactNode, createContext, useEffect, useState } from 'react';
import AnimalInterface from '../interfaces/AnimalInterface';
import ContextInterface from '../interfaces/ContextInterface';

export const AnimalsContext = createContext<ContextInterface>({
    animals: [],
    setAnimals: () => {},
});

const fetchAnimals = async () => {
    const response = await fetch('http://localhost:8000/');
    const data: AnimalInterface[] = await response.json();
    return data;
};

const AnimalsProvider: FC<{ children: ReactNode }> = ({ children }) => {
    const [animals, setAnimals] = useState<AnimalInterface[] | []>([]);

    useEffect(() => {
        fetchAnimals().then((data) => setAnimals(data));
    }, []);
    return (
        <AnimalsContext.Provider value={{ animals, setAnimals }}>
            {children}
        </AnimalsContext.Provider>
    );
};

const AnimalsConsumer = AnimalsContext.Consumer;

export { AnimalsProvider, AnimalsConsumer };
