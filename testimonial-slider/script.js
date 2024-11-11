

const testimonials = [
    {
        name:"Cherise G",
        photoUrl:"https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        text : "This is simply unbelievable! I would be lost without Apple. The very best. Not able to tell you how happy I am with Apple."
    },

   {
        name:"Cherise G",
        photoUrl:"https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=1964&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        text : "This is simply unbelievable! I would be lost without Apple. The very best. Not able to tell you how happy I am with Apple."
    


   },
   {
        name:"Cherise G",
        photoUrl:"https://images.unsplash.com/photo-1479936343636-73cdc5aae0c3?q=80&w=1780&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        text : "I would also like to say thank you to all your staff. Wow what great service, I love it! Apple impressed me on multiple levels."

   },
   {
        name:"Cherise G",
        photoUrl:"https://images.unsplash.com/photo-1499229694635-fc626e0d9c01?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NzN8fGZyZWUlMjBpbWFnZXMlMjBvZiUyMHBlb3BsZXxlbnwwfHwwfHx8MA%3D%3D",
        text : "Thank you for making it painless, pleasant and most of all hassle free! I wish I would have thought of it first. The very best."

   }
]

const imgEl = document.querySelector("img");
const textEl = document.querySelector(".text");
const usernameEl = document.querySelector(".username");

let index = 0;
updateTestimonials();

function updateTestimonials(){
    const {name,photoUrl,text} = testimonials[index];

    imgEl.src = photoUrl;
    textEl.innerText = text;
    usernameEl.innerText = name;
    index++;
    if(index === testimonials.length){
        index = 0;
    }
    setTimeout(() => {
        updateTestimonials();
    }, 2000);
}