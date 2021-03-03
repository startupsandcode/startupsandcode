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

	element.appendChild(myLogo);
	element.appendChild(header);

	return element;
}
const firebaseConfig = {
	apiKey: "AIzaSyBEDRiaduCqqxPRDOV_ulklN56Vg_rB-B0",
	authDomain: "johnmann-prod.firebaseapp.com",
	databaseURL: "https://johnmann-prod.firebaseio.com",
	projectId: "johnmann-prod",
	storageBucket: "johnmann-prod.appspot.com",
	messagingSenderId: "891266769747",
	appId: "1:891266769747:web:592bd33f20a25af4c4b7a6",
	measurementId: "G-KRXGEC3S6B"
};
firebase.initializeApp(firebaseConfig);
//document.body.appendChild(component());