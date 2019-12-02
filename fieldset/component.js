"use strict";

export function fieldset_init() {
	let imports = document.querySelectorAll('#mosalut-fieldset[rel="import"]');
	let fs;
	for(let i = 0; i < imports.length; i++) {
		let component = imports[i].import.getElementById('component').content;
		fs = document.getElementsByTagName('mosalut-fieldset');
		for(let j = 0; j < fs.length; j++) {
			let clone = document.importNode(component, true)
			let title = fs[j].dataset.title;
			let html = fs[j].innerHTML;
			clone.querySelector('fieldset>legend').innerText = title;
			clone.querySelector('fieldset>section').innerHTML = html;
			fs[j].innerHTML = '';
			fs[j].appendChild(clone);
		}
	}
}
