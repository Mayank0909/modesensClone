var product = [
	{
		id: 1,
		image:
			"https://res.cloudinary.com/ssenseweb/image/upload/b_white%2Cc_lpad%2Cg_center%2Ch_960%2Cw_960/c_scale%2Ch_680/f_auto%2Cdpr_1.0/212695M177005_1.jpg",
		brand: "PALM ANGELS",
		name: "Black Band-detailing Denim Jacket",
		price: "273",
	},
	{
		id: 2,
		image:
			"https://res.cloudinary.com/ssenseweb/image/upload/b_white%2Cc_lpad%2Cg_center%2Ch_960%2Cw_960/c_scale%2Ch_680/f_auto%2Cdpr_1.0/212886M186018_1.jpg",
		brand: "AMIRI",
		name: "Mens Lt. Vintage X Playboy",
		price: "1180",
	},
	{
		id: 3,
		image: "https://cdn.modesens.com/product/34718553_3",
		brand: "AMIRI",
		name: "Crystal Embellished Painter Jean Black",
		price: "1323",
	},
	{
		id: 4,
		image:
			"https://res.cloudinary.com/ssenseweb/image/upload/b_white%2Cc_lpad%2Cg_center%2Ch_960%2Cw_960/c_scale%2Ch_680/f_auto%2Cdpr_1.0/211251M186062_1.jpg",
		brand: "BALMAIN",
		name: "Tapered Ripped Blue Cotton Jeans",
		price: "741",
	},
	{
		id: 5,
		image: "https://cdn.modesens.com/product/34873913_2",
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
			"https://cdn-images.farfetch-contents.com/15/55/44/67/15554467_28048224_1000.jpg",
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

if (JSON.parse(localStorage.getItem("products")) == null) {
	localStorage.setItem("products", JSON.stringify(product));
}

var data = JSON.parse(localStorage.getItem("products"));

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
		pPrice.textContent = `$${elem.price}`;
		pPrice.setAttribute("class", "productprice");

		var addcart = document.createElement("button");
		addcart.textContent = "Add to cart";
		addcart.setAttribute("class", "addcartbut");

		md.append(div, brandName, pName, pPrice, addcart);

		cont.append(md);
	});
}

show();
