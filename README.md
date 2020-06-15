# Drop-down Menu
[The Odin Project](https://www.theodinproject.com/) - [Exercise Drop Down Menu](https://www.theodinproject.com/courses/javascript/lessons/dynamic-user-interface-interactions#drop-down-menus).

Create dropdown buttons wherever you want inside you webpage.

## Getting Started
First you need to create an array of list elements
``` javascript
let arr = [];
for(let i = 0; i < 5; i++){
	let item = document.createElement("li");
	item.innerHTML = "test-" + i;
	arr.push(item);
}
```

Then you create a new Dropdown object
``` javascript
/* Dropdown(widthSize, menuTitle, listElementsArray) */
let myDropdown = new Dropdown(100, "myMenu", arr);
```

And add the Dropdown object to your webpage with the render method
``` javascript
/* Body can be any HTML container */
body.appendChild(myDropdown.render());
```

You also can add more items to the dropdown after creating the object with the
addElement method.
``` javascript
let myNewElement = document.createElement("li");
myNewElement.innerHTML = "New Element";
myDropdown.addElement(myNewElement);
```

And remove elements with the removeElement method
``` javascript
/* We pass the index of the element we want to remove */
myDropdown.removeElement(0);
```

## What have I learned?
* Create a JavaScript Library.

## Acknowledgement
This project was made posible thanks to [The Odin Project](https://www.theodinproject.com/).

## License
[MIT](https://mit-license.org/).
