const Contact = () => {
    return `
        <section id="contact" class="section-container">
            <h2 class="text-3xl font-bold text-center mb-8">Get In Touch</h2>
            
            <div class="grid grid-cols-1 md:grid-cols-2 gap-8">
                <!-- Contact Information -->
                <div class="card">
                    <h3 class="text-2xl font-semibold mb-6">Contact Information</h3>
                    
                    <div class="space-y-4">
                        <div class="flex items-center space-x-3">
                            <i class="fas fa-envelope text-blue-600"></i>
                            <a href="mailto:yatrikbilodariya@gmail.com" class="hover:text-blue-600">
                                yatrik.patel@email.com
                            </a>
                        </div>
                        
                        <div class="flex items-center space-x-3">
                            <i class="fas fa-map-marker-alt text-blue-600"></i>
                            <span>Ahmedabad, Gujarat, India</span>
                        </div>

                        <div class="social-links flex space-x-4 mt-6">
                            <a href="https://linkedin.com/in/yatrik-patel" 
                               class="btn-primary flex items-center" 
                               target="_blank" rel="noopener noreferrer">
                                <i class="fab fa-linkedin mr-2"></i> LinkedIn
                            </a>
                            
                            <a href="https://github.com/Yatrik1107" 
                               class="btn-primary flex items-center" 
                               target="_blank" rel="noopener noreferrer">
                                <i class="fab fa-github mr-2"></i> GitHub
                            </a>
                        </div>

                        <a href="/assets/Yatrik_Patel_Resume.pdf" 
                           class="btn-primary block text-center mt-6" 
                           download>
                            <i class="fas fa-download mr-2"></i> Download Resume
                        </a>
                    </div>
                </div>

                <!-- Contact Form -->
                <div class="card">
                    <form id="contact-form" class="space-y-4">
                        <div>
                            <label class="block text-gray-700 dark:text-gray-300 mb-2">Name</label>
                            <input type="text" required
                                   class="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500">
                        </div>

                        <div>
                            <label class="block text-gray-700 dark:text-gray-300 mb-2">Email</label>
                            <input type="email" required
                                   class="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500">
                        </div>

                        <div>
                            <label class="block text-gray-700 dark:text-gray-300 mb-2">Message</label>
                            <textarea required rows="4"
                                      class="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500"></textarea>
                        </div>

                        <button type="submit" class="btn-primary w-full">
                            Send Message
                        </button>
                    </form>
                </div>
            </div>
        </section>
    `;
};

export default Contact;