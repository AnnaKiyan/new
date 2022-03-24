"use strict";

//shop
var shopCart = document.querySelector('.shopcart');
var a = [50, 4, 12, 1, 3, 7, 6];

for (var i = 0; i < a.length; i++) {
  for (var j = i; j < a.length; j++) {
    if (a[i] > a[j]) {
      var temp = a[i];
      a[i] = a[j];
      a[j] = temp;
    }

    console.log(a);
  }
} //let nav = document.querySelector('#nav');
// console.log(nav);
//eplacedNode = nav.replaceChild(nav.children[1], nav.children[0]);
//console.log(replacedNode);
// nav.appendChild(replacedNode);


document.querySelector('#sort-asc').onclick = mySort;
document.querySelector('#sort-desc').onclick = mySortDesc;

function mySort() {
  var nav = document.querySelector('#catalog');

  for (var _i = 0; _i < nav.children.length; _i++) {
    for (var _j = _i; _j < nav.children.length; _j++) {
      if (+nav.children[_i].getAttribute('data-price') > +nav.children[_j].getAttribute('data-price')) {
        replacedNode = nav.replaceChild(nav.children[_j], nav.children[_i]);
        insertAfter(replacedNode, nav.children[_i]);
      }
    }
  }
}

function insertAfter(elem, refElem) {
  return refElem.parentNode.insertBefore(elem, refElem.nextSibling);
}

function mySortDesc() {
  var nav = document.querySelector('#catalog');

  for (var _i2 = 0; _i2 < nav.children.length; _i2++) {
    for (var _j2 = _i2; _j2 < nav.children.length; _j2++) {
      if (+nav.children[_i2].getAttribute('data-price') < +nav.children[_j2].getAttribute('data-price')) {
        replacedNode = nav.replaceChild(nav.children[_j2], nav.children[_i2]);
        insertAfter(replacedNode, nav.children[_i2]);
      }
    }
  }
} // Отслеживаем клик на странице


window.addEventListener('click', function (event) {
  // Проверяем что клик был совершен по кнопке "Добавить в корзину"
  if (event.target.hasAttribute('data-cart')) {
    // Находим карточку с товаром, внутри котрой был совершен клик
    var cell = event.target.closest('.cell'); // Собираем данные с этого товара и записываем их в единый объект productInfo

    var productInfo = {
      id: cell.dataset.id,
      imgSrc: cell.querySelector('.prod-img').getAttribute('src'),
      title: cell.querySelector('.item-title').innerText,
      price: cell.querySelector('.price_currency').innerText
    };
    console.log(productInfo);
  }
});