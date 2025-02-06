const projects = [
    {
        id: 1,
        title: "AI Vehicle Tracking System",
        description: "Developed a vehicle detection and counting system using YOLOv8 and Python to identify and track vehicles in real-time video streams. Leveraged object detection models and tracking algorithms to compute vehicle counts as they cross predefined zones.",
        technologies: ["Python", "YOLOv8", "OpenCV", "SORT Algorithm", "Computer Vision"],
        achievements: [
            "Implemented YOLOv8 for real-time vehicle and pedestrian detection",
            "Integrated SORT algorithm for consistent object tracking",
            "Developed virtual line counting system with unique object IDs",
            "Created interactive visualization with dynamic overlays"
        ],
        githubLink: "https://github.com/Yatrik1107/AI-Vehicle-Tracking-System"
    },
    {
        id: 2,
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
        id: 5,
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
        id: 4,
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
        id: 3,
        title: "Snake Game",
        description: "Developed a classic Snake Game using Python and Pygame, implementing real-time event handling and collision detection. Created a standalone executable file to allow the game to run on any computer without requiring Python installation.",
        technologies: ["Python", "Pygame", "Game Development"],
        achievements: [
            "Standalone executable package",
            "Real-time event handling",
            "Cross-platform compatibility"
        ],
        githubLink: "https://github.com/Yatrik1107/Snack_Game"
    },
    {
        id: 6,
        title: "Excel Data Analysis - Vrinda Store",
        description: "Conducted comprehensive sales data analysis for Vrinda Store using Excel, uncovering key customer insights and regional trends. Developed data-driven marketing strategies based on demographic patterns and channel performance.",
        technologies: ["Excel", "Data Visualization", "Statistical Analysis", "Market Segmentation"],
        achievements: [
            "Identified women as 65% of sales contributors",
            "Mapped top-performing states: Maharashtra, Karnataka, UP (35% total sales)",
            "Targeted adult age group (30-49 years) driving 50% of sales",
            "Optimized channel strategy (Amazon, Flipkart, Myntra: 80% sales)"
        ],
        conclusion: "Focused marketing strategy on women aged 30-49 in top-performing states through primary e-commerce channels",
        githubLink: "https://github.com/Yatrik1107/Excel---Data-Analysis---Vrinda-Store"
    },
    {
        id: 7,
        title: "2D Cutting Stock Problem Solver",
        description: "Developed a Java-based solution with GUI for optimizing industrial sheet cutting processes. Implemented greedy algorithms for material optimization and dynamic visualization of cutting patterns.",
        technologies: ["Java", "OOP", "Greedy Algorithms", "Java Swing", "GUI Development"],
        achievements: [
            "Implemented greedy algorithm for optimal piece placement",
            "Created dynamic color mapping system for visual clarity",
            "Built robust conflict detection for overlapping pieces",
            "Developed intuitive Java Swing GUI with real-time feedback"
        ],
        technicalDetails: {
            components: [
                "Piece: Manages cut piece attributes and validation",
                "Sheet: Handles grid layout and space tracking",
                "CuttingStock: Implements core placement logic",
                "CuttingStockUI: Provides graphical visualization"
            ],
            features: [
                "Dynamic grid adjustment",
                "Real-time error handling",
                "Input validation",
                "Efficient space utilization"
            ]
        },
        githubLink: "https://github.com/Yatrik1107/2D-Cutting-Stock-Problem"
    },
    {
        id: 8,
        title: "The Paradise Inn Website",
        description: "Developed a responsive hospitality website showcasing modern web development practices. Created an immersive online experience with intuitive navigation and interactive elements.",
        technologies: ["HTML5", "CSS3", "JavaScript", "Bootstrap", "Responsive Design"],
        achievements: [
            "Implemented fully responsive design for all devices",
            "Created intuitive navigation with interactive elements",
            "Designed modern UI reflecting brand identity",
            "Optimized performance for faster load times",
            "Integrated dynamic components for user engagement"
        ],
        features: [
            "Adaptive layouts for multiple screen sizes",
            "Interactive image galleries and sliders",
            "Optimized media loading and caching",
            "Seamless booking interface",
            "Cross-browser compatibility"
        ],
        visualElements: [
            "Contemporary typography and color schemes",
            "Responsive image galleries",
            "Interactive booking forms",
            "Dynamic navigation menus"
        ],
        githubLink: "https://github.com/Yatrik1107/The_Paradise_Inn"
    },
];

const Projects = () => {
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

export default Projects;