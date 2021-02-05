$(document).ready(function(){
    let scrollLink = $(".scroll");

    scrollLink.click(function(e) {
        e.preventDefault();
        $('body, html').animate({
            scrollTop: $(this.hash).offset().top
        }, 1500 );
    });
});

const text = "Developpeur Front End";
let index = 0;

const writeText = function(){
    document.querySelector('#ptext').innerText = text.slice(0, index);
    index++;
    if(index > text.lengt){
        index = 0;
    }
};
setInterval(writeText, 200);
