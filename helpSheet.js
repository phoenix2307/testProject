//
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

//
////////////////////////////////////////////////// МАССИВЫ / Array

const arr = [1, 2, 3, 6, 8];

arr.pop(); // убрать последний элемент
arr.push(10); // добавить в конец новый элемент
console.log(arr);


// Перебор массива
// const arr2 = [5, 4, 6, 7, 34, 23];
// for (let i = 0; i < arr2.length; i++) {
//   console.log(arr2[i]);
// }

const arr2 = [5, 4, 6, 7, 34, 23];
for (let item of arr2) {
  console.log(item);
} // У метода for ... of есть преимущество: тут можно использовать break и continue для остановеи перебора

const arr3 = [5, 54, 6, 87, 134, 303];
arr3.forEach(function (item, i, arr3) {
  // item - элемент массива
  // i - индекс элемента
  // arr3 - перебираемый массив
  console.log(`${i}: ${item} внутри массива ${arr3}`);

});

// split / join
const str = prompt('', '');
const products = str.split(', '); // разделение строки на элементы массива
// Метод str.split(delim) разбивает строку на массив по заданному разделителю delim.
console.log(products);
console.log(products.join('****+++**** ')); // склеивание обратно этих элементов в строку с заданым разделителем
// Метод arr.join(glue) делает в точности противоположное split. Он создаёт строку из элементов arr, вставляя glue между ними.

// sort - сортирует содержимое массивов по принципц строк. С цифрами нужна доработка
const arrSortString = ['alex', 'natali', 'nika', 'sofia', 'petr', 'lidia', 'katerina'];
arrSortString.sort();
console.log(arrSortString);
/*[
  'alex',  'katerina',
  'lidia', 'natali',
  'nika',  'petr',
  'sofia'
]*/
const arrSortNumber = [23, 7, 80, 5, 11, 83, 26, 7, 9];
arrSortNumber.sort();
console.log(arrSortNumber);
/*[
  11, 23, 26, 5, 7,
   7, 80, 83, 9
]*/

// Шаблон для сортировки чисел
const arrNum = [23, 7, 80, 5, 11, 83, 26, 7, 9];
arrNum.sort(compareNum);
// .sort использует принцип быстрой сортировки. Все что нужно это дать ему ф-цию сравнения двух чисел.
function compareNum(a, b) {
  return a - b;
}
console.log(arrNum);



//
//////////////////////////////////////////////////// ОБЪЕКТЫ / Objects //

const options = {
  name: 'test',
  width: 1024,
  height: 1024,
  colors: {
    border: 'black',
    bg: 'red'
  }
};

// Получение значения свойства/ключа объекта console.log(options.colors.border) or console.log(options['colors'].border);
// console.log(options['colors']['border']);

// удаление свойств объекта / delete key of object
// delete options.colors;
// console.log(options);

//
// изменение свойств обьекта
// options.name = 'It work';

// ПЕРЕБОР свойств объекта
//можно использовать для получения списка / массива всех свойст (первого уровня)
// если есть вложенные, то придется добавлять еще один перебор, с проверкой на тип вложенных свойств
for (let key in options) {
  if (typeof (options[key]) === 'object') {
    for (let i in options[key]) {
      console.log(`Свойство ${i} имеет значение ${options[key][i]}`);
    }
  } else {
    console.log(`Свойство ${key} имеет значение ${options[key]}`);
  }
}

// Посчитать количество свойств объекта
const obj2 = {
  name: 'Alex',
  age: 40,
  merried: true,
  proff: ['developer', 'programmer'],
  skills: {
    'честность': 10,
    'токсичность': 5,
    'стремление': 10
  }
};

let counter = 0;
for (let key in obj2) {
  counter++;
}
console.log(counter);

// Методы объекта
console.log(Object.keys(obj2)); // возвращает массив ключей первого уровня объекта
console.log(Object.keys(obj2).length); // возвращает количество ключей первого уровня объекта

// Создание собственного метода
const myFirstMetod = {
  name: 'Alex',
  age: 40,
  go: function () {
    console.log('My target - developer');
  }
};

myFirstMetod.go();

//
// Деструктуризация объекта
const options2 = {
  name: 'test',
  width: 595,
  height: 595,
  colors: {
    border: 'blue',
    bg: 'pink',
    light: {
      high: 36,
      low: 18
    }
  }
};

const {
  high,
  low
} = options2.colors.light;
console.log(high, low);

//
// !!! ВАЖНО. Копия по ССЫЛКЕ и по ЗНАЧЕНИЮ (по значению без проблем копируются примитивы, 
// но объекты копируются по принципу ссылки)
// С копированием обьекта нельзя так работать как с копированием примитивных типов данных
// При присваивании новой переменной имени обьекта, получается не копия обьекта, а просто 
// ссылка на прежний обьект. И если в типа новом обьекте произвести изменения, то они по ссылке 
// залезут в исходник и проведутся также и там.
// Поэтому приходится копию записывать через функцию с перебором всех свойств исходника
// Это функция поверхностной копии (если внутри объекта будут вложенности, то они не будут 
// клонироваться а снова по ссылочному типу перенесутся в новый обьект)
function copy(mainObj) {
  let objCopy = {};

  for (let key in mainObj) {
    objCopy[key] = mainObj[key];
  }
  return objCopy;
}

const numbers = {
  a: 2,
  b: 5,
  c: {
    x: 7,
    y: 4
  }
};

const newNumbers = copy(numbers);

newNumbers.a = 100; // все работает Ок
newNumbers.c.x = 100; // изменяет свойство x в обоих обьектах

console.log(newNumbers);
console.log(numbers);