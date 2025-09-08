import React, { useRef } from "react";
import emailjs from "emailjs-com";
import "../styles/ContactForm.css";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const ContactForm = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_0gbprgl",
        "template_sx2ouub",
        form.current,
        "DCK8MZ81bUA1uluwy"
      )
      .then(
        (result) => {
          console.log("Email sent successfully!", result.text);
          toast.success("✅ Email sent successfully!", {
            position: "bottom-right",
            autoClose: 3000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
          });
          form.current.reset();
        },
        (error) => {
          console.log("Failed to send email:", error.text);
          toast.error("❌ Failed to send email.", {
            position: "bottom-right",
            autoClose: 3000,
          });
        }
      );
  };

  return (
    <div className="contact-container">
      <h2>Contact Us</h2>
      <form ref={form} onSubmit={sendEmail}>
        <div>
          <label htmlFor="user_name">Name</label>
          <input type="text" id="user_name" name="user_name" required />
        </div>

        <div>
          <label htmlFor="user_email">Email</label>
          <input type="email" id="user_email" name="user_email" required />
        </div>

        <div>
          <label htmlFor="subject">Subject</label>
          <input type="text" id="subject" name="subject" required />
        </div>

        <div>
          <label htmlFor="message">Message</label>
          <textarea id="message" name="message" rows="5" required />
        </div>

        <button type="submit">Send</button>
      </form>

      {/* Toast container */}
      <ToastContainer />
    </div>
  );
};

export default ContactForm;