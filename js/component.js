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
  document.querySelector("header.main")
    ? document.querySelector("header").classList.add("transparent")
    : "";
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
                                    <ul class="servicesDropdown">
                                        
                                    </ul>
                                </li>
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
  for (let i = 0; i < services.length; i++) {
    document.querySelector(
      "header .servicesDropdown"
    ).innerHTML += `<li><a class="menu-item" href="service-single.html?id=${
      i + 1
    }">${services[i]}</a></li>`;
  }
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
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="col-lg-4 col-sm-6 order-lg-2 order-sm-1">
                    <div class="widget">
                        <div class="fw-bold text-white"><i class="icofont-wall-clock me-2 id-color-2"></i>We're Open</div>
                         <a href="#"> Monday - Saturday </a> |  <a href="#"> 09:00 AM  - 18:00 PM </a>
 
                        <div class="spacer-20"></div>

                        <div class="fw-bold text-white"><i class="icofont-location-pin me-2 id-color-2"></i>Office Location</div>
                        <a href="#"> 578 Chechalk Lane, Toronto, ON, Canada, </a> <br>
                        <a href="#"> 105 Ontario St, Vancouver, BC V5X 3E8, Canada, </a><br>
                        <a href="#"> 419 Ludlow St, Saskatoon, SK S7S 1P3, Canada,</a> <br>
                        <a href="#"> 4143 114 Ave SE, Calgary, AB T2Z 0H3, Canada </a>


                        <div class="spacer-20"></div>

                        <div class="fw-bold text-white"><i class="icofont-envelope me-2 id-color-2"></i>Send a Message</div>
                        <a href="#"> info@aeroshineduct.com </a> <br>
                        <a href="#"> +1 437 529-4945 </a> | <a href="#"> +1 587 355 8896 </a>
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

if (document.querySelector("#services #serviceContainer")) {
  let itemCount = document
    .querySelector("#services #serviceContainer")
    .getAttribute("data-itemCount");
  document.querySelector("#services #serviceContainer").innerHTML = "";
  for (let i = 0; i < service_list.length; i++) {
    if (i < itemCount) {
      document.querySelector("#services #serviceContainer").innerHTML += `
        <div class="col-lg-4 col-sm-6">
            <div class="relative">
                <a href="service-single.html?id=${i + 1}" class="d-block hover">
                    <div class="relative overflow-hidden rounded-1 shadow-soft">
                        <div class="absolute z-2 start-0 w-100 abs-middle fs-36 text-white text-center">
                            <span class="btn-main hover-op-1">Read More</span>
                        </div>
                        <img src="images/services/${service_list[i].sImage[0]}" class="img-fluid hover-scale-1-2 serviceImage" alt=""
                            loading="lazy">
                        <div
                            class="hover-op-0 abs p-3 px-4 bottom-0 text-center text-light w-100 overlay-black-1 bg-blur">
                            <h4>${service_list[i].sName}</h4>
                        </div>
                    </div>
                </a>
            </div>
        </div>
        `;
    }
  }
}

if (document.querySelector("#servicesAll #serviceContainer")) {
    document.querySelector("#servicesAll #serviceContainer").innerHTML = "";
    for (let i = 0; i < service_list.length; i++) {
        document.querySelector("#servicesAll #serviceContainer").innerHTML += `
        <div class="col-lg-4 col-sm-6">
            <div class="relative mb-3 p-3 h-100 rounded-1 shadow-soft">
                <a href="service-single.html?id=${i + 1}" class="d-block hover mb-3">
                    <div class="relative overflow-hidden rounded-1 shadow-soft">
                        <div class="absolute z-2 start-0 w-100 abs-middle fs-36 text-white text-center">
                            <span class="btn-main hover-op-1">Read More</span>
                        </div>
                        <img src="images/services/${service_list[i].sImage[0]}" class="img-fluid hover-scale-1-2 serviceImage" alt="">
                    </div>
                </a>
                <h4>${service_list[i].sName}</h4>
                <p class="no-bottom">${service_list[i].sShortDesc}</p>
            </div>
        </div>
        `;
    }
  }

