const skillCategories = {
    "Core Technologies": [
        { name: "Python", icon: "fab fa-python", color: "text-blue-600" },
        { name: "SQL", icon: "fas fa-database", color: "text-green-600" },
        { name: "JavaScript", icon: "fab fa-js", color: "text-yellow-500" },
        { name: "PowerShell", icon: "fas fa-terminal", color: "text-blue-500" },
        { name: "HTML/CSS", icon: "fab fa-html5", color: "text-orange-500" }
    ],
    "Machine Learning & Data Science": [
        { name: "PyTorch", icon: "fas fa-brain", color: "text-red-500" },
        { name: "Data Analysis", icon: "fas fa-chart-bar", color: "text-blue-600" },
        { name: "NLP", icon: "fas fa-language", color: "text-green-600" },
        { name: "Computer Vision", icon: "fas fa-eye", color: "text-purple-600" },
        { name: "Pandas", icon: "fas fa-table", color: "text-indigo-600" }
    ],
    "Frameworks & Tools": [
        { name: "Django", icon: "fab fa-python", color: "text-green-700" },
        { name: "OpenCV", icon: "fas fa-camera", color: "text-blue-500" },
        { name: "Power BI", icon: "fas fa-chart-line", color: "text-yellow-600" },
        { name: "SSMS", icon: "fas fa-server", color: "text-blue-700" },
        { name: "Git", icon: "fab fa-git-alt", color: "text-orange-600" }
    ],
    "Professional Skills": [
        { name: "Problem-Solving", icon: "fas fa-puzzle-piece", color: "text-purple-500" },
        { name: "Team Work", icon: "fas fa-users", color: "text-blue-600" },
        { name: "Communication", icon: "fas fa-comments", color: "text-green-500" },
        { name: "Work Ethic", icon: "fas fa-award", color: "text-yellow-600" }
    ]
};

const SkillsSection = () => {
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
                                        <div class="text-3xl ${skill.color} mb-3 transform group-hover:scale-110 transition-transform duration-300">
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

export default SkillsSection;