function upperName(name) {
    return name.toUpperCase();
}


const upperName1 = function(name){
    return name.toUpperCase();
}

const upperName2 = name => name.toUpperCase();
const countLetters = word => word.length;

class Menu {
    constructor(menu) {
        this.menuElement = document.querySelector(menu);
        this.activeClass = 'active';
    }

    addActiveEvent() {
        this.menuElement.addEventListener('click', event=>{
            event.target.classList.add(this.activeClass);
        })
    }
}

const menu = new Menu ('.principal');
menu.addActiveEvent();

console.log(menu);