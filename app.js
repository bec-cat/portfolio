const sections = document.querySelectorAll('.section');
const secBtns = document.querySelectorAll('.ctrls');
const secBtn = document.querySelectorAll('.ctrl');
const allsec = document.querySelector('.main-content');

function PageTransition() {
    //buton clicked active class
    for(let i = 0; i < secBtn.length; i++)
    {
        secBtn[i].addEventListener('click', function(){
            let currentBtn = document.querySelectorAll('.active-btn');
            currentBtn[0].className = currentBtn[0].className.replace('active-btn', '');
            this.className += ' active-btn';
        })
    }
}

PageTransition();