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
                            <i class="fas fa-map-marker-alt text-blue-600"></i>
                            <span>Ahmedabad, Gujarat, India</span>
                        </div>
                        <div class="flex justify-center space-x-4 mt-6">
                            <a href="https://github.com/Yatrik1107" class="text-gray-600 hover:text-blue-600">
                                <i class="fab fa-github text-2xl"></i>
                            </a>
                            <a href="http://www.linkedin.com/in/yatrikpatel1107/" class="text-gray-600 hover:text-blue-600">
                                <i class="fab fa-linkedin text-2xl"></i>
                            </a>
                            <a href="https://www.hackerrank.com/profile/yatrikbilodariya" class="text-gray-600 hover:text-blue-600">
                                <i class="fab fa-hackerrank text-2xl"></i>
                            </a>
                            <a href="https://leetcode.com/u/YatrikPatel1107/" class="text-gray-600 hover:text-blue-600">
                                <i class="fas fa-code text-2xl"></i>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    `;
};

export default Contact;