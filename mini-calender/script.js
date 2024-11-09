const monthname = document.getElementById("month-name")
const dayname = document.getElementById("day-name")
const dayNum = document.getElementById("day-number")
const year = document.getElementById("year")

const date = new Date();
const month = date.getMonth();
monthname.innerText = date.toLocaleString("en", {month : "long"})
dayname.innerText = date.toLocaleString("en",{
    weekday: "long"
})
dayNum.innerText = date.getDate();
year.innerText = date.getFullYear();