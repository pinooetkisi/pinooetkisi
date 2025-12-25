import Header from "@/components/Header";
import Hero from "@/components/Hero";
import WhatIs from "@/components/WhatIs";
import StemOpportunities from "@/components/StemOpportunities";
import Stakeholders from "@/components/Stakeholders";
import Services from "@/components/Services";
import LMS from "@/components/LMS";
import Sponsorship from "@/components/Sponsorship";
import HowItWorks from "@/components/HowItWorks";
import Impact from "@/components/Impact";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <WhatIs />
        <StemOpportunities />
        <Stakeholders />
        <Services />
        <LMS />
        <Sponsorship />
        <HowItWorks />
        <Impact />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
