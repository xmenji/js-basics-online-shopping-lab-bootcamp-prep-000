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
  var itemsInCart = 'In your cart, you have ';
  var obj;
  
  if(cart.length !== 0){
    
    for(var x = 0; x < cart.length; x++){
      obj = cart[x];
    
      if(cart.length > 1 && x === cart.length - 1){
        itemsInCart += ' and';
      }
      
      itemsInCart += ` ${Object.keys(obj)} at $${obj[Object.keys(obj)]}`;
      
      if(cart.length > 2 && x !== cart.length - 1){
        itemsInCart += ',';
      }
      
    }
    console.log(`${itemsInCart}.`);
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
