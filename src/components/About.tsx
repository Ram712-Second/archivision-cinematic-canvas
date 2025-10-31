import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';

const About = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const teamMembers = [
    { name: "Sarah Chen", role: "Principal Architect", initials: "SC" },
    { name: "Marcus Reid", role: "Design Director", initials: "MR" },
    { name: "Elena Kovač", role: "Senior Architect", initials: "EK" },
    { name: "James Wu", role: "Project Manager", initials: "JW" },
  ];

  return (
    <section ref={ref} className="relative bg-background py-24 px-4 md:px-8 lg:px-16">
      <div className="mx-auto max-w-7xl">
        <div className="grid gap-16 lg:grid-cols-2 lg:gap-24 items-center">
          {/* Text Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8 }}
          >
            <h2 className="mb-6 text-5xl font-bold text-foreground md:text-6xl">
              About Us
            </h2>
            <div className="space-y-6 text-lg text-muted-foreground leading-relaxed">
              <p>
                ARCHIVISION is a forward-thinking architecture studio dedicated to crafting 
                spaces that harmonize aesthetics with functionality. We believe that great 
                architecture transcends mere structure—it tells a story, shapes experiences, 
                and inspires human connection.
              </p>
              <p>
                Our approach combines cutting-edge design technology with timeless architectural 
                principles. From residential masterpieces to commercial landmarks, we create 
                environments that are both visually stunning and deeply practical.
              </p>
              <p className="font-medium text-foreground">
                Every project is an opportunity to push boundaries and redefine what's possible.
              </p>
            </div>
          </motion.div>

          {/* Image */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative aspect-[4/3] overflow-hidden rounded-lg bg-secondary"
          >
            <div className="absolute inset-0 bg-gradient-to-br from-secondary to-primary opacity-80" />
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="text-center">
                <div className="text-8xl font-bold text-accent opacity-20">AV</div>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Team Grid */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="mt-24"
        >
          <h3 className="mb-12 text-3xl font-bold text-center text-foreground">Our Team</h3>
          <div className="grid grid-cols-2 gap-6 md:grid-cols-4 md:gap-8">
            {teamMembers.map((member, index) => (
              <motion.div
                key={member.name}
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: 0.5 + index * 0.1 }}
                className="group relative aspect-square overflow-hidden rounded-lg bg-secondary"
              >
                <div className="absolute inset-0 flex items-center justify-center bg-gradient-to-br from-secondary to-primary grayscale transition-all duration-500 group-hover:grayscale-0 group-hover:scale-105">
                  <div className="text-center">
                    <div className="text-4xl font-bold text-accent opacity-40 group-hover:opacity-60 transition-opacity">
                      {member.initials}
                    </div>
                  </div>
                </div>
                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-4 translate-y-2 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300">
                  <p className="text-sm font-semibold text-white">{member.name}</p>
                  <p className="text-xs text-white/80">{member.role}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
