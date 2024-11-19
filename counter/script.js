const increment = document.querySelector("#increment");
const decrement = document.querySelector("#decrement")
const reset = document.querySelector("#reset");
const countdisplay = document.getElementById("count")

let counter = 0;

increment.addEventListener("click", function(){
    counter++;
    countdisplay.textContent = counter;
})
decrement.addEventListener("click", function(){
    if(counter > 0 ){
        counter--;
        countdisplay.textContent = counter;

    }
})
reset.addEventListener("click",function(){
    counter = 0;
    countdisplay.textContent = counter
})