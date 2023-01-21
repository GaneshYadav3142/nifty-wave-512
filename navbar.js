

const swiper = new Swiper('.swiper', {
    autoplay: {
        delay: 2000,
         disableOnIntraction: false,
    },
    loop: true,

    pagination: {
        el: '.swiper-pagination',
        clickable: true,
    },

    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev'
    },

});

let form=document.querySelector("form");
form.addEventListener("submit",()=>{
    alert("Please SignUp first")
})