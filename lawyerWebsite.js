document.addEventListener("DOMContentLoaded", function() {
    const navLinks = document.querySelectorAll("#list li a");

    navLinks.forEach(function(link) {
        link.addEventListener("click", function(event) {
            // Remove the 'active' class from all links
            navLinks.forEach(function(item) {
                item.classList.remove("active");
            });

            // Add the 'active' class to the clicked link
            event.target.classList.add("active");
        });
    });
});
// JavaScript to toggle the "About Me" section
document.addEventListener('DOMContentLoaded', function () {
    const toggleButton = document.getElementById('toggleButton');
    const aboutMeSection = document.getElementById('aboutMeSection');

    // Add a click event listener to the button
    toggleButton.addEventListener('click', function () {
        // Toggle the display property of the "About Me" section
        if (aboutMeSection.style.display === 'none' || aboutMeSection.style.display === '') {
            aboutMeSection.style.display = 'block';
        } else {
            aboutMeSection.style.display = 'none';
        }
    });
});

