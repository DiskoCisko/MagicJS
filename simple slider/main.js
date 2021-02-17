let sliders = document.querySelectorAll(".slider-container"); // ищем слайд
let sliderIndex = 0; 

/**
 * Переприсваевает класс active по клику
 * @param {number} n номер слайда
 */

function ShowSlider(n) {
    document.querySelector(".slider--oneitem>.active").classList.remove("active");
    sliders[n].classList.add("active");   
}

let sliderDots = document.querySelectorAll(".slider-dots-item");                        // находим точки

sliderDots.forEach(function(sliderDot){                                                 // перебираем масив с точками 
    sliderDot.addEventListener("click", function(event){                                // каждый элемент масива отслеживаем на клик
        document.querySelector(".slider-dots .active").classList.remove("active");      // приклике снимаем существующий класс active
        event.target.classList.add("active");                                           // и добавляем active элементу по которому был клик
        for (let i = 0; i<sliderDots.length; i ++) {                                    // перебираем масив с точками
            if (event.target.parentElement.children[i] == event.target) {               // находим номер точки по которой был клик
                console.log(i);
                ShowSlider(i);                                                          // и с этим номером вызываем функцию showSlider
            }
        }
    })
})