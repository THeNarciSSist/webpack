"use strict"
import "./style.css"
import { generateBlocks, generateBlocksInterval } from "./functions.js"
export let box = document.createElement("div")
let buttonBox = document.querySelector(".generate-box")
let buttonColor = document.querySelector(".generate-color")
let buttons = document.querySelector(".buttons")
buttonColor.disabled = true

buttons.prepend(box)

box.style.cssText = `
	display: flex;
	flex-wrap: wrap;
	width: 250px;
	height: 250px;
`

buttonBox.addEventListener("click", () => {
  buttonColor.disabled = false
  generateBlocks()
  buttonBox.disabled = true
})

buttonColor.addEventListener("click", () => {
  generateBlocksInterval()
  buttonColor.disabled = true
})
