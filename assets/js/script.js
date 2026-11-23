'use strict';

// Element toggle function
const elementToggleFunc = function (elem) {
  if (elem) elem.classList.toggle("active");
};

// Sidebar variables & mobile toggle
const sidebar = document.querySelector("[data-sidebar]");
const sidebarBtn = document.querySelector("[data-sidebar-btn]");

if (sidebarBtn && sidebar) {
  sidebarBtn.addEventListener("click", function () {
    elementToggleFunc(sidebar);
  });
}

// Testimonials variables
const testimonialsItem = document.querySelectorAll("[data-testimonials-item]");
const modalContainer = document.querySelector("[data-modal-container]");
const modalCloseBtn = document.querySelector("[data-modal-close-btn]");
const overlay = document.querySelector("[data-overlay]");

// Modal variables
const modalImg = document.querySelector("[data-modal-img]");
const modalTitle = document.querySelector("[data-modal-title]");
const modalText = document.querySelector("[data-modal-text]");
const modalTime = document.querySelector(".testimonials-modal time");

// Modal toggle function
const testimonialsModalFunc = function () {
  if (modalContainer && overlay) {
    modalContainer.classList.toggle("active");
    overlay.classList.toggle("active");
  }
};

// Add click event to all testimonial cards
for (let i = 0; i < testimonialsItem.length; i++) {
  testimonialsItem[i].addEventListener("click", function () {
    const avatar = this.querySelector("[data-testimonials-avatar]");
    const title = this.querySelector("[data-testimonials-title]");
    const text = this.querySelector("[data-testimonials-text]");
    const time = this.querySelector("time");

    if (avatar && modalImg) {
      modalImg.src = avatar.src;
      modalImg.alt = avatar.alt;
    }
    if (title && modalTitle) {
      modalTitle.innerHTML = title.innerHTML;
    }
    if (text && modalText) {
      modalText.innerHTML = text.innerHTML;
    }
    if (time && modalTime) {
      modalTime.textContent = time.textContent;
      if (time.getAttribute("datetime")) {
        modalTime.setAttribute("datetime", time.getAttribute("datetime"));
      }
    }

    testimonialsModalFunc();
  });
}

if (modalCloseBtn) modalCloseBtn.addEventListener("click", testimonialsModalFunc);
if (overlay) overlay.addEventListener("click", testimonialsModalFunc);


// Custom select & filter variables
const select = document.querySelector("[data-select]");
const selectItems = document.querySelectorAll("[data-select-item]");
const selectValue = document.querySelector("[data-selecct-value]");
const filterBtn = document.querySelectorAll("[data-filter-btn]");
const filterItems = document.querySelectorAll("[data-filter-item]");

if (select) {
  select.addEventListener("click", function () {
    elementToggleFunc(this);
  });
}

const filterFunc = function (selectedValue) {
  const normSelected = selectedValue.trim().toLowerCase();

  for (let i = 0; i < filterItems.length; i++) {
    const rawCategories = (filterItems[i].dataset.category || "").trim().toLowerCase();
    const categories = rawCategories.split(",").map(s => s.trim());

    if (normSelected === "all" || categories.includes(normSelected) || rawCategories.includes(normSelected)) {
      filterItems[i].classList.add("active");
    } else {
      filterItems[i].classList.remove("active");
    }
  }
};

// Dropdown select events (for mobile)
for (let i = 0; i < selectItems.length; i++) {
  selectItems[i].addEventListener("click", function () {
    const selectedText = this.innerText;
    if (selectValue) selectValue.innerText = selectedText;
    if (select) elementToggleFunc(select);
    filterFunc(selectedText);
  });
}

// Filter button items (for desktop)
if (filterBtn.length > 0) {
  let lastClickedBtn = filterBtn[0];

  for (let i = 0; i < filterBtn.length; i++) {
    filterBtn[i].addEventListener("click", function () {
      const selectedText = this.innerText;
      if (selectValue) selectValue.innerText = selectedText;
      filterFunc(selectedText);

      if (lastClickedBtn) lastClickedBtn.classList.remove("active");
      this.classList.add("active");
      lastClickedBtn = this;
    });
  }
}


// Page navigation
const navigationLinks = document.querySelectorAll("[data-nav-link]");
const pages = document.querySelectorAll("[data-page]");

for (let i = 0; i < navigationLinks.length; i++) {
  navigationLinks[i].addEventListener("click", function () {
    // Use data-target attribute if available, fallback to innerHTML text
    const targetPage = (this.dataset.target || this.innerHTML.trim().toLowerCase());

    for (let j = 0; j < pages.length; j++) {
      if (targetPage === pages[j].dataset.page) {
        pages[j].classList.add("active");
        navigationLinks[j].classList.add("active");
        window.scrollTo(0, 0);
      } else {
        pages[j].classList.remove("active");
        navigationLinks[j].classList.remove("active");
      }
    }
  });
}


