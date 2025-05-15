const About = () => {
    return `
        <section id="about" class="section-container">
            <div class="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div class="flex flex-col items-center">
                    <div class="w-56 h-56 rounded-full overflow-hidden mb-6 border-4 border-blue-600 shadow-lg">
                        <img src="assets/images/profile.jpg" 
                             alt="Yatrik N. Patel" 
                             class="w-full h-full object-cover object-top transform scale-175 translate-y-0 translate-x-1"
                             style="transform-origin: center top;"
                             onerror="this.src='https://via.placeholder.com/200x200?text=YP'">
                    </div>
                    <h1 class="text-4xl font-bold text-blue-600 mb-2">Yatrik N. Patel</h1>
                    <h2 class="text-xl text-gray-600 dark:text-gray-400 mb-4">Python Developer | ML Enthusiast</h2>
                    <div class="flex flex-wrap justify-center gap-4 mb-6">
                        <a href="https://github.com/Yatrik1107" 
                           target="_blank"
                           rel="noopener noreferrer"
                           class="btn-primary flex items-center space-x-2">
                            <i class="fab fa-github"></i>
                            <span>GitHub</span>
                        </a>
                        <a href="http://www.linkedin.com/in/yatrikpatel1107/" 
                           target="_blank"
                           rel="noopener noreferrer"
                           class="btn-primary flex items-center space-x-2">
                            <i class="fab fa-linkedin"></i>
                            <span>LinkedIn</span>
                        </a>
                        <a href="https://www.hackerrank.com/profile/yatrikbilodariya" 
                           target="_blank"
                           rel="noopener noreferrer"
                           class="btn-primary flex items-center space-x-2">
                            <i class="fab fa-hackerrank"></i>
                            <span>HackerRank</span>
                        </a>
                        <a href="https://leetcode.com/u/YatrikPatel1107/" 
                           target="_blank"
                           rel="noopener noreferrer"
                           class="btn-primary flex items-center space-x-2">
                            <i class="fas fa-code"></i>
                            <span>LeetCode</span>
                        </a>
                    </div>
                </div>

                <div class="space-y-6">
                    <div class="card hover:shadow-lg transition-all duration-300">
                        <h3 class="text-2xl font-semibold mb-4">About Me</h3>
                        <p class="text-gray-700 dark:text-gray-300 mb-4">
                            Passionate Python Developer specializing in Machine Learning and Data Science solutions. 
                            Experienced in developing sophisticated NLP applications and computer vision systems. 
                            Strong focus on automation and optimization, with expertise in Django web applications 
                            and data analytics using Power BI.
                        </p>
                    </div>

                    <div class="card hover:shadow-lg transition-all duration-300">
                        <h3 class="text-2xl font-semibold mb-4">Education</h3>
                        <div class="space-y-2">
                            <p class="font-medium">Bachelor's in Computer Science and Engineering</p>
                            <p class="text-gray-600 dark:text-gray-400">
                                L.J. Institute of Engineering and Technology
                            </p>
                            <p class="text-blue-600">CGPA: 9.48/10.0 (Sem-4)</p>
                            <p class="text-gray-500">November 2021 - Present</p>
                        </div>
                    </div>

                    <div class="card hover:shadow-lg transition-all duration-300">
                        <h3 class="text-2xl font-semibold mb-4">Location</h3>
                        <div class="flex items-center space-x-2">
                            <i class="fas fa-map-marker-alt text-blue-600"></i>
                            <span>Ahmedabad, Gujarat, India</span>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    `;
};

export default About;