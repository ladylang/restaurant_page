// loading everything onto the mainpage via modules
// tabs - home, menu, and contacts 
import {HomePage} from './MainPage.js';
import {ContactsPage} from './ContactsPage.js';
import {MenuPage} from './MenuPage.js';
import "./resturant_stylesheet.css";


const body = document.getElementById('content');

// resturant name 
const resturantNameDiv = document.createElement("DIV");
resturantNameDiv.setAttribute("id", "resturantName");
resturantNameDiv.innerHTML = 'Indian Grill';

// build navbar
const navbarDiv = document.createElement("DIV");
navbarDiv.setAttribute("id", "navbarDiv");
navbarDiv.style.display = "inline-block";

// create main div
const mainDiv = document.createElement("DIV");
mainDiv.setAttribute("id", "mainDiv");

class navbarTab {
    constructor (tab) {
        // div for each button in navbar
        this.tabDiv = document.createElement("DIV");
        this.tabDiv.setAttribute("id", tab);

        // button with tab info 
        this.tabBtn = document.createElement("BUTTON");
        this.tabBtn.innerHTML = tab;
        
        // added navbar logic to each button
        this.tabBtn.addEventListener("click", () => {
            mainDiv.removeChild(mainDiv.firstChild);

            if (tab === 'Home') {
                mainDiv.appendChild(HomePage());
            } else if (tab === 'Contacts') {
                mainDiv.appendChild(ContactsPage());
            } else if (tab === 'Menu') {
                mainDiv.appendChild(MenuPage());
            }
        });
        
        // append btn to div, then div to navbar
        this.tabDiv.appendChild(this.tabBtn);
        navbarDiv.appendChild(this.tabDiv);
    }

};


// create navbar buttons
let Home = new navbarTab('Home');
let Contacts = new navbarTab('Contacts');
let Menu = new navbarTab('Menu');

// append all new divs onto the body
body.appendChild(resturantNameDiv);
body.appendChild(navbarDiv);
body.appendChild(mainDiv);
mainDiv.appendChild(HomePage());


console.log("body loaded");