// Comprehensive Project Data Registry
const appsData = {
  "jyotishgyan": {
    "title": "Jyotish Gyan",
    "tagline": "Vedic Astrology Ecosystem \u2014 High-Precision Calculations, Web Platform & Mobile App",
    "icon": "./assets/images/projects/jyotishgyan/app_icon.png",
    "description": "An advanced, full-stack Vedic Astrology ecosystem engineered across Flutter (mobile) and Next.js (web). Provides planetary degree calculations with Swiss Ephemeris-grade astronomical accuracy, Kundali chart generation (Lagna, Navamsha, D10, D60), daily Panchang with micro-muhurats, and AI-powered astrologer consultations.",
    "downloads": "10K+",
    "rating": "4.9",
    "release": "2025",
    "techStack": [
      "Flutter",
      "Dart",
      "Next.js 15",
      "React",
      "Node.js",
      "MongoDB",
      "Vedic Ephemeris Engine",
      "Tailwind CSS"
    ],
    "playstore": null,
    "appstore": null,
    "prototype": "https://jyotishgyan.co.in",
    "screenshots": [
      "./assets/images/projects/jyotishgyan/01_precision_vedic_kundali.jpg",
      "./assets/images/projects/jyotishgyan/02_real_time_daily_panchang.jpg",
      "./assets/images/projects/jyotishgyan/04_discover_your_cosmic_dna.jpg",
      "./assets/images/projects/jyotishgyan/05_classical_parashari_charts.jpg",
      "./assets/images/projects/jyotishgyan/06_ashtakoota_matchmaking.png",
      "./assets/images/projects/jyotishgyan/08_private_and_offline.png"
    ],
    "features": [
      {
        "icon": "planet-outline",
        "title": "Precision Kundali Generation",
        "description": "Real-time mathematical birth chart generation with Lagna, Navamsha, and 16 divisional charts (Shodashvarga)."
      },
      {
        "icon": "calendar-outline",
        "title": "Astronomical Vedic Panchang",
        "description": "Calculates Tithi, Nakshatra, Yoga, Karana, and auspicious muhurats (Abhijit, Rahu Kaal) for any GPS coordinates."
      },
      {
        "icon": "chatbubbles-outline",
        "title": "AI Astrobot Consultations",
        "description": "Intelligent astrological chatbot delivering contextual planetary insights and transit advice."
      },
      {
        "icon": "moon-outline",
        "title": "Planetary Transits & Dasha",
        "description": "Vimshottari Dasha calculation engine with live transit (Gochar) notifications and Sade Sati timelines."
      }
    ],
    "problem": "Most astrological applications are ad-heavy, slow, aesthetically dated, and lack algorithmic precision in celestial positioning.",
    "solution": "Architected a modern, spiritually elegant web and mobile ecosystem powered by high-performance astronomical calculation libraries, delivering instant, pixel-perfect chart rendering.",
    "challenges": "Translating classical Sanskrit mathematical formulas for planetary longitudes, house cusps, and ayanamsha corrections into blazing-fast Dart and TypeScript routines.",
    "role": "Founder & Lead Architect \u2014 UI/UX design in Figma, complete Flutter mobile app development, Next.js web application, and backend engine integration.",
    "reviews": [
      {
        "stars": 5,
        "author": "Vedic Astrology Enthusiast",
        "text": "The cleanest and most accurate Panchang and Kundli tool I have ever used. Lightning fast calculations and beautiful UI!"
      },
      {
        "stars": 5,
        "author": "Astrology Researcher",
        "text": "Divisional charts and dasha timelines are rendered with remarkable precision. Exceptional work across web and mobile."
      }
    ]
  },
  "fg-glasspro": {
    "title": "Fg GlassPro",
    "tagline": "Enterprise ERP for the Glass Manufacturing & Processing Industry",
    "icon": "./assets/images/project-11.png",
    "description": "A robust, mission-critical mobile ERP application developed for FG Glass. Engineered with Flutter for iOS and Android, it provides end-to-end management of custom glass orders, computerized cutting metrics, digital invoicing, real-time dispatch tracking, and customer history with offline synchronization.",
    "downloads": "50K+",
    "rating": "4.8",
    "release": "2024",
    "techStack": [
      "Flutter",
      "Dart",
      "Firebase",
      "Node.js",
      "MongoDB",
      "REST APIs",
      "Stripe",
      "Razorpay"
    ],
    "playstore": "https://play.google.com/store/apps/details?id=com.test.flutter_fg_glass_app",
    "appstore": "https://apps.apple.com/in/app/fg-glasspro/id1665823610",
    "prototype": null,
    "screenshots": [
      "./assets/images/project-11.png"
    ],
    "features": [
      {
        "icon": "receipt-outline",
        "title": "Instant Digital Invoicing",
        "description": "Automated invoice generation with tax calculations, dispatch vouchers, and PDF sharing."
      },
      {
        "icon": "people-outline",
        "title": "Client & Dealer Accounts",
        "description": "Comprehensive distributor and dealer management with ledger histories and credit limits."
      },
      {
        "icon": "cube-outline",
        "title": "Inventory & Stock Alerts",
        "description": "Live stock monitoring of glass types, thicknesses, and hardware with low-stock alerts."
      },
      {
        "icon": "analytics-outline",
        "title": "Production Analytics",
        "description": "High-level business intelligence tracking daily production batches, dispatches, and sales."
      }
    ],
    "problem": "The glass manufacturing and distribution trade relied on error-prone paper invoices, delayed order confirmations, and disconnected warehouse communications.",
    "solution": "Designed and deployed a unified Flutter application providing real-time synchronization between sales representatives, factory dispatchers, and clients.",
    "challenges": "Designing complex custom dimension pricing algorithms and ensuring fault-tolerant offline operation for field agents in low-connectivity zones.",
    "role": "Lead Flutter Developer \u2014 End-to-end mobile architecture, state management with Provider/GetX, backend integration, and Play Store / App Store publishing.",
    "reviews": [
      {
        "stars": 5,
        "author": "FG Glass Operations",
        "text": "This app has streamlined our daily dispatch and invoice workflows tremendously. Essential tool for our team."
      },
      {
        "stars": 5,
        "author": "Verified Business Client",
        "text": "Super clean UI and very responsive. Checking glass order status and downloading invoices is effortless."
      }
    ]
  },
  "future-tracker": {
    "title": "Future Tracker",
    "tagline": "Precision Field Navigation, Geo-Tagging & Business Tracking",
    "icon": "./assets/images/project-12.jpeg",
    "description": "A high-performance field operations and delivery tracking platform engineered for FA Glass. Combines live GPS telemetry, geofenced customer location verification, turn-by-turn routing, and automated attendance logging in a fluid Flutter interface.",
    "downloads": "25K+",
    "rating": "4.6",
    "release": "2024",
    "techStack": [
      "Flutter",
      "Dart",
      "Google Maps API",
      "GPS Geolocation",
      "Firebase",
      "REST APIs",
      "Node.js"
    ],
    "playstore": "https://play.google.com/store/apps/details?id=com.faglass.app.fa_glass_app",
    "appstore": "https://apps.apple.com/in/app/fa-glass/id6502397420",
    "prototype": null,
    "screenshots": [
      "./assets/images/project-12.jpeg"
    ],
    "features": [
      {
        "icon": "navigate-outline",
        "title": "Turn-by-Turn Fleet Routing",
        "description": "Optimized delivery routes saving fuel and minimizing delivery turn-around times."
      },
      {
        "icon": "location-outline",
        "title": "Geofenced Geo-Tagging",
        "description": "Automated check-in confirmation when sales representatives arrive at verified client coordinates."
      },
      {
        "icon": "time-outline",
        "title": "Real-Time Telemetry & Logs",
        "description": "Live tracking of field vehicles with battery-optimized GPS updates and background sync."
      },
      {
        "icon": "shield-checkmark-outline",
        "title": "Proof-of-Delivery Capture",
        "description": "Digital signature and photographic delivery verification submitted directly to warehouse."
      }
    ],
    "problem": "Field representatives faced navigation hurdles, paper delivery logs, and untracked customer visits leading to operational delays.",
    "solution": "Built a lightweight Flutter GPS navigation suite integrating Google Maps API, geofenced verification, and real-time backend updates.",
    "challenges": "Balancing constant GPS background updates with mobile battery consumption and network latency across rural transit corridors.",
    "role": "Mobile Application Architect \u2014 Designed location services architecture, map polyline rendering, and backend sync handlers.",
    "reviews": [
      {
        "stars": 5,
        "author": "FA Glass Logistics Manager",
        "text": "Live location accuracy has eliminated missed deliveries and improved team accountability across regions."
      }
    ]
  },
  "dd-one": {
    "title": "DD-One (Employee Suite)",
    "tagline": "Enterprise HRMS, Smart Geofenced Attendance & Workplace Tracking",
    "icon": "./assets/images/projects/dd-one/app_icon.png",
    "description": "A modern enterprise employee management application built for Digital Disruptors and corporate teams. Empowers staff with geofenced mobile check-ins, OTP access, timesheet tracking, leave workflow management, meeting schedules, and automated work reports.",
    "downloads": "Enterprise",
    "rating": "4.9",
    "release": "2024",
    "techStack": [
      "Flutter",
      "Dart",
      "Biometrics",
      "Geofencing",
      "REST APIs",
      "Node.js",
      "JWT Auth"
    ],
    "playstore": null,
    "appstore": null,
    "prototype": null,
    "screenshots": [
      "./assets/images/projects/dd-one/dashboard.jpg",
      "./assets/images/projects/dd-one/attendance.png",
      "./assets/images/projects/dd-one/timesheet.png",
      "./assets/images/projects/dd-one/menu.png",
      "./assets/images/projects/dd-one/login.png"
    ],
    "features": [
      {
        "icon": "finger-print-outline",
        "title": "Smart Geofenced Attendance",
        "description": "Automated punch-in/out validated against office perimeter geofences and biometric credentials."
      },
      {
        "icon": "speedometer-outline",
        "title": "Hours & Timesheet Analytics",
        "description": "Daily and weekly work duration tracking with project-wise hours logging."
      },
      {
        "icon": "calendar-outline",
        "title": "Meeting Agendas & Noticeboard",
        "description": "Instant corporate broadcasts, calendar sync, and conference room reservations."
      },
      {
        "icon": "key-outline",
        "title": "Passwordless OTP Auth",
        "description": "Fast, secure phone OTP authentication with JWT token lifecycle management."
      }
    ],
    "problem": "Manual attendance sheets and clunky legacy biometric kiosks created queues and lacked transparency for remote and hybrid teams.",
    "solution": "Engineered a streamlined Flutter employee portal enabling seamless 1-tap mobile attendance with verified GPS boundary checks.",
    "challenges": "Preventing GPS spoofing and ensuring bulletproof time synchronization across diverse device timezones.",
    "role": "Full Mobile Lifecycle Engineer \u2014 Auth architecture, geofencing logic, responsive tablet/phone layouts, and App Store readiness.",
    "reviews": [
      {
        "stars": 5,
        "author": "Digital Disruptors HR Lead",
        "text": "Attendance disputes dropped to zero within the first week. Clean, fast, and completely reliable for all employees."
      }
    ]
  },
  "vcardpro": {
    "title": "vCard Pro",
    "tagline": "Next-Gen Digital Business Card, QR/NFC Contact Networking",
    "icon": "./assets/images/projects/vcardpro/app_icon.png",
    "description": "A sleek mobile application that replaces paper visiting cards with intelligent digital cards. Users can design custom profile cards, exchange contacts via dynamic QR codes or NFC taps, export directly to phone address books (vCard/.vcf), and track profile interaction telemetry.",
    "downloads": "5K+",
    "rating": "4.7",
    "release": "2024",
    "techStack": [
      "Flutter",
      "Dart",
      "Hive DB",
      "QR Code Generator",
      "NFC Tech",
      "REST APIs",
      "Node.js"
    ],
    "playstore": null,
    "appstore": null,
    "prototype": null,
    "screenshots": [
      "./assets/images/projects/vcardpro/1.jpg",
      "./assets/images/projects/vcardpro/2.jpg",
      "./assets/images/projects/vcardpro/3.jpg",
      "./assets/images/projects/vcardpro/4.jpg",
      "./assets/images/projects/vcardpro/5.png"
    ],
    "features": [
      {
        "icon": "qr-code-outline",
        "title": "Dynamic QR & NFC Sharing",
        "description": "Instant card sharing with any smartphone without requiring the recipient to install an app."
      },
      {
        "icon": "color-palette-outline",
        "title": "Custom Card Themes",
        "description": "Personalized branding with badges, social links, company logos, and custom color palettes."
      },
      {
        "icon": "save-outline",
        "title": "One-Tap Address Book Export",
        "description": "Exports full contact details, phone numbers, and addresses straight into iOS/Android contacts."
      },
      {
        "icon": "trending-up-outline",
        "title": "Card Engagement Analytics",
        "description": "Real-time metrics on how many people scanned, viewed, or saved your digital card."
      }
    ],
    "problem": "Paper cards get lost, become obsolete when contact info changes, and create needless paper waste.",
    "solution": "Created an elegant, eco-friendly digital card app where contact details stay dynamically updated and easily shared in seconds.",
    "challenges": "Designing responsive live previews of business card themes and cross-platform NFC payload encoding.",
    "role": "Lead Developer & UI Designer \u2014 Created card canvas editor, QR encoding pipeline, and local Hive caching.",
    "reviews": [
      {
        "stars": 5,
        "author": "Tech Conference Attendee",
        "text": "Networking at conferences has become so much smoother. People are genuinely impressed when I show my QR card."
      }
    ]
  },
  "fuelflow": {
    "title": "FuelFlow",
    "tagline": "Industrial Fleet Fuel Dispensing, Driver & Worker Telemetry App",
    "icon": "./assets/images/projects/fuelflow/logo.png",
    "description": "An enterprise logistics application tailored for fleet refueling stations and transport companies. Features specialized dual role modes for pump workers and vehicle drivers, QR code fuel token scanning, odometer verification, digital fuel slip receipts, and fraud prevention.",
    "downloads": "Enterprise",
    "rating": "4.8",
    "release": "2024",
    "techStack": [
      "Flutter",
      "Dart",
      "QR Scanner",
      "Camera API",
      "REST APIs",
      "Provider",
      "PDF Generation"
    ],
    "playstore": null,
    "appstore": null,
    "prototype": null,
    "screenshots": [
      "./assets/images/projects/fuelflow/workerdash.png",
      "./assets/images/projects/fuelflow/driverdash.png",
      "./assets/images/projects/fuelflow/slippg.png",
      "./assets/images/projects/fuelflow/qrscan.png"
    ],
    "features": [
      {
        "icon": "hardware-chip-outline",
        "title": "Dual-Role Operations Cockpit",
        "description": "Distinct workflows for fuel station pump attendants and fleet transport drivers."
      },
      {
        "icon": "qr-code-outline",
        "title": "Rapid QR Token Validation",
        "description": "Scans driver fuel authorization tokens in milliseconds to verify allocation quotas."
      },
      {
        "icon": "receipt-outline",
        "title": "Digital Fuel Slips & Vouchers",
        "description": "Generates instant tamper-proof digital slips with odometer photo proof and fuel volume."
      },
      {
        "icon": "shield-outline",
        "title": "Fuel Fraud Elimination",
        "description": "Double-entry verification matching dispenser meter reading with vehicle mileage history."
      }
    ],
    "problem": "Commercial fleet operators suffer immense revenue leakage from fraudulent fuel slips, manual meter manipulation, and paper receipts.",
    "solution": "Engineered an automated digital dispensing protocol that pairs QR authorization with vehicle telemetry and photographic odometer proof.",
    "challenges": "Designing an ultra-responsive UI that operates in low-light environments and under intense sunlight for pump attendants outdoors.",
    "role": "Mobile Engineer \u2014 Built dual UI dashboards, camera barcode scanner, and digital invoice rendering engine.",
    "reviews": [
      {
        "stars": 5,
        "author": "Fleet Operations Director",
        "text": "FuelFlow prevented over 15% in unaccounted diesel losses in our first quarter of rollout."
      }
    ]
  },
  "esquare": {
    "title": "eSquare (Container Operations)",
    "tagline": "Port Yard Container Logistics, Inventory & Fleet Management",
    "icon": "./assets/images/projects/esquare/logo.png",
    "description": "An industrial container yard and intermodal freight management app engineered for D&D. Features high-contrast dark mode interfaces for terminal crane operators and logistics coordinators, container bay mapping, gate-in/gate-out passes, and repair damage logging.",
    "downloads": "Enterprise",
    "rating": "4.7",
    "release": "2024",
    "techStack": [
      "Flutter",
      "Dart",
      "Dark UI Architecture",
      "REST APIs",
      "Offline Sync",
      "Barcode Scanner"
    ],
    "playstore": null,
    "appstore": null,
    "prototype": null,
    "screenshots": [
      "./assets/images/projects/esquare/homedark.jpg",
      "./assets/images/projects/esquare/homeandlogin.jpg",
      "./assets/images/projects/esquare/menu.jpg"
    ],
    "features": [
      {
        "icon": "grid-outline",
        "title": "Yard Bay Location Mapping",
        "description": "3D container stacking and slot tracking to optimize crane movement and minimize re-handling."
      },
      {
        "icon": "log-in-outline",
        "title": "Gate In/Out Processing",
        "description": "Rapid container inspection, seal verification, and electronic interchange receipt generation."
      },
      {
        "icon": "moon-outline",
        "title": "Industrial Dark Mode UI",
        "description": "High-contrast ergonomic styling preventing glare during night shifts at marine container terminals."
      },
      {
        "icon": "construct-outline",
        "title": "Damage & Repair Logs",
        "description": "Photo documentation and cost estimation for damaged shipping containers before dispatch."
      }
    ],
    "problem": "Port logistics terminals struggled with slow manual gate clearances and container misplacement in vast storage yards.",
    "solution": "Delivered an ergonomic mobile application that enables yard marshals to locate, verify, and inspect containers in real time.",
    "challenges": "Managing complex relational container state while maintaining 60 FPS scrolling through thousands of shipping units.",
    "role": "Lead Mobile Developer \u2014 Core architecture, container state management, dark mode token system, and barcode integration.",
    "reviews": [
      {
        "stars": 5,
        "author": "Yard Terminal Supervisor",
        "text": "The night-shift dark UI is a lifesaver for yard staff, and gate-out throughput doubled."
      }
    ]
  },
  "wabric": {
    "title": "Wabric",
    "tagline": "Textile, Fashion & Lifestyle Multi-Vendor E-Commerce",
    "icon": "./assets/images/projects/wabric/profile.png",
    "description": "A comprehensive cross-platform e-commerce mobile application built for modern apparel, fabric, and lifestyle brands. Features multi-category catalog filtering, real-time wallet cashback, smooth checkout flows, order history tracking, and custom profile personalization.",
    "downloads": "15K+",
    "rating": "4.7",
    "release": "2024",
    "techStack": [
      "Flutter",
      "Dart",
      "Firebase Auth",
      "Razorpay",
      "Node.js",
      "REST APIs",
      "Cloudinary"
    ],
    "playstore": null,
    "appstore": null,
    "prototype": null,
    "screenshots": [
      "./assets/images/projects/wabric/order_confirm.jpg",
      "./assets/images/projects/wabric/cashback.jpg",
      "./assets/images/projects/wabric/editscreen.jpg",
      "./assets/images/projects/wabric/profile.png"
    ],
    "features": [
      {
        "icon": "gift-outline",
        "title": "Cashback & Rewards Wallet",
        "description": "Automated cashback credits earned on orders and redeemable during subsequent checkouts."
      },
      {
        "icon": "bag-check-outline",
        "title": "1-Click Order Confirmation",
        "description": "Smooth, frictionless multi-step checkout with delivery address selection and payment."
      },
      {
        "icon": "person-outline",
        "title": "Profile Customization",
        "description": "Rich user profile editor with measurement preferences, order history, and saved items."
      },
      {
        "icon": "card-outline",
        "title": "Secure Payment Integration",
        "description": "Supports UPI, Net Banking, credit/debit cards, and cash-on-delivery seamlessly."
      }
    ],
    "problem": "Textile shoppers struggled with cluttered mobile checkout experiences and confusing order delivery updates.",
    "solution": "Built a clean, aesthetic Flutter mobile shopping experience emphasizing clear typography, high-res fabric photography, and fast checkout.",
    "challenges": "Handling nested variant selections (color, fabric length, stitching type) without degrading UI responsiveness.",
    "role": "Full Mobile Developer \u2014 Implemented full catalog navigation, cart state, payment gateway integration, and user profile flows.",
    "reviews": [
      {
        "stars": 5,
        "author": "Fashion Retailer Client",
        "text": "App conversion rate surged after migrating to this sleek Flutter interface. Fantastic work."
      }
    ]
  },
  "gujaratstore": {
    "title": "Gujarat Store",
    "tagline": "Authentic Handloom, Ethnic Apparel & Organic Goods E-Commerce",
    "icon": "./assets/images/projects/gujaratstore/application.png",
    "description": "A dedicated e-commerce mobile application tailored to showcase authentic regional craftsmanship, handloom sarees, traditional garments, and certified organic farm produce. Features dynamic category showcases, custom wishlists, cart checkout, and regional language support.",
    "downloads": "10K+",
    "rating": "4.6",
    "release": "2024",
    "techStack": [
      "Flutter",
      "Dart",
      "REST APIs",
      "Provider",
      "Firebase",
      "Payment Gateway"
    ],
    "playstore": null,
    "appstore": null,
    "prototype": null,
    "screenshots": [
      "./assets/images/projects/gujaratstore/application.png",
      "./assets/images/projects/gujaratstore/app2.png",
      "./assets/images/projects/gujaratstore/product.jpg",
      "./assets/images/projects/gujaratstore/cart.png",
      "./assets/images/projects/gujaratstore/wishlist.png",
      "./assets/images/projects/gujaratstore/login.png"
    ],
    "features": [
      {
        "icon": "shirt-outline",
        "title": "Authentic Handloom Showcase",
        "description": "Rich visual galleries highlighting traditional Patola, Bandhani, and cotton weaves."
      },
      {
        "icon": "heart-outline",
        "title": "Wishlist & Favorites Sync",
        "description": "Allows shoppers to curate collections and receive alerts when saved items go on sale."
      },
      {
        "icon": "cart-outline",
        "title": "Intuitive Cart & Checkout",
        "description": "Real-time price calculations with coupon codes, shipping estimates, and payment security."
      },
      {
        "icon": "leaf-outline",
        "title": "Organic Goods Certification",
        "description": "Product origins, farm certifications, and purity credentials presented transparently."
      }
    ],
    "problem": "Regional artisans lacked a dedicated, high-performance mobile storefront to reach customers across India.",
    "solution": "Engineered a vibrant, accessible e-commerce application designed to honor traditional artistry with modern shopping convenience.",
    "challenges": "Optimizing high-resolution product imagery so pages load instantly even over 3G/4G connections in rural areas.",
    "role": "Mobile App Developer \u2014 Built the complete UI, product search algorithms, cart logic, and authentication.",
    "reviews": [
      {
        "stars": 5,
        "author": "Store Owner",
        "text": "Customers love the ease of browsing sarees and organic grains on our app. Sales grew rapidly."
      }
    ]
  },
  "traderdaddy": {
    "title": "TraderDaddy",
    "tagline": "FinTech Trading Analytics, Trade Journal & Portfolio Cockpit",
    "icon": "./assets/images/projects/traderdaddy/app_icon.png",
    "description": "A comprehensive trading intelligence platform featuring cross-platform mobile apps (Flutter) and web analytics dashboards (Next.js/React). Built for day traders and crypto investors to track portfolio performance, calculate risk-to-reward ratios, journal trades, and analyze market trends.",
    "downloads": "Beta",
    "rating": "4.8",
    "release": "2025",
    "techStack": [
      "Flutter",
      "Next.js",
      "React",
      "Node.js",
      "Firebase",
      "WebSockets",
      "Chart.js",
      "Tailwind CSS"
    ],
    "playstore": null,
    "appstore": null,
    "prototype": null,
    "screenshots": [
      "./assets/images/projects/traderdaddy/app_icon.png",
      "./assets/images/projects/traderdaddy/logo.png",
      "./assets/images/projects/traderdaddy/web_icon.png"
    ],
    "features": [
      {
        "icon": "trending-up-outline",
        "title": "Real-Time Portfolio Telemetry",
        "description": "Live tracking of crypto and equity positions with instant unrealized P&L calculations."
      },
      {
        "icon": "book-outline",
        "title": "Psychology & Trade Journal",
        "description": "Log trade entry/exit rationales, emotions, setup tags, and screenshot proof."
      },
      {
        "icon": "calculator-outline",
        "title": "Risk Management Calculator",
        "description": "Dynamic position sizing tool based on account equity and strict stop-loss parameters."
      },
      {
        "icon": "analytics-outline",
        "title": "Win-Rate & Edge Analytics",
        "description": "Visual breakdown of win/loss ratios, average profit per trade, and drawdown curves."
      }
    ],
    "problem": "Traders struggle with emotional discipline and lack structured journaling tools that integrate seamlessly across mobile and web.",
    "solution": "Built a unified trading cockpit that keeps traders disciplined through automated risk calculators and comprehensive post-trade reviews.",
    "challenges": "Handling low-latency real-time market data streaming over WebSockets without causing UI frame drops.",
    "role": "Full-Stack Architect \u2014 Designed Flutter mobile app, Next.js web application, charting components, and API layer.",
    "reviews": [
      {
        "stars": 5,
        "author": "Prop Trader",
        "text": "The risk calculator and clean trade journal have saved me from emotional over-leveraging multiple times."
      }
    ]
  },
  "convex-tracker": {
    "title": "Convex Tracker",
    "tagline": "Port Freight Logistics, Container Telematics & Driver Mobile App",
    "icon": "./assets/images/project-10.png",
    "description": "A high-availability freight telematics application engineered for shipping container drivers and port logistics coordinators. Features Face ID/biometric driver check-ins, container TEUS tracking, arrival timestamps, and live geofenced harbor dispatch.",
    "downloads": "10K+",
    "rating": "4.7",
    "release": "2024",
    "techStack": [
      "Flutter",
      "Dart",
      "Biometrics",
      "Google Maps API",
      "REST APIs",
      "Node.js"
    ],
    "playstore": null,
    "appstore": null,
    "prototype": null,
    "screenshots": [
      "./assets/images/project-10.png"
    ],
    "features": [
      {
        "icon": "finger-print-outline",
        "title": "Biometric Driver Identity",
        "description": "Secure biometric authentication confirming authorized commercial drivers before container release."
      },
      {
        "icon": "boat-outline",
        "title": "Port Arrival Telemetry",
        "description": "Automates arrival timestamp logging when trucks cross container terminal geofences."
      },
      {
        "icon": "cube-outline",
        "title": "TEU Manifest Tracking",
        "description": "Digital bills of lading and container seal numbers synchronized with central shipping databases."
      },
      {
        "icon": "map-outline",
        "title": "Driver Route Guidance",
        "description": "Directs trucks to designated container stacks within complex port terminal yards."
      }
    ],
    "problem": "Port congestion and manual paperwork created massive container turnaround bottlenecks at harbor checkpoints.",
    "solution": "Developed an automated driver mobile app with instant biometric sign-on and GPS-verified terminal clearances.",
    "challenges": "Ensuring reliable mobile connectivity inside metal-dense container stacking areas with severe radio interference.",
    "role": "Mobile Architect \u2014 Implemented biometric security hooks, container scanning modules, and background sync.",
    "reviews": [
      {
        "stars": 5,
        "author": "Port Dispatch Controller",
        "text": "Truck clearance times dropped by 40% immediately after Convex Tracker was introduced."
      }
    ]
  },
  "director-app": {
    "title": "Director App (FG Glass)",
    "tagline": "Executive Factory Intelligence & Production Machine Monitoring",
    "icon": "./assets/images/project-11.png",
    "description": "An exclusive executive leadership application built for the board and plant directors of FG Glass. Delivers real-time factory machine telemetry, cutting table output, furnace temperatures, daily revenue totals, and dispatch volumes directly to executives smartphones.",
    "downloads": "Executive Suite",
    "rating": "5.0",
    "release": "2024",
    "techStack": [
      "Flutter",
      "Dart",
      "Industrial IoT APIs",
      "Chart.js",
      "Executive Security",
      "REST APIs"
    ],
    "playstore": null,
    "appstore": null,
    "prototype": null,
    "screenshots": [
      "./assets/images/projects/director-app/machine1.jpg",
      "./assets/images/projects/director-app/machine2.jpg",
      "./assets/images/projects/director-app/machine3.jpg",
      "./assets/images/projects/director-app/machine4.jpg"
    ],
    "features": [
      {
        "icon": "speedometer-outline",
        "title": "Live Machine Uptime Metrics",
        "description": "Real-time telemetry showing CNC glass cutters, tempering furnaces, and edging line efficiency."
      },
      {
        "icon": "bar-chart-outline",
        "title": "Daily Revenue & Dispatch Curves",
        "description": "Interactive visual financial summaries comparing target vs actual daily production volume."
      },
      {
        "icon": "alert-circle-outline",
        "title": "Plant Breakdown Alerts",
        "description": "Instant push notifications to leadership if high-priority manufacturing lines experience stoppages."
      },
      {
        "icon": "lock-closed-outline",
        "title": "Executive Encrypted Security",
        "description": "Hardware-backed biometric authentication and encrypted data transit for sensitive commercial data."
      }
    ],
    "problem": "Company executives lacked immediate visibility into manufacturing line health, relying on end-of-day spreadsheet emails.",
    "solution": "Created a private, high-security executive dashboard delivering live factory output metrics straight to directors in seconds.",
    "challenges": "Aggregating telemetry from older PLC factory machines and normalizing metrics into clean, elegant executive charts.",
    "role": "Senior Flutter Developer \u2014 Architected executive dashboard UI, real-time IoT polling, and data visualization.",
    "reviews": [
      {
        "stars": 5,
        "author": "Managing Director, FG Glass",
        "text": "I can inspect plant output and dispatch status anywhere in the world in real time. Invaluable tool for leadership."
      }
    ]
  },
  "vartmanpravah": {
    "title": "Vartman Pravah News",
    "tagline": "Regional Journalism, Live Breaking News & Digital E-Paper",
    "icon": "./assets/images/projects/vartmanpravah/logo.png",
    "description": "A high-performance regional journalism mobile application providing 24/7 breaking news, investigative reporting, digital e-paper editions, and video bulletins in Gujarati and Hindi. Features smooth offline reading, text-to-speech article narration, and breaking news alerts.",
    "downloads": "20K+",
    "rating": "4.6",
    "release": "2023",
    "techStack": [
      "Flutter",
      "Dart",
      "REST APIs",
      "Firebase Cloud Messaging",
      "PDF E-Paper Viewer",
      "Audio Player"
    ],
    "playstore": null,
    "appstore": null,
    "prototype": null,
    "screenshots": [
      "./assets/images/projects/vartmanpravah/banner.jpg",
      "./assets/images/projects/vartmanpravah/headlines.jpg",
      "./assets/images/projects/vartmanpravah/article.jpg",
      "./assets/images/projects/vartmanpravah/reader.jpg"
    ],
    "features": [
      {
        "icon": "newspaper-outline",
        "title": "Interactive Digital E-Paper",
        "description": "High-definition digital edition reader with zoomable pages and article clipping."
      },
      {
        "icon": "flash-outline",
        "title": "Instant Breaking News Alerts",
        "description": "Sub-second push notifications delivering urgent regional headlines to thousands of subscribers."
      },
      {
        "icon": "volume-high-outline",
        "title": "Audio Article Narration",
        "description": "Built-in text-to-speech audio reader enabling users to listen to news while commuting."
      },
      {
        "icon": "bookmark-outline",
        "title": "Offline Reading & Bookmarks",
        "description": "Saved articles stored locally in SQLite database for reading without internet connection."
      }
    ],
    "problem": "Traditional print subscribers were shifting to mobile but finding PDF downloads clunky and difficult to read on small screens.",
    "solution": "Engineered a hybrid mobile news experience combining responsive modern typography with high-resolution e-paper pagination.",
    "challenges": "Delivering millions of push notifications simultaneously during major breaking news events without server bottlenecking.",
    "role": "Mobile Application Developer \u2014 Implemented full Flutter news feed, e-paper engine, notification listeners, and bookmarks.",
    "reviews": [
      {
        "stars": 5,
        "author": "Editor-in-Chief",
        "text": "Our digital readership doubled within 3 months of launching this beautiful Flutter application."
      }
    ]
  },
  "wheeler": {
    "title": "Wheeler VNext",
    "tagline": "Integrated Logistics, Fuel Allocation & Fleet Transport Suite",
    "icon": "./assets/images/projects/wheeler/logo.png",
    "description": "An enterprise fleet automation mobile suite connecting commercial drivers, vehicle maintenance teams, and fuel logistics stations. Automates route planning, fuel allocations, vehicle diagnostic logs, and driver work shifts across intercity transport operations.",
    "downloads": "Enterprise",
    "rating": "4.7",
    "release": "2024",
    "techStack": [
      "Flutter",
      "Dart",
      "GPS Telemetry",
      "SQLite",
      "REST APIs",
      "Provider"
    ],
    "playstore": null,
    "appstore": null,
    "prototype": null,
    "screenshots": [
      "./assets/images/projects/wheeler/logo.png",
      "./assets/images/projects/wheeler/fuel.png",
      "./assets/images/projects/wheeler/brand.png"
    ],
    "features": [
      {
        "icon": "car-sport-outline",
        "title": "Vehicle Telemetry & Diagnostics",
        "description": "Logs maintenance schedules, tire rotations, and diagnostic health for heavy commercial vehicles."
      },
      {
        "icon": "flame-outline",
        "title": "Automated Fuel Allocation",
        "description": "Computes authorized diesel limits per trip based on route terrain, weight payload, and vehicle engine."
      },
      {
        "icon": "shield-checkmark-outline",
        "title": "Driver Shift Compliance",
        "description": "Monitors driving hours to prevent driver fatigue and enforce safety compliance."
      }
    ],
    "problem": "Fleet managers faced escalating fuel theft, delayed maintenance reporting, and uncoordinated vehicle dispatches.",
    "solution": "Constructed an interconnected mobile suite tracking vehicle wear, trip fuel quotas, and driver accountability.",
    "challenges": "Creating offline-tolerant data queues that sync seamlessly when transport vehicles re-enter cellular coverage.",
    "role": "Senior Flutter Engineer \u2014 Mobile architecture, offline caching pipeline, and fleet state management.",
    "reviews": [
      {
        "stars": 5,
        "author": "Logistics Operations Lead",
        "text": "Vehicle downtime dropped by 25% thanks to proactive maintenance alerts and structured fuel quotas."
      }
    ]
  },
  "usf-connect": {
    "title": "USF Connect",
    "tagline": "Solar Panel Traceability, Raw Material Telemetry & Quality Control",
    "icon": "./assets/images/projects/usf-connect/logo.png",
    "description": "An industrial manufacturing traceability mobile app built for USF. Tracks every solar photovoltaic panel, raw material batch, quality inspection step, and pallet dispatch with serialized QR and barcode scanning across factory floors.",
    "downloads": "Enterprise",
    "rating": "4.9",
    "release": "2024",
    "techStack": [
      "Flutter",
      "Dart",
      "Barcode/QR Scanning",
      "REST APIs",
      "Industrial QA Engine",
      "Node.js"
    ],
    "playstore": null,
    "appstore": null,
    "prototype": null,
    "screenshots": [
      "./assets/images/projects/usf-connect/logo.png"
    ],
    "features": [
      {
        "icon": "barcode-outline",
        "title": "Serialized Panel Traceability",
        "description": "Tracks the exact manufacturing lineage, silicon wafer batch, and test metrics of each panel."
      },
      {
        "icon": "checkmark-done-circle-outline",
        "title": "Multi-Stage Quality Audits",
        "description": "Digital inspection checklists for EL testing, flash testing, and lamination quality."
      },
      {
        "icon": "cube-outline",
        "title": "Pallet & Container Packing",
        "description": "Automated barcode aggregation ensuring zero packing discrepancies during shipping export."
      }
    ],
    "problem": "Industrial solar module manufacturing requires stringent quality records, but manual paper checklists were prone to errors.",
    "solution": "Deployed a rapid barcode scanning mobile app that records panel quality certifications and serial history in real time.",
    "challenges": "Scanning reflective panel barcodes under bright factory lighting and industrial ambient conditions.",
    "role": "Mobile Engineer \u2014 Built barcode optical scanner, inspection form validations, and factory database connectors.",
    "reviews": [
      {
        "stars": 5,
        "author": "USF Quality Assurance Head",
        "text": "Audit compliance is now 100% automated. We can trace any panel back to its raw material in seconds."
      }
    ]
  },
  "edu-point": {
    "title": "Edu-Point",
    "tagline": "Community Learning, Skill Mastery & Tutor Onboarding Mobile UI",
    "icon": "./assets/images/project-13.png",
    "description": "An engaging community education mobile application designed to connect eager students with expert verified tutors. Features interactive learning pathways, gamified progress dashboards, live classroom scheduling, and tutor review systems.",
    "downloads": "Design",
    "rating": "4.9",
    "release": "2024",
    "techStack": [
      "Figma",
      "UI/UX Design",
      "Design Systems",
      "Interactive Prototyping",
      "Mobile Architecture"
    ],
    "playstore": null,
    "appstore": null,
    "prototype": "https://www.figma.com/proto/3nNS4JIGYXtSz4ku4rP8e1/Edu-Point-(Community)?t=vmrtUOeMhDUHGhLf-0&scaling=scale-down",
    "screenshots": [
      "./assets/images/project-13.png"
    ],
    "features": [
      {
        "icon": "school-outline",
        "title": "Personalized Skill Pathways",
        "description": "Interactive course roadmap that adapts based on student quiz scores and career interests."
      },
      {
        "icon": "people-outline",
        "title": "Tutor Booking & Video Sessions",
        "description": "Seamless scheduling interface with automated time-zone conversion and tutor ratings."
      },
      {
        "icon": "trophy-outline",
        "title": "Gamified Learning Streaks",
        "description": "XP rewards, achievement badges, and study streaks to encourage daily practice."
      }
    ],
    "problem": "Online education apps often feel sterile and demotivating, suffering from high student drop-off rates.",
    "solution": "Crafted a warm, engaging mobile UI with micro-interactions and clear visual progress milestones.",
    "challenges": "Designing a complex course catalog navigation that remains clean and uncluttered on 5.5-inch smartphone screens.",
    "role": "Lead Product Designer \u2014 Full design system, atomic UI components, user journey mapping, and clickable prototype.",
    "reviews": [
      {
        "stars": 5,
        "author": "Figma Community Reviewer",
        "text": "One of the most cohesive mobile design systems on Figma. Brilliant layout and component hierarchy."
      }
    ]
  },
  "gamestream": {
    "title": "GameStream Hub",
    "tagline": "Cyberpunk Esports Matchmaking, Live Streamer Channels & Gamer UI",
    "icon": "./assets/images/project-4.png",
    "description": "A high-energy, dark cyberpunk mobile UI concept designed for competitive esports athletes and gaming enthusiasts. Features tournament matchmaking brackets, gamer stat radars, live Twitch/YouTube stream integration, and clan leaderboards.",
    "downloads": "Concept",
    "rating": "4.8",
    "release": "2024",
    "techStack": [
      "Figma",
      "Gaming UI",
      "Cyberpunk Aesthetics",
      "Micro-Interactions",
      "Design Tokens"
    ],
    "playstore": null,
    "appstore": null,
    "prototype": null,
    "screenshots": [
      "./assets/images/project-4.png"
    ],
    "features": [
      {
        "icon": "game-controller-outline",
        "title": "Competitive Tournament Brackets",
        "description": "Real-time bracket tracking with live seedings, match timers, and prize pools."
      },
      {
        "icon": "stats-chart-outline",
        "title": "Player Radar & Combat Telemetry",
        "description": "Hexagonal radar charts comparing K/D ratios, accuracy, and tactical win rates."
      },
      {
        "icon": "videocam-outline",
        "title": "Live Streamer Feeds",
        "description": "Watch pro tournaments with low-latency chat overlay and picture-in-picture mode."
      }
    ],
    "problem": "Traditional gaming community apps are either too generic or cluttered with unreadable text and clashing colors.",
    "solution": "Created a sleek, high-contrast dark gaming aesthetic with glowing neon accents and responsive tournament cards.",
    "challenges": "Balancing vibrant neon visual cues with readability and accessibility standards.",
    "role": "UI/UX Designer \u2014 Aesthetic theme definition, custom gaming icons, esports bracket layouts, and motion design.",
    "reviews": [
      {
        "stars": 5,
        "author": "Esports UI Showcase",
        "text": "Bold cyberpunk visual identity with crisp component execution. Looks like a triple-A gaming client."
      }
    ]
  }
};



