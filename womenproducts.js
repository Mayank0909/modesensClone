var women_products = [
	{
		id: 1,
		image:
			"https://img.ssensemedia.com/images/231187F063000_1/black-paneled-jacket.jpg",
		brand: "PALM ANGELS",
		name: "Black Band-detailing Denim Jacket",
		price: "273",
	},
	{
		id: 2,
		image:
			"https://images.urbndata.com/is/image/FreePeople/79930673_060_0?$feed-main$",
		brand: "AMIRI",
		name: "Mens Lt. Vintage X Playboy",
		price: "1180",
	},
	{
		id: 3,
		image:
			"https://m.media-amazon.com/images/G/01/Shopbop/p/prod/products/acndb/acndb320111c75d/acndb320111c75d_1670956602753_2-0.jpg",
		brand: "AMIRI",
		name: "Crystal Embellished Painter Jean Black",
		price: "1323",
	},
	{
		id: 4,
		image:
			"https://img.mytheresa.com/1000/1000/95/jpeg/catalog/product/e2/P00756645.jpg",
		brand: "BALMAIN",
		name: "Tapered Ripped Blue Cotton Jeans",
		price: "741",
	},
	{
		id: 5,
		image:
			"https://images.urbndata.com/is/image/Anthropologie/4122261180567_091_b?$feed-main$",
		brand: "BALMAIN",
		name: "Silver-tone Logo Embossed Monogram ",
		price: "689",
	},
	{
		id: 6,
		image:
			"https://res.cloudinary.com/ssenseweb/image/upload/b_white%2Cc_lpad%2Cg_center%2Ch_960%2Cw_960/c_scale%2Ch_680/f_auto%2Cdpr_1.0/212886M186037_1.jpg",
		brand: "AMIRI",
		name: "Distressed Skinny Jeans",
		price: "944",
	},
	{
		id: 7,
		image:
			"https://n.nordstrommedia.com/id/sr3/c547dcbc-abdc-4477-a7ec-e8b63b30251b.jpeg?w=780&h=838",
		brand: "BALMAIN",
		name: "Monogram Rib Slim Cotton Denim Jeans",
		price: "630",
	},
	{
		id: 8,
		image:
			"https://cdn-images.farfetch-contents.com/16/15/32/51/16153251_31536938_1000.jpg",
		brand: "DSQUARED2",
		name: "Cool Guy Cotton Denim Jeans",
		price: "264",
	},
	{
		id: 9,
		image:
			"https://res.cloudinary.com/ssenseweb/image/upload/b_white%2Cc_lpad%2Cg_center%2Ch_960%2Cw_960/c_scale%2Ch_680/f_auto%2Cdpr_1.0/202251M186041_1.jpg",
		brand: "BALMAIN",
		name: "White Jacquard Zip Slim Jeans",
		price: "350",
	},
	{
		id: 10,
		image:
			"https://res.cloudinary.com/ssenseweb/image/upload/b_white%2Cc_lpad%2Cg_center%2Ch_960%2Cw_960/c_scale%2Ch_680/f_auto%2Cdpr_1.0/212148M186004_1.jpg",
		brand: "DSQUARED2",
		name: "White Cool Guy Jeans",
		price: "2000",
	},
];
var cont = document.getElementById("product-container");

if (JSON.parse(localStorage.getItem("women_products")) == null) {
	localStorage.setItem("women_products", JSON.stringify(women_products));
}

var data = JSON.parse(localStorage.getItem("women_products"));

function show() {
	data.map(function (elem, index) {
		var md = document.createElement("div");
		md.setAttribute("class", "product-item");
		var div = document.createElement("div");
		var image2 = document.createElement("img");
		image2.src = elem.image;

		div.append(image2);

		var brandName = document.createElement("h4");
		brandName.textContent = elem.brand;

		var pName = document.createElement("p");
		pName.textContent = elem.name;
		pName.setAttribute("class", "productname");

		var pPrice = document.createElement("p");
		pPrice.textContent = `${elem.price}`;
		pPrice.setAttribute("class", "productprice");

		var addcart = document.createElement("button");
		addcart.textContent = "Add to cart";
		addcart.setAttribute("class", "addcartbut");
		var res = `${elem.id}`;
		addcart.addEventListener("click", function () {
			add(elem, index);
		});

		md.append(div, brandName, pName, pPrice, addcart);

		cont.append(md);
	});
}

function add(elem, index) {
	let cart;
	let arr;
	let added = false;
	cart = localStorage.getItem("cartItem");

	if (cart == null) {
		arr = [];
	} else {
		arr = JSON.parse(localStorage.getItem("cartItem"));
	}

	for (var i = 0; i < arr.length; i++) {
		if (arr[i].id == elem.id) {
			added = true;
			alert("Product already added");
			break;
		}
	}

	if (!added) {
		arr.push(elem);
		localStorage.setItem("cartItem", JSON.stringify(arr));
	}
}
show();
