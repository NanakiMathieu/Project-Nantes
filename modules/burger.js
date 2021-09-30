document.querySelector("#burger").addEventListener("click", (e) => {
	e.preventDefault()
	burgerSidebar()
})
function burgerSidebar() {
	document.querySelector("#burger").classList.toggle("close")
	document.querySelector("#sidebar").classList.toggle("open")
}
window.addEventListener("resize", () => {
	if (
		window.innerWidth < 800 &&
		document.querySelector("#burger").classList.contains("close")
	) {
		burgerSidebar()
	}
})
