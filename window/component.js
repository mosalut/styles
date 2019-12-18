"use strict";

export function window_init() {
	let imports = document.querySelectorAll('#mosalut-window[rel="import"]');
	let ws;
	for(let i = 0; i < imports.length; i++) {
		let component = imports[i].import.getElementById('component').content;
		ws = document.getElementsByTagName('mosalut-window');
		for(let j = 0; j < ws.length; j++) {
			let clone = document.importNode(component, true)
			let title = ws[j].dataset.title;
			let html = ws[j].innerHTML;
			clone.querySelector('header>span').innerText = title;
			clone.querySelector('section').innerHTML = html;
			ws[j].innerHTML = '';
			ws[j].appendChild(clone);
		}
	}

	let movable = document.querySelectorAll(".movable");
	for(let i = 0; i < movable.length; i++) {
		let movebar = movable[i].getElementsByTagName('header')[0]; 
		let x;
		let y;
		let moving;
		let startX;
		let startY;
		movebar.onmousedown = function(e) {
			let that = this;
			moving = true;
			console.log(e.clientX, e.clientY)
			document.onmousemove = function(e) {
				if(moving) {
					movable[i].style.top = e.clientY + (document.documentElement.scrollTop || document.body.scrollTop) - 15 + "px"; 
					movable[i].style.left = e.clientX + (document.documentElement.scrollLeft || document.body.scrollLeft) - 15 + "px"; 
					onmouseup = function() {
						moving = false;
					}
				}
			}
		};
	}
}
