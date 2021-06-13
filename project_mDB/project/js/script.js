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
        movieList = document.querySelector('.promo__interactive-list'),
        addForm = document.querySelector('form.add'),
        addInput = addForm.querySelector('.adding__input'),
        checkbox = addForm.querySelector('[type="checkbox"]');

    addForm.addEventListener('submit', (event) => {
        event.preventDefault(); // убрать перезагрузку страницы при нажатии на кнопку (браузер по умолчанию)

        let newFilm = addInput.value;
        // необходим let, потому что в проверке н адлину строки будет изменяться содержание newFilm (три точки)
        const favorite = checkbox.checked;
        // проверка на заполненое поле ввода
        if (newFilm) {

            if (newFilm.length > 21) {
                newFilm = `${newFilm.substring(0, 21)}...`;
            }

            if (favorite) {
                console.log('Добавлен любимый фильм');
            }

            // добавление фильма в массив movieDB.movies
            movieDB.movies.push(newFilm);
            // сортировка в массиве по алфавиту (играет роль большие или маленькие буквы)
            sortArr(movieDB.movies);
            // создаем новый список фильмов и выводим его на монитор
            createMovieList(movieDB.movies, movieList);
        }

        // очистка формы input после добавления фильма
        event.target.reset();

    });

    // функция удаления рекламных блоков
    const deleteAdv = (arr) => {
        arr.forEach(item => {
            item.remove();
        });
    };

    const makeChanges = () => {
        genre.textContent = 'драма';
        poster.style.backgroundImage = 'url("img/bg.jpg")';
    };

    const sortArr = (arr) => {
        arr.sort();
    };

    function createMovieList(films, parent) {
        // films - массив фильмов, которые мы будем добавлять и сортировать
        // parent - какой родительский блок будет использовать эти films
        parent.innerHTML = '';
        // movieList.innerHTML = '';
        sortArr(films);

        films.forEach((film, index) => {
            parent.innerHTML += `
                <li class="promo__interactive-item">${index + 1} ${film}
                    <div class="delete"></div>
                </li>
            `;
        });

        // получаем все корзины
        document.querySelectorAll('.delete').forEach((btn, index) => {
            // index - порядковый нормер элемента, который удаляется
            btn.addEventListener('click', () => {
                // удаление родительского элемента из верстки
                btn.parentElement.remove();
                // удаление фильма из массива
                films.splice(index, 1); // можно использовать films
                createMovieList(films, parent);
            });
        });

    }

    deleteAdv(adv);
    makeChanges();
    // при загрузке страницы нужно отоюразить стартовый список фильмов - вызываем функцию createMovieList
    createMovieList(movieDB.movies, movieList);

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