const experiences = [
    {
        id: 1,
        role: "Python Developer",
        company: "MagnusMinds IT Solution",
        duration: "May 2024 - Present",
        location: "Ahmedabad, India",
        responsibilities: [
            "Developed and deployed Django web applications with SSMS integration on IIS",
            "Implemented multi-threading for scheduled tasks, handling real-time NSE API calls",
            "Built NLP solutions using OpenAI API and spaCy, applying stemming, lemmatization, and NER techniques",
            "Engineered an automated PDF catalog processing system using Python/OpenCV, achieving 95% accuracy in extracting color samples and product codes"
        ],
        technologies: ["Python", "Django", "OpenCV", "NLP", "SSMS", "OpenAI API", "spaCy"]
    },
    {
        id: 2,
        role: "SQL Developer / Support Engineer",
        company: "MagnusMinds IT Solution",
        duration: "January 2024 - Present",
        location: "Ahmedabad, India",
        responsibilities: [
            "Provided production support for SQL jobs automated via PowerShell, troubleshooting failures by analyzing SSIS packages, SSMS logs, and scripts",
            "Designed, modified, and deployed SSRS reports based on partner requirements, ensuring seamless integration into the production report server",
            "Managed and updated report subscriptions on the SSRS report server after verifying business approvals",
            "Created and managed deployment tickets, overseeing the production deployment of reports to the report server"
        ],
        technologies: ["SQL", "PowerShell", "SSRS", "SSIS", "SSMS"]
    }
];

const ExperienceSection = () => {
    return `
        <section id="experience" class="section-container">
            <h2 class="text-3xl font-bold mb-8">Work Experience</h2>
            <div class="space-y-8">
                ${experiences.map(exp => `
                    <div class="card hover:shadow-lg transition-all duration-300">
                        <div class="flex flex-col md:flex-row justify-between items-start mb-4">
                            <div>
                                <h3 class="text-xl font-semibold text-blue-600">${exp.role}</h3>
                                <p class="text-lg text-gray-700 dark:text-gray-300">${exp.company}</p>
                            </div>
                            <div class="text-left md:text-right mt-2 md:mt-0">
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