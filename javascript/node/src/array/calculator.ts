type NUMBER_ARRAY = NESTED_ARRAY | [number, number, number] | number;
type NESTED_ARRAY = [NUMBER_ARRAY, NUMBER_ARRAY, NUMBER_ARRAY];

function calculator(array: NESTED_ARRAY): number {
    if (array.length === 3) {
        const numbers = array.map((a) => (a instanceof Array ? calculator(a) : a));

        if (numbers.every((item) => typeof item === 'number')) {
            const [a, b, c] = numbers;

            switch (c) {
                case 1:
                    return a + b;
                case 2:
                    return a - b;
                case 3:
                    return a * b;
                case 4:
                    return a / b;
                default:
                    throw new Error('Invalid operator');
            }
        }
    }

    throw new Error('Invalid input');
}

const array = [3, 4, [3, 1, 2]] as NESTED_ARRAY;
console.log(`Result of ${JSON.stringify(array)} is ${calculator(array)}`);
