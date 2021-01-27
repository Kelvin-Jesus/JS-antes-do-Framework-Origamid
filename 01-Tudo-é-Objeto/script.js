const menu = {
    class: ".principal",
    ativar() {
        const menuElement = document.querySelector(this.class);
        console.log('ativou', menuElement);
    }
}

menu.ativar();