import React, { useState } from "react";
import { Facebook, Instagram, Twitter } from "lucide-react";
import Logo from "./Logo";

const Footer = () => {
  const [email, setEmail] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Newsletter subscription:", email);
    setEmail("");
  };

  return (
    <footer className="font-body bg-primary text-sm text-gray-300">
      <div className="custom-container mx-auto px-6 py-10">
        <div className="grid grid-cols-1 gap-10 lg:grid-cols-4">
          {/* Contact Info */}
          <div className="space-y-2">
            <div className="flex items-start justify-start">
              <Logo />
            </div>
            <p>Lumangbayan, Mimaropa, PH 56073</p>
            <p>Landline: 077-644-3273</p>
            <p>Front Office: (+63) 956-974-3213</p>
            <p>Reservations: (+63) 956-974-3211</p>
            <p>hotelledream@gmail.com</p>
            <p>Check-in: 2:00 PM</p>
            <p>Check-out: 12:00 PM</p>
          </div>

          {/* Hotel Navigation */}
          <div className="flex flex-col space-y-3">
            <a href="#" className="transition hover:text-white">
              About Us
            </a>
            <a href="#" className="transition hover:text-white">
              Contact
            </a>
            <a href="#" className="transition hover:text-white">
              Privacy Policy
            </a>
            <a href="#" className="transition hover:text-white">
              Safety & Security
            </a>
            <a href="#" className="transition hover:text-white">
              Terms & Conditions
            </a>
            <a href="#" className="transition hover:text-white">
              Supplier Code of Conduct
            </a>
          </div>

          {/* Social Media */}
          <div className="space-y-3">
            <p className="font-semibold text-white">Share the love</p>
            <a
              href="#"
              className="flex items-center space-x-2 transition hover:text-white"
            >
              <Facebook size={16} /> <span>Facebook</span>
            </a>
            <a
              href="#"
              className="flex items-center space-x-2 transition hover:text-white"
            >
              <Twitter size={16} /> <span>Twitter</span>
            </a>
            <a
              href="#"
              className="flex items-center space-x-2 transition hover:text-white"
            >
              <Instagram size={16} /> <span>Instagram</span>
            </a>
          </div>

          {/* Newsletter */}
          <div>
            <p className="mb-3 font-semibold text-white">
              Subscribe to our newsletter
            </p>
            <form onSubmit={handleSubmit} className="flex">
              <input
                type="email"
                required
                placeholder="Email Address"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="rounded-l-md border border-gray-600 bg-gray-700 px-1 py-2 placeholder-gray-400 focus:ring-2 focus:ring-yellow-600 focus:outline-none"
              />
              <button
                type="submit"
                className="bg-accent rounded-r-md px-1 py-2 text-white transition hover:bg-yellow-700"
              >
                OK
              </button>
            </form>
            <p className="mt-4 text-xs text-gray-400">We'll never spam you.</p>
          </div>
        </div>

        {/* Footer bottom */}
        <div className="mt-10 border-t border-gray-700 pt-6 text-center text-xs text-gray-400">
          ©2025 Le Dream Hotel, All Rights Reserved
        </div>
      </div>
    </footer>
  );
};

export default Footer;
