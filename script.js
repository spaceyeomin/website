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

    // 4. Portfolio Logic (2-depth structure)
    const portfolioGrid = document.getElementById('portfolio-grid');
    const categoryTabsContainer = document.getElementById('category-tabs');
    const projectTabsContainer = document.getElementById('project-tabs');

    // State
    // portfolioCategories and portfolioData are defined in portfolio-data.js
    let currentCategory = null;
    let currentProject = null;

    // Check availability
    if (typeof portfolioCategories !== 'undefined' && typeof portfolioData !== 'undefined' && portfolioGrid) {
        initPortfolio();
    } else {
        console.warn('Portfolio data or DOM elements missing.');
    }

    function initPortfolio() {
        // Set initial category (first one)
        if (portfolioCategories.length > 0) {
            selectCategory(portfolioCategories[0].id);
        }
    }

    // --- Render Functions ---

    // 1. Render Categories (Level 1)
    function renderCategoryTabs() {
        categoryTabsContainer.innerHTML = '';
        portfolioCategories.forEach(cat => {
            const btn = document.createElement('button');
            btn.className = 'filter-btn';
            if (currentCategory === cat.id) btn.classList.add('active');
            btn.textContent = cat.name;
            btn.addEventListener('click', () => selectCategory(cat.id));
            categoryTabsContainer.appendChild(btn);
        });
    }

    // 2. Render Project Buttons (Level 2)
    function renderProjectTabs() {
        projectTabsContainer.innerHTML = '';

        // Find current category object
        const categoryObj = portfolioCategories.find(c => c.id === currentCategory);
        if (!categoryObj) return;

        // Render subcategories (projects)
        categoryObj.subcategories.forEach((sub, index) => {
            const btn = document.createElement('button');
            btn.className = 'filter-btn sub-btn';
            if (currentProject === sub.id) btn.classList.add('active');
            btn.textContent = sub.name;
            btn.addEventListener('click', () => selectProject(sub.id));
            projectTabsContainer.appendChild(btn);
        });

        // Set Default Project Selection Logic
        // When rendering tabs, if currentProject is null or not in this list, select the first one.
        // However, we handle this in selectCategory to ensure state consistency.
    }

    // 3. Render Grid Items with Horizontal Masonry
    function renderGrid() {
        portfolioGrid.innerHTML = '';

        // Filter data by currentProject
        const filteredItems = portfolioData.filter(item => item.projectId === currentProject);

        if (filteredItems.length === 0) {
            // Determine category name for empty state message
            const catObj = portfolioCategories.find(c => c.id === currentCategory);
            const subObj = catObj ? catObj.subcategories.find(s => s.id === currentProject) : null;
            const subName = subObj ? subObj.name : "이 프로젝트";

            portfolioGrid.innerHTML = `<div class="empty-state"><p>${subName}의 포트폴리오 이미지를 준비 중입니다.</p></div>`;
            return;
        }

        // Determine number of columns based on viewport width
        // Mobile <= 768px (2 columns), Desktop > 768px (3 columns)
        const isMobile = window.innerWidth <= 768;
        const numCols = isMobile ? 2 : 3;

        // Create column arrays
        const columns = Array.from({ length: numCols }, () => {
            const col = document.createElement('div');
            col.className = 'portfolio-column';
            return col;
        });

        // Distribute items into columns (Round Robin: Horizontal Order)
        filteredItems.forEach((item, index) => {
            const el = document.createElement('div');
            el.className = 'portfolio-item';

            // Construct path: images/portfolio/[projectId]/[filename]
            const imagePath = `images/portfolio/${item.projectId}/${item.filename}`;

            el.innerHTML = `
                <img src="${imagePath}" alt="${item.title}">
                <div class="item-info">
                    <p>${item.title}</p>
                </div>
            `;

            // Add click event for lightbox
            el.addEventListener('click', () => {
                openLightbox(imagePath, item.title);
            });

            // Append to the correct column (index % numCols)
            const colIndex = index % numCols;
            columns[colIndex].appendChild(el);
        });

        // Append columns to grid
        columns.forEach(col => portfolioGrid.appendChild(col));
    }

    // Re-render on window resize to switch column count
    let resizeTimeout;
    window.addEventListener('resize', () => {
        clearTimeout(resizeTimeout);
        resizeTimeout = setTimeout(() => {
            renderGrid();
        }, 100);
    });

    // --- Action Handlers ---

    function selectCategory(catId) {
        currentCategory = catId;

        // When switching category, auto-select the first project in that category
        const catObj = portfolioCategories.find(c => c.id === catId);
        if (catObj && catObj.subcategories.length > 0) {
            currentProject = catObj.subcategories[0].id;
        } else {
            currentProject = null;
        }

        renderCategoryTabs();
        renderProjectTabs();
        renderGrid();
    }

    function selectProject(projId) {
        currentProject = projId;
        renderProjectTabs(); // Re-render to update active state
        renderGrid();
    }

    // --- Lightbox Logic ---
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

    // Close on Escape key
    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape' && lightbox.classList.contains('active')) {
            closeLightbox();
        }
    });
});
