// main page of the resturant page 
// append all sections onto the content div 

function MenuPage() {
    // create title div and content
    const titleDiv = document.createElement("DIV");
    titleDiv.setAttribute("id", "title");

    const title = document.createElement("H1");
    title.textContent = "Menu"


    const aboutP = document.createElement("P");
    aboutP.textContent = "Salad, Fresh Wraps, Kabab, Specialities";

    titleDiv.appendChild(title);
    titleDiv.appendChild(aboutP);


    console.log('Menu loaded');

    return titleDiv;
}

export {MenuPage};

