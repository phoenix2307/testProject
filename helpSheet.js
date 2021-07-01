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

/*
**************************************************** Операторы ****************************

Тернарный оператор - ?

(условие) ? действие1:действие2
?  - аналог if
: - аналог else
то есть: если (условие) выполняяется или равно true, то выполнится действие1
иначе выполнится действие2
*/

//
// ********************************************* МАССИВЫ / Array ***********************

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
// const products = str.split(''); // разделение строки на элементы массива
// Метод str.split(delim) разбивает строку на массив по заданному разделителю delim.
//console.log(products);
//console.log(products.join('****+++**** ')); // склеивание обратно этих элементов в строку с заданым разделителем
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
// Копирование массивов
// .slice()
const oldArray = ['a', 'b', 'c'];
const newArray = oldArray.slice();

newArray[1] = 'asdxcvvfe';
console.log(oldArray);
console.log(newArray);

//
// .spread разворачивает объекты / массивы в отдельные составляющие
const video = ['youtube', 'vimeo', 'rutube'],
    blogs = ['wordpress', 'livejournal', 'blogger'],
    internet = [...video, ...blogs, 'vk', 'facebook']; // здесь будут складироваться оба массива + еще что-нибудь
// spred - синтаксис: ... перед объект, который мы будем разворачивать
console.log(internet);


function log(a, b, c) {
    console.log(a);
    console.log(b);
    console.log(c);
}
// например нужно подставить аргументы в функцию, но у нас они пришли в виде единого массива num2.

const num2 = [2, 5, 7];
log(...num2);
// spread разворачивает / расскладывает его на составляющие и функция получает свои аргументы по одному

const array = ['a', 'b'];
const cloneArray = [...array];



//
//*********************************************** ОБЪЕКТЫ / Objects *************************
//



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

// сокращенный способ записи обьекта
let cat = 'sdfsf';
let dog = 'waafwawf';
let bird = 'rfhrfh';

let someObj = {
    cat,
    dog,
    bird
};

console.log(someObj); // { cat: 'sdfsf', dog: 'waafwawf', bird: 'rfhrfh' }

// удаление свойств объекта / delete key of object
// delete options.colors;
// console.log(options);

//
// изменение свойств обьекта
// options.name = 'It work';

/*
************************************ Добавление данных в объект *********************
const obj = {
    part1: 'prop1',
    part2: 'prop2',
    part3: 'prop3'
};
Например, берем данные у опросника prompt()
const a = prompt('Как вас зовут?');
const b = prompt('Кем вы работаете?');
obj.part1[a] = b;
//obj.part1[a] - создаем первое свойство obj.part1. Берем его из переменной const a = prompt('Как вас зовут?')
//obj.part1[a] = b - присваиваем этому свойству значение из переменной const b = prompt('Кем вы работаете?')
// таким образом в первое свойство (a) запишеться его зачение (b)
{Alex: 'programmer'}

*/



// **************************************************** ПЕРЕБОР свойств объекта *****************

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
newNumbers.c.x = 100; // изменяет свойство x в обоих обьектах, 
//потому что newNumbers.c - это объект и для него уже снова работает ссылочный тип.

console.log(newNumbers);
console.log(numbers);

//
// Object.assign(target, sources) - объединяет два объекта в одну независимую копию объединенных объектов.
// Но тут также есть проблема с вложенными свойствами - они идут по ссылке.
const add = {
    d: 17,
    e: 20
};
console.log(Object.assign(numbers, add)); // { a: 2, b: 5, c: { x: 100, y: 4 }, d: 17, e: 20 }
const clone = Object.assign({}, add); // создание независимой копии существующего объекта

//
// ...spread - копирование объекта
const q = {
    one: 1,
    two: 2
};

const cloneObj = {
    ...q
};


// глубокое клонирование с помощью JSON:



const testAlex = {
    age: 40,
    phone: 80508033711,
    parents: {
        mom: 'Lidia',
        dad: 'Petr',
        sister: 'Natali'
    }
};

// console.log(JSON.stringify(alex));
const cloneAlex = JSON.parse(JSON.stringify(testAlex));
cloneAlex.parents.sister = 'Marina';
console.log(testAlex);
console.log(cloneAlex);
// создается полностью независимая глубокая копия объекта

//
/////////////////////////// PROTOtype////////////////////////////////////////

