"use strict";

function init() {
	let imports = document.querySelectorAll('[rel="import"]');
	let ws;
	for(let i = 0; i < imports.length; i++) {
		let mWindow = imports[i].import.getElementById('window').content;
		ws = document.getElementsByTagName('mosalut-window');
		for(let j = 0; j < ws.length; j++) {
			let clone = document.importNode(mWindow, true)
			let text = ws[j].innerText;
			let title = ws[j].dataset.title;
			clone.querySelector('header>span').innerText = title;
			clone.querySelector('section').innerText = text;
			ws[j].innerText = '';
			ws[j].appendChild(clone);
		}
	}

	let movable = document.querySelectorAll(".movable");
	for(let i = 0; i < movable.length; i++) {
		let movebar = movable[i].getElementsByTagName('header')[0]; 
		let x;
		let y;
		let moving = false;
		movebar.onmousedown = function(e) {
			console.log(e.clientX, e.clientY)
			moving = true
		};
		movable[i].onmousemove = function(e) {
			console.log(this.style.left);
			if(!moving) {
				return;
			}
			this.style.left = e.clientX + x + "px";
			this.style.top = e.clientY + y + "px";
		}
		movebar.onmouseup = function(e) {
			moving = false;
		}
	}
}

function main() {
	init();
}

onload = main;
