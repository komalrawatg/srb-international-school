// Mobile Hamburger Menu Mechanics Handler
const hamburger = document.querySelector('.hamburger');
const navMenu = document.querySelector('.nav-menu');

if (hamburger && navMenu) {
    hamburger.addEventListener('click', () => {
        hamburger.classList.toggle('active');
        navMenu.classList.toggle('active');
    });

    // Close navigation menu whenever an internal link option is tapped
    document.querySelectorAll('.nav-menu a').forEach(link => {
        link.addEventListener('click', () => {
            hamburger.classList.remove('active');
            navMenu.classList.remove('active');
        });
    });
}

// Interactive Masonry Gallery Filtering Setup
const filterButtons = document.querySelectorAll('.filter-btn');
const galleryItems = document.querySelectorAll('.gallery-item');

if (filterButtons.length > 0 && galleryItems.length > 0) {
    filterButtons.forEach(button => {
        button.addEventListener('click', () => {
            // Change highlight trigger class flags
            filterButtons.forEach(btn => btn.classList.remove('active'));
            button.classList.add('active');

            const selectedFilter = button.getAttribute('data-filter');

            galleryItems.forEach(item => {
                const itemCategory = item.getAttribute('data-category');
                if (selectedFilter === 'all' || itemCategory === selectedFilter) {
                    item.style.display = 'block';
                    // Add basic fade entrance logic
                    item.style.animation = 'fadeIn 0.4s ease forwards';
                } else {
                    item.style.display = 'none';
                }
            });
        });
    });
}

// Lightbox Modal Mechanism Logic Implementation
const lightbox = document.getElementById('lightbox');
const lightboxImg = document.querySelector('.lightbox-img');
const lightboxClose = document.querySelector('.lightbox-close');

if (lightbox && lightboxImg && galleryItems.length > 0) {
    galleryItems.forEach(item => {
        item.addEventListener('click', () => {
            const targetImgSrc = item.querySelector('img').getAttribute('src');
            const targetImgAlt = item.querySelector('img').getAttribute('alt');
            
            lightboxImg.setAttribute('src', targetImgSrc);
            lightboxImg.setAttribute('alt', targetImgAlt);
            lightbox.style.display = 'flex';
        });
    });

    if (lightboxClose) {
        lightboxClose.addEventListener('click', () => {
            lightbox.style.display = 'none';
        });
    }

    // Close whenever user mouse clicks outside main photo container boundaries
    lightbox.addEventListener('click', (e) => {
        if (e.target === lightbox) {
            lightbox.style.display = 'none';
        }
    });
	document.addEventListener('keydown', (e) => {
    if(e.key === 'Escape' && lightbox){
        lightbox.style.display = 'none';
    }
});
}

// Input Forms Submissions Processing Logic Simulators
const contactForm = document.getElementById('contactForm');
if (contactForm) {
    contactForm.addEventListener('submit', (e) => {
        e.preventDefault();
alert('Thank you! Your message has been sent successfully. We will contact you soon.');
        contactForm.reset();
    });
}

const enquiryForm = document.getElementById('enquiryForm');
if (enquiryForm) {
    enquiryForm.addEventListener('submit', (e) => {
        e.preventDefault();
        alert('Thank you! Your admission enquiry has been submitted successfully.');
        enquiryForm.reset();
    });
}
