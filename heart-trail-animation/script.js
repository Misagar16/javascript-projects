const bodyel = document.querySelector("body");

bodyel.addEventListener("mousemove", (anything)=>{
    const xpos = anything.offsetX;
    const ypos = anything.offsetY;

    const spanEL = document.createElement("span")
    bodyel.appendChild(spanEL);
    spanEL.style.left = xpos + "px";
    spanEL.style.top = ypos + "px";
    const size = Math.random()*100;
    spanEL.style.width = size + "px";
    spanEL.style.height = size + "px";
    setTimeout(()=>{
        spanEL.remove();
    },3000)

})