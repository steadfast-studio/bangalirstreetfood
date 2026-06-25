import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { Button } from "@/components/ui/button";
import {
  FaWhatsapp,
  FaFacebook,
  FaInstagram,
  FaYoutube,
  FaPhone,
  FaEnvelope,
  FaCommentDots,
} from "react-icons/fa";
import { socialMediaLinks } from "@/lib/constants";
// import { socialMediaLinks } from "@/lib/data";

const actions = [
  {
    icon: <FaWhatsapp className="size-7" />,
    label: "WhatsApp",
    color: "bg-green-500",
    href: `$https://wa.me/${socialMediaLinks.whatsapp.number}`,
  },
  {
    icon: <FaFacebook className="size-7" />,
    label: "Facebook",
    color: "bg-blue-600",
    href: socialMediaLinks.facebook.href,
  },
  {
    icon: <FaInstagram className="size-7" />,
    label: "Instagram",
    color: "bg-pink-500",
    href: socialMediaLinks.instagram.href,
  },
  {
    icon: <FaYoutube className="size-7" />,
    label: "YouTube",
    color: "bg-red-600",
    href: socialMediaLinks.youtube.href,
  },
  {
    icon: <FaPhone className="size-7" />,
    label: "Call",
    color: "bg-green-600",
    href: `tel:${socialMediaLinks.whatsapp.number}`,
  },
  {
    icon: <FaEnvelope className="size-7" />,
    label: "Email",
    color: "bg-gray-600",
    href: `mailto:${socialMediaLinks.email.zoho}`,
  },
];

const QuickDial = () => {
  return (
    <div className="fixed right-12 bottom-16 z-50">
      <Popover>
        <PopoverTrigger asChild>
          <Button
            size="icon"
            className="size-14 rounded-full bg-orange-500 hover:bg-orange-600"
            aria-label="Contact Now"
          >
            <FaCommentDots className="size-7" />
          </Button>
        </PopoverTrigger>
        <PopoverContent
          side="top"
          align="center"
          className="mb-2 w-fit bg-transparent p-2 shadow-none ring-0"
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
  );
};

export default QuickDial;
