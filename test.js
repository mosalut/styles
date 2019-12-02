"use strict";

import {window_init} from './window/component.js';
import {fieldset_init} from './fieldset/component.js';

function init() {
	window_init();
	fieldset_init();
}

function main() {
	init();
}

onload = main;
