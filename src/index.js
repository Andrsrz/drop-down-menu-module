import { Dropdown } from './drop-down.js';

const Index = (() => {
	const render = () => {
		let body = document.body;
		let item = document.createElement("li");
		item.innerHTML = "test";
		let arr = [];
		arr.push(item);
		let dropdown0 = new Dropdown(20, arr);
		body.appendChild(dropdown0.render());
	}

	return { render };
})();

Index.render();
