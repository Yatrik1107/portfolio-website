const Contact = () => {
    return `
        <section id="contact" class="section-container">
            <h2 class="text-3xl font-bold text-center mb-8">Get In Touch</h2>
            <div class="max-w-2xl mx-auto">
                <div class="card">
                    <div class="space-y-6">
                        <div class="flex items-center space-x-3">
                            <i class="fas fa-envelope text-blue-600"></i>
                            <a href="mailto:yatrikbilodariya@gmail.com" class="hover:text-blue-600">
                                yatrikbilodariya@gmail.com
                            </a>
                        </div>
                        <div class="flex items-center space-x-3">
                            <i class="fas fa-phone text-blue-600"></i>
                            <a href="tel:+919601548899" class="hover:text-blue-600">
                                +91 96015 48899
                            </a>
                        </div>
                        <div class="flex items-center space-x-3">
                            <i class="fas fa-map-marker-alt text-blue-600"></i>
                            <span>Ahmedabad, Gujarat, India</span>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    `;
};

export default Contact;