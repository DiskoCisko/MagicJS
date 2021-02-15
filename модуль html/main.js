let container = document.querySelector('.container'); // ищим банер с классом container
let title = document.querySelector('.title'); // ищем заголовок с классом title


let banner = {
    backgrounColor: '#9f9', // переменная с фоном
    textTitle: 'Сюда вобьём текст', // переменная с текстом
}

title.innerHTML = banner.textTitle; // добовляем текст в h1
container.style.backgroundColor = banner.backgrounColor; // меняем цвет в банере
