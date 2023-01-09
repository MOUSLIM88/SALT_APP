let val;
const list = document.querySelector("ul.collection");
const listItem = document.querySelector("li.collection-item:first-child");
// selcting the first one
val = listItem;
val = list;
// get the child node
val = list.childNodes; // return a node list
val = list.childNodes[0];
val = list.childNodes[0].nodeName;
val = list.childNodes[3].nodeType;
//----------------
// Numbers related to the Type of the Node:
// 1-Element
// 2- Attribute
// 3 -text node
// 8- Comment
// 9- Document itself
// 10- Doctype
//----------------

// get children element node :
val = list.children; // return a HTML collection

list.children[3].children[0].id = "test-id";
val = list.children[3].children[0];
// ffirst elements
val = list.firstChild;
val = list.firstElementChild;
// last elements :
val = list.lastChild;
val = list.lastElementChild;
// count child element :
val = list.childElementCount;

// get parent Node:
val = listItem.parentNode;
val = listItem.parentElement;
val = listItem.parentElement.parentElement;

//get next siblling:
val = listItem.nextElementSibling;
val = listItem.nextSibling;
val = listItem.nextElementSibling.nextElementSibling;
val = listItem.nextElementSibling.nextElementSibling.nextElementSibling;
// get previous sibllinbg:
val = listItem.previousSibling;
val = listItem.previousElementSibling;

// the main thing is to move up and down trough the elements

console.log(val);
