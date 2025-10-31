import { motion } from 'framer-motion';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative bg-primary py-12 px-4 text-primary-foreground md:px-8 lg:px-16">
      <div className="mx-auto max-w-7xl">
        <div className="flex flex-col items-center justify-between gap-6 md:flex-row">
          {/* Logo/Brand */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <h3 className="text-2xl font-bold tracking-tight">ARCHIVISION</h3>
          </motion.div>

          {/* Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            viewport={{ once: true }}
            className="flex flex-wrap justify-center gap-6 text-sm"
          >
            <a href="#" className="transition-colors hover:text-accent">
              About
            </a>
            <a href="#" className="transition-colors hover:text-accent">
              Projects
            </a>
            <a href="#" className="transition-colors hover:text-accent">
              Services
            </a>
            <a href="#" className="transition-colors hover:text-accent">
              Contact
            </a>
            <a href="#" className="transition-colors hover:text-accent">
              Careers
            </a>
          </motion.div>

          {/* Copyright */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
            className="text-sm text-primary-foreground/80"
          >
            © {currentYear} ARCHIVISION
          </motion.div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
