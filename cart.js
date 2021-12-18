var cartCont = document.getElementById("container");
var totalPrice = document.getElementById("t-price");

function showCart() {
	var res = 0;
	var cart = JSON.parse(localStorage.getItem("cartItem"));
	//console.log(cart);
	cart.map(function (el) {
		//console.log(el);
		var mainDiv = document.createElement("div");
		mainDiv.setAttribute("class", "cont-items");

		var imgCont = document.createElement("div");
		var image2 = document.createElement("img");
		image2.setAttribute("src", el.image);

		imgCont.append(image2);

		var desc = document.createElement("div");

		var desch3 = document.createElement("h4");
		desch3.textContent = el.brand;
		var descP = document.createElement("p");
		descP.textContent = el.name;

		desc.append(desch3, descP);

		var price = document.createElement("div");
		var priceP = document.createElement("p");
		priceP.textContent = `$ ${el.price}`;
		price.append(priceP);
		res += Number(el.price);
		var quant = document.createElement("div");

		var qP = document.createElement("p");

		qP.textContent = `1`;
		quant.append(qP);
		var price2 = document.createElement("div");
		var price2P = document.createElement("p");
		price2P.textContent = `$ ${el.price}`;
		price2.append(price2P);
		mainDiv.append(imgCont, desc, price, quant, price2);
		cartCont.append(mainDiv);
	});

	totalPrice.textContent = `$ ${res}`;
}

showCart();
