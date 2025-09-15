'use strict';



// element toggle function
const elementToggleFunc = function (elem) { elem.classList.toggle("active"); }



// sidebar variables
const sidebar = document.querySelector("[data-sidebar]");
const sidebarBtn = document.querySelector("[data-sidebar-btn]");

// sidebar toggle functionality for mobile
sidebarBtn.addEventListener("click", function () { elementToggleFunc(sidebar); });



// testimonials variables
const testimonialsItem = document.querySelectorAll("[data-testimonials-item]");
const modalContainer = document.querySelector("[data-modal-container]");
const modalCloseBtn = document.querySelector("[data-modal-close-btn]");
const overlay = document.querySelector("[data-overlay]");

// modal variable
const modalImg = document.querySelector("[data-modal-img]");
const modalTitle = document.querySelector("[data-modal-title]");
const modalText = document.querySelector("[data-modal-text]");

// modal toggle function
const testimonialsModalFunc = function () {
  modalContainer.classList.toggle("active");
  overlay.classList.toggle("active");
}

// add click event to all modal items
for (let i = 0; i < testimonialsItem.length; i++) {

  testimonialsItem[i].addEventListener("click", function () {

    modalImg.src = this.querySelector("[data-testimonials-avatar]").src;
    modalImg.alt = this.querySelector("[data-testimonials-avatar]").alt;
    modalTitle.innerHTML = this.querySelector("[data-testimonials-title]").innerHTML;
    modalText.innerHTML = this.querySelector("[data-testimonials-text]").innerHTML;

    testimonialsModalFunc();

  });

}

// add click event to modal close button
modalCloseBtn.addEventListener("click", testimonialsModalFunc);
overlay.addEventListener("click", testimonialsModalFunc);



// custom select variables
const select = document.querySelector("[data-select]");
const selectItems = document.querySelectorAll("[data-select-item]");
const selectValue = document.querySelector("[data-selecct-value]");
const filterBtn = document.querySelectorAll("[data-filter-btn]");

select.addEventListener("click", function () { elementToggleFunc(this); });

// add event in all select items
for (let i = 0; i < selectItems.length; i++) {
  selectItems[i].addEventListener("click", function () {

    let selectedValue = this.innerText.toLowerCase();
    selectValue.innerText = this.innerText;
    elementToggleFunc(select);
    filterFunc(selectedValue);

  });
}

// filter variables
const filterItems = document.querySelectorAll("[data-filter-item]");

const filterFunc = function (selectedValue) {

  for (let i = 0; i < filterItems.length; i++) {

    if (selectedValue === "all") {
      filterItems[i].classList.add("active");
    } else if (selectedValue === filterItems[i].dataset.category) {
      filterItems[i].classList.add("active");
    } else {
      filterItems[i].classList.remove("active");
    }

  }

}

// add event in all filter button items for large screen
let lastClickedBtn = filterBtn[0];

for (let i = 0; i < filterBtn.length; i++) {

  filterBtn[i].addEventListener("click", function () {

    let selectedValue = this.innerText.toLowerCase();
    selectValue.innerText = this.innerText;
    filterFunc(selectedValue);

    lastClickedBtn.classList.remove("active");
    this.classList.add("active");
    lastClickedBtn = this;

  });

}



// contact form variables
const form = document.querySelector("[data-form]");
const formInputs = document.querySelectorAll("[data-form-input]");
const formBtn = document.querySelector("[data-form-btn]");

// add event to all form input field
for (let i = 0; i < formInputs.length; i++) {
  formInputs[i].addEventListener("input", function () {

    // check form validation
    if (form.checkValidity()) {
      formBtn.removeAttribute("disabled");
    } else {
      formBtn.setAttribute("disabled", "");
    }

  });
}



// page navigation variables
const navigationLinks = document.querySelectorAll("[data-nav-link]");
const pages = document.querySelectorAll("[data-page]");

// add event to all nav link
for (let i = 0; i < navigationLinks.length; i++) {
  navigationLinks[i].addEventListener("click", function () {

    for (let i = 0; i < pages.length; i++) {
      if (this.innerHTML.toLowerCase() === pages[i].dataset.page) {
        pages[i].classList.add("active");
        navigationLinks[i].classList.add("active");
        window.scrollTo(0, 0);
      } else {
        pages[i].classList.remove("active");
        navigationLinks[i].classList.remove("active");
      }
    }

  });
}

// App Detail Modal functionality
const appDetailButtons = document.querySelectorAll("[data-app-detail]");
const appModal = document.querySelector("[data-app-modal]");
const appModalClose = document.querySelector("[data-app-close]");
const appOverlay = document.querySelector("[data-app-overlay]");

