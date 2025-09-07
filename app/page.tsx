'use client'
import Navbar from "./components/navbar"
import Header from "./components/header"
import About from "./components/about";
import Services from "./components/services";
import Sniffer from "./components/STS2sniffer";
import Contact from "./components/contact";
import Footer from "./components/footer";

export default function Home() {
  return (
    <>
    <Navbar />
    <Header />
    <About />
    <Services />
    <Sniffer />
    <Contact />
    <Footer />
    </>
  );
}
