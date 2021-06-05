/* Задания на урок:

1) Удалить все рекламные блоки со страницы (правая часть сайта) ++

2) Изменить жанр фильма, поменять "комедия" на "драма"

3) Изменить задний фон постера с фильмом на изображение "bg.jpg". Оно лежит в папке img.
Реализовать только при помощи JS

4) Список фильмов на странице сформировать на основании данных из этого JS файла.
Отсортировать их по алфавиту 

5) Добавить нумерацию выведенных фильмов */

'use strict';

const movieDB = {
    movies: [
        "Логан",
        "Лига справедливости",
        "Ла-ла лэнд",
        "Одержимость",
        "Скотт Пилигрим против..."
    ]
};

// 1) Первое задание
document.querySelector('.promo__adv').remove();

// 2) Второе задание

// document.querySelector('.promo__genre').replaceWith(genreDrama);
document.querySelector('.promo__genre').remove();
const divGenre = document.querySelector('.promo__bg');
divGenre.insertAdjacentHTML('afterbegin', '<div class="promo__genre">ДРАМА</div>');

// 3) 

// divGenre.style.backgroundImage = '../img/bg.jpg';
// 4)