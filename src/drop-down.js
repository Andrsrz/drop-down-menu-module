class Dropdown {
	constructor(size, elements){
		this.size = size ? size : 10;
		this.elements = elements ? elements : [];
	}

	addElement(element){
		this.elements.push(element);
	}

	removeElement(elementIndex){
		this.elements.splice(elementIndex, 1);
	}

	_setDropdownClickEvent(dropdown){
		dropdown.addEventListener("click", () => {
			console.log("click");
		}, false);
	}

	render(){
		let dropdown = document.createElement("button");
		dropdown.className = "dropdown";
		dropdown.style.size = this.size;
		this._setDropdownClickEvent(dropdown);
		let menu = document.createElement("ul");
		menu.className = "menu";
		for(let i = 0; i < this.elements.length; i++){
			this.elements[i].className = "menuOption-" + i;
			menu.appendChild(this.elements[i]);
		}
		dropdown.appendChild(menu);
		return dropdown;
	}
};

export { Dropdown };
