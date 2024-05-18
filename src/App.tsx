import './App.css';
import Search from './components/Search';
import { AnimalsProvider } from './contexts/AnimalsContext';
import Animals from './components/Animals';

function App() {
    return (
        <AnimalsProvider>
            <main>
                <h1>Animals Search</h1>
                <p>Search for animals in the search bar</p>
                <Search />
                <Animals />
            </main>
        </AnimalsProvider>
    );
}

export default App;
