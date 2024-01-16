import './styles.css';
import {createHomePage} from './pages/home-page.js';
import {createMenuPage} from './pages/menu-page.js';
import {createContactPage} from './pages/contact-page.js';

console.log('Hello Webpack! Tae Here! Whoooo!');

function deletePage() {
    const content = document.querySelector('#content');
    while (content.firstChild) {
        content.removeChild(content.firstChild);
    }
}

function highlightTab(element) {
    const selectedClassName = 'selected-tab';
    element.classList.remove(selectedClassName);
    const selectedTab = document.getElementsByClassName(element.className)[0];
    selectedTab.classList.add(selectedClassName);
}

function setNewPage(createNewPageFunc, element) {
    deletePage();
    createNewPageFunc();
    setTabButtons();
    highlightTab(element);
}

function setTabButtons() {
    const homePage = document.querySelector('.home-page');
    homePage.addEventListener('click', (e) => {setNewPage(createHomePage, e.target)});
    
    const menuPage = document.querySelector('.menu-page');
    menuPage.addEventListener('click', (e) => {setNewPage(createMenuPage, e.target)});

    const contactPage = document.querySelector('.contact-page');
    contactPage.addEventListener('click', (e) => {setNewPage(createContactPage, e.target)});
}

function start() {
    createHomePage();
    setTabButtons();
    highlightTab(document.querySelector('.home-page'));
}

start();

// import emailSVG from './assets/icons/email-outline.svg';
// import phoneSVG from './assets/icons/phone-outline.svg';
// import mapSVG from './assets/icons/map-marker-outline.svg';

// function images() {
//     const email = document.querySelector('.email-icon-title');
//     const phone = document.querySelector('.phone-icon-title');
//     const address = document.querySelector('.address-icon-title');

//     const emailIcon = new Image();
//     emailIcon.src = emailSVG;
//     const phoneIcon = new Image();
//     phoneIcon.src = phoneSVG;
//     const addressIcon = new Image();
//     addressIcon.src = mapSVG;

//     email.prepend(emailIcon);
//     phone.prepend(phoneIcon);
//     address.prepend(addressIcon);
// }

// images();