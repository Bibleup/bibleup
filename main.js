import { BibleUp } from './bibleup/js/bibleup.js'

if (eruda) eruda.init();

let testPanel = document.querySelector('#test-panel');
let bu = document.querySelector('#bu');
let section2 = document.querySelector('#section2');


let bibleup = new BibleUp(testPanel, {linkStyle: 'style2', popup: 'inline', darkTheme: true});
bibleup.create();


let extLink = document.querySelector('#ext-link');
extLink.addEventListener('click', e => {
	e.preventDefault();
})











bu.addEventListener('click', () => {
	//alert(testPanel.innerHTML);
})


