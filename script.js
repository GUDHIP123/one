// Modal functionality
const modal = document.getElementById('bookingModal');
const btn = document.getElementById('bookNowBtn');
const span = document.getElementsByClassName('close-modal')[0];
        
btn.onclick = function() {
    modal.style.display = 'flex';
}
        
span.onclick = function() {
    modal.style.display = 'none';
}
        
window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = 'none';
    }
}
        
// Form submission
document.getElementById('bookingForm').addEventListener('submit', function(e) {
    e.preventDefault();
    alert('Thank you for your booking! You will be redirected to the payment page.');
    modal.style.display = 'none';
});
        
// Smooth scrolling for navigation
document.querySelectorAll('nav a').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
                
        const targetId = this.getAttribute('href');
        const targetElement = document.querySelector(targetId);
                
        window.scrollTo({
            top: targetElement.offsetTop - 100,
            behavior: 'smooth'
        });
    });
});
        
// Set minimum date for booking to today
const today = new Date().toISOString().split('T')[0];
document.getElementById('visitDate').setAttribute('min', today);
