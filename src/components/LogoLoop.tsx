import { motion } from 'framer-motion';

const partners = [
  { name: "Autodesk", width: "w-32" },
  { name: "Rhino3D", width: "w-28" },
  { name: "SketchUp", width: "w-32" },
  { name: "ArchDaily", width: "w-36" },
  { name: "Dezeen", width: "w-28" },
  { name: "Revit", width: "w-24" },
  { name: "V-Ray", width: "w-24" },
  { name: "Lumion", width: "w-28" },
];

const LogoLoop = () => {
  // Duplicate the array for seamless loop
  const duplicatedPartners = [...partners, ...partners];

  return (
    <section className="relative overflow-hidden bg-secondary py-16">
      <div className="mb-8 text-center">
        <h3 className="text-sm font-semibold uppercase tracking-widest text-muted-foreground">
          Trusted Partners & Tools
        </h3>
      </div>

      <div className="relative">
        {/* Gradient overlays */}
        <div className="pointer-events-none absolute left-0 top-0 z-10 h-full w-32 bg-gradient-to-r from-secondary to-transparent" />
        <div className="pointer-events-none absolute right-0 top-0 z-10 h-full w-32 bg-gradient-to-l from-secondary to-transparent" />

        {/* Logo carousel */}
        <motion.div
          className="flex gap-16"
          animate={{
            x: [0, -1920],
          }}
          transition={{
            x: {
              repeat: Infinity,
              repeatType: "loop",
              duration: 30,
              ease: "linear",
            },
          }}
        >
          {duplicatedPartners.map((partner, index) => (
            <div
              key={`${partner.name}-${index}`}
              className="group flex shrink-0 items-center justify-center"
            >
              <div className={`${partner.width} flex items-center justify-center`}>
                <div className="relative h-16 w-full transition-all duration-300 group-hover:scale-110">
                  {/* Placeholder logo - replace with actual logos */}
                  <div className="flex h-full items-center justify-center rounded-lg bg-background/50 px-4 backdrop-blur-sm">
                    <span className="text-sm font-bold text-muted-foreground opacity-60 transition-opacity group-hover:opacity-100">
                      {partner.name}
                    </span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default LogoLoop;
