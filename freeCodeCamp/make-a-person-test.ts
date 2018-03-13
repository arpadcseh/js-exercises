
import test from 'ava';
import Person from './make-a-person';

// @ts-ignore
var bob = new Person('Bob Ross');

test('make a person', t => {
    t.is(Object.keys(bob).length, 6, 'should return 6');
    t.true(bob instanceof Person, 'should return true');
    t.is(bob.firstName, undefined, 'should return undefined');
    t.is(bob.lastName, undefined, 'should return undefined');
    t.is(bob.getFirstName(), 'Bob', 'should return "Bob"');
    t.is(bob.getLastName(), 'Ross', 'should return "Ross"');
    t.is(bob.getFullName(), 'Bob Ross', 'should return "Bob Ross"');

    bob.setFirstName('Haskell');
    t.is(bob.getFullName(), 'Haskell Ross', 'should return "Haskell Ross" after bob.setFirstName("Haskell")');

    bob.setLastName('Curry');
    t.is(bob.getFullName(), 'Haskell Curry', 'should return "Haskell Curry" after bob.setLastName("Curry")');

    bob.setFullName('Haskell Curry');
    t.is(bob.getFullName(), 'Haskell Curry', 'should return "Haskell Curry" after bob.setFullName("Haskell Curry")');

    bob.setFullName('Haskell Curry');
    t.is(bob.getFirstName(), 'Haskell', 'should return "Haskell" after bob.setFullName("Haskell Curry")');

    bob.setFullName('Haskell Curry');
    t.is(bob.getLastName(), 'Curry', 'should return "Curry" after bob.setFullName("Haskell Curry")');
});