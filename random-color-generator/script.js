//create 30 div color container ; 
// random - color -container :
//generate color function : 
const containerEl = document.querySelector(".container");

for(let i = 0; i < 30 ; i++){
    const newEl = document.createElement("div")
    newEl.classList.add("color-container");
    containerEl.appendChild(newEl);
}

const colorEl = document.querySelectorAll(".color-container");
generateColor();

function generateColor(){
    colorEl.forEach((newEl)=>{
        const newcode =randomCodeGenerator();
        newEl.style.backgroundColor = "#" + newcode;
        newEl.innerText = "#" + newcode;


    })

}

function randomCodeGenerator(){
    //here i want to create color code : - for that empty string , for loop , random-color code number + add that number 
    const charel = "0123456789abcdef";
    const charlength = 6;
    let charcode = "";
    for(let i = 0; i < charlength; i++){
        //here mistake 1 : i have to create random number first : 
        const randomNo = Math.floor(Math.random()*charel.length);
        charcode += charel.substring(randomNo, randomNo + 1);
        console.log(charcode);
    } 
    return charcode;
}