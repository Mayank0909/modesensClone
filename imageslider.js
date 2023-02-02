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

setInterval(() => {
	show(1);
}, 3000);
