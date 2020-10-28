// contacts page of the resturant page 
// append all sections onto the content div 

function ContactsPage() {
    // create title div and content
    const titleDiv = document.createElement("DIV");
    titleDiv.setAttribute("id", "title");

    const title = document.createElement("H1");
    title.textContent = "Contacts"


    const aboutP = document.createElement("P");
    aboutP.textContent = "Phone number: 301-362-4222";

    titleDiv.appendChild(title);
    titleDiv.appendChild(aboutP);


    console.log('Contacts loaded');

    return titleDiv;
}

export {ContactsPage};