// App detail modal functions
const appModal = document.querySelector("[data-app-modal]");
const appModalClose = document.querySelector("[data-app-close]");
const appOverlay = document.querySelector("[data-app-overlay]");

const openAppModal = function (appId) {
  const appData = appsData[appId];
  if (!appData) {
    console.warn(`App data not found for: ${appId}`);
    return;
  }

  const appContent = document.querySelector('.app-detail-content');
  if (appContent) appContent.classList.add('loading');

  if (appModal) {
    appModal.classList.add('active');
    document.body.style.overflow = 'hidden';
  }

  setTimeout(() => {
    try {
      const iconEl = document.querySelector('[data-app-icon]');
      const titleEl = document.querySelector('[data-app-title]');
      const taglineEl = document.querySelector('[data-app-tagline]');
      const descEl = document.querySelector('[data-app-description]');
      const downloadsEl = document.querySelector('[data-app-downloads]');
      const ratingEl = document.querySelector('[data-app-rating]');
      const releaseEl = document.querySelector('[data-app-release]');

      if (iconEl) {
        iconEl.src = appData.icon;
        iconEl.alt = appData.title;
      }
      if (titleEl) titleEl.textContent = appData.title;
      if (taglineEl) taglineEl.textContent = appData.tagline;
      if (descEl) descEl.textContent = appData.description;
      if (downloadsEl) downloadsEl.textContent = appData.downloads;
      if (ratingEl) ratingEl.textContent = appData.rating;
      if (releaseEl) releaseEl.textContent = appData.release;

      // Tech stack
      const techContainer = document.querySelector('[data-app-tech]');
      if (techContainer) {
        techContainer.innerHTML = '';
        appData.techStack.forEach(tech => {
          const tag = document.createElement('span');
          tag.className = 'tech-tag';
          tag.textContent = tech;
          techContainer.appendChild(tag);
        });
      }

      // Features
      const featuresContainer = document.querySelector('[data-app-features]');
      if (featuresContainer) {
        featuresContainer.innerHTML = '';
        appData.features.forEach(feature => {
          const featureEl = document.createElement('div');
          featureEl.className = 'feature-item';
          featureEl.innerHTML = `
            <div class="feature-icon">
              <ion-icon name="${feature.icon}"></ion-icon>
            </div>
            <div class="feature-content">
              <h4>${feature.title}</h4>
              <p>${feature.description}</p>
            </div>
          `;
          featuresContainer.appendChild(featureEl);
        });
      }

      // Screenshot Gallery
      const mainImg = document.querySelector('[data-gallery-main]');
      const thumbnailsContainer = document.querySelector('[data-gallery-thumbnails]');
      const gallerySection = document.querySelector('.app-gallery');

      if (appData.screenshots && appData.screenshots.length > 0) {
        if (gallerySection) gallerySection.style.display = 'block';
        if (mainImg) {
          mainImg.src = appData.screenshots[0];
          mainImg.alt = `${appData.title} Screenshot`;
        }

        if (thumbnailsContainer) {
          thumbnailsContainer.innerHTML = '';
          if (appData.screenshots.length > 1) {
            thumbnailsContainer.style.display = 'flex';
            appData.screenshots.forEach((screenshot, index) => {
              const thumb = document.createElement('div');
              thumb.className = `gallery-thumb ${index === 0 ? 'active' : ''}`;
              thumb.innerHTML = `<img src="${screenshot}" alt="${appData.title} Thumbnail ${index + 1}">`;
              thumb.addEventListener('click', () => {
                if (mainImg) {
                  mainImg.src = screenshot;
                  mainImg.alt = `${appData.title} Screenshot ${index + 1}`;
                }
                document.querySelectorAll('.gallery-thumb').forEach(t => t.classList.remove('active'));
                thumb.classList.add('active');
              });
              thumbnailsContainer.appendChild(thumb);
            });
          } else {
            thumbnailsContainer.style.display = 'none';
          }
        }
      } else {
        if (gallerySection) gallerySection.style.display = 'none';
      }

      // Development story
      const probEl = document.querySelector('[data-app-problem]');
      const solEl = document.querySelector('[data-app-solution]');
      const chalEl = document.querySelector('[data-app-challenges]');
      const roleEl = document.querySelector('[data-app-role]');

      if (probEl) probEl.textContent = appData.problem;
      if (solEl) solEl.textContent = appData.solution;
      if (chalEl) chalEl.textContent = appData.challenges;
      if (roleEl) roleEl.textContent = appData.role;

      // Reviews
      const reviewsContainer = document.querySelector('[data-app-reviews]');
      const reviewsSection = document.querySelector('[data-app-reviews-section]');

      if (appData.reviews && appData.reviews.length > 0) {
        if (reviewsSection) reviewsSection.style.display = 'block';
        if (reviewsContainer) {
          reviewsContainer.innerHTML = '';
          appData.reviews.forEach(review => {
            const reviewEl = document.createElement('div');
            reviewEl.className = 'review-item';
            reviewEl.innerHTML = `
              <div class="review-header">
                <div class="review-stars">${'★'.repeat(review.stars)}${'☆'.repeat(5 - review.stars)}</div>
                <div class="review-author">${review.author}</div>
              </div>
              <div class="review-text">"${review.text}"</div>
            `;
            reviewsContainer.appendChild(reviewEl);
          });
        }
      } else {
        if (reviewsSection) reviewsSection.style.display = 'none';
      }

      // CTA buttons
      const setCtaButton = (selector, url) => {
        const buttons = document.querySelectorAll(selector);
        buttons.forEach(btn => {
          if (url && url !== '#') {
            btn.href = url;
            btn.style.display = 'inline-flex';
            btn.target = '_blank';
          } else {
            btn.style.display = 'none';
          }
        });
      };

      setCtaButton('[data-app-playstore], [data-app-playstore-final]', appData.playstore);
      setCtaButton('[data-app-appstore], [data-app-appstore-final]', appData.appstore);
      setCtaButton('[data-app-prototype], [data-app-prototype-final]', appData.prototype);

      const protoBtns = document.querySelectorAll('[data-app-prototype], [data-app-prototype-final]');
      protoBtns.forEach(btn => {
        const textSpan = btn.querySelector('span');
        if (textSpan && appData.prototype) {
          if (appData.prototype.includes('figma.com')) {
            textSpan.textContent = 'Figma Prototype';
          } else if (appData.prototype.includes('http')) {
            textSpan.textContent = 'Launch Live Platform';
          }
        }
      });

      if (appContent) appContent.classList.remove('loading');
    } catch (error) {
      console.error('Error populating app modal:', error);
      if (appContent) appContent.classList.remove('loading');
    }
  }, 50);
};

