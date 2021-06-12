'use strict';

document.addEventListener('DOMContentLoaded', () => {
    const movieDB = {
        movies: [
            "Логан",
            "Лига справедливости",
            "Ла-ла лэнд",
            "Одержимость",
            "Скотт Пилигрим против..."
        ]
    };

    const adv = document.querySelectorAll('.promo__adv img'),
        poster = document.querySelector('.promo__bg'),
        genre = poster.querySelector('.promo__genre'),
        movieList = document.querySelector('.promo__interactive-list');

    adv.forEach(item => {
        item.remove();
    });

    genre.textContent = 'драма';

    poster.style.backgroundImage = 'url("img/bg.jpg")';

    movieList.innerHTML = '';

    movieDB.movies.sort();

    movieDB.movies.forEach((film, index) => {
        movieList.innerHTML += `
      <li class="promo__interactive-item">${index + 1} ${film}
          <div class="delete"></div>
      </li>
      `;
    });
});







/*
МОЙ КОРЯВЫЙ ВАРИАНТ :))
const movieDB = {
    movies: [
        "Логан",
        "Лига справедливости",
        "Ла-ла лэнд",
        "Одержимость",
        "Скотт Пилигрим против..."
    ]
};

console.log(movieDB.movies[0]);

const adv = document.querySelectorAll('.promo__adv img'),
    poster = document.querySelector('.promo__bg'),
    genre = poster.querySelector('.promo__genre'),
    movieList = document.querySelector('.promo__interactive-list');

adv.forEach(item => {
    item.remove();
});

genre.textContent = 'драма';

poster.style.backgroundImage = 'url("img/bg.jpg")';

movieList.innerHTML = '';

movieDB.movies.sort();

movieDB.movies.forEach((film, index) => {
    movieList.innerHTML += `
    <li class="promo__interactive-item">${index + 1} ${film}
        <div class="delete"></div>
    </li>
    `;
});

const newFilm = document.querySelector('.adding__input'); // получение инпута с фильмом
const btn = document.querySelector('button');
// новая строка с правильным форматом
let formFilm = '';
const filterFilm = () => {
    let arrFilm = newFilm.value.split('');
    if (arrFilm.length > 21) {
        let limit = arrFilm.join('');
        formFilm = `${limit.substring(0, 21)} ...`;
    } else {
        formFilm = arrFilm.join('');
    }
    // formFilm.toLowerCase();

};

const radio = document.querySelector('.yes').previousElementSibling;

const addFilm = (event) => {
    // отменить перезагрузку
    event.preventDefault();
    filterFilm();
    movieDB.movies.push(formFilm);

    console.log(movieDB.movies);
    movieDB.movies.sort();
    movieList.innerHTML = '';

    movieDB.movies.forEach((film, index) => {
        movieList.innerHTML += `
            <li class="promo__interactive-item">${index + 1} ${film}
                <div class="delete"></div>
            </li>
            `;
    });
    if (radio.checked == true) {
        console.log('Добавляем любимый фильм');
    }
};
btn.addEventListener('click', addFilm);

const bin = document.querySelectorAll('.delete');

bin.forEach(btnDelete => {
    const deleteFilm = function () {
        btnDelete.previousElementSibling = '';
    };
    btnDelete.addEventListener('click', deleteFilm);

});
*/