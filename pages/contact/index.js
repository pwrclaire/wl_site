import React, { useState, useRef } from "react";
import emailjs from "@emailjs/browser";
import banner from "../../src/components/banner";
import style from "./style.module.css";

export default function ContactUs() {
  const form = useRef();
  const [isSent, setIsSent] = useState(false);

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_bdffdem",
        "template_9zl7qsw",
        form.current,
        "user_KIP4sbmL9itetpkyz3R88"
      )
      .then(
        (result) => {
          setIsSent(true);
          console.log(result);
        },
        (error) => {
          console.log(error.text);
        }
      );
  };

  return (
    <div>
      {banner()}
      {isSent ? (
        <div className={style.thankYouMessage}>
          <h2>Thank You!</h2>
          <p>
            Your message has been sent successfully. We will get back to you
            shortly.
          </p>
        </div>
      ) : (
        <form ref={form} onSubmit={sendEmail} className={style.form}>
          <label>Name</label>
          <input type="text" name="user_name" />
          <label>Email</label>
          <input type="email" name="user_email" />
          <label>Message</label>
          <textarea name="message" />
          <input type="submit" value="Send" />
        </form>
      )}
    </div>
  );
}
