const Contact = () => {
    return `
        <section id="contact" class="section-container">
            <h2 class="text-3xl font-bold text-center mb-8">Get In Touch</h2>
            <div class="max-w-2xl mx-auto">
                <div class="card">
                    <div class="space-y-5">
                        <div class="flex items-center space-x-3">
                            <div class="social-icon" style="width:2.25rem;height:2.25rem;">
                                <i class="fas fa-envelope text-sm"></i>
                            </div>
                            <a href="mailto:yatrikbilodariya@gmail.com" class="hover:text-blue-600 font-medium">
                                yatrikbilodariya@gmail.com
                            </a>
                        </div>
                        <div class="flex items-center space-x-3">
                            <div class="social-icon" style="width:2.25rem;height:2.25rem;">
                                <i class="fas fa-phone text-sm"></i>
                            </div>
                            <a href="tel:+919601548899" class="hover:text-blue-600 font-medium">
                                +91 9601548899
                            </a>
                        </div>
                        <div class="flex items-center space-x-3">
                            <div class="social-icon" style="width:2.25rem;height:2.25rem;">
                                <i class="fas fa-map-marker-alt text-sm"></i>
                            </div>
                            <span class="font-medium">Ahmedabad, Gujarat, India</span>
                        </div>
                        <hr class="border-gray-200" style="margin-top:1.5rem;margin-bottom:1.5rem;">
                        <div class="flex justify-center space-x-3">
                            <a href="https://github.com/Yatrik1107" target="_blank" rel="noopener noreferrer" class="social-icon">
                                <i class="fab fa-github text-lg"></i>
                            </a>
                            <a href="http://www.linkedin.com/in/yatrikpatel1107/" target="_blank" rel="noopener noreferrer" class="social-icon">
                                <i class="fab fa-linkedin text-lg"></i>
                            </a>
                            <a href="https://www.hackerrank.com/profile/yatrikbilodariya" target="_blank" rel="noopener noreferrer" class="social-icon">
                                <i class="fab fa-hackerrank text-lg"></i>
                            </a>
                            <a href="https://leetcode.com/u/YatrikPatel1107/" target="_blank" rel="noopener noreferrer" class="social-icon">
                                <i class="fas fa-code text-lg"></i>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    `;
};

export default Contact;