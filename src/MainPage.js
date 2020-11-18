// main page of the resturant page 
// append all sections onto the content div 

function HomePage() {
    // create title div and content
    const titleDiv = document.createElement("DIV");
    titleDiv.setAttribute("id", "title");

    const title = document.createElement("H1");
    title.textContent = "Home"


    const aboutP = document.createElement("P");
    aboutP.textContent = "We are known for our authantic flavors and quality ingrediants.";

    titleDiv.appendChild(title);
    titleDiv.appendChild(aboutP);

    console.log("Home loaded")

    return titleDiv;
}

export {HomePage};

