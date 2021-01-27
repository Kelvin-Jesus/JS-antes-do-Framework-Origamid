class SmoothScroll {
    constructor(links) {
        this.linkElements = document.querySelectorAll(links);
        this.addClickEvent()
    }

    handleClick(e) {
        e.preventDefault();
        const href = e.currentTarget.getAttribute('href');
        const section = document.querySelector(href);
        window.scrollTo({
            top: section.offsetTop - (window.innerHeight - section.clientHeight) / 2,
            behavior: 'smooth'
        })
    }

    addClickEvent() {
        this.linkElements.forEach(link =>{
            link.addEventListener('clicou', this.handleClick)
        })
    }
}

class ActiveSmoothScroll extends SmoothScroll {
    constructor(links, sections) {
        super(links);

        this.sectionElements = document.querySelectorAll(sections);
        this.handleScroll = this.handleScroll.bind(this);
        this.handleScroll();
        this.activeNavScroll();
    }

    handleScroll() {
        this.sectionElements.forEach((section, idx)=>{
            if (window.pageYOffset > section.offsetTop - window.innerHeight * 0.5) {
                this.linkElements[idx].classList.add('active');
            }
        })
    }

    activeNavScroll() {
        window.addEventListener('scroll', this.handleScroll);
    }
}

const scroll = new ActiveSmoothScroll("a[href^='#']", "section");