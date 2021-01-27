import randomNumber from './randomNumber.js';

function area(radius) {
    return Math.PI * radius * radius;
}

function circle(radius) {
    return 2 * radius * Math.PI;
}

function random() {
    return randomNumber();
}

const Circle = {
    area,
    circle,
    random
}

export default Circle;