let menuBtn = document.querySelector('.menu-btn')
let menu = document.querySelector('nav ul')


menuBtn.addEventListener('click',e=>{
    if(menu.className == ''){
        menu.classList.add('show')
        menuBtn.src = 'images/icon-close.png'
    }else{
        menu.classList.remove('show')
        menuBtn.src = 'images/icon-hamburger.png'
    }
    
})


if(window.innerWidth <= 750){
    menuBtn.src = 'images/icon-hamburger.png'
}else{
    menuBtn.src = ''
}