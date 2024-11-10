const imageContainerEl = document.querySelector(".image-container");

const btnEl = document.querySelector(".btn");
console.log(btnEl);

btnEl.addEventListener("click", () => {
    imageNum = 10;
    addImg();
    
})

function addImg(){
    // i have to create the images .. 
    // then add img link to the src file .. 
    // manipulate the random number using math.random() 
    //add this img element to image container:

    for(let inx = 0; inx < imageNum ; inx++){
        const newImg = document.createElement("img");
        newImg.src = `https://picsum.photos/300?random=${Math.floor(Math.random() * 2000)}`

        imageContainerEl.appendChild(newImg);

    }

}