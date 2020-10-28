// loading everything onto the mainpage via modules
// tabs - home, menu, and contacts 
import {MainPage} from './MainPage.js';
import "./resturant_stylesheet.css";


const body = document.getElementById('content');

// resturant name 
const resturantNameDiv = document.createElement("DIV");
resturantNameDiv.setAttribute("id", "resturantName");
resturantNameDiv.innerHTML = 'Tandoor Grill';

// build navbar
const navbarDiv = document.createElement("DIV");
navbarDiv.setAttribute("id", "navbarDiv");
navbarDiv.style.display = "inline-block";

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
            if (tab === 'Home') {
                MainPage()
            } else if (tab === 'Contacts') {
                console.log("loaded contacts")
            } else if (tab === 'Menu') {
                console.log("loaded Menu")
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


// call mainpage on load
MainPage();
console.log("body loaded");