// Sample app data - You can replace this with your actual app data
const appsData = {
  'fg-glasspro': {
    title: 'Fg GlassPro',
    tagline: 'Streamline your glass business operations',
    icon: './assets/images/project-11.png',
    description: 'A comprehensive ERP-style application designed specifically for the glass industry. Features include order tracking, customer management, digital invoicing, and inventory control. Built with Flutter for cross-platform compatibility and real-time data synchronization.',
    downloads: '50K+',
    rating: '4.6',
    release: '2024',
    techStack: ['Flutter', 'Firebase', 'Node.js', 'MongoDB', 'Stripe API'],
    playstore: 'https://play.google.com/store/apps/details?id=com.test.flutter_fg_glass_app',
    appstore: 'https://apps.apple.com/in/app/fg-glasspro/id1665823610',
    prototype: null,
    screenshots: [
      './assets/images/project-11.png',
      './assets/images/project-1.jpg',
      './assets/images/project-2.png',
      './assets/images/project-4.png'
    ],
    features: [
      {
        icon: 'receipt-outline',
        title: 'Digital Invoicing',
        description: 'Generate and manage invoices digitally with automatic calculations'
      },
      {
        icon: 'people-outline',
        title: 'Customer Management',
        description: 'Comprehensive customer database with order history and preferences'
      },
      {
        icon: 'cube-outline',
        title: 'Inventory Tracking',
        description: 'Real-time inventory management with low stock alerts'
      },
      {
        icon: 'analytics-outline',
        title: 'Business Analytics',
        description: 'Detailed reports and analytics for better business insights'
      }
    ],
    problem: 'The glass industry lacked modern digital tools for managing orders, customers, and inventory. Most businesses relied on paper-based systems or generic software that didn\'t address industry-specific needs.',
    solution: 'Developed a specialized ERP system tailored for glass businesses, featuring industry-specific workflows, automated calculations for glass cutting, and integrated payment processing.',
    challenges: 'Key challenges included designing complex glass measurement calculations, implementing offline-first architecture, and creating an intuitive UI for non-technical users. Solved through extensive user research and iterative design.',
    role: 'Lead Flutter Developer responsible for full-stack development, UI/UX design in Figma, backend API integration, and Play Store deployment.',
    reviews: [
      {
        stars: 5,
        author: 'Rajesh Glass Works',
        text: 'Excellent app for managing our glass business. Very user-friendly and has all the features we need.'
      },
      {
        stars: 5,
        author: 'Modern Glass Solutions',
        text: 'This app has revolutionized our business operations. Highly recommended for glass retailers.'
      }
    ]
  },
  'future-tracker': {
    title: 'Future Tracker',
    tagline: 'Track your business progress with precision',
    icon: './assets/images/project-12.jpeg',
    description: 'A comprehensive business and productivity tracker designed to help companies manage projects, monitor sales performance, and improve reporting. Features real-time dashboards, team collaboration tools, and automated reporting systems.',
    downloads: '25K+',
    rating: '4.4',
    release: '2024',
    techStack: ['Flutter', 'Firebase', 'Node.js', 'Chart.js', 'REST APIs'],
    playstore: 'https://play.google.com/store/apps/details?id=com.faglass.app.fa_glass_app',
    appstore: 'https://apps.apple.com/in/app/fa-glass/id6502397420',
    prototype: null,
    screenshots: [
      './assets/images/project-12.jpeg',
      './assets/images/project-3.jpg',
      './assets/images/project-5.png'
    ],
    features: [
      {
        icon: 'trending-up-outline',
        title: 'Sales Tracking',
        description: 'Monitor sales performance with detailed analytics and trends'
      },
      {
        icon: 'folder-outline',
        title: 'Project Management',
        description: 'Organize and track projects with milestone tracking'
      },
      {
        icon: 'bar-chart-outline',
        title: 'Advanced Reporting',
        description: 'Generate comprehensive reports with visual charts'
      },
      {
        icon: 'notifications-outline',
        title: 'Smart Alerts',
        description: 'Get notified about important deadlines and milestones'
      }
    ],
    problem: 'Small and medium businesses struggled with tracking multiple projects and sales metrics across different platforms, leading to inefficient reporting and missed opportunities.',
    solution: 'Created a unified tracking platform that consolidates project management, sales monitoring, and reporting in one intuitive mobile application.',
    challenges: 'Implementing real-time data synchronization across multiple users and creating meaningful visualizations for complex business data.',
    role: 'Full-stack Flutter developer, designed the complete user experience and integrated multiple third-party APIs.',
    reviews: [
      {
        stars: 4,
        author: 'Tech Solutions Inc',
        text: 'Great app for tracking our business metrics. The reporting feature is particularly useful.'
      }
    ]
  },
  'convex': {
    title: 'Convex',
    tagline: 'Business analytics made simple',
    icon: './assets/images/project-10.png',
    description: 'Advanced business analytics and reporting application with live dashboards, sales tracking, and predictive insights. Designed for enterprises to make data-driven decisions.',
    downloads: '10K+',
    rating: '4.3',
    release: '2023',
    techStack: ['Flutter', 'Python', 'TensorFlow', 'Firebase', 'PostgreSQL'],
    playstore: '#',
    appstore: '#',
    prototype: null,
    screenshots: [
      './assets/images/project-10.png',
      './assets/images/project-7.png'
    ],
    features: [
      {
        icon: 'analytics-outline',
        title: 'Predictive Analytics',
        description: 'AI-powered insights for future business trends'
      },
      {
        icon: 'pulse-outline',
        title: 'Live Dashboards',
        description: 'Real-time data visualization and monitoring'
      },
      {
        icon: 'cloud-outline',
        title: 'Cloud Integration',
        description: 'Seamless integration with cloud data sources'
      }
    ],
    problem: 'Enterprise businesses needed advanced analytics tools that could process large datasets and provide actionable insights.',
    solution: 'Developed an AI-powered analytics platform with machine learning capabilities for predictive business intelligence.',
    challenges: 'Integrating machine learning models with Flutter, optimizing performance for large datasets, and creating intuitive data visualizations.',
    role: 'Lead developer for mobile application, collaborated with data scientists for ML integration.',
    reviews: []
  },
  'task-manager': {
    title: 'Task Manager',
    tagline: 'Organize your productivity effortlessly',
    icon: './assets/images/project-8.jpg',
    description: 'A comprehensive productivity mobile application for managing tasks, schedules, and team collaboration. Features include smart notifications, progress tracking, and team synchronization.',
    downloads: '75K+',
    rating: '4.7',
    release: '2023',
    techStack: ['Flutter', 'Firebase', 'Node.js', 'WebSocket', 'Push Notifications'],
    playstore: '#',
    appstore: null,
    prototype: null,
    screenshots: [
      './assets/images/project-8.jpg',
      './assets/images/project-6.png',
      './assets/images/project-9.png'
    ],
    features: [
      {
        icon: 'checkmark-circle-outline',
        title: 'Smart Task Management',
        description: 'Organize tasks with priorities, deadlines, and categories'
      },
      {
        icon: 'people-outline',
        title: 'Team Collaboration',
        description: 'Share projects and collaborate with team members'
      },
      {
        icon: 'time-outline',
        title: 'Time Tracking',
        description: 'Track time spent on tasks with detailed analytics'
      },
      {
        icon: 'calendar-outline',
        title: 'Schedule Integration',
        description: 'Sync with calendars and set automated reminders'
      }
    ],
    problem: 'Teams struggled with task coordination and productivity tracking across different platforms and devices.',
    solution: 'Built a unified task management platform with real-time collaboration features and intelligent productivity insights.',
    challenges: 'Implementing real-time synchronization, offline functionality, and creating an intuitive UX for complex task relationships.',
    role: 'Senior Flutter developer, led the development team and implemented core collaboration features.',
    reviews: [
      {
        stars: 5,
        author: 'ProductivityPro',
        text: 'Best task management app I\'ve used. The collaboration features are outstanding!'
      },
      {
        stars: 4,
        author: 'TeamLeader',
        text: 'Great for managing team projects. The time tracking feature is very accurate.'
      }
    ]
  }
};

