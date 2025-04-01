document.addEventListener('DOMContentLoaded', function() {
    // Navbar functionality
    const header = document.getElementById('navbar');
    const hamburger = document.querySelector('.hamburger');
    const navLinks = document.querySelector('.nav-links');
    const dropdowns = document.querySelectorAll('.dropdown');
    
    if (header && hamburger && navLinks) {
        let lastScroll = 0;
        const navbarHeight = header.offsetHeight;

        // Navbar hide on scroll
        window.addEventListener('scroll', function() {
            const currentScroll = window.pageYOffset;
            
            if (currentScroll <= 0) {
                header.classList.remove('hide');
                return;
            }
            
            if (currentScroll > lastScroll && currentScroll > navbarHeight) {
                header.classList.add('hide');
            } else {
                header.classList.remove('hide');
            }
            
            lastScroll = currentScroll;
        });

        // Mobile menu toggle
        hamburger.addEventListener('click', function() {
            hamburger.classList.toggle('active');
            navLinks.classList.toggle('active');
        });

        // Dropdown functionality
        dropdowns.forEach(dropdown => {
            const toggle = dropdown.querySelector('.dropdown-toggle');
            
            if (toggle) {
                toggle.addEventListener('click', function(e) {
                    if (window.innerWidth <= 768) {
                        e.preventDefault();
                        dropdown.classList.toggle('active');
                        
                        dropdowns.forEach(otherDropdown => {
                            if (otherDropdown !== dropdown) {
                                otherDropdown.classList.remove('active');
                            }
                        });
                    }
                });
            }
        });

        // Close menu when clicking outside on mobile
        document.addEventListener('click', function(e) {
            if (window.innerWidth <= 768) {
                if (!e.target.closest('.navbar') && navLinks.classList.contains('active')) {
                    hamburger.classList.remove('active');
                    navLinks.classList.remove('active');
                    dropdowns.forEach(dropdown => {
                        dropdown.classList.remove('active');
                    });
                }
            }
        });
    }

    // Initialize Swiper if slider exists
    const sliderContainer = document.querySelector('.slider-container');
    if (sliderContainer) {
        const mySwiper = new Swiper('.slider-container', {
            loop: true,
            autoplay: {
                delay: 3000,
                disableOnInteraction: false,
            },
            effect: 'fade',
            fadeEffect: {
                crossFade: true
            },
        });
    }

    // Gallery functionality
    const galleryItems = document.querySelectorAll(".gallery-item");
    const fullscreenOverlay = document.getElementById("fullscreenOverlay");
    const zoomedImage = document.getElementById("zoomedImage");
    const closeOverlay = document.getElementById("closeOverlay");

    if (galleryItems.length && fullscreenOverlay && zoomedImage && closeOverlay) {
        // Add click event to each gallery item
        galleryItems.forEach((item) => {
            const img = item.querySelector("img");
            if (img) {
                item.addEventListener("click", () => {
                    // Set the source of the zoomed image
                    zoomedImage.src = img.src;
                    // Show the full-screen overlay
                    fullscreenOverlay.classList.add("active");
                });
            }
        });

        // Close the full-screen overlay
        closeOverlay.addEventListener("click", () => {
            fullscreenOverlay.classList.remove("active");
        });

        // Close the overlay when clicking outside the image
        fullscreenOverlay.addEventListener("click", (e) => {
            if (e.target === fullscreenOverlay) {
                fullscreenOverlay.classList.remove("active");
            }
        });
    }
    $(document).ready(function(){
        $('.more-blogs-carousel').owlCarousel({
          loop: true,
          margin: 30,
          nav: false, // We're using our own custom nav
          dots: false,
          responsive: {
            0: {
              items: 1,
              margin: 20
            },
            768: {
              items: 2,
              margin: 20
            },
            1024: {
              items: 3,
              margin: 30
            }
          }
        });
        
        // Custom navigation
        $('.owl-next').click(function() {
          $('.more-blogs-carousel').trigger('next.owl.carousel');
        });
        
        $('.owl-prev').click(function() {
          $('.more-blogs-carousel').trigger('prev.owl.carousel');
        });
      });
});