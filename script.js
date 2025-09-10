

function toggleMenu() {
    const menu = document.querySelector(".menu-links");
    const icon = document.querySelector(".hamburger-icon");
    menu.classList.toggle("open");
    icon.classList.toggle("open");
}
   

// ...existing code...

document.addEventListener('DOMContentLoaded', function() {
    const outsideWork = document.querySelector('.outside-work-section');
    if (!outsideWork) return;

    // Intersection Observer for scroll-triggered animation
    const observer = new IntersectionObserver(
        (entries, observer) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    outsideWork.classList.add('animated');
                    observer.unobserve(outsideWork); // Animate only once
                }
            });
        },
        { threshold: 0.3 }
    );

    observer.observe(outsideWork);

    // Optionally, trigger animation on load if already in view
    if (window.scrollY === 0) {
        setTimeout(() => {
            if (outsideWork.getBoundingClientRect().top < window.innerHeight) {
                outsideWork.classList.add('animated');
            }
        }, 200);
    }
});

// ...existing code...


// Toggle gallery expansion
function toggleGallery() {
    const gallery = document.querySelector('.drawing-carousel');
    const button = document.querySelector('.show-more-btn');
    
    if (gallery.classList.contains('collapsed')) {
        gallery.classList.remove('collapsed');
        button.textContent = 'Show Less';
    } else {
        gallery.classList.add('collapsed');
        button.textContent = 'Show More';
        // Scroll to drawing section when collapsing
        document.getElementById('drawing-hobby').scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
}

// Jump to top functionality
window.addEventListener('scroll', function() {
    const jumpButton = document.querySelector('.jump-to-top');
    if (window.scrollY > 300) {
        jumpButton.classList.add('visible');
    } else {
        jumpButton.classList.remove('visible');
    }
});

function scrollToTop() {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
}

// Optional: Click on image to view larger (modal)
document.querySelectorAll('.drawing-carousel img').forEach(img => {
    img.addEventListener('click', function() {
        // You can implement a modal view here if desired
        console.log('Image clicked:', this.alt);
    });
});


// ...existing code...

document.addEventListener('DOMContentLoaded', function() {
    // ...existing code...

    // Drawing carousel modal navigation
    const drawingImages = Array.from(document.querySelectorAll('.drawing-carousel img'));
    const modal = document.getElementById('imageModal');
    const modalImg = document.getElementById('modalImage');
    let currentModalIndex = -1;

    // Open modal and set current index
    drawingImages.forEach((img, idx) => {
        img.addEventListener('click', function() {
            openImageModal(this.src, this.alt);
            currentModalIndex = idx;
        });
    });

    // Keyboard navigation for modal
    document.addEventListener('keydown', function(e) {
        if (!modal.classList.contains('active')) return;

        if (e.key === 'ArrowLeft') {
            // Previous image
            if (currentModalIndex > 0) {
                currentModalIndex--;
                const prevImg = drawingImages[currentModalIndex];
                openImageModal(prevImg.src, prevImg.alt);
            }
        } else if (e.key === 'ArrowRight') {
            // Next image
            if (currentModalIndex < drawingImages.length - 1) {
                currentModalIndex++;
                const nextImg = drawingImages[currentModalIndex];
                openImageModal(nextImg.src, nextImg.alt);
            }
        } else if (e.key === 'Escape') {
            closeImageModal();
        }
    });

    // Close modal on click outside image
    modal.addEventListener('click', function(e) {
        if (e.target === modal) {
            closeImageModal();
        }
    });

    // ...existing code...
});

// ...existing code...



// Image Modal functionality
function openImageModal(imageSrc, imageAlt) {
    const modal = document.getElementById('imageModal');
    const modalImg = document.getElementById('modalImage');
    
    modal.classList.add('active');
    modalImg.src = imageSrc;
    modalImg.alt = imageAlt;
    
    // Prevent body scroll when modal is open
    document.body.style.overflow = 'hidden';
}

function closeImageModal() {
    const modal = document.getElementById('imageModal');
    modal.classList.remove('active');
    
    // Restore body scroll
    document.body.style.overflow = 'auto';
}

// Initialize click handlers for gallery images
document.addEventListener('DOMContentLoaded', function() {
    // Add click event to all drawing gallery images
    const galleryImages = document.querySelectorAll('.drawing-carousel img');
    
    galleryImages.forEach(img => {
        img.addEventListener('click', function() {
            openImageModal(this.src, this.alt);
        });
    });
    
    // Close modal when clicking outside the image
    const modal = document.getElementById('imageModal');
    modal.addEventListener('click', function(e) {
        // Only close if clicking on the backdrop, not the image itself
        if (e.target === modal) {
            closeImageModal();
        }
    });
    
    // Close modal with Escape key
    document.addEventListener('keydown', function(e) {
        if (e.key === 'Escape') {
            closeImageModal();
        }
    });
});