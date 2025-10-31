import Hero from '@/components/Hero';
import About from '@/components/About';
import Projects from '@/components/Projects';
import LogoLoop from '@/components/LogoLoop';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';

const Index = () => {
  return (
    <main className="min-h-screen">
      <Hero />
      <About />
      <Projects />
      <LogoLoop />
      <Contact />
      <Footer />
    </main>
  );
};

export default Index;
