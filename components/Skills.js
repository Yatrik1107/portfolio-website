const skillCategories = {
    "Languages": [
        { name: "Python", icon: "fab fa-python" },
        { name: "SQL", icon: "fas fa-database" },
        { name: "JavaScript", icon: "fab fa-js" },
        { name: "PowerShell", icon: "fas fa-terminal" },
        { name: "HTML/CSS", icon: "fab fa-html5" }
    ],
    "Libraries & Frameworks": [
        { name: "FastAPI", icon: "fas fa-bolt" },
        { name: "Django", icon: "fab fa-python" },
        { name: "Flask", icon: "fas fa-flask" },
        { name: "PyTorch", icon: "fas fa-brain" },
        { name: "Scikit-learn", icon: "fas fa-cogs" },
        { name: "Pandas", icon: "fas fa-table" },
        { name: "NumPy", icon: "fas fa-calculator" },
        { name: "OpenCV", icon: "fas fa-camera" },
        { name: "Matplotlib", icon: "fas fa-chart-area" },
        { name: "Seaborn", icon: "fas fa-chart-bar" }
    ],
    "Tools & Technologies": [
        { name: "Git & GitHub", icon: "fab fa-git-alt" },
        { name: "Docker", icon: "fab fa-docker" },
        { name: "PostgreSQL", icon: "fas fa-database" },
        { name: "SSMS", icon: "fas fa-server" },
        { name: "SSRS", icon: "fas fa-file-alt" },
        { name: "Power BI", icon: "fas fa-chart-line" },
        { name: "Jupyter Notebook", icon: "fas fa-book-open" }
    ],
    "Soft Skills": [
        { name: "Problem Solving", icon: "fas fa-puzzle-piece" },
        { name: "Critical Thinking", icon: "fas fa-lightbulb" },
        { name: "Time Management", icon: "fas fa-clock" },
        { name: "Team Collaboration", icon: "fas fa-users" },
        { name: "Communication", icon: "fas fa-comments" },
        { name: "Adaptability", icon: "fas fa-sync-alt" }
    ]
};

const Skills = () => {
    return `
        <section id="skills" class="section-container">
            <h2 class="text-3xl font-bold text-center mb-10">Skills & Expertise</h2>
            
            <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
                ${Object.entries(skillCategories).map(([category, skills]) => `
                    <div class="card">
                        <h3 class="text-lg font-semibold mb-5 text-blue-600">${category}</h3>
                        <div class="grid grid-cols-2 sm:grid-cols-3 gap-4">
                            ${skills.map(skill => `
                                <div class="skill-icon-container group">
                                    <div class="skill-item flex flex-col items-center p-3 rounded-lg transition-all duration-200">
                                        <div class="text-2xl mb-2 text-gray-600 dark:text-gray-400 group-hover:text-blue-600 transition-colors duration-200">
                                            <i class="${skill.icon}"></i>
                                        </div>
                                        <span class="text-xs font-medium text-center text-gray-700 dark:text-gray-300">${skill.name}</span>
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