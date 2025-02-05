import Header from '../../components/Header.js';
import About from '../../components/About.js';
import Skills from '../../components/Skills.js';
import Experience from '../../components/Experience.js';
import Projects from '../../components/Projects.js';
import Contact from '../../components/Contact.js';

class App {
    constructor() {
        this.initializeApp();
        this.setupEventListeners();
    }

    initializeApp() {
        // Render components
        document.getElementById('header').innerHTML = Header();
        document.getElementById('about').innerHTML = About();
        document.getElementById('skills').innerHTML = Skills();
        document.getElementById('experience').innerHTML = Experience();
        document.getElementById('projects').innerHTML = Projects();
        document.getElementById('contact').innerHTML = Contact();

        // Check for saved theme
        if (localStorage.getItem('theme') === 'dark' || 
            (!localStorage.getItem('theme') && 
             window.matchMedia('(prefers-color-scheme: dark)').matches)) {
            document.documentElement.classList.add('dark');
        }
    }

    setupEventListeners() {
        // Theme toggle
        const themeToggle = document.getElementById('theme-toggle');
        themeToggle?.addEventListener('click', () => {
            document.documentElement.classList.toggle('dark');
            localStorage.setItem('theme', 
                document.documentElement.classList.contains('dark') ? 'dark' : 'light'
            );
        });

        // Mobile menu
        const mobileButton = document.getElementById('mobile-menu-button');
        const mobileMenu = document.getElementById('mobile-menu');
        mobileButton?.addEventListener('click', () => {
            mobileMenu.classList.toggle('hidden');
        });

        // Smooth scroll
        document.querySelectorAll('a[href^="#"]').forEach(anchor => {
            anchor.addEventListener('click', function(e) {
                e.preventDefault();
                const target = document.querySelector(this.getAttribute('href'));
                if (target) {
                    target.scrollIntoView({
                        behavior: 'smooth'
                    });
                    // Close mobile menu if open
                    mobileMenu?.classList.add('hidden');
                }
            });
        });

        // Scroll spy
        window.addEventListener('scroll', () => {
            const sections = document.querySelectorAll('section');
            const navLinks = document.querySelectorAll('.nav-link');
            
            let current = '';
            sections.forEach(section => {
                const sectionTop = section.offsetTop;
                if (window.scrollY >= sectionTop - 100) {
                    current = section.getAttribute('id');
                }
            });

            navLinks.forEach(link => {
                link.classList.remove('text-blue-600');
                if (link.getAttribute('href').includes(current)) {
                    link.classList.add('text-blue-600');
                }
            });
        });
    }
}

// Initialize app when DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
    new App();
});