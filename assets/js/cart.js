const buttonCell = document.querySelectorAll('.button-cell');
const cartProductsList = document.querySelector('.cell_inside'); 
const cart = document.querySelector('.cart');
const cartQuantity = cart.querySelector('.cart__quantity');
const fullPrice = document.querySelector('.fullprice');
let price = 0;

const randomId = () => {
	return Math.random().toString(36).substring(2, 15) + Math.random().toString(36).substring(2, 15);
};

const priceWithoutSpaces = (str) => {
	return str.replace(/\s/g, '');
};

const normalPrice = (str) => {
	return String(str).replace(/(\d)(?=(\d\d\d)+([^\d]|$))/g, '$1 ');
};

const plusFullPrice = (currentPrice) => {
	return price += currentPrice;
};

const minusFullPrice = (currentPrice) => {
	return price -= currentPrice;
};

const printQuantity = () => {
	let productsListLength = cartProductsList.querySelector('.simplebar-content').children.length;
	cartQuantity.textContent = productsListLength;
	productsListLength > 0 ? cart.classList.add('active') : cart.classList.remove('active');
};

const printFullPrice = () => {
	fullPrice.textContent = `${normalPrice(price)} ₽`;
};

const generateCartProduct = (img, title, price, id) => {
	return `
	<div class="cell" data-id="${id}" data-price="130">
	<div class="cell_inside">
		<div class="product-list" >
			<a href="product-1.html"><img class="prod-img" src="${img}"></a>
			<div class="item-title">${title}</div>
			<div class="price_currency">${normalPrice(price)}</div>
			<button data-cart="" type="button" class="button-cell">
				В кошик
			</button>
		</div>                    
	</div>
	`;
};

const deleteProducts = (productParent) => {
	let id = productParent.querySelector('.cart-product').dataset.id;
	document.querySelector(`.cell[data-id="${id}"]`).querySelector('.button-cell').disabled = false;
	
	let currentPrice = parseInt(priceWithoutSpaces(productParent.querySelector('.price_currency').textContent));
	minusFullPrice(currentPrice);
	printFullPrice();
	productParent.remove();

	printQuantity();
};

productsBtn.forEach(el => {
	el.closest('.cell').setAttribute('data-id', randomId());

	el.addEventListener('click', (e) => {
		let self = e.currentTarget;
		let parent = self.closest('.cell');
		let id = parent.dataset.id;
		let img = parent.querySelector('.prod-img').getAttribute('src');
		let title = parent.querySelector('.item-title').textContent;
		let priceString = priceWithoutSpaces(parent.querySelector('.price_currency').textContent);
		let priceNumber = parseInt(priceWithoutSpaces(parent.querySelector('.price_currency').textContent));
		console.log(priceNumber);

		plusFullPrice(priceNumber);

		printFullPrice();

		cartProductsList.querySelector('.simplebar-content').insertAdjacentHTML('afterbegin', generateCartProduct(img, title, priceString, id));
		printQuantity();

		
		self.disabled = true;
	});
});

cartProductsList.addEventListener('click', (e) => {
	if (e.target.classList.contains('cart-product__delete')) {
		deleteProducts(e.target.closest('.cart-content__item'));
	}
	
});