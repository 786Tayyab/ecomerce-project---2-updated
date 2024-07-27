function addToCart(productName, productPrice) {
    // Retrieve cart from localStorage or initialize it if it doesn't exist
    let cart = JSON.parse(localStorage.getItem('cart')) || [];
    let totalAmount = parseFloat(localStorage.getItem('totalAmount')) || 0;
  
    // Add product to cart
    cart.push({ name: productName, price: productPrice });
  
    // Update total amount
    totalAmount += productPrice;
  
    // Save cart and total amount back to localStorage
    localStorage.setItem('cart', JSON.stringify(cart));
    localStorage.setItem('totalAmount', totalAmount.toFixed(2));
  
    // Update cart display
    displayCart();
  }
  
  function displayCart() {
    const cartItems = document.getElementById('cart-items');
    const totalAmountElement = document.getElementById('total-amount');
  
    // Retrieve cart and total amount from localStorage
    let cart = JSON.parse(localStorage.getItem('cart')) || [];
    let totalAmount = parseFloat(localStorage.getItem('totalAmount')) || 0;
  
    if (cartItems && totalAmountElement) {
        // Clear the current cart display
        cartItems.innerHTML = '';
  
        // Display each item in the cart
        cart.forEach(item => {
            const li = document.createElement('li');
            li.textContent = `${item.name} - $${item.price}`;
            cartItems.appendChild(li);
        });
  
        // Update the total amount display
        totalAmountElement.textContent = totalAmount.toFixed(2);
    }
  }
  
  // Initialize cart display on page load
  document.addEventListener('DOMContentLoaded', () => {
    displayCart();
  });
  

  function clearCart() {
    // Clear localStorage data
    localStorage.removeItem('cart');
    localStorage.removeItem('totalAmount');

    // Update cart display
    displayCart();
}

// Initialize cart display on page load
document.addEventListener('DOMContentLoaded', () => {
    displayCart();
});






$(document).ready(function()
{
    $(window).scroll(function(){
        // sticky navbar on scroll script
        if(this.scrollY > 20){
            $('.navbar').addClass("sticky");
        }else{
            $('.navbar').removeClass("sticky");
        }
        
        // scroll-up button show/hide script
        if(this.scrollY > 500){
            $('.scroll-up-btn').addClass("show");
        }else{
            $('.scroll-up-btn').removeClass("show");
        }
    });

    // slide-up script
    $('.scroll-up-btn').click(function(){
        $('html').animate({scrollTop: 0});
        // removing smooth scroll on slide-up button click
        $('html').css("scrollBehavior", "auto");
    });

    $('.navbar .menu li a').click(function(){
        // applying again smooth scroll on menu items click
        $('html').css("scrollBehavior", "smooth");
    });

    // toggle menu/navbar script
    $('.menu-btn').click(function(){
        $('.navbar .menu').toggleClass("active");
        $('.menu-btn i').toggleClass("active");
    });



});

