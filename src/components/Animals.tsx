import AnimalInterface from '../interfaces/AnimalInterface';
import Animal from './Animal';
import { AnimalsConsumer } from '../contexts/AnimalsContext';

export default function Animals() {
    return (
        <AnimalsConsumer>
            {({ animals }) => (
                <ul>
                    {animals.map((animal: AnimalInterface) => {
                        return (
                            <Animal
                                key={animal.id}
                                id={animal.id}
                                name={animal.name}
                                age={animal.age}
                                type={animal.type}
                            />
                        );
                    })}
                    {animals.length === 0 && <p>No animals found</p>}
                </ul>
            )}
        </AnimalsConsumer>
    );
}