// App detail modal functions
const openAppModal = function(appId) {
  const appData = appsData[appId];
  if (!appData) {
    console.warn(`App data not found for: ${appId}`);
    return;
  }
  
  // Add loading state
  const appContent = document.querySelector('.app-detail-content');
  appContent.classList.add('loading');
  
  // Show modal first
  appModal.classList.add('active');
  document.body.style.overflow = 'hidden';
  
  // Populate modal with app data after a short delay for smooth animation
  setTimeout(() => {
    try {
      document.querySelector('[data-app-icon]').src = appData.icon;
      document.querySelector('[data-app-icon]').alt = appData.title;
  document.querySelector('[data-app-title]').textContent = appData.title;
  document.querySelector('[data-app-tagline]').textContent = appData.tagline;
  document.querySelector('[data-app-description]').textContent = appData.description;
  document.querySelector('[data-app-downloads]').textContent = appData.downloads;
  document.querySelector('[data-app-rating]').textContent = appData.rating;
  document.querySelector('[data-app-release]').textContent = appData.release;
  
  // Tech stack
  const techContainer = document.querySelector('[data-app-tech]');
  techContainer.innerHTML = '';
  appData.techStack.forEach(tech => {
    const tag = document.createElement('span');
    tag.className = 'tech-tag';
    tag.textContent = tech;
    techContainer.appendChild(tag);
  });
  
  // Features
  const featuresContainer = document.querySelector('[data-app-features]');
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
  
  // Gallery
  if (appData.screenshots && appData.screenshots.length > 0) {
    const mainImg = document.querySelector('[data-gallery-main]');
    const thumbnailsContainer = document.querySelector('[data-gallery-thumbnails]');
    
    // Set main image
    mainImg.src = appData.screenshots[0];
    mainImg.alt = `${appData.title} Screenshot 1`;
    
    // Create thumbnails
    thumbnailsContainer.innerHTML = '';
    appData.screenshots.forEach((screenshot, index) => {
      const thumb = document.createElement('div');
      thumb.className = `gallery-thumb ${index === 0 ? 'active' : ''}`;
      thumb.innerHTML = `<img src="${screenshot}" alt="${appData.title} Screenshot ${index + 1}">`;
      thumb.addEventListener('click', () => {
        mainImg.src = screenshot;
        mainImg.alt = `${appData.title} Screenshot ${index + 1}`;
        document.querySelectorAll('.gallery-thumb').forEach(t => t.classList.remove('active'));
        thumb.classList.add('active');
      });
      thumbnailsContainer.appendChild(thumb);
    });
  }
  
  // Development story
  document.querySelector('[data-app-problem]').textContent = appData.problem;
  document.querySelector('[data-app-solution]').textContent = appData.solution;
  document.querySelector('[data-app-challenges]').textContent = appData.challenges;
  document.querySelector('[data-app-role]').textContent = appData.role;
  
  // Reviews
  const reviewsContainer = document.querySelector('[data-app-reviews]');
  const reviewsSection = document.querySelector('[data-app-reviews-section]');
  
  if (appData.reviews && appData.reviews.length > 0) {
    reviewsSection.style.display = 'block';
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
  } else {
    reviewsSection.style.display = 'none';
  }
  
  // CTA buttons
  const setCtaButton = (selector, url) => {
    const buttons = document.querySelectorAll(selector);
    buttons.forEach(btn => {
      if (url && url !== '#') {
        btn.href = url;
        btn.style.display = 'flex';
        btn.target = '_blank';
      } else {
        btn.style.display = 'none';
      }
    });
  };
  
  setCtaButton('[data-app-playstore], [data-app-playstore-final]', appData.playstore);
  setCtaButton('[data-app-appstore], [data-app-appstore-final]', appData.appstore);
  setCtaButton('[data-app-prototype], [data-app-prototype-final]', appData.prototype);
  
      // Remove loading state
      appContent.classList.remove('loading');
    } catch (error) {
      console.error('Error populating app modal:', error);
      appContent.classList.remove('loading');
    }
  }, 100); // Small delay for smooth animation
};

// Enhanced image loading with error handling
const loadImageWithFallback = (img, src, fallbackSrc = './assets/images/project-1.jpg') => {
  return new Promise((resolve, reject) => {
    const tempImg = new Image();
    tempImg.onload = () => {
      img.src = src;
      img.style.opacity = '1';
      resolve();
    };
    tempImg.onerror = () => {
      img.src = fallbackSrc;
      img.style.opacity = '1';
      console.warn(`Failed to load image: ${src}, using fallback`);
      resolve();
    };
    tempImg.src = src;
  });
};

const closeAppModal = function() {
  appModal.classList.remove('active');
  document.body.style.overflow = 'auto';
};

// Add event listeners for app detail buttons
appDetailButtons.forEach(button => {
  button.addEventListener('click', function() {
    const appId = this.dataset.appDetail;
    openAppModal(appId);
  });
});

// Close modal events
appModalClose.addEventListener('click', closeAppModal);
appOverlay.addEventListener('click', closeAppModal);

// Close modal with Escape key
document.addEventListener('keydown', function(e) {
  if (e.key === 'Escape' && appModal.classList.contains('active')) {
    closeAppModal();
  }
});
