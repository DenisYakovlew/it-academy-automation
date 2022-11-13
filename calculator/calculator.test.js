const calc = require('./calculator.js')

describe('Number summation tests', () => {
    test('Adding two numbers 44 and 32', () =>{
        expect(calc.add(44, 32)).toBe(76);
    })
    test('Adding two negative numbers -5432 and -1', () =>{
        expect(calc.add(-5432, -1)).toBe(-5433);
    })
    test('Adding two big number', () =>{
        expect(calc.add(123456789444444, 23452345234523)).toBe(146909134678967);
    })
    test('Adding big number and float number', () =>{
        expect(calc.add(123456789444444, 0.001)).toBe(123456789444444.001);
    })
    test('Adding two float number', () =>{
        expect(calc.add(0.1, 0.2)).toBe(0.3);
    })
    test('Adding five number float', () =>{
        expect(calc.add(0.0001, 1, 0.0002, 1.0001, -2.0002)).toBe(0.0002);
    })
    test('Adding incorrect type data', () =>{
        expect(calc.add(1, '23')).toBe('Error Message!');
    })
})