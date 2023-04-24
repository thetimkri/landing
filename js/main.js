const swiper = new Swiper('.swiper-container', {
    // Цикличность
    loop: true,
    // Пагинация
    pagination: {
        el: '.swiper-pagination',
        clickable: true
    },
    a11y: {
        paginationBulletMessage: 'Тут название слайда {{index}}',
    }
});



// tab


let tabsBtn = document.querySelectorAll('.tabs-nav__btn');
let tabsItem = document.querySelectorAll('.tabs-item');

tabsBtn.forEach(function(element){
  element.addEventListener('click', function(e){
    const path = e.currentTarget.dataset.path;

    tabsBtn.forEach(function(btn){ btn.classList.remove('tabs-nav__btn--active')});
    e.currentTarget.classList.add('tabs-nav__btn--active');

    tabsItem.forEach(function(element){ element.classList.remove('tabs-item--active')});
    document.querySelector(`[data-target="${path}"]`).classList.add('tabs-item--active');
  });
});



// accordion
new Accordion('.accordion-container');


// search
document.addEventListener("DOMContentLoaded", (e) => {
  document.getElementById("open-search-form").addEventListener("click",(e) => {
    document.getElementById("search-form").classList.add("search-form_show")
  })

  document.getElementById("search-form-close").addEventListener("click",(e) => {
    document.getElementById("search-form").classList.remove("search-form_show")
  })

  document.getElementById("search-form").addEventListener("submit",(e) => {
    e.preventDefault()
  })
})



// burger
document.addEventListener("DOMContentLoaded", function() {
  document.getElementById("burger").addEventListener("click", function() {
      document.querySelector("header").classList.toggle("open")
  })
})
