import { AnimalsConsumer } from '../contexts/AnimalsContext';

function Search() {
    const searchAnimals = async (
        query: string,
        setAnimals: (data: []) => void
    ) => {
        const response = await fetch(`http://localhost:8000/?q=${query}`);
        const data: [] = await response.json();
        setAnimals(data);
    };
    return (
        <AnimalsConsumer>
            {({ setAnimals }) => (
                <input
                    type='text'
                    placeholder='Search animals...'
                    onChange={(e) => searchAnimals(e.target.value, setAnimals)}
                />
            )}
        </AnimalsConsumer>
    );
}

export default Search;
