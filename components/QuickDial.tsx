import React from "react";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { Button } from "@/components/ui/button";
import { Plus } from "lucide-react";
import {
  FaWhatsapp,
  FaFacebook,
  FaInstagram,
  FaYoutube,
  FaPhone,
  FaEnvelope,
  FaCommentDots,
} from "react-icons/fa";

const actions = [
  {
    icon: <FaWhatsapp className="size-8" />,
    label: "WhatsApp",
    color: "bg-green-500",
    href: "https://wa.me/+91 9064351230",
  },
  {
    icon: <FaFacebook className="size-8" />,
    label: "Facebook",
    color: "bg-blue-600",
    href: "https://www.facebook.com/@bangalirstreetfood",
  },
  {
    icon: <FaInstagram className="size-8" />,
    label: "Instagram",
    color: "bg-pink-500",
    href: "https://www.instagram.com/bangalirstreetfood/",
  },
  {
    icon: <FaYoutube className="size-8" />,
    label: "YouTube",
    color: "bg-red-600",
    href: "https://youtube.com/@bangalirstreetfood1198",
  },
  {
    icon: <FaPhone className="size-8" />,
    label: "Call",
    color: "bg-green-600",
    href: "+91 9064351230",
  },
  {
    icon: <FaEnvelope className="size-8" />,
    label: "Email",
    color: "bg-gray-600",
    href: "contact@bangalirstreetfood.com",
  },
];

const QuickDial = () => {
  return (
    <div>
      <div className="fixed right-14 bottom-18 z-50">
        <Popover>
          <PopoverTrigger asChild>
            <Button
              size="icon"
              className="size-14 rounded-full bg-orange-500 hover:bg-orange-600"
            >
              <FaCommentDots className="size-8" />
            </Button>
          </PopoverTrigger>
          <PopoverContent
            side="top"
            align="center"
            className="mb-2 w-fit bg-transparent p-2"
          >
            <div className="flex flex-col items-center gap-3">
              {actions.map((action, i) => (
                <a
                  key={i}
                  href={action.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={action.label}
                >
                  <Button
                    size="icon"
                    className={`size-14 rounded-full text-white ${action.color}`}
                  >
                    {action.icon}
                  </Button>
                </a>
              ))}
            </div>
          </PopoverContent>
        </Popover>
      </div>
    </div>
  );
};

export default QuickDial;
