document.addEventListener('DOMContentLoaded', function() {
    const headlines = document.querySelectorAll('.headline');
    let currentIndex = 0; 

    function setActiveHeadline(index) {
        headlines.forEach((headline, i) => {
            if (i === index) {
                headline.classList.remove('exit');
                headline.classList.add('active');
            } else {
                headline.classList.remove('active');
            }
        });
    }

    setActiveHeadline(currentIndex); 

    function rotateHeadlines() {
        headlines[currentIndex].classList.remove('active');
        headlines[currentIndex].classList.add('exit');

        currentIndex = (currentIndex + 1) % headlines.length;

        setTimeout(() => {
            headlines.forEach(headline => {
                headline.classList.remove('exit');
            });
            setActiveHeadline(currentIndex);
        }, 500);
    }

    setTimeout(() => {
        setInterval(rotateHeadlines, 2500); 
    }, 3000); 
});

const backToTopButton = document.querySelector('.back-to-top');

window.addEventListener('scroll', () => {
    if (window.pageYOffset > 300) {
        backToTopButton.classList.add('visible');
    } else {
        backToTopButton.classList.remove('visible');
    }
});

backToTopButton.addEventListener('click', () => {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
});