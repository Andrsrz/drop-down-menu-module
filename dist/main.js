!function(e){var t={};function n(o){if(t[o])return t[o].exports;var i=t[o]={i:o,l:!1,exports:{}};return e[o].call(i.exports,i,i.exports,n),i.l=!0,i.exports}n.m=e,n.c=t,n.d=function(e,t,o){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:o})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var o=Object.create(null);if(n.r(o),Object.defineProperty(o,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var i in e)n.d(o,i,function(t){return e[t]}.bind(null,i));return o},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="",n(n.s=0)}([function(e,t,n){"use strict";n.r(t);class o{constructor(e,t,n){this.size=e||10,this.title=t||"Menu",this.elements=n||[],this._dropdownContainer=document.createElement("div"),this._dropdown=document.createElement("button"),this._menu=document.createElement("ul")}addElement(e){this.elements.push(e)}removeElement(e){this.elements.splice(e,1)}_setDropdownClickEvent(e){e.addEventListener("click",()=>{console.log("enter"),"none"==this._menu.style.display?(console.log("enter block"),this._menu.style.display="inline-block"):(console.log("enter none"),this._menu.style.display="none")},!1)}_setStyle(){this._dropdownContainer.style.display="flex",this._dropdownContainer.style.flexFlow="column nowrap",this._dropdownContainer.style.justifyContent="flex-start",this._dropdownContainer.style.alignItems="flex-start",this._dropdownContainer.style.width="max-content",this._dropdown.style.display="inline-block",this._dropdown.style.width=this.size+"px",this._dropdown.style.cursor="pointer",this._dropdown.innerHTML=this.title,this._menu.style.display="none",this._menu.style.listStyle="none",this._menu.style.margin="5px",this._menu.style.padding="5px"}render(){this._setStyle(),this._setDropdownClickEvent(this._dropdown);for(let e=0;e<this.elements.length;e++)this.elements[e].className="menuOption-"+e,this.elements[e].style.margin="3px",this.elements[e].style.padding="3px",this._menu.appendChild(this.elements[e]);return this._dropdownContainer.appendChild(this._dropdown),this._dropdownContainer.appendChild(this._menu),this._dropdownContainer}}({render:()=>{let e=document.body,t=[];for(let e=0;e<5;e++){let n=document.createElement("li");n.innerHTML="test-"+e,t.push(n)}let n=new o(100,"Test Title",t);e.appendChild(n.render())}}).render()}]);