console.dir([1, 2, 3, 'a', 'l']);

const soldier = {
    health: 400,
    armor: 100,
    sayHello: function () {
        console.log('Hello!');
    }
};

const john = {
    health: 100
};

//john.__proto__ = soldier; // такой синтаксис не используется

//Современные команды:
// Object.create(); - создание объекта с определенным прототипом
// Object.getPrototypeOf(); - получение этого прототипа
// Object.setPrototypeOf(); - установка этого прототипа

Object.setPrototypeOf(john, soldier); // то же самое, что и john.__proto__ = soldier;

console.log(john.armor);
john.sayHello();
console.log(john);

const alex = Object.create(soldier);
alex.sayHello();



//////////////////////////////////// // Работа со страницей //
// для просмотра шпаргалки использовать e:\IT\UDEMY курс\dom_2\elements\index.html
// Часть 1
/*
const box = document.getElementById('');

const btns = document.getElementsByTagName('button');

// ВАЖНО
// При получении элементов через метод .getElementsByTagName(), мы ВСЕГДА получаем псевдомассив (HTMLCollection)
// И даже если там только один элемент, мы относимся к нему как единственному элементу массива
// И обращаемcя к нему по синтаксису массива: btns[0];

const circles = document.getElementsByClassName('circle');
// также получаем HTMLCollection

const hearts = document.querySelectorAll('.heart');
// Получаем NodeList - это тоже псевдомассив, но уже с некоторыми методами
// которых нет в HTMLCollection. Например метод forEach().

hearts.forEach(item => {
  console.log(item);
});

const oneHeart = document.querySelector('.heart');
// Вытаскивает со страницы только один элемент с указаным селектором (если
// таких селекторов много, то к нам попадает только первый)
*/

/*
Часть 2
const box = document.getElementById('box'),
  btns = document.getElementsByTagName('button'), // collection
  circles = document.getElementsByClassName('circle'), //collection
  hearts = document.querySelectorAll('.heart'), //collection
  oneHeart = document.querySelector('.heart'),
  wrapper = document.querySelector('.wrapper');

// Добавление стилей элементам страницы
box.style.backgroundColor = 'blue';
box.style.width = '500px';

box.style.cssText = 'background-color: green; width: 600px';
// это же можно делать и с обратными скобками и динамически подставлять тууда значения каких-то переменных:
// `background-color: green; width: ${num}px`;

// Обращение к элементам, которые находятся в псевдомассивах
btns[1].style.borderRadius = '100%';
circles[0].style.backgroundColor = 'red';

// for (let i = 0; i < hearts.length; i++) {
//   hearts[i].style.backgroundColor = 'yellow';
// }

hearts.forEach(item => {
  item.style.backgroundColor = 'blue';
});

// Создание элементов страницы (но это все пока что только в скрипте)
const div = document.createElement('div');
// const text = document.createTextNode('Тут был я');

div.classList.add('black'); // добавление класса 'black' элементу div

// Добавляем элементы непосредственно на HTMLpage

document.body.append(div);
wrapper.append(div); // в конец объекта
// wrapper.appendChild(div); в конец объекта - старый метод

// wrapper.prepend(div); в начало объекта

// hearts[2].before(div); после элемента
// wrapper.insertBefore(div, hearts[0]); // - старый метод

// hearts[1].after(div); до элемента

// удаление элемента
// btns[2].remove();
// wrapper.removeChild(hearts[1]);

// замена элемента
// hearts[1].replaceWith(circles[0]);
// wrapper.replaceChild(circles[0], hearts[0]); // старый метод

// div.innerHTML = '<h1>Hello World</h1>';
// div.textContent = 'Hi';

// Вставка HTML относительно объекта
div.insertAdjacentHTML('afterbegin', '<h1>Hello World</h1>'); // вставляет фрагмент в начало элемента
div.insertAdjacentHTML('afterend', '<h1>Hello World</h1>'); // вставляет фрагмент сразу после элемента
div.insertAdjacentHTML('beforebegin', '<h1>Hello World</h1>'); // вставляет фрагмент перед элементом
div.insertAdjacentHTML('beforeend', '<h1>Hello World</h1>'); // вставляет фрагмент в конец (перед концом) элемента
*/

