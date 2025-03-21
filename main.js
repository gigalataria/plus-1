const btn1 = document.querySelector(".btn1")
const btn2 = document.querySelector(".btn2")
const btnreset = document.querySelector(".btnreset")
const number1 = document.querySelector(".number1")
const number2 = document.querySelector(".number2")


let count1 = 0;
let count2 = 0;


btn1.addEventListener("click", () => {
number1.textContent = count1
count1++;
})


btn2.addEventListener("click", () => {
    number2.textContent = count2
    count2++;
    })

btnreset.addEventListener("click", () => {
        count1 = 0;
        count2 = 0;
        number1.textContent = count1;
        number2.textContent = count2;
    });