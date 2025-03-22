if(document.querySelector("header")){
    document.querySelector("header").classList.add("header-light");
    document.querySelector("header").classList.add("transparent");
    document.querySelector("header").innerHTML = `
        <div class="container">
            <div class="row">
                <div class="col-md-12">
                    <div class="de-flex sm-pt10">
                        <div class="de-flex-col">
                            <!-- logo begin -->
                            <div id="logo">
                                <a href="index.html">
                                    <img class="logo-main" src="images/logo.png" height="90px" alt="" >
                                    <img class="logo-scroll" src="images/logo.png" height="90px" alt="" >
                                    <img class="logo-mobile" src="images/logo.png" height="70px" alt="" >
                                </a>
                            </div>
                            <!-- logo close -->
                        </div>
                        <div class="de-flex-col header-col-mid">
                            <ul id="mainmenu">
                                <li><a class="menu-item" href="index.html">Home</a>
                                    <ul class="mega">
                                        <li>
                                            <div class="container">
                                                <div class="sb-menu p-4">
                                                    <div class="row g-4">
                                                        <div class="col-lg-1-5 col-md-4 text-center">
                                                            <div class="relative hover text-center overflow-hidden soft-shadow rounded-1">
                                                                <a href="index.html" class="p-0">
                                                                    <img src="images/demo/homepage-1.webp" class="w-100 relative hover-scale-1-1" alt="">
                                                                </a>
                                                            </div>                            
                                                            <h5 class="mt-3 mb-1">Homepage 1</h5>
                                                        </div>
                                                        
                                                        <div class="col-lg-1-5 col-md-4 text-center">
                                                            <div class="relative hover text-center overflow-hidden soft-shadow rounded-1">
                                                                <a href="homepage-2.html" class="p-0">
                                                                    <img src="images/demo/homepage-2.webp" class="w-100 relative hover-scale-1-1" alt="">
                                                                </a>
                                                            </div>                            
                                                            <h5 class="mt-3 mb-1">Homepage 2</h5>
                                                        </div>

                                                        <div class="col-lg-1-5 col-md-4 text-center">
                                                            <div class="relative hover text-center overflow-hidden soft-shadow rounded-1">
                                                                <a href="homepage-3.html" class="p-0">
                                                                    <img src="images/demo/homepage-3.webp" class="w-100 relative hover-scale-1-1" alt="">
                                                                </a>
                                                            </div>                            
                                                            <h5 class="mt-3 mb-1">Homepage 3</h5>
                                                        </div>

                                                        <div class="col-lg-1-5 col-md-4 text-center">
                                                            <div class="relative hover text-center overflow-hidden soft-shadow rounded-1">
                                                                <a href="homepage-4.html" class="p-0">
                                                                    <img src="images/demo/homepage-4.webp" class="w-100 relative hover-scale-1-1" alt="">
                                                                </a>
                                                            </div>                            
                                                            <h5 class="mt-3 mb-1">Homepage 4</h5>
                                                        </div>

                                                        <div class="col-lg-1-5 col-md-4 text-center">
                                                            <div class="relative hover text-center overflow-hidden soft-shadow rounded-1">
                                                                <a href="homepage-5.html" class="p-0">
                                                                    <img src="images/demo/homepage-5.webp" class="w-100 relative hover-scale-1-1" alt="">
                                                                </a>
                                                            </div>                            
                                                            <h5 class="mt-3 mb-1">Homepage 5</h5>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>                                                
                                        </li>
                                    </ul>
                                </li>
                                <li><a class="menu-item" href="services.html">Services</a>
                                    <ul>
                                        <li><a class="menu-item" href="service-single.html">Air Duct Cleaning</a></li>
                                        <li><a class="menu-item" href="service-single.html">Air Vent Cleaning</a></li>
                                        <li><a class="menu-item" href="service-single.html">Dryer Vent Cleaning</a></li>
                                        <li><a class="menu-item" href="service-single.html">Duct Sanizitation Process</a></li>
                                        <li><a class="menu-item" href="service-single.html">Furnance Cleaning</a></li>
                                        <li><a class="menu-item" href="service-single.html">Register & Return Vents</a></li>
                                        <li><a class="menu-item" href="service-single.html">Blower Motor Cleaning</a></li>
                                        <li><a class="menu-item" href="service-single.html">Central Vacuum</a></li>
                                        <li><a class="menu-item" href="service-single.html">Deep+Brushing Cleaning</a></li>
                                        <li><a class="menu-item" href="service-single.html">Main Line Cleaning</a></li>
                                        <li><a class="menu-item" href="service-single.html">Furnance Filter Cleaning & Replacement</a></li>
                                    </ul>
                                </li>
                                <li><a class="menu-item" href="how-it-works.html">How It Works</a></li>
                                <li><a class="menu-item" href="about.html">About</a></li>
                                <li><a class="menu-item" href="blog.html">FAQ</a></li>
                                <li><a class="menu-item" href="contact.html">Contact Us</a></li>
                            </ul>
                        </div>
                        <div class="de-flex-col">
                            <div class="menu_side_area">
                                <a href="tel:+12896518411" class="h-phone xs-hide">
                                    <span>Need Help?</span>
                                    <h5>+1 289 651 8411</h5>
                                </a>    
                                <a href="book-service.html" class="btn-main">Book Service Now</a>
                                <span id="menu-btn"></span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    `;
}

