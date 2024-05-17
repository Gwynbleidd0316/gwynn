const searchForm = document.querySelector(".search-form");
const cartItem = document.querySelector(".cart-items-container");
const navbar = document.querySelector(".navbar");

// Ready To Use

function searchbutt() {
	const searchBtn = document.querySelector("#search-btn");
	searchBtn.addEventListener("click", function () {
		searchForm.classList.toggle("active");
		document.addEventListener("click", function (e) {
		if (
			!e.composedPath().includes(searchBtn) &&
			!e.composedPath().includes(searchForm)
		) {
			searchForm.classList.remove("active");
		}
		});
	});
}

function cartbutt() {
	const cartBtn = document.querySelector("#cart-btn");
	cartBtn.addEventListener("click", function () {
		cartItem.classList.toggle("active");
		document.addEventListener("click", function (e) {
		if (
			!e.composedPath().includes(cartBtn) &&
			!e.composedPath().includes(cartItem)
		) {
			cartItem.classList.remove("active");
		}
		});
	});
}

function menubutt() {
	const menuBtn = document.querySelector("#menu-btn");
	menuBtn.addEventListener("click", function () {
		navbar.classList.toggle("active");
		document.addEventListener("click", function (e) {
		if (
			!e.composedPath().includes(menuBtn) &&
			!e.composedPath().includes(navbar)
		) {
			navbar.classList.remove("active");
		}
		});
	});
}

function disableUserSelect() {
	document.body.style.userSelect = "none";
}

function smoothScroll(target) {
    document.querySelector(target).scrollIntoView({
        behavior: 'smooth'
    });
}

function addToCartEventListener () {
	const addCartBtn = document.querySelector('.add-cart-btn');

	addCartBtn.addEventListener('click', function() {
		const itemPrice = addCartBtn.getAttribute('data-price');
		const itemName = addCartBtn.getAttribute('data-name');
		const itemImage = addCartBtn.getAttribute('data-image');
		addToCart(itemName, itemPrice, itemImage);
	});
}


function addToCart(name, price, image) {
	const cartItem = document.createElement('div');
	cartItem.classList.add('cart-item');
	cartItem.innerHTML = `
		<div class="cart-item">
			<i class="fas fa-times"></i>
			<img src="${image}" alt="menu">
			<div class="content">
		  		<h3>${name}</h3>
		  		<div class="price">${price}/-</div>
			</div>
  		</div>
	`;

	const cartItemsContainer = document.querySelector('.cart-items-container');
	cartItemsContainer.appendChild(cartItem);

}

function setClearCart() {
	const clearCartBtn = document.querySelector('.clear-cart-btn');
	clearCartBtn.addEventListener('click', function() {
		const cartItemsContainer = document.querySelector('.cart-items-container');
		const cartItemDivs = cartItemsContainer.querySelectorAll('div');
		cartItemDivs.forEach(cartItemDiv => {
			cartItemsContainer.removeChild(cartItemDiv);
		});
		showAlert();
	});
}

function displayCurrentYear() {
    const year = new Date().getFullYear();
    document.querySelector('.current-year').innerText = year;
}

function scrollToTop() {
    window.scrollTo({ top: 0, behavior: 'smooth' });
}

function setDeleteCartItem() {
	const deleteBtn = document.querySelector('.fa-times');
	
	deleteBtn.addEventListener('click', function() {
		const cartItem = deleteBtn.parentElement;
		const cartItemsContainer = cartItem.parentElement;
		cartItemsContainer.removeChild(cartItem);
	});

}

function showAlert() {
	const userAgent = navigator.userAgent;
	const date = new Date().toLocaleDateString();
	const ip = "127.0.0.1"; // Replace with actual IP address retrieval logic

	alert(`User Agent: ${userAgent}\nDate: ${date}\nIP: ${ip}`);
}


function changeColor() {
	const body = document.querySelector('.header');
	body.style.backgroundColor = getRandomColorName();
}

function getRandomColorName() {

	const colors = ['red', 'blue', 'green', 'yellow', 'orange', 'purple'];
	const randomIndex = Math.floor(Math.random() * colors.length);
	return colors[randomIndex];
}

function informUser() {
	// İletişim formundaki giriş değerlerini al
	var name = $('input[name="name"]').val();
	var email = $('input[name="email"]').val();
	var message = $('textarea[name="phone"]').val();

	alert('Name: ' + name + '\nEmail: ' + email + '\nMessage: ' + message);
}

function init() {
	disableUserSelect();
	searchbutt();
	cartbutt();
	menubutt();
	setClearCart();
	addToCartEventListener();
	displayCurrentYear();
	setDeleteCartItem();
	$(document).keydown(function (e) {
		if (e.keyCode === 38) {
			scrollToTop();
		}
	
		if (e.shiftKey) {
			changeColor();
		}

		$(".subbbmit").click(function () {
			informUser();
		});
		$('.add-cart-btn').click(function () {
			$('.cart-items-container').addClass('active');
		});
		$('.fa-times').click(function () {
			$('.cart-item').remove();
		});
		$('.clear-cart-btn').click(function () {
			$('.cart-item').remove();
		});
		$('.buy-btn').click(function () {
			$('.cart-items-container').addClass('active');
		});
		$('.cart-btn').click(function () {
			$('.cart-items-container').toggleClass('active');
		});
		$('.menu-btn').click(function () {
			$('.navbar').toggleClass('active');
		});
		$('.search-btn').click(function () {
			$('.search-form').toggleClass('active');
		});
		$('.search-form').click(function (e) {
			e.stopPropagation();
		});
		$('.cart-items-container').click(function (e) {
			e.stopPropagation();
		});
		$('.navbar').click(function (e) {
			e.stopPropagation();
		});
		$('.search-form').click(function (e) {
			e.stopPropagation();
		});
		$('.search-form').click(function () {
			$('.search-form').removeClass('active');
		});
		$('.navbar').click(function () {
			$('.navbar').removeClass('active');
		});
		$('.cart-items-container').click(function () {
			$('.cart-items-container').removeClass('active');
		});
});
}

init();

//  Under Const






