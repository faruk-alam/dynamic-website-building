        const pages = {
            home: {
                title: "Welcome to Our Website",
                content: `
                    <div class="text-center">
                        <h2 class="text-3xl font-bold mb-6">Welcome to DynamicSite</h2>
                        <p class="text-lg mb-8">This is a demo of a simple dynamic website using vanilla JavaScript and Tailwind CSS.</p>
                        <div class="grid md:grid-cols-3 gap-6">
                            <div class="bg-white p-6 rounded-lg shadow-md">
                                <h3 class="text-xl font-semibold mb-3">Feature 1</h3>
                                <p>Dynamic content loading without page refresh.</p>
                            </div>
                            <div class="bg-white p-6 rounded-lg shadow-md">
                                <h3 class="text-xl font-semibold mb-3">Feature 2</h3>
                                <p>Responsive design that works on all devices.</p>
                            </div>
                            <div class="bg-white p-6 rounded-lg shadow-md">
                                <h3 class="text-xl font-semibold mb-3">Feature 3</h3>
                                <p>Interactive elements with smooth transitions.</p>
                            </div>
                        </div>
                    </div>
                `
            },
            products: {
                title: "Our Products",
                content: `
                    <div>
                        <h2 class="text-3xl font-bold mb-6">Our Products</h2>
                        <div class="mb-8">
                            <input type="text" id="product-search" placeholder="Search products..." 
                                   class="w-full md:w-1/2 px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500">
                        </div>
                        <div id="products-container" class="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                            <!-- Products will be loaded here -->
                        </div>
                        <button id="load-more" class="mt-8 px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors">
                            Load More Products
                        </button>
                    </div>
                `,
                products: [
                    { id: 1, name: "Premium Widget", price: 29.99, description: "Our top-quality widget with advanced features." },
                    { id: 2, name: "Standard Gadget", price: 19.99, description: "Reliable gadget for everyday use." },
                    { id: 3, name: "Basic Tool", price: 9.99, description: "Simple tool for basic tasks." },
                    { id: 4, name: "Deluxe Package", price: 49.99, description: "Everything you need in one package." },
                    { id: 5, name: "Limited Edition", price: 99.99, description: "Exclusive item for collectors." }
                ]
            },
            contact: {
                title: "Contact Us",
                content: `
                    <div class="max-w-2xl mx-auto">
                        <h2 class="text-3xl font-bold mb-6">Contact Us</h2>
                        <form id="contact-form" class="space-y-4">
                            <div>
                                <label for="name" class="block text-sm font-medium text-gray-700 mb-1">Name</label>
                                <input type="text" id="name" required 
                                       class="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500">
                            </div>
                            <div>
                                <label for="email" class="block text-sm font-medium text-gray-700 mb-1">Email</label>
                                <input type="email" id="email" required 
                                       class="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500">
                            </div>
                            <div>
                                <label for="message" class="block text-sm font-medium text-gray-700 mb-1">Message</label>
                                <textarea id="message" rows="4" required 
                                          class="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"></textarea>
                            </div>
                            <button type="submit" 
                                    class="px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors">
                                Send Message
                            </button>
                        </form>
                        <div id="form-success" class="hidden mt-4 p-4 bg-green-100 text-green-700 rounded-lg">
                            Thank you for your message! We'll get back to you soon.
                        </div>
                    </div>
                `
            }
        };

        // DOM Elements
        const mainContent = document.getElementById('main-content');
        const navLinks = document.querySelectorAll('.nav-link');
        const mobileMenuButton = document.getElementById('mobile-menu-button');
        const mobileMenu = document.getElementById('mobile-menu');

        // Current page state
        let currentPage = 'home';

        // Initialize the page
        document.addEventListener('DOMContentLoaded', function() {
            loadPage(currentPage);
            
            // Set up navigation
            navLinks.forEach(link => {
                link.addEventListener('click', function(e) {
                    e.preventDefault();
                    const page = this.getAttribute('data-page');
                    if (page !== currentPage) {
                        currentPage = page;
                        loadPage(page);
                        
                        // Update active state
                        navLinks.forEach(l => l.classList.remove('active'));
                        document.querySelectorAll(`.nav-link[data-page="${page}"]`).forEach(l => l.classList.add('active'));
                    }
                    
                    // Close mobile menu if open
                    mobileMenu.classList.add('hidden');
                });
            });
            
            // Mobile menu toggle
            mobileMenuButton.addEventListener('click', function() {
                mobileMenu.classList.toggle('hidden');
            });
        });

        // Load page content
        function loadPage(page) {
            const pageData = pages[page];
            document.title = `${pageData.title} | DynamicSite`;
            
            // Load basic content
            mainContent.innerHTML = pageData.content;
            
            // Page-specific initialization
            if (page === 'products') {
                initializeProductsPage();
            } else if (page === 'contact') {
                initializeContactPage();
            }
        }

        // Products page functionality
        function initializeProductsPage() {
            const productsContainer = document.getElementById('products-container');
            const productSearch = document.getElementById('product-search');
            const loadMoreBtn = document.getElementById('load-more');
            
            let displayedProducts = 3;
            
            // Display products
            function displayProducts(productsToShow = 3) {
                productsContainer.innerHTML = '';
                const products = pages.products.products.slice(0, productsToShow);
                
                products.forEach(product => {
                    const productElement = document.createElement('div');
                    productElement.className = 'bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow';
                    productElement.innerHTML = `
                        <h3 class="text-xl font-semibold mb-2">${product.name}</h3>
                        <p class="text-gray-600 mb-3">${product.description}</p>
                        <div class="flex justify-between items-center">
                            <span class="text-lg font-bold">$${product.price.toFixed(2)}</span>
                            <button class="add-to-cart px-3 py-1 bg-blue-600 text-white rounded hover:bg-blue-700 transition-colors" 
                                    data-id="${product.id}">
                                Add to Cart
                            </button>
                        </div>
                    `;
                    productsContainer.appendChild(productElement);
                });
                
                // Show/hide load more button
                if (productsToShow >= pages.products.products.length) {
                    loadMoreBtn.classList.add('hidden');
                } else {
                    loadMoreBtn.classList.remove('hidden');
                }
            }
            
            // Initial display
            displayProducts(displayedProducts);
            
            // Load more products
            loadMoreBtn.addEventListener('click', function() {
                displayedProducts += 3;
                displayProducts(displayedProducts);
            });
            
            // Search functionality
            productSearch.addEventListener('input', function() {
                const searchTerm = this.value.toLowerCase();
                if (searchTerm.length > 0) {
                    const filteredProducts = pages.products.products.filter(product => 
                        product.name.toLowerCase().includes(searchTerm) || 
                        product.description.toLowerCase().includes(searchTerm)
                    );
                    
                    productsContainer.innerHTML = '';
                    filteredProducts.forEach(product => {
                        const productElement = document.createElement('div');
                        productElement.className = 'bg-white p-6 rounded-lg shadow-md';
                        productElement.innerHTML = `
                            <h3 class="text-xl font-semibold mb-2">${product.name}</h3>
                            <p class="text-gray-600 mb-3">${product.description}</p>
                            <div class="flex justify-between items-center">
                                <span class="text-lg font-bold">$${product.price.toFixed(2)}</span>
                                <button class="add-to-cart px-3 py-1 bg-blue-600 text-white rounded hover:bg-blue-700 transition-colors" 
                                        data-id="${product.id}">
                                    Add to Cart
                                </button>
                            </div>
                        `;
                        productsContainer.appendChild(productElement);
                    });
                    
                    loadMoreBtn.classList.add('hidden');
                } else {
                    displayProducts(displayedProducts);
                }
            });
            
            // Add to cart functionality
            productsContainer.addEventListener('click', function(e) {
                if (e.target.classList.contains('add-to-cart')) {
                    const productId = parseInt(e.target.getAttribute('data-id'));
                    const product = pages.products.products.find(p => p.id === productId);
                    
                    // Show added notification
                    const notification = document.createElement('div');
                    notification.className = 'fixed bottom-4 right-4 px-4 py-2 bg-green-500 text-white rounded-lg shadow-lg animate-bounce';
                    notification.textContent = `${product.name} added to cart!`;
                    document.body.appendChild(notification);
                    
                    setTimeout(() => {
                        notification.classList.add('opacity-0', 'transition-opacity', 'duration-300');
                        setTimeout(() => notification.remove(), 300);
                    }, 2000);
                }
            });
        }

        // Contact page functionality
        function initializeContactPage() {
            const contactForm = document.getElementById('contact-form');
            const formSuccess = document.getElementById('form-success');
            
            contactForm.addEventListener('submit', function(e) {
                e.preventDefault();
                
                // In a real app, you would send this data to a server
                const formData = {
                    name: document.getElementById('name').value,
                    email: document.getElementById('email').value,
                    message: document.getElementById('message').value
                };
                
                console.log('Form submitted:', formData);
                
                // Show success message
                contactForm.reset();
                formSuccess.classList.remove('hidden');
                
                // Hide success message after 5 seconds
                setTimeout(() => {
                    formSuccess.classList.add('hidden');
                }, 5000);
            });
        }
