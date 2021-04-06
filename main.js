//selecting elements
const slider=document.querySelectorAll('.slide')
prevBtn=document.querySelector('.prev')
nextBtn=document.querySelector('.next')
current=0


//clear the slider
function reset(){
    for(let i=0;i<slider.length;i++){
        slider[i].style.display='none'
    }
}
//init slider
function slideStater(){
    reset()
    slider[0].style.display='flex'
}

//show prev
function slidePrev(){
    reset()
    slider[current-1].style.display='flex'
    current--
}
//show next
function slideNext(){
    reset()
    slider[current+1].style.display='flex'
    current++
}

//prev btn click
prevBtn.addEventListener('click',function(){
    if(current===0){
        current=slider.length;
    }
    slidePrev()
})

//next btn click
nextBtn.addEventListener('click',function(){
    if(current===slider.length-1){
        current=-1
    }
    slideNext()
})


slideStater();