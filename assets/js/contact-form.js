// Initialize EmailJS
(function () {
  emailjs.init("wPFNGxX1EpqzCHQTW"); // Replace with your actual Public Key from EmailJS
})();

// Handle form submission
document
  .getElementById("contact-form")
  .addEventListener("submit", function (event) {
    event.preventDefault(); // Prevent the default form submission

    // Get form values
    const name = document.getElementById("user_name").value;
    const email = document.getElementById("user_email").value;
    const message = document.getElementById("user_message").value;

    // Send the email using EmailJS
    emailjs
      .send("service_ikrbcps", "template_bsyhg8v", {
        user_name: name,
        user_email: email,
        message: message,
      })
      .then(
        function (response) {
          alert("Message sent successfully!");
          console.log("SUCCESS!", response.status, response.text);
          document.getElementById("contact-form").reset(); // Reset form after sending
        },
        function (error) {
          alert("Failed to send message. Please try again.");
          console.log("FAILED...", error);
        }
      );
  });
