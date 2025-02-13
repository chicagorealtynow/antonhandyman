import React from "react";
import { motion } from "framer-motion";

const Services = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { duration: 0.5, delay: 0.2 } }
  };

  const serviceVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.4, staggerChildren: 0.1 }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 10 },
    visible: { opacity: 1, y: 0 }
  };

  const services = [
    {
      title: "Doors & Walls",
      description:
        "Expert installation, repair, and customization of doors and walls for your home or office."
    },
    {
      title: "Cabinets & Shelving",
      description:
        "Custom cabinetry, shelving installation, and repairs to maximize storage and functionality."
    },
    {
      title: "Molding & Baseboards",
      description:
        "Professional installation and repair of molding and baseboards to enhance interior aesthetics."
    },
    {
      title: "Flooring",
      description:
        "Quality flooring installation and repairs, including hardwood, laminate, and tile options."
    },
    {
      title: "Plumbing",
      description:
        "Reliable plumbing services, from minor repairs to fixture installations and replacements."
    },
    {
      title: "Lighting",
      description:
        "Installation and replacement of lighting fixtures, switches, and wiring for a well-lit space."
    },
    {
      title: "Wall Hangs & Mounting",
      description:
        "Secure mounting of TVs, artwork, mirrors, and other wall décor with precision."
    },
    {
      title: "Furniture Assembly",
      description:
        "Professional assembly of furniture, ensuring stability and durability for all your pieces."
    }
  ];

  return (
    <motion.div
      variants={containerVariants}
      initial="hidden"
      animate="visible"
      className="container mx-auto px-4 py-20"
    >
      <h2 className="text-3xl font-bold mb-8 text-center text-white">
        Our Services
      </h2>
      <motion.div
        variants={serviceVariants}
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
      >
        {services.map((service, index) =>
          <motion.div
            variants={itemVariants}
            key={index}
            className="bg-gray-800 p-6 rounded-md shadow-md"
          >
            <h3 className="text-xl font-semibold mb-2 text-white">
              {service.title}
            </h3>
            <p className="text-gray-300">
              {service.description}
            </p>
          </motion.div>
        )}
      </motion.div>
    </motion.div>
  );
};

export default Services;
