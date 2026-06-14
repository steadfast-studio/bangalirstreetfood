import React from "react";
import Link from "next/link";

const lastUpdated = "June 14, 2026";

const sections = [
  {
    title: "What we collect",
    content: [
      "When you reach out to plan a trip, book a package, or sign up for updates, we collect what you give us directly — your name, email, phone number, travel dates, and any preferences you share so we can put together an itinerary that actually fits you.",
      "We also pick up some technical details automatically: your browser type, device, approximate location, and how you move through the site. This helps us understand what's working and fix what isn't.",
    ],
  },
  {
    title: "How we use it",
    content: [
      "Mostly, to do the thing you asked us to do — plan your trip, respond to your questions, and keep you posted on bookings.",
      "Occasionally, with your okay, we'll send you travel tips, new package announcements, or behind-the-scenes updates from the road. You can opt out of these anytime.",
      "We also use aggregated, anonymized data to improve our itineraries and figure out which routes and stays our travelers love most.",
    ],
  },
  {
    title: "Who we share it with",
    content: [
      "We share booking details with the hotels, transport providers, and local guides needed to run your trip — and only the details they need to do that.",
      "We don't sell your personal information. Full stop. If that ever changes for any part of our business, we'll update this page and let you know directly.",
      "We may share data with service providers who help us run this site (hosting, analytics, email), bound by their own confidentiality obligations.",
    ],
  },
  {
    title: "Cookies",
    content: [
      "We use cookies to remember your preferences, keep you logged in if you have an account, and understand how people use the site so we can make it better.",
      "You can turn cookies off in your browser settings. Some parts of the site may not work as smoothly without them.",
    ],
  },
  {
    title: "Your choices",
    content: [
      "You can ask us what information we hold about you, ask us to correct it, or ask us to delete it — just email us and we'll sort it out, usually within a few days.",
      "If you've signed up for our newsletter or updates, every email has an unsubscribe link at the bottom.",
    ],
  },
  {
    title: "Keeping it safe",
    content: [
      "We use standard safeguards to protect your information — encrypted connections, restricted access, and regular reviews of how data is stored.",
      "No system is ever 100% airtight, but we treat your information the way we'd want our own treated: carefully, and only for as long as we need it.",
    ],
  },
  {
    title: "Changes to this policy",
    content: [
      "As our trips (and our team) grow, this policy might need updates. If we make a significant change, we'll post it here with a new date at the top.",
    ],
  },
];

const PrivacyPolicyPage = () => {
  return (
    <div className="min-h-screen bg-amber-50/40 pt-24">
      {/* Header */}
      <header className="relative overflow-hidden border-b border-amber-200/60 bg-linear-to-b from-orange-50 to-amber-50/40">
        <div
          className="pointer-events-none absolute inset-0 opacity-[0.05]"
          style={{
            backgroundImage:
              "radial-gradient(circle at 1px 1px, #c2785a 1px, transparent 0)",
            backgroundSize: "24px 24px",
          }}
        />
        <div className="relative mx-auto max-w-3xl px-6 py-16 sm:px-8 sm:py-20">
          <span className="font-handwriting text-base font-semibold uppercase tracking-[0.2em] text-orange-500">
            The fine print
          </span>
          <h1 className="mt-3 text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl">
            Privacy Policy
          </h1>
          <p className="mt-4 max-w-xl text-gray-600">
            We&apos;ve tried to write this the way we&apos;d explain it over chai —
            plainly, and without the legal fog. Here&apos;s what we collect, why,
            and how you stay in control.
          </p>
          <p className="mt-6 text-sm text-gray-500">
            Last updated:{" "}
            <span className="font-medium text-gray-700">{lastUpdated}</span>
          </p>
        </div>
      </header>

      {/* Body */}
      <main className="mx-auto max-w-3xl px-6 py-12 sm:px-8 sm:py-16">
        <div className="space-y-10">
          {sections.map((section, index) => (
            <section key={section.title} className="relative">
              <div className="flex items-baseline gap-4">
                <span className="font-handwriting shrink-0 text-2xl font-bold text-orange-400/70">
                  {String(index + 1).padStart(2, "0")}
                </span>
                <h2 className="text-xl font-semibold text-gray-900 sm:text-2xl">
                  {section.title}
                </h2>
              </div>
              <div className="mt-3 ml-0 space-y-3 border-l-2 border-amber-200 pl-0 sm:ml-10 sm:pl-6">
                {section.content.map((paragraph, pIndex) => (
                  <p key={pIndex} className="leading-relaxed text-gray-700">
                    {paragraph}
                  </p>
                ))}
              </div>
            </section>
          ))}
        </div>

        {/* Contact card */}
        <div className="mt-16 rounded-2xl border border-amber-200 bg-white p-6 shadow-sm sm:p-8">
          <h2 className="text-lg font-semibold text-gray-900">
            Questions about your data?
          </h2>
          <p className="mt-2 text-gray-700">
            Email us and we&apos;ll get back to you — usually faster than our wifi
            on the road.
          </p>
          <div className="mt-4 flex flex-col gap-2 text-sm sm:flex-row sm:gap-6">
            <a
              href="mailto:hello@example.com"
              className="font-medium text-orange-600 hover:text-orange-700"
            >
              hello@example.com
            </a>
            <Link
              href="/about"
              className="font-medium text-gray-600 hover:text-gray-900"
            >
              More about us →
            </Link>
          </div>
        </div>
      </main>
    </div>
  );
};

export default PrivacyPolicyPage;