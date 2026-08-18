import _ from 'lodash';
import './assets/styles/main.scss';
import Logo from './logo.png';
import firebase from "firebase/app";

function component() {
	const element = document.createElement('div');
	element.classList.add('container');
	const header = document.createElement('h1');
	// Lodash, now imported by this script
	header.innerHTML = _.join(['Hello', 'Webpack'], ' ');
	header.classList.add('header');

	// Add the image to our existing div.
	const myLogo = new Image();
	myLogo.src = Logo;
	myLogo.classList.add('logo');

	element.appendChild(header);
	element.appendChild(myLogo);
	return element;
}
// Firebase config removed - project archived
//document.body.appendChild(component());