import React, { useState } from "react";
import { Facebook, Instagram, Twitter, MapPin } from "lucide-react";
import Sponsors from "./Sponsors";
import { Link } from "react-router-dom";
import tiktok from "../images/icons/tiktok-icon.svg";

const Footer = () => {
  return (
    <footer className="bg-primary font-montserrat text-sm text-neutral-300">
      <Sponsors />
      <div className="custom-container mx-auto mt-12 px-6 pb-10">
        {/* logo and tripadvisor logo */}

        <div className="mt-12 grid grid-cols-1 place-items-center gap-10 text-center sm:grid-cols-2 sm:place-items-start sm:text-start lg:mt-0 lg:grid-cols-4 lg:place-items-start">
          {/* Contact Info */}
          <div className="lg:text-md space-y-3">
            <h2 className="text-lg font-bold text-neutral-200">Visit Us</h2>

            <div className="flex flex-row items-center justify-center gap-x-2">
              <MapPin className="text-white" />
              <p>Brgy. Tamag, City of Vigan</p>
            </div>

            <p>Check-in: 2:00 PM</p>
            <p>Check-out: 12:00 PM</p>
          </div>

          {/* Hotel Navigation */}
          <div className="lg:text-md flex flex-col space-y-3">
            <h2 className="text-lg font-bold text-neutral-200">Contact</h2>
            <a className="footer-link-hover" href="tel:+077-644-3273">
              Landline: 077-644-3273
            </a>
            <a className="footer-link-hover" href="tel:+0956-974-3213">
              Front Office: (+63) 956-974-3213
            </a>
            <a className="footer-link-hover" href="tel:+0956-974-3211">
              Reservations: (+63) 956-974-3211
            </a>
            <a
              href="https://mail.google.com/mail/?view=cm&fs=1&to=hotelledream@gmail.com&su=Hotel%20Inquiry&body=Hi%2C%20I%20would%20like%20to%20inquire%20about%20your%20hotel.%20Thank%20you!"
              target="_blank"
            >
              hotelledream@gmail.com
            </a>
          </div>

          {/* Quicklinks */}
          <div className="lg:text-md flex flex-col space-y-3">
            <h2 className="text-lg font-bold text-neutral-200">
              Terms & Policies
            </h2>
            <a href="#" className="footer-link-hover">
              Privacy Policy
            </a>
            <a href="#" className="footer-link-hover">
              Safety & Security
            </a>
            <a href="#" className="footer-link-hover">
              Terms & Conditions
            </a>
            <a href="#" className="footer-link-hover">
              Supplier Code of Conduct
            </a>
          </div>

          {/* quicklinks */}
          <div className="lg:text-md flex flex-col space-y-3">
            <h2 className="text-lg font-bold text-neutral-200">Quicklinks</h2>
            <Link to="/rooms" className="footer-link-hover">
              Rooms
            </Link>
            <Link to="/amenities" className="footer-link-hover">
              Amenities
            </Link>
            <Link to="/bar-resto" className="footer-link-hover">
              Bar + Resto
            </Link>
            <Link to="/explore" className="footer-link-hover">
              Explore
            </Link>
            <Link to="/about" className="footer-link-hover">
              About Us
            </Link>
          </div>
        </div>

        {/* Footer bottom */}
        <div className="mt-10 flex flex-col-reverse items-center justify-between gap-y-4 border-t border-gray-700 pt-6 text-center text-xs text-gray-400 lg:flex-row">
          <p> ©2025 Le Dream Hotel, All Rights Reserved</p>
          {/* Social Media Links */}
          <div className="flex flex-row items-center justify-center gap-x-4 text-white">
            <a href="https://www.facebook.com/le.dreamhotel" target="_blank">
              <Facebook className="hover-opacity size-6" />
            </a>
            <a
              href="https://www.instagram.com/le.dreamhotel?fbclid=IwY2xjawLY6nhleHRuA2FlbQIxMABicmlkETFKdkNoSHJoZktaY2NIcGxJAR66WELhl02mdhiPasKdM_OYWqyTQsWL0cXfJJEHlUa0a87MXbObvf2FZz_x-w_aem_LucH7M9sLH5CfrcwfR6qVw"
              target="_blank"
            >
              <Instagram className="hover-opacity size-6" />
            </a>
            <a
              href="https://www.tiktok.com/@ledreamhotel?fbclid=IwY2xjawLY6pZleHRuA2FlbQIxMABicmlkETFKdkNoSHJoZktaY2NIcGxJAR77-8MwLac8Kf0Z0rBU8L9G6fDw_RW3e54mqSTkkNVJtjTgxo2yH-BvWJZvbg_aem_ZJ60tdThSXkW0Ll1vj9tYg"
              target="_blank"
            >
              {" "}
              <img className="hover-opacity size-6" src={tiktok} alt="" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
