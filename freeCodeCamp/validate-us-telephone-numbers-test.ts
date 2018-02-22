import test from 'ava';
import telephoneCheck from './validate-us-telephone-numbers';

test('us telephone numbers', t => {
    t.true(telephoneCheck('555-555-5555'), 'should return a boolean');
    t.true(telephoneCheck('1 555-555-5555'), 'should return true');
    t.true(telephoneCheck('1 (555) 555-5555'), 'should return true');
    t.true(telephoneCheck('5555555555'), 'should return true');
    t.true(telephoneCheck('555-555-5555'), 'should return true');
    t.true(telephoneCheck('(555)555-5555'), 'should return true');
    t.true(telephoneCheck('1(555)555-5555'), 'should return true');
    t.false(telephoneCheck('555-5555'), 'should return false');
    t.false(telephoneCheck('5555555'), 'should return false');
    t.false(telephoneCheck('1 555)555-5555'), 'should return false');
    t.true(telephoneCheck('1 555 555 5555'), 'should return true');
    t.true(telephoneCheck('1 456 789 4444'), 'should return true');
    t.false(telephoneCheck('123**&!!asdf#'), 'should return false');
    t.false(telephoneCheck('55555555'), 'should return false');
    t.false(telephoneCheck('(6505552368)'), 'should return false');
    t.false(telephoneCheck('2 (757) 622-7382'), 'should return false');
    t.false(telephoneCheck('0 (757) 622-7382'), 'should return false');
    t.false(telephoneCheck('-1 (757) 622-7382'), 'should return false');
    t.false(telephoneCheck('2 757 622-7382'), 'should return false');
    t.false(telephoneCheck('10 (757) 622-7382'), 'should return false');
    t.false(telephoneCheck('27576227382'), 'should return false');
    t.false(telephoneCheck('(275)76227382'), 'should return false');
    t.false(telephoneCheck('2(757)6227382'), 'should return false');
    t.false(telephoneCheck('2(757)622-7382'), 'should return false');
    t.false(telephoneCheck('555)-555-5555'), 'should return false');
    t.false(telephoneCheck('(555-555-5555'), 'should return false');
    t.false(telephoneCheck('(555)5(55?)-5555'), 'should return false');
});