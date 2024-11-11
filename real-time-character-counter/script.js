const textareaEl = document.getElementById("textarea");
const totalcounterEl = document.getElementById("total-counter");
const remainingEl = document.getElementById("remaining-counter");

remainingEl.innerText = textareaEl.getAttribute("maxlength");

textareaEl.addEventListener("keyup",()=>{
    updatecounter();

})
function updatecounter(){
    totalcounterEl.innerText = textareaEl.value.length;

    remainingEl.innerText = textareaEl.getAttribute("maxLength") -  textareaEl.value.length;


}