//shop

const shopCart = document.querySelector('.shopcart');


let a = [50, 4, 12, 1, 3, 7, 6];

for (let i = 0; i < a.length; i++) {
   for (let j = i; j < a.length; j++) {
        if (a[i] > a[j]) {
           let temp = a[i];
           a[i] = a[j];
           a[j] = temp;
        }
        console.log(a);
   }
}

//let nav = document.querySelector('#nav');
// console.log(nav);
//eplacedNode = nav.replaceChild(nav.children[1], nav.children[0]);
//console.log(replacedNode);
// nav.appendChild(replacedNode);

document.querySelector('#sort-asc').onclick = mySort;
document.querySelector('#sort-desc').onclick = mySortDesc;


function mySort() {
    let nav = document.querySelector('#catalog');
    for (let i = 0; i < nav.children.length; i++) {
        for (let j = i; j < nav.children.length; j++) {
            if (+nav.children[i].getAttribute('data-price') > +nav.children[j].getAttribute('data-price')) {
            replacedNode = nav.replaceChild(nav.children[j], nav.children[i]);
            insertAfter(replacedNode, nav.children[i]);
            }
        }
    }
}

     function insertAfter(elem, refElem) {
     return refElem.parentNode.insertBefore(elem, refElem.nextSibling);
    }

function mySortDesc() {
    let nav = document.querySelector('#catalog');
    for (let i = 0; i < nav.children.length; i++) {
        for (let j = i; j < nav.children.length; j++) {
            if (+nav.children[i].getAttribute('data-price') < +nav.children[j].getAttribute('data-price')) {
                replacedNode = nav.replaceChild(nav.children[j], nav.children[i]);
                insertAfter(replacedNode, nav.children[i]);
            }
        }
    }
}


// Отслеживаем клик на странице
window.addEventListener('click', function (event) {
	// Проверяем что клик был совершен по кнопке "Добавить в корзину"
	if (event.target.hasAttribute('data-cart')) {
		// Находим карточку с товаром, внутри котрой был совершен клик
		const cell = event.target.closest('.cell');

        // Собираем данные с этого товара и записываем их в единый объект productInfo
		const productInfo = {
			id: cell.dataset.id,
			imgSrc: cell.querySelector('.prod-img').getAttribute('src'),
			title: cell.querySelector('.item-title').innerText,
			price: cell.querySelector('.price_currency').innerText,
			
	    };
        console.log(productInfo);

        
    }
});

