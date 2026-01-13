const bar=document.getElementById('bar');
const close=document.getElementById('close');
const nav=document.getElementById('navbar');

if(bar){
    bar.addEventListner('click',()=>{
        nav.classList.add('active');
    })
}
if(close){
    close.addEventListner('click',()=>{
        nav.classList.remove('active');
    })
}

        var MainImg=document.getElementById("MainImg");
        var smallimg=document.getElementByClsassName("small-img");
                    module smallimg
        smallimg[0].oncl=function(){
            MainImg.src=smallimg[0].src;
        }



// script.js

// Initialize cart as an empty array
let cart = [];

// Function to add a product to the cart
function addToCart(productId) {
    // Check if the product is already in the cart
    const productIndex = cart.findIndex(item => item.id === productId);

    if (productIndex === -1) {
        // Add new product to the cart
        cart.push({ id: productId, quantity: 1 });
    } else {
        // Increment the quantity of the existing product in the cart
        cart[productIndex].quantity += 1;
    }

    updateCartDisplay();
}

// Function to remove a product from the cart
function removeFromCart(productId) {
    cart = cart.filter(item => item.id !== productId);
    updateCartDisplay();
}

// Function to update the cart display
function updateCartDisplay() {
    const cartItemsElement = document.getElementById('cart-items');
    cartItemsElement.innerHTML = '';

    cart.forEach(item => {
        const productElement = document.createElement('li');
        productElement.innerText = `Product ${item.id} (Quantity: ${item.quantity})`;
        const removeButton = document.createElement('button');
        removeButton.innerText = 'Remove';
        removeButton.onclick = () => removeFromCart(item.id);
        productElement.appendChild(removeButton);
        cartItemsElement.appendChild(productElement);
    });
}




const cartItems = [];
const cartElement = document.getElementById('cart-items');
const cartTotalElement = document.getElementById('cart-total');

function addToCart(item) {
    cartItems.push(item);
    updateCart();
}

function removeFromCart(itemIndex) {
    cartItems.splice(itemIndex, 1);
    updateCart();
}

function updateCart() {
    cartElement.innerHTML = '';
    let total = 0;
    cartItems.forEach((item, index) => {
        const itemElement = document.createElement('li');
        itemElement.textContent = `${item.name} - $${item.price}`;
        const removeButton = document.createElement('button');
        removeButton.textContent = 'Remove';
        removeButton.onclick = () => removeFromCart(index);
        itemElement.appendChild(removeButton);
        cartElement.appendChild(itemElement);
        total += item.price;
    });
    cartTotalElement.textContent = total.toFixed(2);
}

