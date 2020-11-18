// main page of the resturant page 
// append all sections onto the content div 


const Menu = []; 

class MenuItems {
    constructor (item, description, price) {
        this.item = item;
        this.description = description;
        this.price = price;
    }
};

function makeMenu() {
    let salad = new MenuItems("Salad", "Healthy", "$4.00");
    Menu.push(salad);

    let wrap = new MenuItems("Fresh wraps", "Meat, lettuce, tomato", "$8.00");
    Menu.push(wrap);

    let kabob = new MenuItems("Meat kabobs", "Lamb or chicken", "$12.00");
    Menu.push(kabob);

    let curry = new MenuItems("Curry", "Very spicy", "$15.99");
    Menu.push(curry);

    console.log(Menu);
}
makeMenu();



function MenuPage() {
    // create title div and content
    const titleDiv = document.createElement("DIV");
    titleDiv.setAttribute("id", "title");

    const title = document.createElement("H1");
    title.textContent = "Menu"

    const aboutP = document.createElement("P");
    aboutP.textContent = "Specialities";

    // create table to display menu
    const menuTable = document.createElement("TABLE");
    menuTable.setAttribute("id", "menuTable");

    let headerRow = menuTable.insertRow(0);
    let itemHeaderCell = document.createElement("TH");
    itemHeaderCell.innerHTML = "Item";
    let descriptionHeaderCell = document.createElement("TH");
    descriptionHeaderCell.innerHTML = "Description"; 
    let priceHeaderCell = document.createElement("TH");
    priceHeaderCell.innerHTML = "Price";

    headerRow.appendChild(itemHeaderCell);
    headerRow.appendChild(descriptionHeaderCell);
    headerRow.appendChild(priceHeaderCell);

    menuTable.appendChild(headerRow);

    // make rows for table
    Menu.forEach(item => {
        let row = menuTable.insertRow(-1);
        row.insertCell(0).innerHTML = item.item;
        row.insertCell(1).innerHTML = item.description;
        row.insertCell(2).innerHTML = item.price;
    });



    titleDiv.appendChild(title);
    titleDiv.appendChild(aboutP);
    titleDiv.appendChild(menuTable);


    console.log('Menu loaded');

    return titleDiv;
};

export {MenuPage};

