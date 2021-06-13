'use strict';

const p = document.querySelectorAll('p');
console.log(p);

// динамическое добавление скрипта на страницу

function loadScript(src) {
  const script = document.createElement('script.test'); //создание
  script.src = src; // пусть скрипта, откуда он будет подгружаться
  script.async = false;
  document.body.append(script); // добавление в конец body
}