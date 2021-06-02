'use strict';

let numberOfFilms;

// function start() {
//   numberOfFilms = +prompt('Сколько фильмов вы уже посмотрели?', '');
//   // проверка на пустую строку, отмену и если введеные символы являются не числом
//   while (numberOfFilms == '' || numberOfFilms == null || isNaN(numberOfFilms)) {
//     // повторить вопрос пользователю
//     numberOfFilms = +prompt('Сколько фильмов вы уже посмотрели?', '');
//   }
// }
// start();

// главный объект
let personalMovieDB = {

  count: 0, // первый ответ на  вопрос
  movies: {}, // в это свойство поместить пустой обьект
  actors: {}, // тоже поместить пустой обьект
  genres: [], // поместить пустой массив
  privat: false, // поместить boolean значение false
  start: function () {
    personalMovieDB.count = +prompt('Сколько фильмов вы уже посмотрели?', '');
    // проверка на пустую строку, отмену и если введеные символы являются не числом
    while (personalMovieDB.count == '' || personalMovieDB.count == null || isNaN(personalMovieDB.count)) {
      // повторить вопрос пользователю
      personalMovieDB.count = +prompt('Сколько фильмов вы уже посмотрели?', '');
    }
  },
  rememberMyFilms: function () {
    for (let i = 0; i < 2; i++) {
      let answer1 = prompt('Один из последних просмотренных фильмов?', '');
      let answer12 = prompt('На сколько вы можете его оценить?', '');
      /*проверка ответов на условия по ТЗ
      (если ответ не равен null (null возвращается, когда в prompt мы нажимаем отмену
       или оставляем пустую строку))*/
      if (answer1 != null && answer12 != null && answer1 != '' && answer12 != '' && answer1.length < 50) {
        personalMovieDB.movies[answer1] = answer12;
        console.log('done');
      } else { //возвращение пользователя к повторному ответу н вопросы
        console.log('error');
        i--; // перекидывает нас в начало цикла с уменьшенным значением итератора, для еще одной попытки до тех пор, пока
      }

    }
  },
  detectPersonalLevel: function () {
    if (personalMovieDB.count < 10) {
      console.log('Просмотрено довольно мало фильмов');
      // alert('Просмотрено довольно мало фильмов');
    } else if (personalMovieDB.count >= 10 && personalMovieDB.count <= 30) {
      console.log('Вы классический зритель');
      // alert('Вы классический зритель');
    } else if (personalMovieDB.count > 30) {
      console.log('Вы киноман');
      // alert('Вы киноман');
    } else {
      console.log('Произошла ошибка!');
      // alert('Произошла ошибка!');
    }
  },
  writeYourGenres: function () {
    for (let i = 1; i <= 3; i++) {
      // с использованием метода массивов .push()
      // personalMovieDB.genres.push(genre);
      // либо вообще без локальной переменной:
      personalMovieDB.genres[i - 1] = prompt(`Ваш любимый жанр под номером ${i}`);
      while (personalMovieDB.genres[i - 1] == '' || personalMovieDB.genres[i - 1] == null) {
        personalMovieDB.genres[i - 1] = prompt(`Ваш любимый жанр под номером ${i}`);
      }
    }
    personalMovieDB.genres.forEach((value, index) => {
      console.log(`Любимый жанр# ${index + 1} - это ${value}`);
    });

  },
  toggleVisibleMyDB: function () {
    if (personalMovieDB.privat == false) {
      personalMovieDB.privat = true;
    } else {
      personalMovieDB.privat = false;
    }
  },
  showMyDB: function (hidden) {
    if (!hidden) {
      console.log(personalMovieDB);
    }
  },

};

personalMovieDB.start();
personalMovieDB.rememberMyFilms();
personalMovieDB.detectPersonalLevel();
personalMovieDB.toggleVisibleMyDB();
personalMovieDB.showMyDB();
personalMovieDB.writeYourGenres();

console.log(personalMovieDB);

// метод toggleVisibleMyDB при ывзове проверяет свойство privat, если он false - переключает в true, усли true - переклчает в false. Протестить вместе с showDB.///
// const toggleVisibleMyDB = function (hidden) {
//   if (!hidden) {
//     personalMovieDB.privat = true;
//   } else {
//     personalMovieDB.privat = false;
//   }
// }
// обернули цикл оценки фильмов в функцию, чтобы ее можно было вызывать по требованию
// function rememberMyFilms() {
//   for (let i = 0; i < 2; i++) {
//     let answer1 = prompt('Один из последних просмотренных фильмов?', '');
//     let answer12 = prompt('На сколько вы можете его оценить?', '');
//     /*проверка ответов на условия по ТЗ
//     (если ответ не равен null (null возвращается, когда в prompt мы нажимаем отмену
//      или оставляем пустую строку))*/
//     if (answer1 != null && answer12 != null && answer1 != '' && answer12 != '' && answer1.length < 50) {
//       personalMovieDB.movies[answer1] = answer12;
//       console.log('done');
//     } else { //возвращение пользователя к повторному ответу н вопросы
//       console.log('error');
//       i--; // перекидывает нас в начало цикла с уменьшенным значением итератора, для еще одной попытки до тех пор, пока
//     }

//   }
// }

// function detectPersonalLevel() {
//   if (personalMovieDB.count < 10) {
//     console.log('Просмотрено довольно мало фильмов');
//     // alert('Просмотрено довольно мало фильмов');
//   } else if (personalMovieDB.count >= 10 && personalMovieDB.count <= 30) {
//     console.log('Вы классический зритель');
//     // alert('Вы классический зритель');
//   } else if (personalMovieDB.count > 30) {
//     console.log('Вы киноман');
//     // alert('Вы киноман');
//   } else {
//     console.log('Произошла ошибка!');
//     // alert('Произошла ошибка!');
//   }
// }
// detectPersonalLevel();

// если у меня не приватные настройки, то показывать мой главный объект
// суть функции - если аргумент не равен себе (это то же самое что аргумент == false), то вывести в консоль...
// мой вариант понятнее для меня, но не такой красивый

// function showMyDB(hidden) {
//   if (!hidden) {
//     console.log(personalMovieDB);
//   }
// }
// showMyDB(personalMovieDB.privat);

// function writeYourGenres() {
//   for (let i = 1; i <= 3; i++) {
//     // с использованием метода массивов .push()
//     // personalMovieDB.genres.push(genre);

//     // либо вообще без локальной переменной:
//     personalMovieDB.genres[i - 1] = prompt(`Ваш любимый жанр под номером ${i}`);

//   }
// }

// writeYourGenres();