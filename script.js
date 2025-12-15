document.addEventListener('DOMContentLoaded', () => {
    // 1. Sticky Header Shadow
    const header = document.getElementById('header');
    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            header.classList.add('scrolled');
        } else {
            header.classList.remove('scrolled');
        }
    });

    // 2. Mobile Menu Toggle
    const hamburger = document.querySelector('.hamburger');
    const gnb = document.querySelector('.gnb');

    if (hamburger && gnb) {
        hamburger.addEventListener('click', () => {
            gnb.classList.toggle('active');
            // Optional: Toggle icon style if needed
        });

        // Close menu when clicking a link
        gnb.querySelectorAll('a').forEach(link => {
            link.addEventListener('click', () => {
                gnb.classList.remove('active');
            });
        });
    }

    // 3. Scroll Fade-in Animation
    const fadeSections = document.querySelectorAll('.fade-section');
    const observerOptions = {
        threshold: 0.15,
        rootMargin: "0px 0px -50px 0px"
    };

    const sectionObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
                // Optional: Unobserve if you only want it to animate once
                // observer.unobserve(entry.target);
            }
        });
    }, observerOptions);

    fadeSections.forEach(section => {
        sectionObserver.observe(section);
    });

    // 4. Portfolio Logic
    const portfolioGrid = document.getElementById('portfolio-grid');
    const filterBtns = document.querySelectorAll('.filter-btn');
    // portfolioData is defined in portfolio-data.js

    // Hero Slider Logic
    const slides = document.querySelectorAll('.slide');
    if (slides.length > 0) {
        let currentSlide = 0;
        setInterval(() => {
            slides[currentSlide].classList.remove('active');
            currentSlide = (currentSlide + 1) % slides.length;
            slides[currentSlide].classList.add('active');
        }, 4000); // 4 seconds interval
    }

    // About Slider Logic
    const aboutSlides = document.querySelectorAll('.about-slide');
    if (aboutSlides.length > 0) {
        let currentAboutSlide = 0;
        setInterval(() => {
            aboutSlides[currentAboutSlide].classList.remove('active');
            currentAboutSlide = (currentAboutSlide + 1) % aboutSlides.length;
            aboutSlides[currentAboutSlide].classList.add('active');
        }, 4000);
    }

    // Initialize Portfolio
    if (typeof portfolioData !== 'undefined' && portfolioGrid) {
        renderPortfolio(portfolioData);
    }

    // Render Function
    function renderPortfolio(items) {
        portfolioGrid.innerHTML = '';
        if (items.length === 0) {
            portfolioGrid.innerHTML = '<p style="text-align:center; width:100%;">해당 카테고리의 작업이 없습니다.</p>';
            return;
        }

        items.forEach(item => {
            const el = document.createElement('div');
            el.className = 'portfolio-item';
            // Construct path from category and filename
            const imagePath = `images/portfolio/${item.category}/${item.filename}`;
            // Get Korean category name
            const categoryDisplay = (typeof categoryNames !== 'undefined' && categoryNames[item.category]) || item.category;

            el.innerHTML = `
                <img src="${imagePath}" alt="${item.title}">
                <div class="item-info">
                    <p>${categoryDisplay}</p>
                </div>
            `;

            // Add click event for lightbox
            el.addEventListener('click', () => {
                openLightbox(imagePath, item.title);
            });

            portfolioGrid.appendChild(el);
        });
    }

    // Lightbox Logic
    const lightbox = document.createElement('div');
    lightbox.className = 'lightbox';
    lightbox.innerHTML = `
        <div class="lightbox-close">&times;</div>
        <img class="lightbox-content" src="" alt="Portfolio Image">
    `;
    document.body.appendChild(lightbox);

    const lightboxImg = lightbox.querySelector('.lightbox-content');
    const lightboxClose = lightbox.querySelector('.lightbox-close');

    function openLightbox(src, alt) {
        lightboxImg.src = src;
        lightboxImg.alt = alt;
        lightbox.classList.add('active');
        document.body.style.overflow = 'hidden'; // Prevent scrolling
    }

    function closeLightbox() {
        lightbox.classList.remove('active');
        document.body.style.overflow = ''; // Restore scrolling
    }

    lightboxClose.addEventListener('click', closeLightbox);

    lightbox.addEventListener('click', (e) => {
        if (e.target === lightbox) {
            closeLightbox();
        }
    });

    // Filter Logic
    filterBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            // UI Active State
            filterBtns.forEach(b => b.classList.remove('active'));
            btn.classList.add('active');

            // Filter Data
            const filterValue = btn.dataset.filter;
            if (filterValue === 'all') {
                renderPortfolio(portfolioData);
            } else {
                const filtered = portfolioData.filter(item => item.category === filterValue);
                renderPortfolio(filtered);
            }
        });
    });
});
