var cart = [];

function getCart() {
 return cart;
}

function setCart(c) {
  cart = c;
  return cart;
}

function addToCart(item) {
 // write your code here
 var itemPrice = Math.floor((Math.random() * 100) + 1);
 var newItem = {[item] : itemPrice};
 
 cart.push(newItem);
 console.log(`${item} has been added to your cart.`);
 return cart;
}

function viewCart() {
  // write your code here
 if(cart.length !== 0){
   var cartList = 'In your cart, you have ';
   
   for(var x = 0; x < cart.length; x++){
     for (var items in cart[x]){
       
     }
   }
 }
  else{
    console.log('Your shopping cart is empty.');
  }
}

function total() {
  // write your code here
}

function removeFromCart(item) {
  // write your code here
}

function placeOrder(cardNumber) {
  // write your code here
}
