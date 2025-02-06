const projects = [
    {
        id: 1,
        title: "Auto Number Plate Recognition",
        description: "Developed a license plate recognition system using Python and OpenCV, implementing advanced image preprocessing techniques such as resizing, denoising, and contrast adjustment to enhance input quality. Engineered license plate region detection with various techniques, achieving 70%–80% recognition accuracy.",
        technologies: ["Python", "OpenCV", "Deep Learning", "Image Processing"],
        achievements: [
            "Implemented advanced image preprocessing pipeline",
            "Achieved 70-80% recognition accuracy",
            "Real-time processing capabilities"
        ],
        githubLink: "https://github.com/Yatrik1107/Auto_Number_Plate_Recognization"
    },
    {
        id: 2,
        title: "E-commerce Sales Dashboard",
        description: "Designed an interactive Power BI dashboard for e-commerce analytics, integrating filters, slicers, and drill-down parameters to facilitate in-depth business insights. Developed dynamic reports enabling real-time sales tracking and trend analysis for data-driven decision-making.",
        technologies: ["Power BI", "SQL", "Data Analytics", "Business Intelligence"],
        achievements: [
            "Interactive dashboard with real-time tracking",
            "Custom filters and slicers",
            "Comprehensive business insights"
        ],
        githubLink: "https://github.com/Yatrik1107/Ecommerce-Sales-Dashboard"
    },
    {
        id: 3,
        title: "A* Pathfinding Visualization",
        description: "Implemented the A* search algorithm in Python to compute the shortest path in grid-based maps, optimizing traversal efficiency. Developed a visualization tool to demonstrate pathfinding mechanics, enhancing algorithm comprehension.",
        technologies: ["Python", "Pygame", "Algorithms", "Path Planning"],
        achievements: [
            "Interactive visualization tool",
            "Optimal path computation",
            "Educational demonstration features"
        ],
        githubLink: "https://github.com/Yatrik1107/AStar-Pathfinder"
    },
    {
        id: 4,
        title: "Snake Game",
        description: "Developed a classic Snake Game using Python and Pygame, implementing real-time event handling and collision detection. Created a standalone executable file to allow the game to run on any computer without requiring Python installation.",
        technologies: ["Python", "Pygame", "Game Development"],
        achievements: [
            "Standalone executable package",
            "Real-time event handling",
            "Cross-platform compatibility"
        ],
        githubLink: "https://github.com/Yatrik1107/Snack_Game"
    }
];

const ProjectsSection = () => {
    return `
        <section id="projects" class="section-container">
            <h2 class="text-3xl font-bold mb-8">Featured Projects</h2>
            <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
                ${projects.map(project => `
                    <div class="card hover:shadow-lg transition-all duration-300">
                        <h3 class="text-xl font-semibold text-blue-600 mb-3">${project.title}</h3>
                        <p class="text-gray-700 dark:text-gray-300 mb-4">${project.description}</p>
                        
                        <div class="mb-4">
                            <h4 class="font-medium mb-2">Key Achievements:</h4>
                            <ul class="list-disc list-inside space-y-1">
                                ${project.achievements.map(achievement => `
                                    <li class="text-gray-600 dark:text-gray-400">${achievement}</li>
                                `).join('')}
                            </ul>
                        </div>

                        <div class="flex flex-wrap gap-2 mb-4">
                            ${project.technologies.map(tech => `
                                <span class="skill-tag">${tech}</span>
                            `).join('')}
                        </div>

                        <a href="${project.githubLink}" 
                           target="_blank" 
                           rel="noopener noreferrer" 
                           class="btn-primary flex items-center justify-center">
                            <i class="fab fa-github mr-2"></i>View Project
                        </a>
                    </div>
                `).join('')}
            </div>
        </section>
    `;
};

export default ProjectsSection;