import GalleryGrid from "@/components/GalleryGrid";
import HeroVideo from "@/components/HeroVideo";
import Heading2 from "@/components/reusable/Heading2";
import HomeSections from "@/components/reusable/HomeSections";
import SocialMediaCarousel from "@/components/SocialMediaCarousel";
import Testimonials from "@/components/Testimonials";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";
import {
  Accordion,
  AccordionItem,
  AccordionTrigger,
  AccordionContent,
} from "@/components/ui/accordion";
import {
  testimonialsData,
  videos,
  images,
  faqData,
  whyChooseUsData,
  homeMemberData,
} from "@/lib/constants";
import ContactForm from "@/components/forms/ContactForm";
import { FaFacebook, FaInstagram, FaYoutube } from "react-icons/fa";

export default function Page() {
  return (
    //hero
    <div className="mx-auto w-full overflow-x-hidden">
      {/* hero section */}
      <div className="hidden lg:block">
        <HeroVideo />
      </div>
      {/* Tablet image — shown only on tablet */}
      <div className="hidden h-full w-full overflow-hidden md:block lg:hidden">
        <Image
          src="/hero/tab.png"
          alt="App Preview Tablet"
          width={500}
          height={1000}
          className="h-full w-full object-cover"
        />
      </div>
      {/* Mobile image — shown only on mobile */}
      <div className="block h-full w-full overflow-hidden md:hidden">
        <Image
          src="/hero/mobile.png"
          alt="App Preview Mobile"
          width={500}
          height={1000}
          className="h-full w-full object-cover"
        />
      </div>

      <HomeSections className="max-w-none bg-linear-to-br px-0 py-0! xl:py-0!">
        <section className="relative w-full overflow-hidden bg-linear-to-b from-amber-50 via-orange-50/40 to-white py-16 md:py-24">
          {/* Decorative background elements */}
          <div className="pointer-events-none absolute inset-0 opacity-[0.04]">
            <div
              className="absolute inset-0"
              style={{
                backgroundImage:
                  "url('https://www.transparenttextures.com/patterns/old-map.png')",
              }}
            />
          </div>
          <div className="pointer-events-none absolute top-10 -left-32 h-72 w-72 rounded-full bg-orange-200/30 blur-3xl" />
          <div className="pointer-events-none absolute -right-24 bottom-0 h-96 w-96 rounded-full bg-amber-200/40 blur-3xl" />

          <div className="relative mx-auto grid max-w-6xl grid-cols-1 items-center gap-12 px-4 md:grid-cols-2 md:gap-8 md:px-8">
            {/* Polaroid stack */}
            <div className="relative flex flex-col items-center py-8 md:py-0">
              {/* Decorative compass / stamp */}
              <div className="absolute -top-4 right-4 hidden h-24 w-24 rotate-12 items-center justify-center rounded-full border-2 border-dashed border-amber-300 p-2 text-xs font-semibold tracking-widest text-amber-400 uppercase md:flex">
                Est. on the road
              </div>

              <div className="relative flex flex-col items-center">
                {homeMemberData.map((member, index) => {
                  const offset =
                    index % 3 === 0
                      ? "-translate-x-12"
                      : index % 3 === 1
                        ? "translate-x-12"
                        : "-translate-x-8";
                  const rotate =
                    index % 3 === 0
                      ? "-rotate-6"
                      : index % 3 === 1
                        ? "rotate-6"
                        : "rotate-3";

                  return (
                    <div
                      key={member.id}
                      className={`relative ${offset} ${rotate} ${
                        index !== 0 ? "-mt-28 md:-mt-32" : ""
                      } rounded-sm bg-white p-3 pb-6 shadow-[0_8px_30px_rgb(0,0,0,0.12)] ring-1 ring-black/5 transition-all duration-300 ease-out hover:z-50 hover:-translate-y-8 hover:scale-105 hover:rotate-0 hover:shadow-2xl`}
                      style={{ zIndex: index }}
                    >
                      <Image
                        src={member.image}
                        height={300}
                        width={300}
                        alt={member.name}
                        className="aspect-3/2 w-56 object-cover sm:w-64 md:w-72"
                      />
                      {/* Tape accent */}
                      <span className="absolute -top-3 left-1/2 h-6 w-16 -translate-x-1/2 -rotate-2 bg-amber-100/80 shadow-sm" />
                    </div>
                  );
                })}
              </div>
            </div>

            {/* Content */}
            <div className="relative flex flex-col items-center text-center md:items-start md:text-left">
              <span className="font-handwriting mb-2 text-sm font-semibold tracking-[0.2em] text-orange-500 uppercase">
                Our Story
              </span>

              <Heading2>Explore the World with Us</Heading2>

              <p className="mt-6 max-w-xl text-gray-700">
                We didn&apos;t start in an office — we started on the road with
                a camera. As YouTube travel vloggers, we&apos;ve explored
                India&apos;s best-kept secrets on a shoestring. Now we&apos;re
                bringing that same energy (and budget wisdom!) to plan the
                perfect trip for you.
              </p>
              <p className="mt-4 max-w-xl text-gray-700">
                No hidden charges. No cookie-cutter itineraries. Just real
                trips, just like we used to take.
              </p>

              <div className="mt-8 flex w-fit flex-col gap-3 sm:flex-row sm:gap-4">
                <Button asChild>
                  <Link prefetch={false} href="/about">
                    Read Our Full Story
                  </Link>
                </Button>
                <Button asChild className="bg-white" variant="outline">
                  <Link href="/package">View Packages</Link>
                </Button>
              </div>
            </div>
          </div>
        </section>
      </HomeSections>
      {/* The Stories we created*/}
      <HomeSections className="max-w-none">
        <div className="mx-auto max-w-6xl p-8">
          <SocialMediaCarousel
            videos={videos}
            title="See It Before You Book It"
            subtitle="We've actually been there. Watch our vlogs from Kashmir, Andaman, and Vizag — and imagine yourself in the frame."
          />
          <p className="mt-8 flex flex-wrap items-center justify-center gap-y-1 text-lg">
            Follow Us on
            <span className="flex items-center">
              <a
                href="https://www.facebook.com/@bangalirstreetfood"
                target="_blank"
                rel="noopener noreferrer"
                className="group mx-2 transition-transform duration-300 hover:scale-110"
              >
                <FaFacebook className="size-8 transition-colors duration-200 group-hover:text-blue-700" />
              </a>

              <a
                href="https://www.youtube.com/@bangalirstreetfood1198"
                target="_blank"
                rel="noopener noreferrer"
                className="group mx-2 transition-transform duration-300 hover:scale-110"
              >
                <FaYoutube className="size-8 transition-colors duration-200 group-hover:text-red-600" />
              </a>

              <a
                href="https://www.instagram.com/bangalirstreetfood/"
                target="_blank"
                rel="noopener noreferrer"
                className="group mx-2 transition-transform duration-300 hover:scale-110"
              >
                <FaInstagram className="size-8 transition-colors duration-200 group-hover:text-pink-500" />
              </a>
            </span>
            for more travel stories and tips!
          </p>
        </div>
      </HomeSections>
      {/* What people say */}
      <HomeSections className="max-w-none bg-gray-50">
        <div className="mx-auto max-w-6xl">
          <Testimonials
            data={testimonialsData}
            title="What Travelers Say"
            subtitle="Real experiences from our happy customers"
          />
        </div>
      </HomeSections>
      {/* Picture Gallery */}
      <HomeSections>
        <Heading2>Picture Gallery</Heading2>
        <GalleryGrid images={images} />
      </HomeSections>
      {/* why choose us */}
      <HomeSections className="max-w-none bg-teal-700">
        <Heading2
          className="text-white"
          subHeading="Travel smarter, safer, and more beautifully with us"
          subHeadingClassName="text-teal-100"
        >
          Why Choose Us
        </Heading2>

        {/* Grid */}
        <div className="mx-auto mt-8 grid max-w-6xl gap-6 sm:mt-12 sm:grid-cols-2 lg:grid-cols-4">
          {/* Card */}
          {whyChooseUsData.map((item) => (
            <div key={item.id} className="group rounded-md bg-white p-4 sm:p-6">
              <h3 className="text-base font-semibold text-gray-800 sm:text-lg">
                {item.title}
              </h3>
              <p className="mt-2 text-xs text-gray-500 sm:text-sm">
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </HomeSections>
      {/* FAQ Section */}
      <HomeSections>
        <Heading2>Frequently Asked Questions</Heading2>
        <Accordion type="single" collapsible className="mt-6 w-full gap-y-4">
          {faqData.map((faq) => (
            <AccordionItem
              value={`item-${faq.id}`}
              className="rounded bg-white px-4 py-2 shadow-sm"
              key={faq.id}
            >
              <AccordionTrigger>{faq.question}</AccordionTrigger>
              <AccordionContent>
                <p>{faq.answer}</p>
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </HomeSections>
      {/* CTA section */}
      <section
        className="relative mx-auto mb-32 max-w-6xl overflow-hidden rounded-lg bg-cover bg-center text-center text-white"
        style={{ backgroundImage: "url('/pahar.jpeg')" }}
      >
        <div className="absolute inset-0 bg-black/60" />
        <div className="relative z-1 flex h-full w-full flex-col items-center justify-center p-4 backdrop-blur-xs md:flex-row">
          <Image
            src="/logo.png"
            alt="Bangalir Street Food Logo"
            width={200}
            height={200}
            className="m-4 rounded-full object-cover sm:mx-0 md:w-1/2 lg:px-16"
          />
          <div className="w-full p-4 md:w-1/2 lg:px-16">
            <ContactForm />
          </div>
        </div>
      </section>
    </div>
  );
}
