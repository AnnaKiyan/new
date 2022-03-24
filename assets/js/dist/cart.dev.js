"use strict";

var buttonCell = document.querySelectorAll('.button-cell');
var cartProductsList = document.querySelector('.cell_inside');
var cart = document.querySelector('.cart');
var cartQuantity = cart.querySelector('.cart__quantity');
var fullPrice = document.querySelector('.fullprice');
var price = 0;

var randomId = function randomId() {
  return Math.random().toString(36).substring(2, 15) + Math.random().toString(36).substring(2, 15);
};

var priceWithoutSpaces = function priceWithoutSpaces(str) {
  return str.replace(/\s/g, '');
};

var normalPrice = function normalPrice(str) {
  return String(str).replace(/(\d)(?=(\d\d\d)+([^\d]|$))/g, '$1 ');
};

var plusFullPrice = function plusFullPrice(currentPrice) {
  return price += currentPrice;
};

var minusFullPrice = function minusFullPrice(currentPrice) {
  return price -= currentPrice;
};

var printQuantity = function printQuantity() {
  var productsListLength = cartProductsList.querySelector('.simplebar-content').children.length;
  cartQuantity.textContent = productsListLength;
  productsListLength > 0 ? cart.classList.add('active') : cart.classList.remove('active');
};

var printFullPrice = function printFullPrice() {
  fullPrice.textContent = "".concat(normalPrice(price), " \u20BD");
};

var generateCartProduct = function generateCartProduct(img, title, price, id) {
  return "\n\t<div class=\"cell\" data-id=\"".concat(id, "\" data-price=\"130\">\n\t<div class=\"cell_inside\">\n\t\t<div class=\"product-list\" >\n\t\t\t<a href=\"product-1.html\"><img class=\"prod-img\" src=\"").concat(img, "\"></a>\n\t\t\t<div class=\"item-title\">").concat(title, "</div>\n\t\t\t<div class=\"price_currency\">").concat(normalPrice(price), "</div>\n\t\t\t<button data-cart=\"\" type=\"button\" class=\"button-cell\">\n\t\t\t\t\u0412 \u043A\u043E\u0448\u0438\u043A\n\t\t\t</button>\n\t\t</div>                    \n\t</div>\n\t");
};

var deleteProducts = function deleteProducts(productParent) {
  var id = productParent.querySelector('.cart-product').dataset.id;
  document.querySelector(".cell[data-id=\"".concat(id, "\"]")).querySelector('.button-cell').disabled = false;
  var currentPrice = parseInt(priceWithoutSpaces(productParent.querySelector('.price_currency').textContent));
  minusFullPrice(currentPrice);
  printFullPrice();
  productParent.remove();
  printQuantity();
};

productsBtn.forEach(function (el) {
  el.closest('.cell').setAttribute('data-id', randomId());
  el.addEventListener('click', function (e) {
    var self = e.currentTarget;
    var parent = self.closest('.cell');
    var id = parent.dataset.id;
    var img = parent.querySelector('.prod-img').getAttribute('src');
    var title = parent.querySelector('.item-title').textContent;
    var priceString = priceWithoutSpaces(parent.querySelector('.price_currency').textContent);
    var priceNumber = parseInt(priceWithoutSpaces(parent.querySelector('.price_currency').textContent));
    console.log(priceNumber);
    plusFullPrice(priceNumber);
    printFullPrice();
    cartProductsList.querySelector('.simplebar-content').insertAdjacentHTML('afterbegin', generateCartProduct(img, title, priceString, id));
    printQuantity();
    self.disabled = true;
  });
});
cartProductsList.addEventListener('click', function (e) {
  if (e.target.classList.contains('cart-product__delete')) {
    deleteProducts(e.target.closest('.cart-content__item'));
  }
});