if(document.querySelector("footer")){
    document.querySelector("footer").classList.add("section-dark");
    document.querySelector("footer").innerHTML = `
        <div class="container">
            <div class="row gx-5">
                <div class="col-lg-4 col-sm-6">
                    <img src="images/logo-dark.png" class="w-100p" width="120px" alt="" >
                    <div class="spacer-20"></div>
                    <p>We are a team of passionate cleaning experts who take pride in delivering the highest standard of service. We’ve perfected our cleaning methods to ensure every job is done right.</p>

                    <div class="social-icons mb-sm-30">
                        <a href="#"><i class="fa-brands fa-facebook-f"></i></a>
                        <a href="#"><i class="fa-brands fa-x-twitter"></i></a>
                        <a href="#"><i class="fa-brands fa-discord"></i></a>
                        <a href="#"><i class="fa-brands fa-tiktok"></i></a>
                        <a href="#"><i class="fa-brands fa-youtube"></i></a>
                    </div>
                </div>
                <div class="col-lg-4 col-sm-12 order-lg-1 order-sm-2">
                    <div class="row">
                        <div class="col-lg-4 col-sm-6">
                            <div class="widget">
                                <h5>Company</h5>
                                <ul>
                                    <li><a href="index.html">Home</a></li>
                                    <li><a href="services.html">Our Services</a></li>
                                    <li><a href="projects.html">Projects</a></li>
                                    <li><a href="about.html">About Us</a></li>
                                    <li><a href="blog.html">Blog</a></li>
                                    <li><a href="contact.html">Contact</a></li>
                                </ul>
                            </div>
                        </div>
                        <div class="col-lg-8 col-sm-6">
                            <div class="widget">
                                <h5>Our Services</h5>
                                <ul>
                                    <li><a href="service-single.html">Air Duct Cleaning</a></li>
                                    <li><a href="service-single.html">Air Vent Cleaning</a></li>
                                    <li><a href="service-single.html">Dryer Vent Cleaning</a></li>
                                    <li><a href="service-single.html">Duct Sanizitation Process</a></li>
                                    <li><a href="service-single.html">Furnance Cleaning</a></li>
                                    <li><a href="service-single.html">Register & Return Vents</a></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="col-lg-4 col-sm-6 order-lg-2 order-sm-1">
                    <div class="widget">
                        <div class="fw-bold text-white"><i class="icofont-wall-clock me-2 id-color-2"></i>We're Open</div>
                        Monday - Saturday 08.00 - 18.00

                        <div class="spacer-20"></div>

                        <div class="fw-bold text-white"><i class="icofont-location-pin me-2 id-color-2"></i>Office Location</div>
                        100 S Main St, New York, NY

                        <div class="spacer-20"></div>

                        <div class="fw-bold text-white"><i class="icofont-envelope me-2 id-color-2"></i>Send a Message</div>
                        contact@aeroshine.com
                    </div>
                </div>
            </div>
        </div>
        <div class="subfooter">
            <div class="container">
                <div class="row g-4">
                    <div class="col-md-12">
                        <div class="de-flex">
                            <div class="de-flex-col">
                                Copyright 2025 - Aeroshine Duct Cleaning
                            </div>
                            <ul class="menu-simple">
                                <li><a href="#">Terms &amp; Conditions</a></li>
                                <li><a href="#">Privacy Policy</a></li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    `;
}