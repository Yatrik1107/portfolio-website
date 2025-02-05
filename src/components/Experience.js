const experiences = [
    {
        id: 1,
        role: "Python Developer",
        company: "MagnusMinds IT Solution",
        duration: "May 2024 - Present",
        location: "Ahmedabad, India",
        responsibilities: [
            "Developed Django web applications with SSMS integration on IIS",
            "Implemented multi-threading for real-time NSE API calls",
            "Built NLP solutions using OpenAI API and spaCy",
            "Engineered automated PDF catalog processing system with 95% accuracy"
        ],
        technologies: ["Python", "Django", "OpenCV", "NLP", "SSMS"]
    },
    {
        id: 2,
        role: "SQL Developer / Support Engineer",
        company: "MagnusMinds IT Solution",
        duration: "January 2024 - Present",
        location: "Ahmedabad, India",
        responsibilities: [
            "Provided SQL production support via PowerShell automation",
            "Designed & modified SSRS reports for business integration",
            "Managed deployment tickets for production releases"
        ],
        technologies: ["SQL", "PowerShell", "SSRS"]
    }
];

export const ExperienceSection = () => {
    return `
        <section id="experience" class="section-container">
            <h2 class="text-3xl font-bold mb-8">Work Experience</h2>
            <div class="space-y-8">
                ${experiences.map(exp => `
                    <div class="card hover:shadow-lg transition-all duration-300">
                        <div class="flex justify-between items-start mb-4">
                            <div>
                                <h3 class="text-xl font-semibold text-blue-600">${exp.role}</h3>
                                <p class="text-lg text-gray-700 dark:text-gray-300">${exp.company}</p>
                            </div>
                            <div class="text-right">
                                <p class="text-gray-600 dark:text-gray-400">${exp.duration}</p>
                                <p class="text-gray-500 dark:text-gray-500">${exp.location}</p>
                            </div>
                        </div>
                        <ul class="list-disc list-inside space-y-2 mb-4">
                            ${exp.responsibilities.map(resp => `
                                <li class="text-gray-700 dark:text-gray-300">${resp}</li>
                            `).join('')}
                        </ul>
                        <div class="flex flex-wrap gap-2">
                            ${exp.technologies.map(tech => `
                                <span class="skill-tag">${tech}</span>
                            `).join('')}
                        </div>
                    </div>
                `).join('')}
            </div>
        </section>
    `;
};

export default ExperienceSection;