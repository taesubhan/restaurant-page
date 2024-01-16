import {createDiv, appendChildren} from '../functions/DOM-operations.js';
import {createWebpageContainer, createHeader, createFooter} from './home-page.js';
import doublePattyBurgerImage from '../assets/images/double-patty-burger.jpg';
import sesameBaconBurgerImage from '../assets/images/sesame-bacon-burger.jpg';
import potatoBurgerImage from '../assets/images/potato-burger.jpg';


function createMenuOption(menuImageLink, menuTitleText, menuDescriptionText) {
    const menuOption = createDiv('menu-option');
    const menuImage = new Image();
    const menuTitle = document.createElement('p');
    const menuDescription = document.createElement('p');

    menuImage.classList.add('menu-image');
    menuTitle.classList.add('menu-title');
    menuDescription.classList.add('menu-description');

    menuImage.src = menuImageLink;
    menuImage.alt = 'Menu item image';
    menuTitle.textContent = menuTitleText;
    menuDescription.textContent = menuDescriptionText;

    appendChildren(menuOption, menuImage, menuTitle, menuDescription);

    return menuOption;
}

function createMenu() {
    const menu = createDiv('menu');

    const menu1Title = 'Double Patty Burger';
    const menu1Description = 'Two beef patties with cheese';
    const menuOption1 = createMenuOption(doublePattyBurgerImage, menu1Title, menu1Description);
    menuOption1.classList.add('menu-option-1');

    const menu2Title = 'Sesame Bacon Burger';
    const menu2Description = 'Two beef patties with bacon, cheese, and sesame buns';
    const menuOption2 = createMenuOption(sesameBaconBurgerImage, menu2Title, menu2Description);
    menuOption2.classList.add('menu-option-2');

    const menu3Title = 'Potato Burger';
    const menu3Description = 'Beef patty with potato wedges';
    const menuOption3 = createMenuOption(potatoBurgerImage, menu3Title, menu3Description);
    menuOption3.classList.add('menu-option3');

    appendChildren(menu, menuOption1, menuOption2, menuOption3);
    
    return menu;
}

function createBody() {
    const body = createDiv('body');
    const menu = createMenu();

    body.appendChild(menu);

    return body;
}

function createMenuPage() {
    const content = document.querySelector('#content');
    content.appendChild(createWebpageContainer(createHeader, createBody, createFooter));
}

export {createMenuPage};