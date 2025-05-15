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
        
        this.setupMobileMenu();
        this.setupThemeToggle(); // Add this line
    }

    initializeTheme() {
        if (localStorage.getItem('theme') === 'dark' || 
            (!localStorage.getItem('theme') && 
             window.matchMedia('(prefers-color-scheme: dark)').matches)) {
            document.documentElement.classList.add('dark');
        }
    }

    setupThemeToggle() {
        const toggleButtons = ['theme-toggle', 'theme-toggle-mobile'];
        
        toggleButtons.forEach(id => {
            const button = document.getElementById(id);
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

    setupMobileMenu() {
        const mobileMenuButton = document.getElementById('mobile-menu-button');
        const mobileMenu = document.getElementById('mobile-menu');

        if (mobileMenuButton && mobileMenu) {
            mobileMenuButton.addEventListener('click', () => {
                mobileMenu.classList.toggle('hidden');
            });
        }
    }
}

// Initialize app when DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
    new App();
});