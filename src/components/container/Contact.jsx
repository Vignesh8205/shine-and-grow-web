import React from "react";
import { motion } from "framer-motion";
import ContactForm from "../contactform/contactform";
import Map from "../mapcomponent/Map";
const Contact = () => {
  return (
    <div className="section" id="contact">
      <Map />

      <div id="enroll">
        <br />
        <ContactForm />
      </div>

    </div>
  );
};

export default Contact;
