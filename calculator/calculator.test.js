const calc = require('./calculator.js')

describe('Number summation tests', () => {
    test('Adding two numbers 44 and 32', () => {
        expect(calc.add(44, 32)).toBe(76);
    })
    test('Adding two negative numbers -5432 and -1', () => {
        expect(calc.add(-5432, -1)).toBe(-5433);
    })
    test('Adding two big number', () => {
        expect(calc.add(123456789444444, 23452345234523)).toBe(146909134678967);
    })
    test('Adding one big number and zero', () => {
        expect(calc.add(9999999999999999n, 0)).toBe(9999999999999999n);
    })
    test('Adding big number and float number', () => {
        expect(calc.add(123456789444444, 0.001)).toBe(123456789444444.001);
    })
    test('Adding two float number', () => {
        expect(calc.add(0.1, 0.2)).toBe(0.3);
    })
    test('Adding five number float', () => {
        expect(calc.add(0.0001, 1, 0.0002, 1.0001, -2.0002)).toBe(0.0002);
    })
    test('Adding incorrect type data', () => {
        expect(calc.add(1, '23')).toBe('Error Message!');
    })
})

describe('Number multiply tests', () => {
    test('Multiply two numbers 44 and 32', () => {
        expect(calc.multiply(44, 32)).toBe(1408);
    })
    test('Multiply two numbers less than zero -44 and -32', () => {
        expect(calc.multiply(-44, -32)).toBe(1408);
    })
    test('Multiply two numbers 0 and -32', () => {
        expect(calc.multiply(0, -32)).toBe(0);
    })
    test('Multiply one big number and 1', () => {
        expect(calc.multiply(12345678901234567n, 1)).toBe(12345678901234567888n);
    })
    test('Multiply two float numbers', () => {
        expect(calc.multiply(0.15, 6.789)).toBe(1.01835);
    })
    test('Multiply two float numbers', () => {
        expect(calc.multiply(1.11, -7)).toBe(-7.77);
    })
    test('Multiply five numbers', () => {
        expect(calc.multiply(1, 2, 10, 10, -10)).toBe(-2000);
    })
    test('Multiply two big number', () => {
        expect(calc.multiply(1234567890, 1234567890)).toBe(1524157875019052100n);
    })
    test('Multiply two incorrect number', () => {
        expect(calc.multiply('123', '123')).toBe('Error Message!');
    })
    test('Multiply two incorrect number', () => {
        expect(calc.multiply({}, [1])).toBe('Error Message!');
    })
})

describe('Number subtraction tests', () => {
    test('Subtraction two numbers 0 and 3987', () => {
        expect(calc.subtraction(0, 3987)).toBe(-3987);
    })
    test('Subtraction two numbers 1678 and 100', () => {
        expect(calc.subtraction(1678, 100)).toBe(1578);
    })
    test('Subtraction two numbers 125888788 and 55444556', () => {
        expect(calc.subtraction(125888788, 55444556)).toBe(70444232);
    })
    test('Subtraction two numbers 111 and 111.001', () => {
        expect(calc.subtraction(111, 111.001)).toBe(0.001);
    })
    test('Subtraction two numbers -134 and 16', () => {
        expect(calc.subtraction(-134, 16)).toBe(-150);
    })
    test('Subtraction two numbers -134 and -34', () => {
        expect(calc.subtraction(-134, -34)).toBe(-100);
    })
    test('Subtraction two float numbers 2.523 and 34.054', () => {
        expect(calc.subtraction(2.523, 34.054)).toBe(-31.531);
    })
    test('Subtraction two incorrect params', () => {
        expect(calc.subtraction('qwerty', [])).toBe('Error message!');
    })
    test('Subtraction two incorrect params', () => {
        expect(calc.subtraction('345', '456')).toBe('Error message!');
    })
})

describe('Number divide tests', () => {
    test('Divide two numbers 0 and 3987', () => {
        expect(calc.divide(0, 3987)).toBe(0);
    })
    test('Divide two numbers 1678 and 100', () => {
        expect(calc.divide(1678, 100)).toBe(16.78);
    })
    test('Divide two numbers 125888788 and 1', () => {
        expect(calc.divide(125888788, 1)).toBe(125888788);
    })
    test('Divide two numbers 111 and 111', () => {
        expect(calc.divide(111, 111)).toBe(1);
    })
    test('Divide two numbers -134 and -16', () => {
        expect(calc.divide(-134, -16)).toBe(8.375);
    })
    test('Divide two numbers -0.1 and 0.0005', () => {
        expect(calc.divide(-0.1, 0.0005)).toBe(-200);
    })
    test('Divide two incorrect params', () => {
        expect(calc.divide('2344', [])).toBe('Error message!');
    })
    test('Divide two incorrect params', () => {
        expect(calc.divide('345', '456')).toBe('Error message!');
    })
    test('Division by zero', () => {
        expect(calc.divide(890, 0)).toBe('Error message!');
    })
})

describe('Number exponentiation tests', () => {
    test('Exponentiation number 11', () => {
        expect(calc.exponentiation(11)).toBe(121);
    })
    test('Exponentiation numbers -4', () => {
        expect(calc.exponentiation(-4)).toBe(16);
    })
    test('Exponentiation numbers 0', () => {
        expect(calc.exponentiation(0)).toBe(0);
    })
    test('exponentiation two incorrect params', () => {
        expect(calc.exponentiation('234')).toBe('Error message!');
    })
    test('exponentiation two incorrect params', () => {
        expect(calc.exponentiation('qweqew')).toBe('Error message!');
    })
    test('exponentiation by zero', () => {
        expect(calc.exponentiation({})).toBe('Error message!');
    })
})