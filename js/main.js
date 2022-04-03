// MODAL WINDOW

const modal = document.querySelector('.modal'),
      closeBtn = modal.querySelector('.modal__close'),
      requestBtn = document.querySelectorAll('.request__btn');

requestBtn.forEach(btn => {
    btn.addEventListener('click', () => {
        modal.classList.add('show');
        modal.classList.remove('hide');
    })
})

closeBtn.addEventListener('click', () => {
    modal.classList.remove('show');
    modal.classList.add('hide');
})


// MAIN MENU

const menu = document.querySelector('.menu'),
      menuBtn = document.querySelector('.header__burger');

menuBtn.addEventListener('click', () => {
    menu.classList.toggle('show');
})
