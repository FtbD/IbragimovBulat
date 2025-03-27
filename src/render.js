const RenderPosition = {
    BEFOREBEGIN: 'beforebegin',
    AFTERBEGIN: 'afterbegin',
    BEFOREEND: 'beforeend',
    AFTEREND: 'afterend',
};

function createElement(template) {
    const newElement = document.createElement('div');
    newElement.innerHTML = template;
    return newElement.firstElementChild;
}

function render(component, container, place = RenderPosition.BEFOREEND) {
    console.log(`Рендерим компонент в `, container);
    container.insertAdjacentElement(place, component.getElement());
    const element = component.getElement();
    
    switch (place) {
        case RenderPosition.BEFOREBEGIN:
            container.parentNode.insertBefore(element, container);
            break;
        case RenderPosition.AFTERBEGIN:
            container.prepend(element);
            break;
        case RenderPosition.BEFOREEND:
            container.append(element);
            break;
        case RenderPosition.AFTEREND:
            container.parentNode.insertBefore(element, container.nextSibling);
            break;
    }
}

export { RenderPosition, createElement, render };
