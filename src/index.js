// loading everything onto the mainpage via modules
import {MainPage} from './MainPage.js';


const body = document.getElementById(content);
const mainPage = MainPage();
body.innerHTML = mainPage; 

console.log("body loaded");