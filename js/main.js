let cards = document.querySelectorAll('.card'),
    link = document.querySelector('.info__link');


for(let i =0;i<cards.length;i++){
    cards[i].addEventListener('click', ()=>{
        cards[i].classList.toggle('card__exchange');
    })
}

link.addEventListener('click', ()=>{
    cards[0].classList.toggle('card__exchange');
})








 
    