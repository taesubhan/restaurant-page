import storeFront from '../assets/images/exterior-storefront.png';
import {createDiv, appendChildren} from '../functions/DOM-operations.js';


function createWebpageContainer(headerFunc, bodyFunc, footerFunc) {
    const webpageContainer = createDiv('webpage-container', 'background');

    const verticalBackground = createDiv('vertical-background');
    verticalBackground.setAttribute('id', 'someRandomID');

    webpageContainer.appendChild(verticalBackground);
    verticalBackground.appendChild(headerFunc());
    verticalBackground.appendChild(bodyFunc());
    verticalBackground.appendChild(footerFunc());

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

    const homePage = createDiv('home-page', 'tab-button');
    homePage.textContent = 'Home';

    const menuPage = createDiv('menu-page', 'tab-button');
    menuPage.textContent = 'Menu';

    const contactPage = createDiv('contact-page', 'tab-button');
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

function createFooter() {
    const footer = createDiv('footer');
    return footer;
}

function createHomePage() {
    const content = document.querySelector('#content');
    content.appendChild(createWebpageContainer(createHeader, createBody, createFooter));
}

export {createHomePage, createWebpageContainer, createHeader, createFooter};

