import Header from '../../components/Header.js';
import About from '../../components/About.js';
import Skills from '../../components/Skills.js';
import Experience from '../../components/Experience.js';
import Projects from '../../components/Projects.js';
import Contact from '../../components/Contact.js';

class App {
    constructor() {
        this.initializeApp();
        this.initializeTheme();
    }

    initializeApp() {
        document.getElementById('header').innerHTML = Header();
        document.getElementById('about').innerHTML = About();
        document.getElementById('skills').innerHTML = Skills();
        document.getElementById('experience').innerHTML = Experience();
        document.getElementById('projects').innerHTML = Projects();
        document.getElementById('contact').innerHTML = Contact();
        
        // Add event listeners after components are loaded
        this.setupThemeToggle();
    }

    initializeTheme() {
        // Check for saved theme preference
        if (localStorage.getItem('theme') === 'dark' || 
            (!localStorage.getItem('theme') && 
             window.matchMedia('(prefers-color-scheme: dark)').matches)) {
            document.documentElement.classList.add('dark');
        } else {
            document.documentElement.classList.remove('dark');
        }
    }

    setupThemeToggle() {
        const toggleButtons = ['theme-toggle', 'theme-toggle-mobile'];
        
        toggleButtons.forEach(buttonId => {
            const button = document.getElementById(buttonId);
            if (button) {
                button.addEventListener('click', () => {
                    document.documentElement.classList.toggle('dark');
                    localStorage.setItem('theme', 
                        document.documentElement.classList.contains('dark') ? 'dark' : 'light'
                    );
                });
            }
        });
    }
}

document.addEventListener('DOMContentLoaded', () => {
    new App();
});