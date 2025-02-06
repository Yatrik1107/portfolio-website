const Contact = () => {
    return `
        <section id="contact" class="section-container">
            <h2 class="text-3xl font-bold text-center mb-8">Get In Touch</h2>
            
            <div class="max-w-2xl mx-auto">
                <div class="card bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md">
                    <div class="space-y-6">
                        <div class="flex items-center space-x-3">
                            <i class="fas fa-envelope text-blue-600"></i>
                            <a href="mailto:yatrikpatel1107@gmail.com" 
                               class="hover:text-blue-600 transition-colors">
                                yatrikpatel1107@gmail.com
                            </a>
                        </div>
                        
                        <div class="flex items-center space-x-3">
                            <i class="fas fa-map-marker-alt text-blue-600"></i>
                            <span>Ahmedabad, Gujarat, India</span>
                        </div>

                        <div class="flex flex-col sm:flex-row justify-center gap-4">
                            <a href="https://linkedin.com/in/yatrik-patel" 
                               class="btn-primary flex items-center justify-center" 
                               target="_blank" 
                               rel="noopener noreferrer">
                                <i class="fab fa-linkedin mr-2"></i> LinkedIn
                            </a>
                            
                            <a href="https://github.com/Yatrik1107" 
                               class="btn-primary flex items-center justify-center" 
                               target="_blank" 
                               rel="noopener noreferrer">
                                <i class="fab fa-github mr-2"></i> GitHub
                            </a>
                        </div>

                        <a href="/assets/Yatrik_Patel_Resume.pdf" 
                           class="btn-primary block text-center" 
                           download>
                            <i class="fas fa-download mr-2"></i> Download Resume
                        </a>
                    </div>
                </div>
            </div>
        </section>
    `;
};

export default Contact;