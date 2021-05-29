// СТРОКИ
// indexOf
// Поиск индекса элемента строки

const fruit = 'Some fruits';

console.log(fruit.indexOf('fruit')); //5
console.log(fruit.indexOf('r')); //6
console.log(fruit.indexOf('w')); //-1 не существует такого символа в строке

//
// slice
// один или два аргумента (с какого индекса стартуем вырезать и второй - до какого индекса, не включая его)
// если только один аргумент, то вырежет начиная с первого арга и до конца строки
const logg = 'Hello World';
console.log(logg.slice(6, 11)); // World
console.log(logg.slice(3)); // lo World
console.log(logg.slice(-3)); // rld -- отсчет индекса с конца строки, 
// но потом все равно движение идет слева направо (отсчет с конца начинаются без ноля!)

//
// .substring() очень похожа на .slice(), но без отрицательных индексов

//
// .substr()
// первый арг стартовый индекс, второй арг - количество символов

console.log(logg.substr(0, 4)); // Hell

// Основные методы работы с числами (numbers) это Math.

const num = 12.2;

console.log(Math.round(num)); // 12 округляет до ближайшего целого

const test = '12.5px';
console.log(parseInt(test)); // 12 в целые
console.log(parseFloat(test)); // 12.5 в дробные

// МАССИВЫ

// метод добавления в массив .push()
const arrAlex = [];