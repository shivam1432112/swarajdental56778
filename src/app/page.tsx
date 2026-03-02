import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import Services from '@/components/Services';
import ClinicGallery from '@/components/ClinicGallery';
import About from '@/components/About';
import WhyChooseUs from '@/components/WhyChooseUs';
import Testimonials from '@/components/Testimonials';
import AppointmentForm from '@/components/AppointmentForm';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';

export default function Home() {
  return (
    <main className="min-h-screen bg-white">
      <Navbar />
      <Hero />
      <Services />
      <ClinicGallery />
      <About />
      <WhyChooseUs />
      <Testimonials />
      <AppointmentForm />
      <Contact />
      <Footer />
    </main>
  );
}