const closeAppModal = function () {
  if (appModal) {
    appModal.classList.remove('active');
    document.body.style.overflow = 'auto';
  }
};

// Open modal when clicking anywhere on a project item or its detail button
const bindProjectModals = function () {
  const projectItems = document.querySelectorAll("[data-filter-item]");

  projectItems.forEach(item => {
    const appId = item.dataset.appDetail;
    if (!appId) return;

    item.addEventListener('click', function (e) {
      // Don't trigger modal if user clicked directly on an external store/demo badge link
      if (e.target.closest('.badge') || e.target.closest('a')) {
        return;
      }
      e.preventDefault();
      openAppModal(appId);
    });
  });

  const detailButtons = document.querySelectorAll("[data-app-detail-btn]");
  detailButtons.forEach(btn => {
    btn.addEventListener('click', function (e) {
      e.preventDefault();
      e.stopPropagation();
      const appId = this.dataset.appDetailBtn;
      if (appId) openAppModal(appId);
    });
  });
};

bindProjectModals();

if (appModalClose) appModalClose.addEventListener('click', closeAppModal);
if (appOverlay) appOverlay.addEventListener('click', closeAppModal);

document.addEventListener('keydown', function (e) {
  if (e.key === 'Escape') {
    if (appModal && appModal.classList.contains('active')) {
      closeAppModal();
    }
    if (modalContainer && modalContainer.classList.contains('active')) {
      testimonialsModalFunc();
    }
  }
});


