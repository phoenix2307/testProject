'use strict';

//
// PROTOtype

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