import React from "react";
import "./Contact.css";
import msg_icon from "../../assets/msg-icon.png";
import mail from "../../assets/mail.png";
import call from "../../assets/call.png";
import location from "../../assets/location.png";
import dark_arrow from "../../assets/dark_arrow.png";


function Contact() {

 const [result, setResult] = React.useState("");

  const onSubmit = async (event) => {
    event.preventDefault();
    setResult("Sending....");
    const formData = new FormData(event.target);

    formData.append("access_key", "236033cd-cfb3-4535-8029-0f178eb6c8fb");

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData
    });

    const data = await response.json();

    if (data.success) {
      setResult("Form Submitted Successfully");
      event.target.reset();
    } else {
      console.log("Error", data);
      setResult(data.message);
    }
  };




  return (
    <div className="Contact">
      <div className="Contact_col">
        <h3>Send us a message <img src={msg_icon} alt="" /></h3>
        <p>
          Feel free to reach out through contact form or find our contact
          information below. Your feedback, questions, and suggestions are
          important to us as we strive to provide exceptional service to our
          university community.
        </p>
        <ul>
          <li><img src={mail} alt="" />Redline Club@contact.com</li>
          <li><img src={call} alt="" />01552065122</li>
          <li><img src={location} alt="" />77 Massachusetts Ave, Cambridge MA 02139, United States</li>
        </ul>
      </div>
      <div className="Contact_col">
        <form onSubmit={onSubmit}>
            <label>Your Nmae</label>
            <input type="text" name="name" placeholder="Enter your name" required  />
            <label >Phone Number</label>
            <input type="tel" name="phone" placeholder="Enter your Phone Number" required  />
            <label >Your Mail</label>
            <input type="email" name="mail" placeholder="Enter Your Mail" required  />
            <label >Your Message</label>
            <textarea name="message" placeholder="Enter Your Text" rows={6} required ></textarea>
            <button type="submit" className="btn">Submit Now <img src={dark_arrow} alt="" /></button>
        </form>
        <span>{result}</span>
      </div>
    </div>
  );
}

export default Contact;
