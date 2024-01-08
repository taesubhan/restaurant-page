//Insert images from asset folder to the DOM

import storeFront from './assets/images/Exterior-Storefront.png';

const homeImage = document.querySelector('.home-image');
const myIcon = new Image();
myIcon.src = storeFront;
myIcon.alt = 'Photo of store';
myIcon.classList.add('storeFront-img');
homeImage.appendChild(myIcon);

