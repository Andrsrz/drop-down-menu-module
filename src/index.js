import { Dropdown } from './drop-down.js';

const Index = (() => {
	const render = () => {
		let body = document.body;
		let arr = [];
		for(let i = 0; i < 5; i++){
			let item = document.createElement("li");
			item.innerHTML = "test-" + i;
			arr.push(item);
		}
		let dropdown0 = new Dropdown(100, "Test Title", arr);
		body.appendChild(dropdown0.render());
	}

	return { render };
})();

Index.render();
