class Dropdown {
	constructor(size, elements){
		this.size = size ? size : 10;
		this.elements = elements ? elements : [];
		this._dropdownContainer = document.createElement("div");
		this._dropdown = document.createElement("button");
		this._menu = document.createElement("ul");
	}

	addElement(element){
		this.elements.push(element);
	}

	removeElement(elementIndex){
		this.elements.splice(elementIndex, 1);
	}

	_setDropdownClickEvent(dropdown){
		dropdown.addEventListener("click", () => {
			console.log("enter");
			if(this._menu.style.display == "none"){
				console.log("enter block");
				this._menu.style.display = "inline-block";
			}else{
				console.log("enter none");
				this._menu.style.display = "none";
			}
		}, false);
	}

	_setStyle(){
		this._dropdownContainer.style.display = "flex";
		this._dropdownContainer.style.flexFlow = "column nowrap";
		this._dropdownContainer.style.justifyContent = "flex-start";
		this._dropdownContainer.style.alignItems = "flex-start";
		this._dropdownContainer.style.width = "max-content";
		this._dropdown.style.size = this.size;
		this._menu.style.display = "none";
	}

	render(){
		this._setStyle();
		this._setDropdownClickEvent(this._dropdown);
		for(let i = 0; i < this.elements.length; i++){
			this.elements[i].className = "menuOption-" + i;
			this._menu.appendChild(this.elements[i]);
		}
		this._dropdownContainer.appendChild(this._dropdown);
		this._dropdownContainer.appendChild(this._menu);
		return this._dropdownContainer;
	}
};

export { Dropdown };
