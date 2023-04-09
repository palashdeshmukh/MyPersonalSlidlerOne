let slideIndex =1;
Slideshow(slideIndex);
function plusSlides(n){
    Slideshow(slideIndex+=n);
}

function Slideshow(n){
    let i=0;
    let slides=document.getElementsByClassName("slider-main-div-box-container");
    if(n>slides.length){
        slideIndex=1;
    }
    if(n<1){
        slideIndex=slides.length;
    }
    for(i=0;i<slides.length;i++){
        slides[i].style.display="none";
    }
    slides[slideIndex-1].style.display="block";
}