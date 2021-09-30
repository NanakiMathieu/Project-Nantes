document.querySelector(".sidebarBurger").addEventListener("click", (e) => {
	e.preventDefault()
	burgerSidebar()
})
window.addEventListener("keydown", burgerKeyDown)
document.querySelector(".sidebarBurger").addEventListener("focusout", (e) => {
	window.removeEventListener("keydown", burgerKeyDown)
})
function burgerKeyDown(e) {
	if (e.code !== "Enter" && e.code !== "NumpadEnter") return
	e.preventDefault()
	burgerSidebar()
}
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
