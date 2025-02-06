const skillCategories = {
    "Core Technologies": [
        { name: "Python", icon: "fab fa-python" },
        { name: "SQL", icon: "fas fa-database" },
        { name: "JavaScript", icon: "fab fa-js" },
        { name: "PowerShell", icon: "fas fa-terminal" },
        { name: "HTML/CSS", icon: "fab fa-html5" }
    ],
    "Machine Learning & Data Science": [
        { name: "PyTorch", icon: "fas fa-brain" },
        { name: "Data Analysis", icon: "fas fa-chart-bar" },
        { name: "NLP", icon: "fas fa-language" },
        { name: "Computer Vision", icon: "fas fa-eye" },
        { name: "Pandas", icon: "fas fa-table" }
    ],
    "Frameworks & Tools": [
        { name: "Django", icon: "fab fa-python" },
        { name: "OpenCV", icon: "fas fa-camera" },
        { name: "Power BI", icon: "fas fa-chart-line" },
        { name: "SSMS", icon: "fas fa-server" },
        { name: "Git", icon: "fab fa-git-alt" }
    ],
    "Professional Skills": [
        { name: "Problem-Solving", icon: "fas fa-puzzle-piece" },
        { name: "Team Work", icon: "fas fa-users" },
        { name: "Communication", icon: "fas fa-comments" },
        { name: "Work Ethic", icon: "fas fa-award" }
    ]
};

const Skills = () => {
    return `
        <section id="skills" class="section-container">
            <h2 class="text-3xl font-bold text-center mb-12">Skills & Expertise</h2>
            
            <div class="grid grid-cols-1 md:grid-cols-2 gap-8">
                ${Object.entries(skillCategories).map(([category, skills]) => `
                    <div class="card hover:shadow-lg transition-all duration-300">
                        <h3 class="text-xl font-semibold mb-6 text-blue-600">${category}</h3>
                        <div class="grid grid-cols-2 sm:grid-cols-3 gap-6">
                            ${skills.map(skill => `
                                <div class="skill-icon-container group">
                                    <div class="flex flex-col items-center p-4 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-700 transition-all duration-300">
                                        <div class="text-3xl mb-3 transform group-hover:scale-110 transition-transform duration-300 text-gray-700 dark:text-gray-300">
                                            <i class="${skill.icon}"></i>
                                        </div>
                                        <span class="text-sm font-medium text-center">${skill.name}</span>
                                    </div>
                                </div>
                            `).join('')}
                        </div>
                    </div>
                `).join('')}
            </div>
        </section>
    `;
};

export default Skills;