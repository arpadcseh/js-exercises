import test from 'ava';
import permAlone from './no-repeats-please';

test('no repeats please', t => {
    t.is(permAlone("aab"), 2, 'should return a number.');
    t.is(permAlone("aab"), 2, 'should return 2.');
    t.is(permAlone("aaa"), 0, 'should return 0.');
    t.is(permAlone("aabb"), 8, 'should return 8.');
    t.is(permAlone("abcdefa"), 3600, 'should return 3600.');
    t.is(permAlone("abfdefa"), 2640, 'should return 2640.');
    t.is(permAlone("zzzzzzzz"), 0, 'should return 0.');
    t.is(permAlone("a"), 1, 'should return 1.');
    t.is(permAlone("aaab"), 0, 'should return 0.');
    t.is(permAlone("aaabb"), 12, 'should return 12.');
});