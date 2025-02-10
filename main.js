
const filterEvenNumbers = (numbers) => numbers.filter((num) => num % 2 === 0);

const squareNumbers = (numbers) => numbers.map((num) => num ** 2);

const filterByProperty = (objects, property) => objects.filter((obj) => property in obj);

const sumNumbers = (numbers) => numbers.reduce((acc, num) => acc + num, 0);

const applyFunctionToArray = (func, array) => array.map(func);

const findSumOfSquaresOfEvens = (numbers) => {
    const evens = filterEvenNumbers(numbers);
    const squares = squareNumbers(evens);
    return sumNumbers(squares);
};

const findAverageAboveLimit = (objects, property, limit) => {
    const filtered = objects.filter((obj) => obj[property] > limit);
    const values = applyFunctionToArray((obj) => obj[property], filtered);
    const sum = sumNumbers(values);
    return values.length ? sum / values.length : 0;
};

const limit = 5;
const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const objects = [
    { value: 1 },
    { value: 2 },
    { value: 3 },
    { value: 4 },
    { value: 5 },
    { value: 6 },
    { value: 7 },
    { value: 8 },
    { value: 9 },
    { other: 10 },
];

console.log("Четные числа:", filterEvenNumbers(numbers));
console.log("Квадраты чисел:", squareNumbers(numbers));
console.log("Объекты с value:", filterByProperty(objects, "value"));
console.log("Сумма чисел:", sumNumbers(numbers));
console.log("Сумма квадратов четных чисел:", findSumOfSquaresOfEvens(numbers));
console.log(
    `Среднее арифметическое значений выше ${limit}:`,
    findAverageAboveLimit(objects, "value", limit)
);
