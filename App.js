
import React, { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Phone, Mail } from "lucide-react";
import { motion } from "framer-motion";

function ServiceCard({ service, onSelect }) {
  return (
    <motion.div
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.98 }}
      transition={{ type: "spring", stiffness: 300 }}
    >
      <Card onClick={() => onSelect(service)} className="bg-gray-800 text-white cursor-pointer hover:shadow-xl transition-transform duration-300">
        <CardContent className="p-6">
          <img src={service.image} alt={service.title} className="w-full h-40 object-cover mb-4 rounded" />
          <h4 className="text-xl font-bold text-yellow-400 mb-2 animate-pulse">{service.title}</h4>
          <p className="text-gray-300 mb-2">{service.desc}</p>
          <div className="text-gray-400">
            <span className="line-through text-red-400 mr-2">{service.oldPrice}</span>
            <span className="text-yellow-400 font-bold text-lg">{service.newPrice}</span>
          </div>
        </CardContent>
      </Card>
    </motion.div>
  );
}

export default function Home() {
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [selectedService, setSelectedService] = useState(null);
  const services = [
    { title: "Premium Car Wash", desc: "Thorough exterior wash for a spotless shine.", image: "/services/car-wash.jpg", details: "Our Premium Car Wash includes foam wash, pressure rinse, wheel cleaning, and drying with microfiber towels.", oldPrice: "₹999", newPrice: "₹699" },
    { title: "Interior Deep Clean", desc: "Detailed interior cleaning including dashboard, carpets, and seats.", image: "/services/interior-clean.jpg", details: "We deep clean every interior component including carpets, dashboard, AC vents, and seats for a fresh look and feel.", oldPrice: "₹1499", newPrice: "₹999" },
    { title: "Steam Car Wash", desc: "Eco-friendly steam cleaning for exterior and interior.", image: "/services/steam-wash.jpg", details: "Steam wash sanitizes and cleans using minimal water, ideal for eco-conscious customers.", oldPrice: "₹1299", newPrice: "₹899" },
    { title: "Paint Correction", desc: "Remove swirl marks, scratches, and restore gloss.", image: "/services/paint-correction.jpg", details: "Multi-stage polishing process to remove imperfections and restore your car's original shine.", oldPrice: "₹5999", newPrice: "₹4999" },
    { title: "Paint Ceramic Sealant", desc: "Protective coating to enhance the paint's gloss and resist contaminants.", image: "/services/paint-ceramic-sealant.jpg", details: "This sealant gives your car a durable, glossy finish that resists dirt, water, and other contaminants.", oldPrice: "₹2999", newPrice: "₹2499" },
    { title: "Ceramic Coatings", desc: "Nano ceramic coating for long-lasting protection and shine.", image: "/services/ceramic-coating.jpg", details: "A long-lasting layer that bonds with your paint, providing superior protection, gloss, and water-repelling features.", oldPrice: "₹7999", newPrice: "₹6499" },
    { title: "Paint Protection Film (PPF)", desc: "Transparent film protecting against scratches and abrasions.", image: "/services/ppf.jpg", details: "A protective layer that shields your car from chips, scratches, and environmental damage without altering its look.", oldPrice: "₹12000", newPrice: "₹9999" },
    { title: "Headlight Restoration", desc: "Restoring clarity to cloudy or yellowed headlights.", image: "/services/headlight-restoration.jpg", details: "Restoring headlights to their original clarity, improving both appearance and safety.", oldPrice: "₹999", newPrice: "₹699" },
    { title: "Leather Repair", desc: "Restoration of leather interiors to remove cracks and discoloration.", image: "/services/leather-repair.jpg", details: "We restore the look and feel of your leather seats by repairing cracks and fading.", oldPrice: "₹2999", newPrice: "₹2499" },
    { title: "Plastic and Vinyl Restoration", desc: "Bringing faded plastic trims back to life.", image: "/services/plastic-vinyl-restoration.jpg", details: "We restore plastic and vinyl surfaces to their original color and finish, bringing back their aesthetic appeal.", oldPrice: "₹1499", newPrice: "₹1199" },
    { title: "Underbody Coating", desc: "Protects the car underbody from rust and debris.", image: "/services/underbody-coating.jpg", details: "Protect your car’s underbody from rust and damage by applying a protective coating.", oldPrice: "₹2999", newPrice: "₹2499" },
    { title: "Tire Coating", desc: "Protective treatment for tires that enhances their color and lifespan.", image: "/services/tire-coating.jpg", details: "A protective layer that prevents tire cracking and fading, keeping them looking new longer.", oldPrice: "₹799", newPrice: "₹599" },
    { title: "Windshield Polishing", desc: "Removal of haze and water spots for better clarity.", image: "/services/windshield-polishing.jpg", details: "Polish your windshield to remove any haze, water spots, or minor scratches for optimal visibility.", oldPrice: "₹899", newPrice: "₹649" },
    { title: "Sun Film", desc: "Tinted windows that protect against UV rays and heat.", image: "/services/sun-film.jpg", details: "Our high-quality sun films provide UV protection and reduce interior heat, giving you a cooler drive.", oldPrice: "₹2999", newPrice: "₹2499" },
    { title: "Windshield Protection", desc: "Protect your windshield from cracks and damage.", image: "/services/windshield-protection.jpg", details: "A protective film that shields your windshield from cracks, chips, and other damage.", oldPrice: "₹4999", newPrice: "₹3999" }
  ];

  return (
    <div className="min-h-screen bg-black text-white font-sans relative">
      <header className="bg-gray-900 p-4 flex justify-between items-center shadow-md animate-fade-in">
        <motion.img
          src="https://i.postimg.cc/bwrphmC3/Whats-App-Image-2025-04-30-at-11-02-44-AM.jpg"
          alt="CMPRO Car Detailing Studio"
          className="w-32 h-auto"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        />
        <nav className="space-x-6">
          <a href="#home" className="hover:text-yellow-400">Home</a>
          <a href="#about" className="hover:text-yellow-400">About Us</a>
          <a href="#services" className="hover:text-yellow-400">Services</a>
          <a href="#contact" className="hover:text-yellow-400">Contact</a>
        </nav>
      </header>
      <!-- More content continues here -->

    </div>
  );
}
    