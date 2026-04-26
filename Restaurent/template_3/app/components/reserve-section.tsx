"use client";

import { motion } from "framer-motion";
import { CalendarDays, User, Users } from "lucide-react";

export function ReserveSection() {
  return (
    <section id="reserve" className="bg-forest px-6 py-24 text-[#f5f1e8] md:px-10">
      <div className="mx-auto grid w-[min(96%,1100px)] gap-12 md:grid-cols-2 md:items-center">
        <div>
          <p className="text-xs tracking-[0.42em] uppercase text-[#c8aa6e]">Reserve</p>
          <h2 className="mt-4 text-4xl md:text-5xl">Book an Evening in Bloom</h2>
          <p className="mt-5 max-w-xl text-sm leading-relaxed text-[#d8dfd3] md:text-base">
            Reserve your table for a curated botanical experience, ceremonial tea service, and a private garden view.
          </p>
        </div>

        <form className="glass rounded-3xl border-white/30 p-6 text-[#183527] md:p-8">
          <label className="mb-5 block">
            <span className="mb-2 flex items-center gap-2 text-sm font-medium text-[#173227]">
              <User className="h-4 w-4" />
              Name
            </span>
            <input
              type="text"
              placeholder="Your full name"
              className="w-full rounded-xl border border-[#89a496]/35 bg-white/70 px-4 py-3 text-sm outline-none transition focus:border-[#597866] focus:ring-2 focus:ring-[#597866]/20"
            />
          </label>

          <label className="mb-5 block">
            <span className="mb-2 flex items-center gap-2 text-sm font-medium text-[#173227]">
              <CalendarDays className="h-4 w-4" />
              Date
            </span>
            <input
              type="date"
              className="w-full rounded-xl border border-[#89a496]/35 bg-white/70 px-4 py-3 text-sm outline-none transition focus:border-[#597866] focus:ring-2 focus:ring-[#597866]/20"
            />
          </label>

          <label className="mb-6 block">
            <span className="mb-2 flex items-center gap-2 text-sm font-medium text-[#173227]">
              <Users className="h-4 w-4" />
              Guests
            </span>
            <input
              type="number"
              min={1}
              max={12}
              placeholder="2"
              className="w-full rounded-xl border border-[#89a496]/35 bg-white/70 px-4 py-3 text-sm outline-none transition focus:border-[#597866] focus:ring-2 focus:ring-[#597866]/20"
            />
          </label>

          <motion.button
            whileHover={{ scale: 1.06 }}
            whileTap={{ scale: 0.98 }}
            type="submit"
            className="w-full rounded-xl bg-[#163227] px-5 py-3 text-sm font-semibold tracking-wide text-[#f6f1e7] transition hover:bg-[#214736]"
          >
            Book Table
          </motion.button>
        </form>
      </div>
    </section>
  );
}