// Contact form handling with feedback toast
const contactForm = document.querySelector("[data-form]");
const formInputs = document.querySelectorAll("[data-form-input]");
const formBtn = document.querySelector("[data-form-btn]");

if (contactForm && formInputs.length > 0 && formBtn) {
  formInputs.forEach(input => {
    input.addEventListener("input", function () {
      if (contactForm.checkValidity()) {
        formBtn.removeAttribute("disabled");
      } else {
        formBtn.setAttribute("disabled", "");
      }
    });
  });

  contactForm.addEventListener("submit", function (e) {
    e.preventDefault();

    // Show sending state
    const originalBtnContent = formBtn.innerHTML;
    formBtn.innerHTML = '<ion-icon name="sync-outline" class="btn-spinner"></ion-icon><span>Sending...</span>';
    formBtn.setAttribute("disabled", "");

    setTimeout(() => {
      formBtn.innerHTML = '<ion-icon name="checkmark-circle-outline"></ion-icon><span>Message Sent!</span>';
      formBtn.style.background = 'linear-gradient(135deg, #10b981, #059669)';

      showToast("Thank you! Your message has been sent successfully.");

      contactForm.reset();

      setTimeout(() => {
        formBtn.innerHTML = originalBtnContent;
        formBtn.style.background = '';
        formBtn.setAttribute("disabled", "");
      }, 3000);
    }, 800);
  });
}

