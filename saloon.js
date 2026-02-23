const slides= document.querySelectorAll(".slide");
let currentIndex =0;
function slideShow(index){
    slides.forEach(slide=>
        slide.classList.remove("active")
    );
    slides[index].classList.add("active");
}

/*---NEXT----*/
document.querySelector(".next").addEventListener("click",()=>{
currentIndex++;
if(currentIndex>=slides.length) currentIndex =0;
slideShow(currentIndex);
});

document.querySelector(".prev").addEventListener('click',()=>{
    currentIndex--;
    if(currentIndex<0) {currentIndex=slides.length-1}
        slideShow(currentIndex);
    
});

document.querySelector(".heading-1").addEventListener("click",()=>{
    document.querySelector(".paragraph-1").classList.toggle("one");
    document.querySelector(".heading-1").style.color="red";

})
document.querySelector(".heading-2").addEventListener("click",()=>{
    document.querySelector(".paragraph-2").classList.toggle("two")
    document.querySelector(".heading-2").style.color="red";
})
document.querySelector(".heading-3").addEventListener("click",()=>{
    document.querySelector(".paragraph-3").classList.toggle("three")
    document.querySelector(".heading-3").style.color="red";
})
document.querySelector(".heading-4").addEventListener("click",()=>{
    document.querySelector(".paragraph-4").classList.toggle("four")
    document.querySelector(".heading-4").style.color="red";
})

/*------slides------*/

const slide = document.querySelectorAll(".comment");
let index = 0;

function showNextSlide(){
    const current = slide[index] ;
    current.classList.remove("active")
    current.classList.add("exit-left")

    index = (index + 1) % slide.length;
    const next = slide[index];
    next.classList.remove("exit-left"),
    next.classList.add("active")
}
setInterval(showNextSlide,5000)

/*----booking----*/

document.querySelector("#booking")
.addEventListener("submit",(e)=>{
//e.preventDefault();
let name = document.querySelector('#name').value
let time = document.querySelector("#time").value
let number = document.querySelector("#number").value
let style = document.querySelector("#style").value
let specificTime = document.querySelector("#specific-time").value
console.log({name,number,time,specificTime,style})

 
let phoneNumber = "256759258767"
let message = `
MY BOOKING
NAME:${name}
TIME:${time}
NUMBER:${number}
STYLE:${style}
SPECIFIC-TIME:${specificTime}
`
let url = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`
console.log(url)
window.open(url,"_blank")
//e.target.reset();


})



