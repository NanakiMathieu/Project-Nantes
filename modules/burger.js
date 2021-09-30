const burger = document.querySelector("#burger")
burger.addEventListener("click", burgerToggle)
burger.addEventListener("focus", burgerKeyEnter)
burger.addEventListener("focusout", (ev) => {
	burger.removeEventListener("focus", burgerKeyEnter)
})

function burgerKeyEnter() {
	window.addEventListener("keyup", (e) => {
		if (e.code !== "Enter" && e.code !== "NumpadEnter") return
		burgerToggle()
	})
}
function burgerToggle() {
	document.querySelector("#burger").classList.toggle("close")
	document.querySelector(".navbar").classList.toggle("open")

	if (document.querySelector("#burger").classList.contains("close")) {
		document.querySelector("main").style.marginLeft = "165px"
	}
	else {
		document.querySelector("main").style.marginLeft = "70px"
	}
}
