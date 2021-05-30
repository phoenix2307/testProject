'use strict';

// Задать вопрос: "Сколько фильмов вы уже посмотрели?"
// ответ от пользователя на вопрос: "Сколько фильмов вы уже просмотрели?"
let numberOfFilms;
/*неправильно обьявлять эту переменную внутри start(), потому что тогда лна станет локальной
и недоступной для остальной части кода*/

function start() {
  numberOfFilms = +prompt('Сколько фильмов вы уже посмотрели?', '');
  // проверка на пустую строку, отмену и если введеные символы являются не числом
  while (numberOfFilms == '' || numberOfFilms == null || isNaN(numberOfFilms)) {
    // повторить вопрос пользователю
    numberOfFilms = +prompt('Сколько фильмов вы уже посмотрели?', '');
  }
}
start();

// главный объект
let personalMovieDB = {
  count: numberOfFilms, // первый ответ на  вопрос
  movies: {}, // в это свойство поместить пустой обьект
  actors: {}, // тоже поместить пустой обьект
  genres: [], // поместить пустой массив
  privat: false // поместить boolean значение false
};

// обернули цикл оценки фильмов в функцию, чтобы ее можно было вызывать по требованию
function rememberMyFilms() {
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
}
// rememberMyFilms();

function detectPersonalLevel() {
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
}
detectPersonalLevel();

// если у меня не приватные настройки, то показывать мой главный объект
// суть функции - если аргумент не равен себе (это то же самое что аргумент == false), то вывести в консоль...
// мой вариант понятнее для меня, но не такой красивый

/*
function showMyDB() {
  if (personalMovieDB.privat == false) {
    console.log(personalMovieDB);
  }
}
*/
function showMyDB(hidden) {
  if (!hidden) {
    console.log(personalMovieDB);
  }
}
showMyDB(personalMovieDB.privat);

/*function writeYourGenres() {
  for (let i = 1; i <= 3; i++) {
    let genre = +prompt(`Ваш любимый жанр под номером ${i}`);
    personalMovieDB.genres.push(genre);
  }
}*/
function writeYourGenres() {
  for (let i = 1; i <= 3; i++) {
    // let genre = prompt(`Ваш любимый жанр под номером ${i}`);
    // personalMovieDB.genres[i - 1] = genre;

    // с использованием метода массивов .push()
    // personalMovieDB.genres.push(genre);

    // либо вообще без локальной переменной:
    personalMovieDB.genres[i - 1] = prompt(`Ваш любимый жанр под номером ${i}`);

  }
}

writeYourGenres();