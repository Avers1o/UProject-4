/* Задание на урок:

1) У нас уже есть рабочее приложение, состоящее из отдельных функций. Представьте, что
перед вами стоит задача переписать его так, чтобы все функции стали методами объекта personalMovieDB
Такое случается в реальных продуктах при смене технологий или подхода к архитектуре программы.

2) Создать метод toggleVisibleMyDB, который при вызове будет проверять свойство privat. Если оно false - он
переключает его в true, если true - переключает в false. Протестировать вместе с showMyDB.

3) В методе writeYourGenres запретить пользователю нажать кнопку "отмена" или оставлять пустую строку. 
Если он это сделал - возвращать его к этому же вопросу. После того, как все жанры введены - 
при помощи метода forEach вывести в консоль сообщения в таком виде:
"Любимый жанр #(номер по порядку, начиная с 1) - это (название из массива)"*/

'use strict';

// Код возьмите из предыдущего домашнего задания.

const personalMovieDB = {

    //Свойства.

    count: null,
    movies: {},
    actors: {},
    genres: [],
    privat: false,
    
    //Методы.

    start: function() {

        /*Так как наша функция start() отныне является методом и находится внутри объекта personalMovieDB, 
        нужда в использовании переменной numbersOfFilms отпадает. Будет работать напрямую с свойством count.*/

        personalMovieDB.count = +prompt("'Сколько фильмов вы уже посмотрели?'", "10");
    
        while (personalMovieDB.count == '' || personalMovieDB.count == null || isNaN(personalMovieDB.count)) {
            personalMovieDB.count = +prompt("'Сколько фильмов вы уже посмотрели?'", "10");
        }
    },
    rememberMyFilms: function() {
        for (let i = 1; i <= 2; i++) {
            let film = prompt('Один из последних просмотренных фильмов?', 'Logan'),
                rating = prompt('На сколько оцените его?', '8.1');

            if ((film && rating != '') && (film && rating != null) && (film.length <= 50)) {
                personalMovieDB.movies[film] = rating;
                console.log('Done');
            } else {
                i--;
                console.log('Error');
            }
        }
    },
    detectPersonalLevel: function() {
        if (personalMovieDB.count < 10) {
            alert('Просмотрено довольно мало фильмов!');
        } else if (personalMovieDB.count >= 10 && personalMovieDB.count < 30) {
            alert('Вы классический зритель!');
        } else if (personalMovieDB.count >= 30) {
            alert('Вы киноман!');
        } else {
            alert('Произошла ошибка!');
        } 
    },
    showMyDB: function(hidden) {

        /*hidden - скрытый.*/

        if (!hidden) {
            console.log(personalMovieDB);
        }

        /*Имеется в виду что, если база данных не скрытая (не приватная/публичная), то она выводится в консоль.
        Агрументу hidden передается значение personalMovieDB.privat. !hidden == true, так как значение самого personalMovieDB.privat == false,
        поэтому такая условная конструкция работает.*/
    },
    toggleVisibleMyDB: function() {
        if (personalMovieDB.privat) {
            personalMovieDB.privat = false;
            console.log('База данных стала публичной');
        } else {
            personalMovieDB.privat = true;
            console.log('База данных стала приватной');
        }

        /*Условие if (personalMovieDB.privat) само подразумевает, что personalMovieDB.privat = true, иначе она не будет выполняться.*/
    },
    writeYourGenres: function() {
        for (let i = 1; i <= 3; i++) {
            personalMovieDB.genres[i - 1] = prompt(`Ваш любимый жанр под номером ${i}`);
        }
    }
};

/*Когда мы работаем с консолью в браузере, каждый раз получаем значение undefined, в отличие от VSCode.
Дело в том, что сама команда console.log() ничего не возвращает и не имеет ключевого слова return.
То же самое может происходить при вызове функции или метода, созданных вручную, не содержащих return.*/

personalMovieDB.start();

personalMovieDB.rememberMyFilms();

personalMovieDB.detectPersonalLevel();

personalMovieDB.writeYourGenres();

personalMovieDB.showMyDB(personalMovieDB.privat);

personalMovieDB.toggleVisibleMyDB();