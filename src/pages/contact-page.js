import emailSVG from '../assets/icons/email-outline.svg';
import phoneSVG from '../assets/icons/phone-outline.svg';
import addressSVG from '../assets/icons/map-marker-outline.svg';
import {createWebpageContainer, createHeader, createFooter} from './home-page.js';
import {createDiv, appendChildren} from '../functions/DOM-operations';


function createEmailSection() {
    const emailContainer = createDiv('email', 'contact-info');

    const emailIconTitle = createDiv('icon-title', 'email-icon-title');
    const emailDetail = document.createElement('p');
    emailDetail.classList.add('email-detail', 'contact-detail');
    emailContainer.appendChild(emailIconTitle);
    emailContainer.appendChild(emailDetail);

    const emailIcon = new Image();
    emailIcon.classList.add('contact-icon');
    emailIcon.src = emailSVG;
    emailIcon.classList.add('email-icon');
    emailIconTitle.appendChild(emailIcon);
    const emailTitle = document.createElement('p');
    emailTitle.classList.add('email-title', 'contact-title');
    emailTitle.textContent = 'Email';
    emailIconTitle.appendChild(emailTitle);
    
    emailDetail.textContent = 'HansBurger@NotARealEmail.com';

    return emailContainer;
}

function createPhoneSection() {
    const phoneContainer = createDiv('phone', 'contact-info');

    const phoneIconTitle = createDiv('icon-title', 'phone-icon-title');
    const phoneDetail = document.createElement('p');
    phoneDetail.classList.add('phone-detail', 'contact-detail');
    phoneContainer.appendChild(phoneIconTitle);
    phoneContainer.appendChild(phoneDetail);

    const phoneIcon = new Image();
    phoneIcon.classList.add('contact-icon');
    phoneIcon.src = phoneSVG;
    phoneIcon.classList.add('phone-icon');
    phoneIconTitle.appendChild(phoneIcon);
    const phoneTitle = document.createElement('p');
    phoneTitle.classList.add('phone-title', 'contact-title');
    phoneTitle.textContent = 'Phone';
    phoneIconTitle.appendChild(phoneTitle);

    phoneDetail.textContent = '123-456-7890';

    return phoneContainer;
}

function createAddressSection() {
    const addressContainer = createDiv('address', 'contact-info');

    const addressIconTitle = createDiv('icon-title', 'address-icon-title');
    const addressDetail = document.createElement('p');
    addressDetail.classList.add('address-detail', 'contact-detail');
    addressContainer.appendChild(addressIconTitle);
    addressContainer.appendChild(addressDetail);

    const addressIcon = new Image();
    addressIcon.classList.add('contact-icon');
    addressIcon.src = addressSVG;
    addressIcon.classList.add('address-icon');
    addressIconTitle.appendChild(addressIcon);
    const addressTitle = document.createElement('p');
    addressTitle.classList.add('address-title', 'contact-title');
    addressTitle.textContent = 'Address';
    addressIconTitle.appendChild(addressTitle);

    addressDetail.textContent = '123 Burger Dr.\r\n';
    addressDetail.textContent += 'Burgerland, CA 45678';

    return addressContainer;
}

function createContactContainer() {
    const container = createDiv('contact-container');
    
    const emailContainer = createEmailSection();
    const phoneContainer = createPhoneSection();
    const addressContainer = createAddressSection();

    appendChildren(container, emailContainer, phoneContainer, addressContainer);

    return container;
}

function createBody() {
    const body = createDiv('body', 'contact-body');
    const contactHeader = createDiv('contact-header');
    contactHeader.textContent = 'Get In Touch';

    body.appendChild(contactHeader);
    body.appendChild(createContactContainer());
    
    return body;
}

function createContactPage() {
    const content = document.querySelector('#content');
    content.appendChild(createWebpageContainer(createHeader, createBody, createFooter));
}

export {createContactPage};
