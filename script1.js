let navbar= document.querySelector('.navbar');

document.querySelector('#menu-btn').onclick = () =>{
    navbar.classList.toggle('active');

    search-form.classList.remove('active');
    cart.classList.remove('active');
}
let searchForm= document.querySelector('search-form');

document.querySelector('#search-btn').onclick = () =>{
    search-form.classList.toggle('active');
    navbar.classList.remove('active');
    cart.classList.remove('active');
}

let cartItem= document.querySelector('cart');

document.querySelector('#cart-btn').onclick = () =>{
    cart.classList.toggle('active');
    navbar.classList.remove('active');
    search-form.classList.remove('active');
   
}
window.onscroll=()=>{
    navbar.classList.remove('active');
    search-form.classList.remove('active');
    cart.classList.remove('active');
}