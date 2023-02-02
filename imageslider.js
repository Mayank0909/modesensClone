let flag = 0;
slideshow(flag);
//initially for 0 index image

function show(x) {
	flag += x;
	slideshow(flag);
}

function slideshow(num) {
	let slides = document.getElementsByClassName("slide");
	// console.log(slides);
	//sabko hide kiya
	for (let i of slides) {
		i.style.display = "none";
	}

	//pluswale me num =4 jabki slides 0,1,2,3
	if (num == slides.length) {
		flag = 0;
		num = 0;
	}
	if (num < 0) {
		num = slides.length - 1;
		flag = slides.length - 1;
	}
	slides[num].style.display = "block";
}

const coords = { x: 0, y: 0 };
const circles = document.querySelectorAll(".circle");

const colors = [
	"#ffb56b",
	"#fdaf69",
	"#f89d63",
	"#f59761",
	"#ef865e",
	"#ec805d",
	"#e36e5c",
	"#df685c",
	"#d5585c",
	"#d1525c",
	"#c5415d",
	"#c03b5d",
	"#b22c5e",
	"#ac265e",
	"#9c155f",
	"#950f5f",
	"#830060",
	"#7c0060",
	"#680060",
	"#60005f",
	"#48005f",
	"#3d005e",
];

circles.forEach(function (circle, index) {
	circle.x = 0;
	circle.y = 0;
	circle.style.backgroundColor = colors[index % colors.length];
});

window.addEventListener("mousemove", function (e) {
	coords.x = e.clientX;
	coords.y = e.clientY;
});

function animateCircles() {
	let x = coords.x;
	let y = coords.y;

	circles.forEach(function (circle, index) {
		circle.style.left = x - 12 + "px";
		circle.style.top = y - 12 + "px";

		circle.style.scale = (circles.length - index) / circles.length;

		circle.x = x;
		circle.y = y;

		const nextCircle = circles[index + 1] || circles[0];
		x += (nextCircle.x - x) * 0.5;
		y += (nextCircle.y - y) * 0.5;
	});

	requestAnimationFrame(animateCircles);
}

animateCircles();
