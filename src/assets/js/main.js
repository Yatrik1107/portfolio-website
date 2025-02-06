import Header from '../../components/Header.js';
import About from '../../components/About.js';
import Skills from '../../components/Skills.js';
import Experience from '../../components/Experience.js';
import Projects from '../../components/Projects.js';
import Contact from '../../components/Contact.js';

class App {
    constructor() {
        this.initializeApp();
    }

    initializeApp() {
        document.getElementById('header').innerHTML = Header();
        document.getElementById('about').innerHTML = About();
        document.getElementById('skills').innerHTML = Skills();
        document.getElementById('experience').innerHTML = Experience();
        document.getElementById('projects').innerHTML = Projects();
        document.getElementById('contact').innerHTML = Contact();
    }
}

document.addEventListener('DOMContentLoaded', () => {
    new App();
});