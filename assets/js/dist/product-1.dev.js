"use strict";

var select = document.querySelector('select');
var button = document.querySelector('button');
button.addEventListener('click', function () {
  console.log(select.value);
}); // Отслеживаем клик на странице

window.addEventListener('click', function (event) {
  // Проверяем что клик был совершен по кнопке "Добавить в корзину"
  if (event.target.hasAttribute('data-cart')) {
    // Находим карточку с товаром, внутри котрой был совершен клик
    var wrapper = event.target.closest('.wrapper'); // Собираем данные с этого товара и записываем их в единый объект productInfo

    var productInfo = {
      id: wrapper.dataset.id,
      imgSrc: wrapper.querySelector('.prod-img').getAttribute('src'),
      size: wrapper.querySelector('.sources').innerText,
      title: wrapper.querySelector('.item-title').innerText
    };
    console.log(productInfo); //     const shopWrapperHTML = `
    //     <div class="shopwrapper">
    //     <div class="cell" data-id="1" data-price="130">
    //         <div class="cell_inside">
    //             <div class="product-list" >
    //                 <a href="product-1.html"><img class="prod-img" src="assets/images/1.JPG"></a>
    //                 <div class="item-title">${productInfo.title}</div>
    //                 <div class="price_currency">130 ₴</div>
    //                 <button data-cart="" type="button" class="button-cell">
    //                     В кошик
    //                 </button>
    //             </div>                    
    //         </div>
    //     </div>
    // </div>
    //     `;
    //     shopCart.insertAdjacentHTML('beforeend', shopWrapperHTML);
  }
});