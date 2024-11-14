//three element select karayche ahet : 
// 2 buttons var addeventlistner :
// tyasathi updateGallary : function ani tyachyasobat settimeout reset logic : 

const imgEl = document.querySelector(".image-container");

const prevEl =document.getElementById("prev");
const nextEl = document.getElementById("next");
let x = 0;
let timer;
prevEl.addEventListener("click",()=>{
     x = x - 45;
    clearTimeout(timer);
    updateGallary();
    

})
nextEl.addEventListener("click",()=>{
    x = x + 45;
    clearTimeout(timer);
   updateGallary();
   

})

function updateGallary(){
    imgEl.style.transform = `perspective(1000px) rotateY(${x}deg)`;

  timer =   setTimeout(()=>{
        x = x + 45;
        updateGallary();

    },3000)


}
updateGallary();