'use strict';

const burger = document.querySelector('.menu__burger');
const menuBody = document.querySelector('.menu__list');

burger.addEventListener('click', function(e){
   burger.classList.toggle('_active');
   menuBody.classList.toggle('_active');
   document.body.classList.toggle('_lock');
})