// Toast notification helper
function showToast(message) {
  let toast = document.querySelector(".toast-notification");
  if (!toast) {
    toast = document.createElement("div");
    toast.className = "toast-notification";
    document.body.appendChild(toast);
  }

  toast.innerHTML = `
    <div class="toast-content">
      <ion-icon name="checkmark-circle"></ion-icon>
      <span>${message}</span>
    </div>
  `;
  toast.classList.add("show");

  setTimeout(() => {
    toast.classList.remove("show");
  }, 4000);
}

// Copy to clipboard helper for contact items
const copyItems = document.querySelectorAll("[data-copy-text]");
copyItems.forEach(item => {
  item.addEventListener("click", function (e) {
    const textToCopy = this.dataset.copyText;
    if (textToCopy) {
      navigator.clipboard.writeText(textToCopy).then(() => {
        showToast(`Copied to clipboard: ${textToCopy}`);
      }).catch(() => {});
    }
  });
});



// ══════════════════════════════════════════════════════
// BEAUTIFICATION — Scroll-Reveal & Animation Engine
// ══════════════════════════════════════════════════════

// 1. IntersectionObserver for Scroll-Reveal Animations
(function initScrollReveal() {
  const revealElements = document.querySelectorAll('.reveal, .reveal-left, .reveal-right, .reveal-scale');
  
  if (!revealElements.length) return;

  const revealObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('revealed');
        revealObserver.unobserve(entry.target);
      }
    });
  }, {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
  });

  revealElements.forEach(el => revealObserver.observe(el));
})();


