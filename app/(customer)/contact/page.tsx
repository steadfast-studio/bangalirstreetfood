"use client";

import React, { useState } from "react";
import { Mail, MapPin, Instagram, Youtube, Send } from "lucide-react";

const ContactPage = () => {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div className="min-h-screen bg-amber-50/40 pt-24">
      {/* Header */}
      <header className="relative overflow-hidden border-b border-amber-200/60 bg-gradient-to-b from-orange-50 to-amber-50/40">
        <div
          className="pointer-events-none absolute inset-0 opacity-[0.05]"
          style={{
            backgroundImage:
              "radial-gradient(circle at 1px 1px, #c2785a 1px, transparent 0)",
            backgroundSize: "24px 24px",
          }}
        />
        <div className="relative mx-auto max-w-5xl px-6 py-16 text-center sm:px-8 sm:py-20">
          <span className="font-handwriting text-base font-semibold uppercase tracking-[0.2em] text-orange-500">
            Drop us a line
          </span>
          <h1 className="mt-3 text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl">
            Let&apos;s Plan Something
          </h1>
          <p className="mx-auto mt-4 max-w-xl text-gray-600">
            Got a destination in mind, a date that won&apos;t budge, or just a
            question about how we work? Write to us like you would a
            postcard — we&apos;ll write back.
          </p>
        </div>
      </header>

      {/* Body */}
      <main className="mx-auto max-w-5xl px-6 py-12 sm:px-8 sm:py-16">
        <div className="grid grid-cols-1 gap-10 lg:grid-cols-5 lg:gap-12">
          {/* Postcard form */}
          <div className="relative lg:col-span-3">
            <div className="relative -rotate-1 rounded-sm bg-white p-6 shadow-[0_8px_30px_rgb(0,0,0,0.10)] ring-1 ring-black/5 sm:p-10">
              {/* Stamp */}
              <div className="p-2 absolute -right-3 -top-4 hidden h-20 w-16 rotate-6 items-center justify-center rounded border-2 border-dashed border-orange-300/70 bg-orange-50 text-center text-[10px] font-semibold uppercase leading-tight tracking-widest text-orange-400 sm:flex">
                Sent with <br /> wanderlust
              </div>

              {submitted ? (
                <div className="flex flex-col items-center justify-center py-16 text-center">
                  <div className="flex h-14 w-14 items-center justify-center rounded-full bg-orange-100 text-orange-500">
                    <Send className="h-6 w-6" />
                  </div>
                  <h2 className="font-handwriting mt-4 text-2xl font-bold text-gray-900">
                    Postcard sent!
                  </h2>
                  <p className="mt-2 max-w-sm text-gray-600">
                    Thanks for writing in. We read every message and usually
                    reply within 1–2 days — sometimes from an airport, so
                    bear with us.
                  </p>
                  <button
                    onClick={() => setSubmitted(false)}
                    className="mt-6 text-sm font-medium text-orange-600 hover:text-orange-700"
                  >
                    Send another
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
                    <div>
                      <label
                        htmlFor="name"
                        className="font-handwriting text-lg font-semibold text-gray-800"
                      >
                        From
                      </label>
                      <input
                        id="name"
                        name="name"
                        type="text"
                        required
                        placeholder="Your name"
                        className="mt-2 w-full border-b-2 border-gray-200 bg-transparent pb-2 text-gray-900 placeholder:text-gray-400 focus:border-orange-400 focus:outline-none"
                      />
                    </div>
                    <div>
                      <label
                        htmlFor="email"
                        className="font-handwriting text-lg font-semibold text-gray-800"
                      >
                        Reply to
                      </label>
                      <input
                        id="email"
                        name="email"
                        type="email"
                        required
                        placeholder="you@example.com"
                        className="mt-2 w-full border-b-2 border-gray-200 bg-transparent pb-2 text-gray-900 placeholder:text-gray-400 focus:border-orange-400 focus:outline-none"
                      />
                    </div>
                  </div>

                  <div>
                    <label
                      htmlFor="destination"
                      className="font-handwriting text-lg font-semibold text-gray-800"
                    >
                      Where to?
                    </label>
                    <input
                      id="destination"
                      name="destination"
                      type="text"
                      placeholder="e.g. Spiti Valley, Meghalaya, anywhere with mountains..."
                      className="mt-2 w-full border-b-2 border-gray-200 bg-transparent pb-2 text-gray-900 placeholder:text-gray-400 focus:border-orange-400 focus:outline-none"
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="message"
                      className="font-handwriting text-lg font-semibold text-gray-800"
                    >
                      Your message
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      required
                      rows={4}
                      placeholder="Tell us about your trip — dates, group size, vibe..."
                      className="mt-2 w-full resize-none border-b-2 border-gray-200 bg-transparent pb-2 text-gray-900 placeholder:text-gray-400 focus:border-orange-400 focus:outline-none"
                    />
                  </div>

                  <button
                    type="submit"
                    className="inline-flex items-center gap-2 rounded-full bg-gray-900 px-6 py-3 text-sm font-semibold text-white transition-colors hover:bg-orange-600"
                  >
                    Send postcard
                    <Send className="h-4 w-4" />
                  </button>
                </form>
              )}
            </div>
          </div>

          {/* Travel log / contact details */}
          <div className="lg:col-span-2">
            <div className="sticky top-28 space-y-6">
              <div>
                <span className="font-handwriting text-sm font-semibold uppercase tracking-[0.2em] text-orange-500">
                  Field notes
                </span>
                <h2 className="mt-1 text-xl font-bold text-gray-900">
                  Other ways to reach us
                </h2>
              </div>

              <ul className="space-y-4">
                <li className="flex gap-4 rounded-xl border border-amber-200 bg-white p-4 shadow-sm">
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-orange-100 text-orange-500">
                    <Mail className="h-5 w-5" />
                  </div>
                  <div>
                    <p className="font-semibold text-gray-900">Email</p>
                    <a
                      href="mailto:hello@example.com"
                      className="text-sm text-gray-600 hover:text-orange-600"
                    >
                      hello@example.com
                    </a>
                    <p className="mt-1 text-xs text-gray-400">
                      Best for itinerary requests &amp; bookings
                    </p>
                  </div>
                </li>

                <li className="flex gap-4 rounded-xl border border-amber-200 bg-white p-4 shadow-sm">
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-orange-100 text-orange-500">
                    <MapPin className="h-5 w-5" />
                  </div>
                  <div>
                    <p className="font-semibold text-gray-900">
                      Based out of
                    </p>
                    <p className="text-sm text-gray-600">
                      Hugli, West Bengal — but rarely home
                    </p>
                    <p className="mt-1 text-xs text-gray-400">
                      Currently planning our next route
                    </p>
                  </div>
                </li>

                <li className="flex gap-4 rounded-xl border border-amber-200 bg-white p-4 shadow-sm">
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-orange-100 text-orange-500">
                    <Youtube className="h-5 w-5" />
                  </div>
                  <div>
                    <p className="font-semibold text-gray-900">
                      Watch our trips
                    </p>
                    <a
                      href="#"
                      className="text-sm text-gray-600 hover:text-orange-600"
                    >
                      @ourchannel on YouTube
                    </a>
                    <p className="mt-1 text-xs text-gray-400">
                      New episodes every other week
                    </p>
                  </div>
                </li>

                <li className="flex gap-4 rounded-xl border border-amber-200 bg-white p-4 shadow-sm">
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-orange-100 text-orange-500">
                    <Instagram className="h-5 w-5" />
                  </div>
                  <div>
                    <p className="font-semibold text-gray-900">
                      Behind the scenes
                    </p>
                    <a
                      href="#"
                      className="text-sm text-gray-600 hover:text-orange-600"
                    >
                      @ourhandle on Instagram
                    </a>
                    <p className="mt-1 text-xs text-gray-400">
                      Stories from the road, daily
                    </p>
                  </div>
                </li>
              </ul>

              <div className="rounded-xl border border-dashed border-orange-300 bg-orange-50/60 p-4 text-sm text-gray-700">
                <span className="font-handwriting font-semibold text-orange-500">
                  Heads up —{" "}
                </span>
                we&apos;re often mid-trip with patchy signal. If you don&apos;t
                hear back in 2 days, it&apos;s the wifi, not us. Try email as a
                backup.
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default ContactPage;