const Header = () => {
    return `
        <header class="fixed w-full top-0 z-50 bg-white dark:bg-gray-800 shadow-md">
            <nav class="container mx-auto px-6 py-4">
                <div class="flex items-center justify-between">
                    <!-- Logo/Name -->
                    <a href="#" class="flex items-center space-x-2">
                        <span class="text-2xl font-bold text-blue-600">YP</span>
                        <span class="hidden md:block text-xl">Yatrik Patel</span>
                    </a>

                    <!-- Desktop Navigation -->
                    <div class="hidden md:flex items-center space-x-8">
                        <a href="#about" 
                           class="nav-link hover:text-blue-600 transition-colors duration-300">
                           About
                        </a>
                        <a href="#experience" 
                           class="nav-link hover:text-blue-600 transition-colors duration-300">
                           Experience
                        </a>
                        <a href="#projects" 
                           class="nav-link hover:text-blue-600 transition-colors duration-300">
                           Projects
                        </a>
                        <a href="#skills" 
                           class="nav-link hover:text-blue-600 transition-colors duration-300">
                           Skills
                        </a>
                        <a href="#contact" 
                           class="nav-link hover:text-blue-600 transition-colors duration-300">
                           Contact
                        </a>
                        
                        <!-- Dark Mode Toggle -->
                        <button id="theme-toggle" 
                                class="p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700">
                            <i class="fas fa-moon dark:hidden"></i>
                            <i class="fas fa-sun hidden dark:block"></i>
                        </button>
                    </div>

                    <!-- Mobile Menu Button -->
                    <button id="mobile-menu-button" class="md:hidden">
                        <i class="fas fa-bars text-2xl"></i>
                    </button>
                </div>

                <!-- Mobile Navigation -->
                <div id="mobile-menu" 
                     class="md:hidden hidden pt-4 pb-2 space-y-2">
                    <a href="#about" class="block py-2 hover:text-blue-600">About</a>
                    <a href="#experience" class="block py-2 hover:text-blue-600">Experience</a>
                    <a href="#projects" class="block py-2 hover:text-blue-600">Projects</a>
                    <a href="#skills" class="block py-2 hover:text-blue-600">Skills</a>
                    <a href="#contact" class="block py-2 hover:text-blue-600">Contact</a>
                </div>
            </nav>
        </header>

        <script>
            // Mobile menu toggle
            document.getElementById('mobile-menu-button').addEventListener('click', () => {
                document.getElementById('mobile-menu').classList.toggle('hidden');
            });

            // Theme toggle
            document.getElementById('theme-toggle').addEventListener('click', () => {
                document.documentElement.classList.toggle('dark');
            });

            // Smooth scroll
            document.querySelectorAll('a[href^="#"]').forEach(anchor => {
                anchor.addEventListener('click', function (e) {
                    e.preventDefault();
                    document.querySelector(this.getAttribute('href'))
                        .scrollIntoView({ behavior: 'smooth' });
                });
            });
        </script>
    `;
};

export default Header;