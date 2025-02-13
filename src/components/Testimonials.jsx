import React from "react";
import { motion } from "framer-motion";

const Testimonials = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { duration: 0.5, delay: 0.2 } }
  };

  const testimonialVariants = {
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

  const testimonials = [
    {
      name: "Megan S.",
      text:
        "We had a wonderful experience! I needed some cabinets installed, and a counter/backsplash attached. He did an amazing job. I highly recommend this pro! I will definitely be using him again.",
      details:
        "Cabinets, shelves, or bookcases • New custom building or construction • Oct 15, 2024"
    },
    {
      name: "Greg W.",
      text:
        "Anton did an excellent job with everything I threw at him. He told me of things needing fixing and was quick to help. I am using him for all of my projects around the house. Thanks again.",
      details: "Handyman • Oct 15, 2024"
    },
    {
      name: "Brandon H.",
      text:
        "Anton was absolutely fantastic! He powered through my to-do list with impressive speed and efficiency, tackling every task with skill and precision. Not only did he complete everything I needed, but he also went above and beyond by spotting potential issues I hadn’t even noticed and offering quick, effective solutions. Highly recommend!",
      details: "Handyman • Feb 12, 2025"
    },
    {
      name: "Aaron F.",
      text:
        "I contacted Anton on Saturday to see if he could install an exterior door and paint it. He responded quickly, gave me an estimate, and showed up on time. Replaced and painted the door. Could not have gone better. Will be working with him again.",
      details: "Handyman • Sep 12, 2024"
    },
    {
      name: "Alyse F.",
      text:
        "Anton did a great job fixing a few things on my camper van, his work is very clean and professional looking. Very nice guy, will hire him again for future jobs.",
      details: "Handyman • Sep 3, 2024"
    },
    {
      name: "Ivette Z.",
      text:
        "Anton was a great help. Very professional, very clean and neat as well. Absolutely great job and I would use his services again.",
      details: "Handyman • Aug 29, 2024"
    },
    {
      name: "Holly S.",
      text:
        "We’re very happy with the work, it looks great. We have concrete not studs and Anton made sure vertical blinds were securely mounted and they look great. He’s neat and organized.",
      details: "Handyman • Aug 4, 2024"
    },
    {
      name: "Ciera H.",
      text:
        "Anton was very helpful from the start of my request, went above and beyond to help me find a solution to fix my broken sink. He was very responsive and the work was done very well, and cleaned up nicely after. Would recommend for any future projects. 👍🏼",
      details: "Handyman • Feb 7, 2025"
    },
    {
      name: "Cherryl R.",
      text: "Very professional, explains everything! I will use him again.",
      details: "Handyman • Feb 3, 2025"
    },
    {
      name: "Jim O.",
      text:
        "Just moved to the Valrico area and needed a high-quality handyman and Anton is fantastic! He’s meticulous, professional, and his work is top-notch. I’ll definitely call him again soonest! Highly recommend!! Absolutely 5 stars!!",
      details: "Handyman • Feb 1, 2025"
    },
    {
      name: "Priscilla C.",
      text: "Great job, on time and great communication through the whole job.",
      details: "Handyman • Jan 31, 2025"
    },
    {
      name: "Rima G.",
      text: "Highly recommended for anyone needing help with moving furniture!",
      details: "Handyman • Jan 29, 2025"
    },
    {
      name: "Sandy J.",
      text:
        "Anton assembled and mounted a floating TV stand and redid my existing wall-mounted TV. He was very professional and everything looks great. He came on time and cleaned up after. I would highly recommend him.",
      details: "Handyman • Jan 28, 2025"
    },
    {
      name: "Tameka H.",
      text:
        "I was very pleased with the service that was provided and he was a professional. I will be forever grateful!! Thanks for the superb job. Well done!!!",
      details: "Handyman • Jan 26, 2025"
    },
    {
      name: "Kristen S.",
      text:
        "Anton was early and extremely efficient. He helped repair a piece on my roof and noticed where another one was not sturdy, fixing it as well. He also perfectly installed a heavy mirrored jewelry box onto my wall extremely fast and beautifully.",
      details: "Handyman • Jan 25, 2025"
    },
    {
      name: "Maria C.",
      text:
        "Anton does an excellent job. Very clean and detail-oriented. He was on time. I needed to replace smoke alarms and he brought them with him. I will hire him again. Highly recommended.",
      details: "Handyman • Jan 25, 2025"
    },
    {
      name: "Evelyn D.",
      text:
        "Anton did a beautiful job installing my ceiling fan. Very pleased.",
      details: "Handyman • Dec 20, 2024"
    },
    {
      name: "Cindy L.",
      text:
        "Anton arrived right on time to hang out flashing that came off during the storm. He was prepared and was able to do what we could not. Very polite. Highly recommend!!",
      details: "Handyman • Nov 27, 2024"
    },
    {
      name: "Bob B.",
      text: "Very happy with his work. Will be using him in the future.",
      details: "Handyman • Nov 27, 2024"
    },
    {
      name: "Sybil M.",
      text:
        "Anton takes pride in doing a professional job and provides value-added service!",
      details: "Handyman • Nov 14, 2024"
    },
    {
      name: "Albert B.",
      text:
        "Anton was a great professional. Great work quality. I would definitely hire again and would recommend to others as well.",
      details: "Handyman • Nov 1, 2024"
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
        Testimonials
      </h2>
      <motion.div
        variants={testimonialVariants}
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
      >
        {testimonials.map((testimonial, index) =>
          <motion.div
            variants={itemVariants}
            key={index}
            className="bg-gray-800 p-6 rounded-md shadow-md"
          >
            <p className="text-gray-300 mb-4 italic">
              "{testimonial.text}"
            </p>
            <p className="text-gray-400 font-semibold text-right">
              - {testimonial.name}
            </p>
            <p className="text-gray-400 font-semibold text-right pt-5">
              - {testimonial.details}
            </p>
            <img
              src="https://png.pngtree.com/png-vector/20240621/ourmid/pngtree-gaming-5-star-rating-vector-png-image_12804957.png"
              alt="Testimonial"
            />
          </motion.div>
        )}
      </motion.div>
    </motion.div>
  );
};

export default Testimonials;
