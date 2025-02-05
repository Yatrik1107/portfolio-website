const About = () => {
    return `
        <section id="about" class="section-container">
            <div class="grid grid-cols-1 md:grid-cols-2 gap-8">
                <!-- Profile Section -->
                <div class="flex flex-col items-center">
                    <div class="w-48 h-48 rounded-full overflow-hidden mb-6">
                        <img src="assets/images/profile.jpg" alt="Yatrik N. Patel" 
                             class="w-full h-full object-cover">
                    </div>
                    <h1 class="text-4xl font-bold text-blue-600 mb-2">Yatrik N. Patel</h1>
                    <h2 class="text-xl text-gray-600 dark:text-gray-400 mb-4">Python Developer</h2>
                    <div class="flex space-x-4 mb-6">
                        <a href="https://github.com/Yatrik1107" class="btn-primary">
                            <i class="fab fa-github"></i> GitHub
                        </a>
                        <a href="https://linkedin.com/in/yatrik-patel" class="btn-primary">
                            <i class="fab fa-linkedin"></i> LinkedIn
                        </a>
                    </div>
                    <a href="assets/resume.pdf" download class="btn-primary">
                        Download Resume
                    </a>
                </div>

                <!-- Bio Section -->
                <div class="space-y-6">
                    <div class="card">
                        <h3 class="text-2xl font-semibold mb-4">About Me</h3>
                        <p class="text-gray-700 dark:text-gray-300 mb-4">
                            A driven Python Developer with expertise in machine learning, 
                            Django, and data science. Experienced in building NLP solutions, 
                            automating workflows with OpenCV, and optimizing SQL processes. 
                            Skilled in Power BI, PowerShell, and SSRS.
                        </p>
                    </div>

                    <div class="card">
                        <h3 class="text-2xl font-semibold mb-4">Education</h3>
                        <div class="space-y-2">
                            <p class="font-medium">Bachelor's in Engineering</p>
                            <p class="text-gray-600 dark:text-gray-400">
                                L.J. Institute of Engineering and Technology
                            </p>
                            <p class="text-blue-600">CGPA: 9.48/10.0 (Sem-4)</p>
                            <p class="text-gray-500">2021 - 2025</p>
                        </div>
                    </div>

                    <div class="card">
                        <h3 class="text-2xl font-semibold mb-4">Interests</h3>
                        <div class="flex flex-wrap gap-2">
                            <span class="skill-tag">Machine Learning</span>
                            <span class="skill-tag">Data Science</span>
                            <span class="skill-tag">Web Development</span>
                            <span class="skill-tag">Problem Solving</span>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    `;
};

export default About;