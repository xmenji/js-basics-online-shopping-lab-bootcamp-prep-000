cart = [{'orange': 1}, {'lemons': 5}, {'apples': 10}];

function removeFromCart(item){
  var itemIsInCart = false;
  
  for(x = 0; x < cart.length; x++){
    for(var list in cart[x]){
      if (list.hasOwnProperty(item)){
        itemisInCart = true;
        cart = [...cart.slice(0, x), ...cart.slice(x + 1)];
      }
    }
  }
  
  if(!itemIsInCart){
    console.log('That item is not in your cart.');
    return cart;
  }
  
  
}
//var lemons = 'lemons';
console.log(cart[0].hasOwnProperty(orange));
/*
//cart = [{'orange': 1}, {'lemons': 5}];
cart = [{'orange': 1}, {'lemons': 5}, {'apples': 10}];
//cart = [{'orange': 1}];
console.log("Starting...");


function viewCart() {
  // write your code here
  var itemsInCart = 'In your cart, you have';
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


viewCart();
*/


/*
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
*/