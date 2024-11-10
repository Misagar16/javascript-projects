
const inputEl = document.querySelector(".input")
// console.log(inputEl.checked);

const bodyEl = document.querySelector("body");
// console.log(bodyEl);


inputEl.checked = JSON.parse(localStorage.getItem("mode"));

updateBody();
function updateBody(){
    if(inputEl.checked){
        bodyEl.style.background = "black";
    }else {
        bodyEl.style.background = "white";
    }
}
inputEl.addEventListener("input", () => {
    updateBody();
    updateLocalStorage();

});
 function updateLocalStorage (){
    localStorage.setItem("mode",JSON.stringify(inputEl.checked));
 }

//summary : select input and body 
// 2. write the toggle function ..
//3. store the status of the inputelement in the local storage : here you have use json stringify and parse method with localstorage method 
//4. add event listner: to input element 
