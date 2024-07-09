let currentSlide = 0;
function showSlide(index) {
    const slides = document.querySelectorAll('.slide');
    const totalSlides = slides.length;
    if (index >= totalSlides) {
        currentSlide = 0;
    } else if (index < 0) {
        currentSlide = totalSlides - 1;
    } else {
        currentSlide = index;
    }
    const offset = -currentSlide * 100; 
    document.querySelector('.image-wrapper').style.transform = `translateX(${offset}%)`;
}
function prevSlide() {
    showSlide(currentSlide - 1);
}
function nextSlide() {
    showSlide(currentSlide + 1);
}
function filterLocations() {
    const selectedLocation = document.getElementById('location-select').value;
    const locations = document.querySelectorAll('.location');
    locations.forEach(location => {
        if (selectedLocation === '' || location.getAttribute('data-location') === selectedLocation) {
            location.style.display = 'block';
        } else {
            location.style.display = 'none';
        }
    });
}
showSlide(currentSlide);
