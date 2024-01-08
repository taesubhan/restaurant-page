function createDiv(...classes) {
    const div = document.createElement('div');
    classes.forEach((aClass) => div.classList.add(aClass));
    return div;
}

function appendChildren(parent, ...children) {
    children.forEach((child) => parent.appendChild(child));
}

export {createDiv, appendChildren};