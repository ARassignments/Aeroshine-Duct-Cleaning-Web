if (document.querySelector(".floatingAction")) {
  window.onscroll = () => {
    if (
      document.body.scrollTop > 50 ||
      document.documentElement.scrollTop > 50
    ) {
      document.querySelector(".floatingAction").classList.add("active");
    } else {
      document.querySelector(".floatingAction").classList.remove("active");
    }
    if (window.innerHeight + window.scrollY >= document.body.offsetHeight) {
      document.querySelector(".floatingAction").classList.add("up");
      document.querySelector(".whatsapp-btn").classList.add("up");
    } else {
      document.querySelector(".floatingAction").classList.remove("up");
      document.querySelector(".whatsapp-btn").classList.remove("up");
    }
  };
  document.querySelector(".floatingAction").onclick = () => {
    document.body.scrollTop = 0; // For Safari
    document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
  };
}

if (document.querySelector("header")) {
  document.querySelector("header").classList.add("header-light");
  document.querySelector("header.main")?document.querySelector("header").classList.add("transparent"):"";
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
                                <li><a class="menu-item" href="index.html">Home</a></li>
                                <li><a class="menu-item" href="services.html">Services</a>
                                    <ul>
                                        <li><a class="menu-item" href="#">Air Duct Cleaning</a></li>
                                        <li><a class="menu-item" href="#">Air Vent Cleaning</a></li>
                                        <li><a class="menu-item" href="#">Dryer Vent Cleaning</a></li>
                                        <li><a class="menu-item" href="#">Duct Sanizitation Process</a></li>
                                        <li><a class="menu-item" href="#">Furnance Cleaning</a></li>
                                        <li><a class="menu-item" href="#">Register & Return Vents</a></li>
                                        <li><a class="menu-item" href="#">Blower Motor Cleaning</a></li>
                                        <li><a class="menu-item" href="#">Central Vacuum</a></li>
                                        <li><a class="menu-item" href="#">Deep+Brushing Cleaning</a></li>
                                        <li><a class="menu-item" href="#">Main Line Cleaning</a></li>
                                        <li><a class="menu-item" href="#">Furnance Filter Cleaning & Replacement</a></li>
                                    </ul>
                                </li>
                                <li><a class="menu-item" href="how-it-works.html">How It Works</a></li>
                                <li><a class="menu-item" href="about.html">About</a></li>
                                <li><a class="menu-item" href="faqs.html">FAQ</a></li>
                                <li><a class="menu-item" href="contact.html">Contact Us</a></li>
                            </ul>
                        </div>
                        <div class="de-flex-col">
                            <div class="menu_side_area">
                                <a href="tel:+14375294945" class="h-phone xs-hide">
                                    <span>Need Help?</span>
                                    <h5>+1 437 529-4945</h5>
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

if (document.querySelector("footer")) {
  document.querySelector("footer").classList.add("section-dark");
  document.querySelector("footer").innerHTML = `
        <div class="container">
            <div class="row gx-5">
                <div class="col-lg-4 col-sm-6">
                    <img src="images/logo-dark.png" class="w-100p" width="120px" alt="" >
                    <div class="spacer-20"></div>
                    <p>We are a team of passionate cleaning experts who take pride in delivering the highest standard of service. We’ve perfected our cleaning methods to ensure every job is done right.</p>

                    <div class="social-icons mb-sm-30">
                        <a href="https://www.facebook.com/AeroShineDuctCleaning/"><i class="fa-brands fa-facebook-f"></i></a>
                        <a href="https://www.instagram.com/aeroshineductcleaning/"><i class="fa-brands fa-instagram"></i></a>
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
                                    <li><a href="how-it-works.html">How It Works</a></li>
                                    <li><a href="about.html">About Us</a></li>
                                    <li><a href="faqs.html">FAQs</a></li>
                                    <li><a href="contact.html">Contact</a></li>
                                </ul>
                            </div>
                        </div>
                        <div class="col-lg-8 col-sm-6">
                            <div class="widget">
                                <h5>Our Services</h5>
                                <ul>
                                    <li><a href="#">Air Duct Cleaning</a></li>
                                    <li><a href="#">Air Vent Cleaning</a></li>
                                    <li><a href="#">Dryer Vent Cleaning</a></li>
                                    <li><a href="#">Duct Sanizitation Process</a></li>
                                    <li><a href="#">Furnance Cleaning</a></li>
                                    <li><a href="#">Register & Return Vents</a></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="col-lg-4 col-sm-6 order-lg-2 order-sm-1">
                    <div class="widget">
                        <div class="fw-bold text-white"><i class="icofont-wall-clock me-2 id-color-2"></i>We're Open</div>
                        Monday - Saturday <br> 09:00 AM  - 18:00 PM
 
                        <div class="spacer-20"></div>

                        <div class="fw-bold text-white"><i class="icofont-location-pin me-2 id-color-2"></i>Office Location</div>
                        105 Ontario St, Vancouver, BC V5X 3E8, Canada, <br>
                        419 Ludlow St, Saskatoon, SK S7S 1P3, Canada <br>
                        4143 114 Ave SE, Calgary, AB T2Z 0H3, Canada


                        <div class="spacer-20"></div>

                        <div class="fw-bold text-white"><i class="icofont-envelope me-2 id-color-2"></i>Send a Message</div>
                        info@aeroshineduct.com
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
                              &copy Copyright 2025 - Aeroshine Duct Cleaning (Designed By <a href="https://www.smisofts.com/">&nbsp SMI SOFTS </a>)
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
