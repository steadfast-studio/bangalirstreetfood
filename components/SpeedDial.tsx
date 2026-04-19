"use client";
// import { useState } from "react";
// import { FaWhatsapp, FaInstagram, FaGithub, FaPlus } from "react-icons/fa";

import React, { useRef, useState } from "react";
import {
  FaFacebookF,
  FaInstagram,
  FaTwitter,
  FaYoutube,
  FaPhoneAlt,
  FaEnvelope,
  FaWhatsapp,
  FaPlus,
} from "react-icons/fa";
import { FaCommentDots } from "react-icons/fa";
const SpeedDial = () => {
  const [open, setOpen] = useState(false);
  const timeoutRef = useRef<NodeJS.Timeout | null>(null);

  const handleEnter = () => {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
    }
    setOpen(true);
  };

  const handleLeave = () => {
    timeoutRef.current = setTimeout(() => {
      setOpen(false);
    }, 250); // 👈 sweet spot (200–300ms)
  };

  const items = [
    {
      icon: <FaWhatsapp size={26} />,
      label: "WhatsApp",
      link: "https://wa.me/911234567890",
      color: "bg-green-500",
    },
    {
      icon: <FaFacebookF size={26} />,
      label: "Facebook",
      link: "https://facebook.com",
      color: "bg-blue-600",
    },
    {
      icon: <FaInstagram size={26} />,
      label: "Instagram",
      link: "https://instagram.com",
      color: "bg-pink-500",
    },
    {
      icon: <FaTwitter size={26} />,
      label: "Twitter",
      link: "https://twitter.com",
      color: "bg-sky-500",
    },
    {
      icon: <FaYoutube size={26} />,
      label: "YouTube",
      link: "https://youtube.com",
      color: "bg-red-600",
    },
    {
      icon: <FaPhoneAlt size={26} />,
      label: "Call",
      link: "tel:+911234567890",
      color: "bg-green-600",
    },
    {
      icon: <FaEnvelope size={26} />,
      label: "Email",
      link: "mailto:your@email.com",
      color: "bg-gray-700",
    },
  ];

  return (
    <div className="fixed right-8 bottom-8 z-50 flex flex-col items-end gap-4">
      {/* Items */}
      <div
        className={`flex flex-col items-end gap-4 transition-all duration-300 ${
          open
            ? "translate-y-0 opacity-100"
            : "pointer-events-none translate-y-6 opacity-0"
        }`}
      >
        {items.map((item, index) => (
          <a
            key={index}
            href={item.link}
            target="_blank"
            rel="noopener noreferrer"
            className="group flex items-center gap-3"
          >
            {/* Label */}
            <span className="rounded-md bg-black/70 px-3 py-1 text-sm text-white opacity-0 transition group-hover:opacity-100">
              {item.label}
            </span>

            {/* Icon */}
            <div
              className={`flex h-14 w-14 items-center justify-center rounded-full text-white shadow-xl ${item.color} transition hover:scale-110`}
            >
              {item.icon}
            </div>
          </a>
        ))}
      </div>

      {/* Main Button */}
      <button
        onMouseEnter={handleEnter}
        onMouseLeave={handleLeave}
        className={`flex h-16 w-16 items-center justify-center rounded-full bg-orange-600 text-white shadow-2xl transition-transform duration-300 hover:scale-110 ${
          open ? "rotate-45" : ""
        }`}
      >
        {/* <FaPlus size={22} /> */}
        <FaCommentDots size={26} />
      </button>
    </div>
  );
};

export default SpeedDial;
