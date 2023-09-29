// JavaScript to handle form submission
document.addEventListener('DOMContentLoaded', function () {
    const contactForm = document.getElementById('contactForm');

    // Add a submit event listener to the form
    contactForm.addEventListener('submit', function (event) {
        event.preventDefault();

        // Get form input values
        const nameInput = document.getElementById('name');
        const emailInput = document.getElementById('email');
        const messageInput = document.getElementById('message');

        // Perform form validation (e.g., check if email is valid)

        // Send form data to a server (you can implement this part)
        // Example: Use the Fetch API to send a POST request
        fetch('/submit', {
            method: 'POST',
            body: JSON.stringify({
                name: nameInput.value,
                email: emailInput.value,
                message: messageInput.value
            }),
            headers: {
                'Content-Type': 'application/json'
            }
        })
        .then(response => {
            if (response.ok) {
                // Show a success message
                alert('Form submitted successfully!');
                contactForm.reset();
            } else {
                // Handle errors (e.g., display an error message)
                alert('Error submitting the form. Please try again later.');
            }
        })
        .catch(error => {
            console.error('Error:', error);
        });
    });
});

// JavaScript for the image gallery
document.addEventListener('DOMContentLoaded', function () {
    const galleryImages = document.querySelectorAll('.gallery-image');
    const modal = document.getElementById('galleryModal');
    const modalImage = document.getElementById('modalImage');
    const modalCaption = document.getElementById('modalCaption');

    galleryImages.forEach(function (image) {
        image.addEventListener('click', function () {
            modal.style.display = 'block';
            modalImage.src = this.src;
            modalCaption.textContent = this.alt;
        });
    });

    modal.addEventListener('click', function () {
        modal.style.display = 'none';
    });
});

// JavaScript for a client testimonial slider
document.addEventListener('DOMContentLoaded', function () {
    const testimonials = document.querySelectorAll('.testimonial');
    const prevButton = document.getElementById('prevTestimonial');
    const nextButton = document.getElementById('nextTestimonial');
    let currentTestimonial = 0;

    function showTestimonial(index) {
        testimonials.forEach(function (testimonial) {
            testimonial.style.display = 'none';
        });
        testimonials[index].style.display = 'block';
    }

    prevButton.addEventListener('click', function () {
        currentTestimonial = (currentTestimonial - 1 + testimonials.length) % testimonials.length;
        showTestimonial(currentTestimonial);
    });

    nextButton.addEventListener('click', function () {
        currentTestimonial = (currentTestimonial + 1) % testimonials.length;
        showTestimonial(currentTestimonial);
    });

    // Show the initial testimonial
    showTestimonial(currentTestimonial);
});

// Example: Adding a new functionality
document.addEventListener('DOMContentLoaded', function () {
    const additionalElement = document.getElementById('additionalElement');

    // Add an event listener for a specific action
    additionalElement.addEventListener('click', function () {
        // Perform an action when additionalElement is clicked
        console.log('Additional element clicked!');
    });
});
