"use strict";

export function nav_init() {
	let imports = document.querySelectorAll('#mosalut-nav[rel="import"]');
	let fs;
	let fItems;
	for(let i = 0; i < imports.length; i++) {
		let menu = imports[i].import.getElementById('menu').content;
		fs = document.getElementsByTagName('mosalut-menu');
		for(let j = 0; j < fs.length; j++) {
			let clone = document.importNode(menu, true)
			let html = fs[j].innerHTML;
			let title = fs[j].dataset.title;
			clone.querySelector("header>h4").innerHTML = title;
			clone.querySelector("section").innerHTML = html;
			fs[j].innerHTML = '';
			fs[j].appendChild(clone);
		}

		if(fs.length != 0)
			continue;

		let menuItem = imports[i].import.getElementById('menuitem').content;
		fItems = document.getElementsByTagName('mosalut-menuitem');
		for(let j = 0; j < fItems.length; j++) {
			let clone = document.importNode(menuItem, true)
			let html = fItems[j].innerHTML;
			clone.innerHTML = html;
			fItems[j].innerHTML = '';
			fItems[j].appendChild(clone);
		}
	}
}