// 2. Timeline Items Staggered Reveal
(function initTimelineReveal() {
  const timelineItems = document.querySelectorAll('.timeline-item');
  
  if (!timelineItems.length) return;

  const timelineObserver = new IntersectionObserver((entries) => {
    entries.forEach((entry, i) => {
      if (entry.isIntersecting) {
        // Add stagger delay
        const item = entry.target;
        const siblings = Array.from(item.parentElement.children);
        const index = siblings.indexOf(item);
        setTimeout(() => {
          item.classList.add('revealed');
        }, index * 150);
        timelineObserver.unobserve(item);
      }
    });
  }, {
    threshold: 0.15,
    rootMargin: '0px 0px -30px 0px'
  });

  timelineItems.forEach(item => timelineObserver.observe(item));
})();


// 3. Stats Counter Animation
(function initStatsCounter() {
  const statsNumbers = document.querySelectorAll('.stats-number');
  
  if (!statsNumbers.length) return;

  const animateCounter = (el) => {
    const text = el.textContent.trim();
    const match = text.match(/^(\d+)(\+?)$/);
    if (!match) return;

    const target = parseInt(match[1]);
    const suffix = match[2] || '';
    const duration = 1600;
    const startTime = performance.now();

    el.classList.add('counting');

    const step = (currentTime) => {
      const elapsed = currentTime - startTime;
      const progress = Math.min(elapsed / duration, 1);
      // Ease-out cubic
      const eased = 1 - Math.pow(1 - progress, 3);
      const current = Math.round(eased * target);
      el.textContent = current + suffix;

      if (progress < 1) {
        requestAnimationFrame(step);
      } else {
        el.textContent = target + suffix;
        el.classList.remove('counting');
      }
    };

    requestAnimationFrame(step);
  };

  const statsObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const numbers = entry.target.querySelectorAll('.stats-number');
        numbers.forEach((el, i) => {
          setTimeout(() => animateCounter(el), i * 200);
        });
        statsObserver.unobserve(entry.target);
      }
    });
  }, { threshold: 0.3 });

  const statsSection = document.querySelector('.stats');
  if (statsSection) statsObserver.observe(statsSection);
})();