// Для замены текста в каком-то диве или теге html достаточно просто получить элемент
// и через innerHTML или textContent добавить необходимое
const poster = document.querySelector('.promo__bg');
const genre = poster.querySelector('.promo__genre');
genre.textContent = 'драма';

// Получить содержимое элемента страницы можно и через innerHTML^
// const some = document.querySelector('.some').innerHTML;

// 
//////////////////////////////////////// СОБЫТИЯ ////////////////

const btn = document.querySelector('button');
// можно запускать обработчик обращаясь к DOM-дереву
/*
btn.onclick = () => {
  alert('button pushed');
};
*/

// лучший способ: EventListener
// в callback функции необязательно должен быть аргумент, но если идет то первым 
//обязательно аргумент, представляющий событие (event), которое мы вызываем
// круто то, что мы можем спокойно обратится к свойствам этого евента
// event.property, например к кому он привязан: event.target.
// Так мы получаем весь элемент, его можно копировать перенаправлять и т.д.

// также при получении элемента через target мы можем делать с ними все, что нужно.

// в этом методе обязательно есть callback функция, но можно сохдать ее отдельно и оперировать ею при необходимости

const logElement = (event) => {
    console.log(event.target);
};
// можно таким образом подготовить типовые функции и вешать их на события по необходимостию

btn.addEventListener('mouseenter', logElement);
// addEventListener - назначает обработчик а событий, а removeEventListener отменяет его
btn.removeEventListener('mouseenter', logElement);

btn.addEventListener('mouseenter', (event) => {
    console.log(event.target);
    event.target.style.color = 'red';
});
btn.addEventListener('mouseenter', (event) => {
    console.log(event.target);
    event.target.style.backgroundColor = 'blue';
});
btn.addEventListener('click', (event) => {
    console.log(event.target);
    event.target.remove();
});

// пример работы обработчика ограниченное количество раз

let i = 0;
const styleElement = (event) => {
    event.target.style.backgroundColor = 'red';
    event.target.style.color = 'blue';
    i++;

    if (i == 2) {
        btn.removeEventListener('click', styleElement);
    }
};

btn.addEventListener('click', styleElement);

// всплытие событий происходит когда одинаковый обработчик привязан к
// нескольким элементам DOM, в которых есть вложенность
// первым сработает внутренний элемент (самый вложенный элемент), потом его родитель и так далее по дереву.

/////////////////    ВАЖНО!!!   ///////////////////////////////
////////// отмена событий браузера по умолчанию ///////////////


const link = document.querySelector('a');
link.addEventListener('click', (event) => {
    event.preventDefault(); // отмена действий браузера по умолчанию
    // теперь при клике на ссылку (тег "а") мы не переходим как должны
    // по умолчанию на ютюб, а выполняем следующеее действие в теле callback функции

    console.log(event.target);
});

// При необходимости навесить одно событие на разные элементы, пользуем
// метод forEach (если  дело касается псевдомассивов).
const btns = document.querySelectorAll('button');
btns.forEach(btn => {
    btn.addEventListener('click', logElement, {
        once: true // еще один как бы аргумент - обработчик запускается только один раз
    });
});

// Обращение к узла и элементам DOM: родители дети и соседи))
// Распространенные задачи
// обратится к родителю элемента и изменить класс, например

//работаем от родителя

// childNodes, firstChild, lastChild
console.log(document.body.childNodes); // получение всех узлов, которые находятся внутри родителя body
// для получения всех эдементов в родителе к сожалению нет такого свойства
// для этой задачи придется вручную сделать перебор псевдомассива NodeList, который мы получаем
// от document.body.childNodes. И в процессе перебора избавиться от текстовых узлов (переносов строки)
// Здесь лучше использовать for ... of - он позволяет юзать break и continue

/*
console.log(document.body.childNodes);

for (let node of document.body.childNodes) {
  if (node.nodeName == "#text") { // сюда же можно добавить условие для других типов (комментарии и т.п.)
    continue;
  }

  console.log(node);
}
*/

// !!! ВАЖНО !!! ноды (узлы) это не элементы. Текстовой нодой например может быть просто й перенос строки
// Для получения элементов используются другие команды

console.log(document.body.firstChild); //первая нода в родителе
console.log(document.body.lastChild); // последняя нода в родителе

console.log(document.body.firstElementChild); //первый элемент в родителе
console.log(document.body.lastElementChild); // последний эдемент в родителе  

