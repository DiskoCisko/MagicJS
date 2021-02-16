
let year = document.querySelector('.year');
let min = document.querySelector('.min');
let sec = document.querySelector('.sec');

let color = {
    red: 1,
    green: 149,
    blue: 242,

    getTimeColor(){
        let date = new Date();
        sec.innerHTML = date.getSeconds();
        min.innerHTML = date.getMinutes();
        year.innerHTML = date.getHours();
        
        sec.style.backgroundColor = `rgb(${Math.floor(this.red + (date.getSeconds())*4)}, 
                                               ${Math.floor(this.green)}, 
                                                ${Math.floor(this.blue)})`;
        
        min.style.backgroundColor = `rgb(${Math.floor(this.red + (date.getMinutes())*4)}, 
                                               ${Math.floor(this.green)}, 
                                                ${Math.floor(this.blue)})`;
    
        year.style.backgroundColor = `rgb(${Math.floor(this.red + (date.getHours())*10)}, 
                                               ${Math.floor(this.green)}, 
                                                ${Math.floor(this.blue)})`;

        
    }
};

setInterval(function(){
    color.getTimeColor();
}, 1000);
console.dir(sec.style)