// 4. Skill Bar Width Animation on Scroll
(function initSkillBarAnimation() {
  const skillBars = document.querySelectorAll('.skill-progress-fill');
  
  if (!skillBars.length) return;

  // Store original widths and reset to 0
  skillBars.forEach(bar => {
    bar.dataset.width = bar.style.width;
    bar.style.width = '0';
  });

  const skillObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const bars = entry.target.querySelectorAll('.skill-progress-fill');
        bars.forEach((bar, i) => {
          setTimeout(() => {
            bar.style.width = bar.dataset.width;
            bar.classList.add('animate');
            // Remove glow after a few cycles
            setTimeout(() => bar.classList.remove('animate'), 4000);
          }, i * 150);
        });
        skillObserver.unobserve(entry.target);
      }
    });
  }, { threshold: 0.2 });

  const skillSection = document.querySelector('.skill');
  if (skillSection) skillObserver.observe(skillSection);
})();


// 5. Staggered Project Card Entrance on Filter
(function initProjectStagger() {
  const originalFilterFunc = window.filterFunc || null;
  
  // Override filter to add stagger animation
  const filterButtons = document.querySelectorAll('[data-filter-btn]');
  const selectItemButtons = document.querySelectorAll('[data-select-item]');
  
  const addStaggerToCards = () => {
    const activeCards = document.querySelectorAll('.project-item.active');
    activeCards.forEach((card, i) => {
      card.style.animationDelay = `${i * 0.06}s`;
    });
  };

  // Observe filter clicks for stagger
  filterButtons.forEach(btn => {
    btn.addEventListener('click', () => {
      setTimeout(addStaggerToCards, 10);
    });
  });

  selectItemButtons.forEach(btn => {
    btn.addEventListener('click', () => {
      setTimeout(addStaggerToCards, 10);
    });
  });

  // Initial stagger on page load
  setTimeout(addStaggerToCards, 100);
})();


// 6. Re-trigger Scroll Reveals on Tab Switch
(function initTabRevealRetrigger() {
  const navLinks = document.querySelectorAll('[data-nav-link]');
  
  navLinks.forEach(link => {
    link.addEventListener('click', function () {
      // Small delay to let page content render
      setTimeout(() => {
        const activePage = document.querySelector('article.active');
        if (!activePage) return;

        const revealEls = activePage.querySelectorAll('.reveal, .reveal-left, .reveal-right, .reveal-scale');
        const timelineEls = activePage.querySelectorAll('.timeline-item');

        // Re-trigger reveal animations for newly visible tab
        const revealObserver = new IntersectionObserver((entries) => {
          entries.forEach(entry => {
            if (entry.isIntersecting) {
              entry.target.classList.add('revealed');
              revealObserver.unobserve(entry.target);
            }
          });
        }, { threshold: 0.1, rootMargin: '0px 0px -50px 0px' });

        revealEls.forEach(el => {
          if (!el.classList.contains('revealed')) {
            revealObserver.observe(el);
          }
        });

        // Re-trigger timeline items
        const timelineObserver = new IntersectionObserver((entries) => {
          entries.forEach(entry => {
            if (entry.isIntersecting) {
              const item = entry.target;
              const siblings = Array.from(item.parentElement.children);
              const index = siblings.indexOf(item);
              setTimeout(() => item.classList.add('revealed'), index * 150);
              timelineObserver.unobserve(item);
            }
          });
        }, { threshold: 0.15 });

        timelineEls.forEach(item => {
          if (!item.classList.contains('revealed')) {
            timelineObserver.observe(item);
          }
        });

        // Re-trigger skill bars if on Resume tab
        const skillBars = activePage.querySelectorAll('.skill-progress-fill');
        if (skillBars.length) {
          const skillObserver = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
              if (entry.isIntersecting) {
                const bars = entry.target.querySelectorAll('.skill-progress-fill');
                bars.forEach((bar, i) => {
                  setTimeout(() => {
                    bar.style.width = bar.dataset.width || bar.style.width;
                  }, i * 150);
                });
                skillObserver.unobserve(entry.target);
              }
            });
          }, { threshold: 0.2 });

          const skillSection = activePage.querySelector('.skill');
          if (skillSection) skillObserver.observe(skillSection);
        }

        // Re-trigger stats counter if on About tab
        const statsSection = activePage.querySelector('.stats');
        if (statsSection) {
          const statsNums = statsSection.querySelectorAll('.stats-number');
          statsNums.forEach((el, i) => {
            const text = el.textContent.trim();
            const match = text.match(/^(\d+)(\+?)$/);
            if (!match) return;
            const target = parseInt(match[1]);
            const suffix = match[2] || '';
            const duration = 1600;
            const startTime = performance.now();
            const step = (currentTime) => {
              const elapsed = currentTime - startTime;
              const progress = Math.min(elapsed / duration, 1);
              const eased = 1 - Math.pow(1 - progress, 3);
              el.textContent = Math.round(eased * target) + suffix;
              if (progress < 1) requestAnimationFrame(step);
            };
            setTimeout(() => requestAnimationFrame(step), i * 200);
          });
        }
      }, 100);
    });
  });
})();



// ══════════════════════════════════════════════
// UPGRADE ADDITIONS — v4.0
// ══════════════════════════════════════════════

// ── Typing Animation ──
(function initTypingAnimation() {
  const el = document.querySelector('[data-typing]');
  if (!el) return;

  const titles = [
    'Mobile App Developer',
    'Flutter & Dart Expert',
    'UI/UX Engineer',
    'Full-Stack Builder',
    'Sr. Android & iOS Dev'
  ];

  let titleIdx = 0;
  let charIdx = 0;
  let isDeleting = false;
  const typeSpeed = 80;
  const deleteSpeed = 40;
  const holdDelay = 2000;
  const nextDelay = 500;

  function tick() {
    const current = titles[titleIdx];

    if (!isDeleting) {
      charIdx++;
      el.textContent = current.slice(0, charIdx);

      if (charIdx === current.length) {
        isDeleting = true;
        setTimeout(tick, holdDelay);
        return;
      }
      setTimeout(tick, typeSpeed);
    } else {
      charIdx--;
      el.textContent = current.slice(0, charIdx);

      if (charIdx === 0) {
        isDeleting = false;
        titleIdx = (titleIdx + 1) % titles.length;
        setTimeout(tick, nextDelay);
        return;
      }
      setTimeout(tick, deleteSpeed);
    }
  }

  // Start after a short delay
  setTimeout(tick, 600);
})();


// ── Back-to-Top Button ──
(function initBackToTop() {
  const btn = document.querySelector('[data-back-top]');
  if (!btn) return;

  const threshold = 400;

  window.addEventListener('scroll', function () {
    if (window.scrollY > threshold) {
      btn.classList.add('visible');
    } else {
      btn.classList.remove('visible');
    }
  }, { passive: true });

  btn.addEventListener('click', function () {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  });
})();


// ── Dynamic Greeting ──
(function initDynamicGreeting() {
  const nameEl = document.querySelector('.name[title]');
  if (!nameEl) return;

  const hour = new Date().getHours();
  let greeting;
  if (hour >= 5 && hour < 12) greeting = 'Good Morning';
  else if (hour >= 12 && hour < 17) greeting = 'Good Afternoon';
  else if (hour >= 17 && hour < 21) greeting = 'Good Evening';
  else greeting = 'Hello, Night Owl';

  nameEl.setAttribute('title', `${greeting}! I'm Yash Kushwaha`);
})();


// ── Lazy Image Loading ──
(function initLazyImages() {
  if (!('IntersectionObserver' in window)) return;

  const images = document.querySelectorAll('.project-img img, .testimonials-avatar-box img');

  const imgObserver = new IntersectionObserver(function (entries) {
    entries.forEach(function (entry) {
      if (entry.isIntersecting) {
        const img = entry.target;
        if (img.dataset.src) {
          img.src = img.dataset.src;
          img.removeAttribute('data-src');
        }
        img.classList.add('loaded');
        imgObserver.unobserve(img);
      }
    });
  }, { rootMargin: '100px' });

  images.forEach(function (img) { imgObserver.observe(img); });
})();


// ── Project Count Badge ──
(function initProjectCount() {
  const navBtns = document.querySelectorAll('[data-nav-link]');
  const projectList = document.querySelector('.project-list');

  if (!projectList) return;

  const totalProjects = projectList.querySelectorAll('.project-item').length;

  navBtns.forEach(function (btn) {
    if ((btn.dataset.target || btn.textContent.trim().toLowerCase()) === 'portfolio') {
      btn.innerHTML = 'Portfolio <span class="nav-count">(' + totalProjects + ')</span>';
    }
  });
})();
