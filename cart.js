var cartCont = document.getElementById("container");
var totalPrice = document.getElementById("t-price");
var cart = JSON.parse(localStorage.getItem("cartItem"));
localStorage.setItem("cartLength", cart.length);
var cartlen = localStorage.getItem("cartLength");
var cartLenthShow = document.getElementById("cartlength");
cartLenthShow.textContent = `( ${cartlen} )`;

function showCart(x) {
	var res = 0;
	cartCont.innerHTML = null;
	x.map(function (el, ind1) {
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
		priceP.textContent = `₹ ${el.price}`;
		price.append(priceP);

		res += Number(el.price);
		localStorage.setItem("total", res);

		var quant = document.createElement("div");
		quant.classList.add("dflex");
		var qP = document.createElement("p");
		var qprice = 1;
		qP.innerHTML = qprice;

		var plus = document.createElement("button");
		plus.innerText = `+`;
		plus.classList.add("cartPageButtons");
		// plus.addEventListener("click", function () {});

		var minus = document.createElement("button");
		minus.innerHTML = `-`;
		minus.classList.add("cartPageButtons");
		// minus.addEventListener("click", function () {});

		var deleteButton = document.createElement("button");
		deleteButton.textContent = "DELETE";
		deleteButton.classList.add("cartPageButtons", "delete");
		deleteButton.addEventListener("click", function () {
			deleteFunc(el, ind1);
		});

		quant.append(deleteButton);

		var price2 = document.createElement("div");
		var price2P = document.createElement("p");
		price2P.textContent = `₹ ${el.price}`;
		price2.append(price2P);
		mainDiv.append(imgCont, desc, price, quant, price2);
		cartCont.append(mainDiv);
	});
	if (cartlen == 0) {
		totalPrice.textContent = `₹ 0`;
	} else {
		totalPrice.textContent = `₹ ${localStorage.getItem("total")}`;
	}
}

function deleteFunc(el, ind1) {
	var deletedCart = cart.filter((e, i) => {
		return el.id != e.id;
		// console.log("el" + JSON.stringify(el));
		// console.log("e" + JSON.stringify(e));
		// console.log("....");
	});
	localStorage.setItem("cartItem", JSON.stringify(deletedCart));
	var cart2 = JSON.parse(localStorage.getItem("cartItem"));
	showCart(cart2);
	location.reload();
}

showCart(cart);
