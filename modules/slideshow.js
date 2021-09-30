let slideIndex = 1
showSlides(slideIndex)

function btnSlides(n) {
	showSlides((slideIndex += n))
}
function currentSlide(n) {
	showSlides((slideIndex = n))
}
function showSlides(n) {
	let slides = document.querySelectorAll(".pageImg")
	let dots = document.querySelectorAll(".dot")
	if (n > slides.length) slideIndex = 1
	if (n < 1) slideIndex = slides.length
	slides.forEach((slide) => {
		if (!slide.classList.contains("hidden")) slide.classList.add("hidden")
	})
	dots.forEach((dot) => {
		dot.classList.remove("active")
	})
	slides[slideIndex - 1].classList.remove("hidden")
	dots[slideIndex - 1].classList.add("active")
}

function onTouch(el) {
	let press = false
	let startX, currentX
	el.addEventListener("touchstart", (e) => {
		press = true
		startX = e.touches[0].clientX
	})
	el.addEventListener("touchend", (e) => {
		if (startX == undefined || currentX == undefined) return
		if (!press) return
		let area = (window.innerWidth / 100) * 10
		if (startX - area > currentX) {
			btnSlides(-1)
		} else if (startX + area < currentX) {
			btnSlides(1)
		}
		press = false
	})
	el.addEventListener("touchmove", (e) => {
		if (!press) return
		currentX = e.touches[0].clientX
	})
}

onTouch(document.querySelector("#articleImg"))
