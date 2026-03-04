const experiences = [
    {
        id: 1,
        role: "Software Engineer (Python & FastAPI)",
        company: "Openxcell",
        duration: "January 2026 - Present",
        location: "Ahmedabad, India",
        responsibilities: [
            "Contributing to an async FastAPI-based microservices architecture (12+ services) with PostgreSQL persistence and cross-service database synchronization, supporting 10k+ concurrent users",
            "Building backend integrations for a chargeback workflow by connecting internal systems to Yardi services via middleware, enabling post-approval background syncing without blocking user requests",
            "Maintaining schema changes using Alembic migrations and GitHub-based version control practices to ensure traceable and consistent database evolution across services"
        ],
        technologies: ["Python", "FastAPI", "PostgreSQL", "Alembic", "Microservices", "Docker"]
    },
    {
        id: 2,
        role: "Software Engineer (Python & SQL)",
        company: "MagnusMinds IT Solution",
        duration: "January 2024 - January 2026",
        location: "Ahmedabad, India",
        responsibilities: [
            "Designed, developed, and deployed a complete Django web application integrating real-time NSE API calls, multithreaded scheduling, SSMS database, and IIS hosting; led architecture, flow design, and production deployment",
            "Scaled extraction pipelines leveraging OpenAI API, Amazon Textract, and spaCy, processing invoices with improved data accuracy and enhanced reliability for extracting information from diverse document formats",
            "Engineered automated PDF catalog processing system using Python OpenCV, achieving 95% accuracy in extracting color samples and product codes across 95+ PDFs, processing 2,800+ images with 90% accuracy",
            "Provided critical production support for 39+ automated SQL jobs using PowerShell, swiftly troubleshooting failures by analyzing SSIS packages, SSMS logs, and custom scripts to minimize downtime",
            "Designed, enhanced, and deployed 5+ complex SSRS reports tailored to partner requirements, guaranteeing seamless integration and reliable delivery on production report server",
            "Managed 63+ report subscriptions on SSRS report server, maintaining strict adherence to business approvals to ensure accurate and timely report distribution",
            "Created and managed 204+ deployment tickets with 99% success rate, coordinating smooth production deployment of reports to the report server",
            "Elevated to admin-level control in ActiveBatch scheduler, managing 80+ job schedules and incident response to maintain robust production support and minimize disruptions"
        ],
        technologies: ["Python", "Django", "OpenCV", "SQL", "PowerShell", "SSRS", "SSIS", "SSMS", "OpenAI API", "spaCy", "Amazon Textract"]
    }
];

const ExperienceSection = () => {
    return `
        <section id="experience" class="section-container">
            <h2 class="text-3xl font-bold mb-8">Work Experience</h2>
            <div class="space-y-6">
                ${experiences.map(exp => `
                    <div class="card">
                        <div class="flex flex-col md:flex-row justify-between items-start mb-4">
                            <div>
                                <h3 class="text-xl font-semibold text-blue-600">${exp.role}</h3>
                                <p class="text-base text-gray-600 dark:text-gray-400 font-medium">${exp.company}</p>
                            </div>
                            <div class="text-left md:text-right mt-2 md:mt-0">
                                <p class="text-sm text-gray-500 font-medium">${exp.duration}</p>
                                <p class="text-sm text-gray-400">${exp.location}</p>
                            </div>
                        </div>
                        
                        <ul class="list-disc list-inside space-y-2 mb-5">
                            ${exp.responsibilities.map(resp => `
                                <li class="text-gray-600 dark:text-gray-300 text-sm leading-relaxed">${resp}</li>
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