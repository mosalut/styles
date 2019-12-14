"use strict";

import {window_init} from './window/component.js';
import {fieldset_init} from './fieldset/component.js';
import {nav_init} from './nav/component.js';

function init() {
	window_init();
	fieldset_init();
	nav_init();
}

function main() {
	init();
}

onload = main;
