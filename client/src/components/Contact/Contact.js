import React, { useRef, useState } from "react";
import "./Contact.css";
import emailjs from "@emailjs/browser";
import { themeContext } from "../../context";
import { useContext } from "react";

const Contact = () => {
  const theme = useContext(themeContext);
  const darkMode = theme.state.darkMode;
  const form = useRef();

  const [done, setDone] = useState(false);

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_94wv35u",
        "template_1wych1j",
        form.current,
        "2HQS2TQS_MK9xWSjb"
      )
      .then(
        (result) => {
          console.log(result.text);
          setDone(true);
          setTimeout(() => {
            setDone(false);
          }, 1500);
        },
        (error) => {
          console.log(error.text);
        }
      );
  };

  return (
    <div className="contact-form" id="Contact">
      <div className="w-left">
        <div className="awesome">
          <span style={{ color: darkMode ? "white" : "" }}>Get in touch</span>
          <span>Contact me</span>
        </div>
      </div>

      <div className="c-right">
        <form ref={form} onSubmit={sendEmail}>
          <input
            type="text"
            name="user-name"
            className="user"
            placeholder="Name"
            required
          />
          <input
            type="email"
            name="user-email"
            className="user"
            placeholder="Email"
            required
          />
          <input
            type="text"
            name="user-number"
            className="user"
            placeholder="contact. no"
            maxLength={10}
            minLength={10}
          />
          <textarea
            name="message"
            className="user"
            placeholder="Message here"
          ></textarea>
          <input type="submit" value="Send" className="button" />
          <span className="done">{done && "Thanks for contacting me!"}</span>
        </form>
      </div>
    </div>
  );
};

export default Contact;
