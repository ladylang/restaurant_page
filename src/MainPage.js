// make divs

function MainPage() {
    const topBanner = document.createElement('div');
    const topBannerId = document.createAttribute('id');
    topBannerId.value = "topBanner";
    topBanner.setAttributeNode(topBannerId);
    topBanner.innerHTML = "Top";
    topBanner.style.alignContent = "center";

    console.log('load topBanner');
}

export {MainPage};

