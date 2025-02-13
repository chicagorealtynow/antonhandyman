import React from "react";
import { motion } from "framer-motion";

const About = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { duration: 0.5, delay: 0.2 } }
  };

  const headingVariants = {
    hidden: { opacity: 0, y: -20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5, delay: 0.4 } }
  };

  const paragraphVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5, delay: 0.6 } }
  };

  return (
    <motion.div
      variants={containerVariants}
      initial="hidden"
      animate="visible"
      className="container mx-auto px-4 py-20"
    >
      <motion.h2
        variants={headingVariants}
        className="text-3xl font-bold mb-8 text-center text-white"
      >
        About Anton Handyman Services
      </motion.h2>
      <motion.div
        variants={paragraphVariants}
        className="bg-gray-800 p-8 rounded-md shadow-md"
      >
        {/* <p className="text-gray-300 mb-4">
          Anton Handyman Services is a team of experienced and dedicated handymen committed to providing top-notch home repair and maintenance services. We pride ourselves on our professionalism, reliability, and attention to detail.
        </p>
        <p className="text-gray-300 mb-4">
          Our team consists of skilled professionals with expertise in plumbing, electrical work, carpentry, painting,doors, walls, cabinets, shelving, molding, flooring, plumbing, lighting, wall hangings, furniture assembly and general repairs. We are fully equipped to handle a wide range of projects, big or small.
        </p>
        <p className="text-gray-300">
          We are passionate about helping homeowners and renters maintain their properties in excellent condition. Contact us today to experience the VGroup difference!
        </p> */}

        <div className="max-w-3xl mx-auto p-6 bg-gray-900 text-white rounded-2xl shadow-lg">
          <h2 className=" text-3xl font-bold text-teal-400 mb-6 text-center" />
          <p className="text-gray-400 mb-4">
            Anton Handyman Services is composed of highly skilled professionals
            specializing in plumbing, electrical work, carpentry, painting,
            doors, walls, cabinets, shelving, molding, flooring, lighting, wall
            hangings, furniture assembly, and general repairs. With the
            expertise and equipment to manage projects of all sizes, we are
            committed to delivering high-quality workmanship and exceptional
            service.
          </p>

          <h3 className="text-2xl font-semibold text-orange-400 mb-4">
            Our Focus Areas:
          </h3>

          <ul className="space-y-4">
            <li className="text-gray-400 mb-4">
              <span className="text-red-400 font-semibold">
                1. Doors –
              </span>{" "}
              Installation, repair, and customization of interior and exterior
              doors for enhanced security and style.
            </li>
            <li className="text-gray-400 mb-4">
              <span className="text-red-400 font-semibold">
                2. Walls –
              </span>{" "}
              Drywall installation, repairs, and painting to refresh and enhance
              your space.
            </li>
            <li className="text-gray-400 mb-4">
              <span className="text-red-400 font-semibold">
                3. Cabinets –
              </span>{" "}
              Custom cabinetry, repairs, and refinishing for kitchens,
              bathrooms, and storage solutions.
            </li>
            <li className="text-gray-400 mb-4">
              <span className="text-red-400 font-semibold">
                4. Shelving –
              </span>{" "}
              Custom shelving solutions for organization, display, and space
              optimization.
            </li>
            <li className="text-gray-400 mb-4">
              <span className="text-red-400 font-semibold">
                5. Molding & Baseboards –
              </span>{" "}
              Installation and refinishing of crown molding, baseboards, and
              trim for a polished look.
            </li>
            <li className="text-gray-400 mb-4">
              <span className="text-red-400 font-semibold">
                6. Flooring –
              </span>{" "}
              Installation and repair of hardwood, tile, laminate, and vinyl
              flooring.
            </li>
            <li className="text-gray-400 mb-4">
              <span className="text-red-400 font-semibold">
                7. Plumbing –
              </span>{" "}
              General plumbing services, including fixture installation, leak
              repairs, and maintenance.
            </li>
            <li className="text-gray-400 mb-4">
              <span className="text-red-400 font-semibold">
                8. Lighting –
              </span>{" "}
              Installation and upgrades of indoor and outdoor lighting fixtures
              for ambiance and efficiency.
            </li>
            <li className="text-gray-400 mb-4">
              <span className="text-red-400 font-semibold">
                9. Wall Hangings –
              </span>{" "}
              Professional mounting of artwork, mirrors, TVs, and decorative
              elements.
            </li>
            <li className="text-gray-400 mb-4">
              <span className="text-red-400 font-semibold">
                10. Furniture Assembly –
              </span>{" "}
              Expert assembly of flat-pack furniture, office setups, and home
              furnishings.
            </li>
          </ul>

          <p className="text-gray-400 mb-4">
            I’m always excited to help out my clients and take pride in putting
            in maximum effort to ensure the best possible results. Whether it’s
            a small task or a larger project, I’m here to make sure everything
            is done right. My hourly rate is $60 with a minimum booking of two
            hours, so you’re guaranteed dedicated time and quality service. For
            certain jobs, I also offer fixed pricing, which we can agree on in
            advance to make sure everything fits your needs. Please note that I
            do not perform work at heights above 12 feet!Looking forward to
            working with you!
          </p>
        </div>
      </motion.div>
    </motion.div>
  );
};

export default About;
