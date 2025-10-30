// IMAGE SLIDER
const slides = document.querySelectorAll(
    ".images .image-container .image-card img" 
);

let slideIndex = 0;
let intervalId = null;

let infoBoxHeading = document.querySelector(".js-text-change");
let headingOne = "Dental Service - That you can trust!";
let headingTwo = "Complete Dental Solution";

document.addEventListener("DOMContentLoaded", initializeSlider); //Display the image

function initializeSlider() {
    if (slides.length > 0) {
        slides[slideIndex].classList.add("displaySlide");
        intervalId = setInterval(nextSlide, 5000);

        if (infoBoxHeading) {
            infoBoxHeading.innerHTML =
                infoBoxHeading.innerHTML.trim() === headingOne
                    ? headingTwo
                    : headingOne;
        }
    }
}

function showSlide(index) {
    if (index >= slides.length) {
        slideIndex = 0;
    } else if (index < 0) {
        slideIndex = slides.length - 1;
    }

    slides.forEach((slide) => {
        slide.classList.remove("displaySlide");
    });

    slides[slideIndex].classList.add("displaySlide");
}

function prevSlide() {
    slideIndex--;
    showSlide(slideIndex);

    if (infoBoxHeading) {
        infoBoxHeading.innerHTML =
            infoBoxHeading.innerHTML.trim() === headingOne
                ? headingTwo
                : headingOne;
    }
}

function nextSlide() {
    slideIndex++;
    showSlide(slideIndex);

    if (infoBoxHeading) {
        infoBoxHeading.innerHTML =
            infoBoxHeading.innerHTML.trim() === headingOne
                ? headingTwo
                : headingOne;
    }
}

document.addEventListener("DOMContentLoaded", () => {
    const cards = document.querySelectorAll(".card");
    const cardsContainer = document.querySelector(".cards");

    const observer = new IntersectionObserver(
        (entries) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    if (entry.target === cardsContainer) {
                        // Reveal cards sequentially
                        cards.forEach((card, index) => {
                            setTimeout(() => {
                                card.classList.add("revealCards");
                            }, index * 200);
                        });
                        // observer.unobserve(cardsContainer);
                    }
                } else {
                    cards.forEach((card, index) => {
                        setTimeout(() => {
                            card.classList.remove("revealCards");
                        });
                    });
                }
            });
        },
        { threshold: 0.3 }
    );

    // Observe each target
    observer.observe(cardsContainer);
});

// DIGITAL CLOCk
// function updateClock(){
//     const now = new Date();
//     let hours = now.getHours();
//     let minutes = now.getMinutes();
//     let seconds = now.getSeconds();
//     let ampm = "AM";

//     if(hours >= 12){
//         ampm = "PM";

//         if(hours > 12) hours -= 12;
//     }

//     if(hours === 0){
//         hours = 12
//     }

//     hours = hours < 10 ? "0" + hours : hours;
//     minutes = minutes < 10 ? "0" + minutes : minutes;
//     seconds = seconds < 10 ? "0" + seconds : seconds;

//     document.getElementById('hours').textContent = hours;
//     document.getElementById('minutes').textContent = minutes;
//     document.getElementById('seconds').textContent = seconds;
//     document.getElementById('ampm').textContent = ampm;
// }

// updateClock()
// setInterval(updateClock, 1000)

// function setClock() {
//     const now = new Date();
//     const seconds = now.getSeconds();
//     const minutes = now.getMinutes();
//     const hours = now.getHours();

//     const secondDeg = ((seconds / 60) * 360) + 90;
//     const minuteDeg = ((minutes / 60) * 360) + ((seconds / 60) * 6) + 90;
//     const hourDeg = ((hours / 12) * 360) + ((minutes / 60) * 30) + 90;

//     document.querySelector('.second-hand').style.transform = `translateX(-50%) rotate(${secondDeg}deg)`;
//     document.querySelector('.minute-hand').style.transform = `translateX(-50%) rotate(${minuteDeg}deg)`;
//     document.querySelector('.hour-hand').style.transform = `translateX(-50%) rotate(${hourDeg}deg)`;
// }

// setInterval(setClock, 1000)
// setClock();

document.addEventListener("DOMContentLoaded", () => {
    const sections = document.querySelectorAll(
        ".about, .doctor, .dental-problems"
    );

    const TextsToAnime = document.querySelectorAll(
      ".features-heading, .appointment-heading, .review-heading"
    );

    const observer = new IntersectionObserver(
        (entries) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    // Add show class to parent section (for opacity)
                    entry.target.classList.add("show");

                    // Find and animate the left and right child element with a delay
                    const Elements = entry.target.querySelector(
                        ".about-left, .doctor-right, .dental-problems-left"
                    );
                    if (Elements) {
                        setTimeout(() => {
                            Elements.classList.add("show");
                        }, 300); // 300ms delay for staggered effect
                    }
                } else {
                    // Remove classes when out of view
                    entry.target.classList.remove("show");
                    const Elements = entry.target.querySelector(
                        ".about-left, .doctor-right, .dental-problems-left"
                    );
                    if (Elements) {
                        Elements.classList.remove("show");
                    }
                }
            });
        },
        {
            threshold: 0.1,
            rootMargin: "0px 0px -50px 0px",
        }
    );

    sections.forEach((element) => {
        observer.observe(element);
    });

    TextsToAnime.forEach((element) => {
      observer.observe(element);
    });
});


sidebarToggleBtn = document.getElementById('sidebar-toggle-btn');
NavBar = document.querySelector('.navbar')


sidebarToggleBtn.addEventListener('click', function(){
    NavBar.classList.toggle('show');
    sidebarToggleBtn.classList.toggle('rotate');
});

toggleSidebar()


// REVIEW Section Animatio
// document.addEventListener('DOMContentLoaded', () => {
//     const reviewContainer = document.querySelector('.reviews-container'); // Added dot
//     const reviews = document.querySelectorAll('.review-card'); // Added dot

//     const reviewCard_Observer = new IntersectionObserver((entries) => {
//         entries.forEach(entry => {
//             if(entry.isIntersecting){
//                 // Add reveal classes with staggered animation
//                 reviews.forEach((review, index) => {
//                     setTimeout(() => {
//                         review.classList.add('revealReviews');
//                     }, index * 200);
//                 });
//             } else {
//                 // Remove classes when out of view (optional)
//                 reviews.forEach((review) => {
//                     review.classList.remove('revealReviews');
//                 });
//             }
//         });
//     }, {threshold: 0.3});

//     reviewCard_Observer.observe(reviewContainer);
// });

