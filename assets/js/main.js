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

    initializeTheme() {
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
                    
                    // Update localStorage
                    if (document.documentElement.classList.contains('dark')) {
                        localStorage.setItem('theme', 'dark');
                    } else {
                        localStorage.setItem('theme', 'light');
                    }
                    
                    // Update icons
                    const moonIcons = document.querySelectorAll('.fa-moon');
                    const sunIcons = document.querySelectorAll('.fa-sun');
                    
                    moonIcons.forEach(icon => icon.classList.toggle('hidden'));
                    sunIcons.forEach(icon => icon.classList.toggle('hidden'));
                });
            }
        });
    }
}

document.addEventListener('DOMContentLoaded', () => {
    new App();
});