<!-- Add this script tag just before the closing </body> tag -->
<script>
    document.addEventListener("DOMContentLoaded", function () {
        const contactForm = document.getElementById("contact-form");

        contactForm.addEventListener("submit", function (event) {
            event.preventDefault();

            const name = document.getElementById("name").value;
            const email = document.getElementById("email").value;
            const message = document.getElementById("message").value;

            // Replace this with your desired functionality (e.g., sending the data to a server)
            alert(`Form submitted:\nName: ${name}\nEmail: ${email}\nMessage: ${message}`);

            // Clear the form fields after submission
            contactForm.reset();
        });
    });
</script>
