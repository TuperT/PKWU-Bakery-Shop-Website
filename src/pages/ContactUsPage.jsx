import React from "react";
import PageBlock from "../components/PageBlock";
import NavBar from "../components/NavBar";
import ProductContactHeader from "../components/ProductContactHeader";
import FooterNavBar from "../components/FooterNavBar";

const ContactUsPage = () => {
  return (
    <section id="contact">
      <PageBlock />
      <NavBar />
      <ProductContactHeader pages="Contact-Us" />
      <FooterNavBar />
    </section>
  );
};

export default ContactUsPage;
