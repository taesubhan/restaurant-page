import storeFront from './assets/images/Exterior-Storefront.png';
import {createDiv, appendChildren} from './DOM-operations.js';


function createWebpageContainer() {
    const webpageContainer = createDiv('webpage-container', 'background');

    const verticalBackground = createDiv('vertical-background');
    verticalBackground.setAttribute('id', 'someRandomID');

    webpageContainer.appendChild(verticalBackground);
    verticalBackground.appendChild(createHeader());
    verticalBackground.appendChild(createBody());
    verticalBackground.appendChild(createFooter());

    return webpageContainer;
}

function createHeader() {
    const header = createDiv('header');
    const title = createDiv('restaurant-title');
    title.textContent = 'Han\'s Burgers';

    header.appendChild(title);
    header.appendChild(createTabs());

    return header;
}

function createTabs() {
    const tabs = createDiv('tabs');

    const homePage = createDiv('home-page');
    homePage.textContent = 'Home';

    const menuPage = createDiv('menu-page');
    menuPage.textContent = 'Menu';

    const contactPage = createDiv('contact-page');
    contactPage.textContent = 'Contact';

    appendChildren(tabs, homePage, menuPage, contactPage);

    return tabs;
}

function createBody() {
    const body = createDiv('body');

    const homeImage = createDiv('home-image');
    const myIcon = new Image();
    myIcon.src = storeFront;
    myIcon.alt = 'Photo of store';
    myIcon.classList.add('storeFront-img');
    homeImage.appendChild(myIcon);

    const restDescription = createDiv('restaurant-description');
    restDescription.textContent = `Some text about how great this restaurant is. Founded in 2023,
        this restaurant is awesome! 10/10 ratings from a person that I just made up.`;

    body.appendChild(homeImage);
    body.appendChild(restDescription);

    return body;
}

function createFooter(childNode) {
    const footer = createDiv('footer');
    return footer;
}

function createHomePage() {
    const content = document.querySelector('#content');
    content.appendChild(createWebpageContainer());
}

export {createHomePage};

