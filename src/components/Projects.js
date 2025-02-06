const projects = [
    {
        id: 1,
        title: "Auto Number Plate Recognition",
        description: "Image preprocessing pipeline for license plate detection",
        technologies: ["OpenCV", "Python", "Deep Learning"],
        achievements: ["70-80% accuracy", "Real-time processing"],
        // demoLink: "#",
        githubLink: "#"
    },
    {
        id: 2,
        title: "E-commerce Sales Dashboard",
        description: "Interactive dashboard for real-time sales tracking",
        technologies: ["Power BI", "SQL", "Data Analysis"],
        achievements: ["Interactive filters", "Drill-down parameters"],
        // demoLink: "#",
        githubLink: "#"
    },
    {
        id: 3,
        title: "Pathfinding Algorithm Visualization",
        description: "A* search algorithm implementation with visualization",
        technologies: ["Python", "Pygame", "Algorithms"],
        achievements: ["Interactive visualization", "Path optimization"],
        // demoLink: "#",
        githubLink: "#"
    },
    {
        id: 4,
        title: "Snake Game",
        description: "Classic Snake Game with executable package",
        technologies: ["Python", "Pygame"],
        achievements: ["Standalone executable", "Score tracking"],
        // demoLink: "#",
        githubLink: "#"
    }
];

export const ProjectsSection = () => {
    return `
        <section id="projects" class="section-container">
            <h2 class="text-3xl font-bold mb-8">Projects</h2>
            <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
                ${projects.map(project => `
                    <div class="project-card">
                        <h3 class="text-xl font-semibold mb-2">${project.title}</h3>
                        <p class="text-gray-600 dark:text-gray-300 mb-4">${project.description}</p>
                        <div class="flex flex-wrap gap-2 mb-4">
                            ${project.technologies.map(tech => `
                                <span class="skill-tag">${tech}</span>
                            `).join('')}
                        </div>
                        <div class="flex justify-center">
                            <a href="${project.githubLink}" class="btn-primary w-full text-center">
                                <i class="fab fa-github mr-2"></i>View on GitHub
                            </a>
                        </div>
                    </div>
                `).join('')}
            </div>
        </section>
    `;
};
export default ProjectsSection;