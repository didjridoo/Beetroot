import * as assets from './assets/';

const svg = assets.imgs.svg;

import makeBigger from './modules/make-bigger';


const title = document.createElement('h1');
document.body.appendChild(title);

title.innerText = 'Hello world';


makeBigger(title);


const insertSvg = (svg, wrapper) => {
	const svgWrapper = document.getElementById(wrapper);
	svgWrapper.innerHTML = svg;
}

insertSvg(svg, 'logo');