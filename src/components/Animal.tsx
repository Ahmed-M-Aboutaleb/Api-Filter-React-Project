import AnimalInterface from '../interfaces/AnimalInterface';

export default function Animal({ id, name, age, type }: AnimalInterface) {
    return (
        <li key={id}>
            <p>{name}</p>
            <p>{type}</p>
            <p>{age}</p>
        </li>
    );
}
