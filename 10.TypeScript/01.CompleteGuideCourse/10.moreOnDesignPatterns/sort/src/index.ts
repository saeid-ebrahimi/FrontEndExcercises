import { CharacterCollection } from './CharactersCollection';
import { NumbersCollection } from './NumbersCollection';
import { LinkedList } from './LinkedList';

const numbersCollection = new NumbersCollection([10, 30, -5, 7, -8, 50]);
const charactersCollection = new CharacterCollection("ssAdb");
const linkedList = new LinkedList()
linkedList.add(12);
linkedList.add(1);
linkedList.add(-2);
linkedList.add(0);
linkedList.add(-9);

numbersCollection.sort();
console.log(numbersCollection.data);

charactersCollection.sort();
console.log(charactersCollection.data);

linkedList.sort();
linkedList.print();