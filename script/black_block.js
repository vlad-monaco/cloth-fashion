
let flex__block = document.querySelectorAll(".flex__block");
let slide__block = document.querySelectorAll(".container__slider__user .slide__block");
let like__container = document.querySelector(".like__container");
let like__container2 = document.querySelector(".like__container2");
let user__black__container = document.querySelectorAll(".user__black__container");


flex__block.forEach(flex__block__el => {
    flex__block__el.addEventListener("mouseover", func, false);
    flex__block__el.addEventListener("mouseout", func1, false);
    const blockDark = document.createElement('div');
    function func(event){   
    var target = event.target;
    
   blockDark.style.cssText = `
                                display:block;
                                color:white;
                                background-color:rgba(0,0,0,0.7);
                                width: 100%;
                                max-width: 287px;
                                height: 287px;
                                margin-right: 32px;`;
    flex__block__el.append(blockDark);
    var result = this.compareDocumentPosition(like__container);
    slide__block.forEach(slide__block__el => {
        if(result == 20){
            like__container.style.display="block";
        }
    });
    result = this.compareDocumentPosition(like__container2);
    slide__block.forEach(slide__block__el => {
        if(result == 20){
            like__container2.style.display="block";
        }
    });
    
}
function func1()
{  
    blockDark.style.display="none";
    like__container.style.display="none";
    like__container2.style.display="none";
}
});
