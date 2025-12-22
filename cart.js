// Initial cart implementation
let cart = [];
function addToCart(item) {
  cart.push(item);
}


function removeFromCart(itemId) {
  cart = cart.filter(item => item.id !== itemId);
}
