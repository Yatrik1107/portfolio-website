const About = () => {
    return `
        <section id="about" class="section-container">
            <div class="grid grid-cols-1 md:grid-cols-2 gap-8">
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
                        <a href="http://www.linkedin.com/in/yatrikpatel1107/" class="btn-primary">
                            <i class="fab fa-linkedin"></i> LinkedIn
                        </a>
                    </div>
                </div>

                <div class="space-y-6">
                    <div class="card">
                        <h3 class="text-2xl font-semibold mb-4">About Me</h3>
                        <p class="text-gray-700 dark:text-gray-300 mb-4">
                            A driven Python Developer with expertise in machine learning, Django, and data science. 
                            Experienced in building NLP solutions, automating workflows with OpenCV, and optimizing 
                            SQL processes. Skilled in Power BI, PowerShell, and SSRS.
                        </p>
                    </div>

                    <div class="card">
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
                </div>
            </div>
        </section>
    `;
};

export default About;