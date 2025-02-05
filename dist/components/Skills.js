const skillCategories = {
    "Programming & Languages": [
        { name: "Python", icon: "fab fa-python" },
        { name: "SQL", icon: "fas fa-database" },
        { name: "JavaScript", icon: "fab fa-js" },
        { name: "HTML/CSS", icon: "fab fa-html5" },
        { name: "PowerShell", icon: "fas fa-terminal" }
    ],
    "Tools & Technologies": [
        { name: "Power BI", icon: "fas fa-chart-bar" },
        { name: "SSMS", icon: "fas fa-server" },
        { name: "SSRS", icon: "fas fa-file-alt" },
        { name: "OpenCV", icon: "fas fa-camera" },
        { name: "PyTorch", icon: "fas fa-brain" },
        { name: "Git & GitHub", icon: "fab fa-github" }
    ],
    "Frameworks": [
        { name: "Django", icon: "fab fa-python" },
        { name: "spaCy", icon: "fas fa-language" },
        { name: "Pandas", icon: "fas fa-table" },
        { name: "NumPy", icon: "fas fa-calculator" }
    ],
    "Professional Skills": [
        { name: "Problem-Solving", icon: "fas fa-puzzle-piece" },
        { name: "Team Collaboration", icon: "fas fa-users" },
        { name: "Communication", icon: "fas fa-comments" },
        { name: "Work Ethic", icon: "fas fa-award" }
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
                        <div class="grid grid-cols-2 gap-4">
                            ${skills.map(skill => `
                                <div class="flex items-center p-3 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-700 transition-all duration-300">
                                    <i class="${skill.icon} text-xl text-blue-600 mr-3"></i>
                                    <span class="font-medium">${skill.name}</span>
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