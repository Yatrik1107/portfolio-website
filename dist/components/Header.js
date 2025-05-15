const Header = () => {
    return `
        <header class="fixed w-full top-0 z-50 bg-white dark:bg-gray-800 shadow-md">
            <nav class="container mx-auto px-6 py-4">
                <div class="flex items-center justify-between">
                    <!-- Logo -->
                    <a href="#" class="flex items-center space-x-2 group">
                        <span class="text-2xl font-bold text-blue-600 group-hover:text-blue-700">YP</span>
                        <span class="hidden md:block text-xl group-hover:text-blue-600">Yatrik Patel</span>
                    </a>

                    <!-- Desktop Navigation -->
                    <div class="hidden md:flex items-center space-x-6">
                        <a href="#about" class="nav-link">About</a>
                        <a href="#experience" class="nav-link">Experience</a>
                        <a href="#projects" class="nav-link">Projects</a>
                        <a href="#skills" class="nav-link">Skills</a>
                        <a href="#contact" class="nav-link">Contact</a>
                        
                        <!-- Theme Toggle -->
                        <button id="theme-toggle" class="p-2">
                            <i class="fas fa-moon dark:hidden"></i>
                            <i class="fas fa-sun hidden dark:block text-yellow-400"></i>
                        </button>
                    </div>

                    <!-- Mobile Menu -->
                    <div class="md:hidden flex items-center space-x-4">
                        <button id="theme-toggle-mobile" class="p-2">
                            <i class="fas fa-moon dark:hidden"></i>
                            <i class="fas fa-sun hidden dark:block text-yellow-400"></i>
                        </button>
                        <button id="mobile-menu-button">
                            <i class="fas fa-bars text-2xl"></i>
                        </button>
                    </div>
                </div>

                <!-- Mobile Navigation Menu -->
                <div id="mobile-menu" class="md:hidden hidden pt-4 pb-2">
                    <nav class="flex flex-col space-y-2">
                        <a href="#about" class="mobile-nav-link">About</a>
                        <a href="#experience" class="mobile-nav-link">Experience</a>
                        <a href="#projects" class="mobile-nav-link">Projects</a>
                        <a href="#skills" class="mobile-nav-link">Skills</a>
                        <a href="#contact" class="mobile-nav-link">Contact</a>
                    </nav>
                </div>
            </nav>
        </header>
    `;
};

export default Header;