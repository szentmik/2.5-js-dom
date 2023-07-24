const numbers = document.querySelectorAll(".num");
const btns = document.querySelectorAll("button");

let result;

btns[0].addEventListener("click", () => {

    result = parseInt(numbers[0].value) + parseInt(numbers[1].value)
});

btns[1].addEventListener("click", () => {

    result = parseInt(numbers[0].value) - parseInt(numbers[1].value)
});

btns[2].addEventListener("click", () => {
 
    result = parseInt(numbers[0].value) * parseInt(numbers[1].value)
});

btns[3].addEventListener("click", () => {
    
    result = parseInt(numbers[0].value) / parseInt(numbers[1].value)
});

btns[4].addEventListener("click", () => {
    document.querySelector(".result").innerHTML = result;
});