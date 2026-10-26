
function showContactMessage() {
    const message = document.getElementById("contact-message");

    message.textContent =
        "Thanks for stopping by! Keep learning, keep creating. 🚀";
}


// Reveal sections as they enter the screen
document.addEventListener("DOMContentLoaded", function () {

    const sections = document.querySelectorAll(".section");

    if ("IntersectionObserver" in window) {

        const observer = new IntersectionObserver(
            function (entries) {
                entries.forEach(function (entry) {
                    if (entry.isIntersecting) {
                        entry.target.classList.add("visible");
                        observer.unobserve(entry.target);
                    }
                });
            },
            {
                threshold: 0.1
            }
        );

        sections.forEach(function (section) {
            observer.observe(section);
        });
    }

});
