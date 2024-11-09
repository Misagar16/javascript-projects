const containerEl = document.querySelector(".container");
const careers = ["YOUTUBER","INSTRUCTOR","WEB DEVOLOPER","FREELANCER"]
let careerInx = 0;
let characteridx = 0;

updatetxt();

function updatetxt(){
    characteridx++;
    containerEl.innerHTML = `<h1>I AM ${careers[careerInx].slice(0,1) === "I" ? "AN": "A"} ${careers[careerInx].slice(0,characteridx)}</h1>`;
    

    if(characteridx === careers[careerInx].length){
        careerInx++;
        characteridx = 0;
    }
    if(careerInx === careers.length){
        careerInx =0;
    }
    setTimeout(updatetxt,400);
}
