import Navbar from "@/components/Navbar/Navbar";
import Hero from "@/components/Hero/Hero";
import About from "@/components/About/About";
import Services from "@/components/Services/Services";
import Gallery from "@/components/Gallery/Gallery";
import Testimonials from "@/components/Testimonials/Testimonials";
import Appointment from "@/components/Appointment/Appointment";
import Awards from "@/components/Awards/Awards";
import Footer from "@/components/Footer/Footer";
import MobileBar from "@/components/MobileBar/MobileBar";
import Cursor from "@/components/Cursor/Cursor";

export default function Home() {
  return (
    <main className="bg-white overflow-hidden">

      <Cursor />
     <Navbar />

<Hero />

<MobileBar />

<About />

<Services />

<Awards />


<Testimonials />

<Gallery />

<Appointment />

<Footer />

    </main>
  );
}