// ///////////////////////////////////////////////////// работаем от детей

console.log(document.querySelector('#current').parentNode); // родительский узел
// при дублировании .parentNode в строке кода мы поднимамся к родителю уровнем выше (к деду) и т.д.

//                                   ////    data    ////
// data- атрибуты (позволяют как-то шаблонизировать определенные части кода по какому-то признаку)
// на эти data-атрибуты очень удобно ориентироваться в скриптах (лучше чем с #id)
// обращение к аргументу:
console.log(document.querySelector('[data-current="3"]'));
// с помощью nextSibling и previousSibling получаем следующий либо предыдущий узел
console.log(document.querySelector('[data-current="3"]').nextSibling);
console.log(document.querySelector('[data-current="3"]').previousSibling);

// команды для обращения к элементам:

console.log(document.querySelector('#current').parentElement);
console.log(document.querySelector('[data-current="3"]').nextElementSibling);
console.log(document.querySelector('[data-current="3"]').previousElementSibling);

//
////////////// События для разработки на МОБИЛЬНОМ ///////////////
//
// http://youon.ru/%D0%90%D0%BD%D0%B4%D1%80%D0%BE%D0%B8%D0%B4/%D0%A0%D0%B0%D0%B7%D1%80%D0%B0%D0%B1%D0%BE%D1%82%D0%BA%D0%B0/touch-sobytiya-na-javascript-multitach-realizatsiya
/*
Всего используются 3 ключевых события:

touchstart - Коснулись экрана
touchend - Палец убрали
touchmove - Двигаем пальцем

touchenter - скользим по экрану и доходим до целевого элемента
touchleave - падец покидает границы элемента
touchcancel - палец выходит за пределы браузера


Если чтобы получить элемент на который заехала мышь или съехала, было достаточно вызвать event.target, 
то с touch-событиями не так всё просто.

Каждое касание должно идентифицироваться. И для этого используются списки:

touches - Все пальцы которые сейчас взаимодействуют с экраном ("Коснуты" экрана)

targetTouches - Список пальцев которые взаиможействуют с элементом

changedTouches - Список пальцев, которые учавствуют в текущем событии. Если например это событие touchend, 
то список будет содержать палец который был убран (Даже если остальные 4 пальца до сих пор на экране).

//

identifier - Уникальный ID касания

target - Сам объект к которому мы коснулись

PageX,PageY - Координаты касания на странице

Посмотреть уникальный ID единственного касания можно вызвав event.touches[0].identifier, а на IOS,
 если я не ошибаюсь надо делать так event.originalEvent.touches[0].identifier.
*/

//
//////////////////////////// Async, defer  //////////////////////////////////


/*
defer - позволяет продолжать загружать страницу, не ожидая загрузки скрипта
Скрипт загружается в фоновом режиме

Особенности defer:

1. Такие скрипты никогда не блокируют страницу (они загруаются в фоне, страница их не ждет).
2. Они всегда начинают срабатывать только после загрузки всего DOM-дерева
3. Они сохраняют порядок выполнения между собой согласно расположению в коде

Особенности async (независимый ни от кого скрипт):

1. Страница не ждет загрузки асинхронных скриптов.
2. Событие DOMContentLoaded и скрипты async не ждут друг друга.
3. Такие скрипты вообще никого не ждут. Как только они загрузились,
они сразу начинают выполнять свои функции. Не имеет значения в какой последовательности они располагаются в коде.
Это очень удобно для независимых скриптов, которые должны выполнятся, как тольк овы зашли на страницу.
Например, счетчик посещения сайта.

Когда используются скрипты с атрибутом async, нужно быть увереным, что у скрипта нет связи с DOM-струтурой и другими скриптами

//

Динамически загружаемые скрипты ведут себя по умолчанию как async, никого не ждут
для того, чтобы этого изьежать обращаемся к свойству скрипта .async
например: script.async и выставить ему значение false
Это предотвратит асинхронность такого динамического скрипта и они буду выполнятся согласно расположению в коде

типичная функция по добавлению скрипта:

function loadScript(src) {
  const script = document.createElement('script.test'); //создание
  script.src = src; // пусть скрипта, откуда он будет подгружаться
  script.async = false;
  document.body.append(script); // добавление в конец body
}

function loadScript("js/scriptTest.js")



*/