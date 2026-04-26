"use client";

import { motion, useMotionValue, useSpring } from "framer-motion";
import { Clock3, MapPin, PhoneCall } from "lucide-react";
import Link from "next/link";

type MagneticButtonProps = {
  href: string;
  label: string;
};

function MagneticButton({ href, label }: MagneticButtonProps) {
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const textX = useMotionValue(0);
  const textY = useMotionValue(0);

  const smoothX = useSpring(x, { stiffness: 280, damping: 22, mass: 0.32 });
  const smoothY = useSpring(y, { stiffness: 280, damping: 22, mass: 0.32 });
  const smoothTextX = useSpring(textX, { stiffness: 260, damping: 20, mass: 0.25 });
  const smoothTextY = useSpring(textY, { stiffness: 260, damping: 20, mass: 0.25 });

  const reset = () => {
    x.set(0);
    y.set(0);
    textX.set(0);
    textY.set(0);
  };

  const onPointerMove = (event: React.PointerEvent<HTMLAnchorElement>) => {
    const rect = event.currentTarget.getBoundingClientRect();
    const centerX = rect.left + rect.width / 2;
    const centerY = rect.top + rect.height / 2;
    const deltaX = event.clientX - centerX;
    const deltaY = event.clientY - centerY;
    const distance = Math.hypot(deltaX, deltaY);

    const magneticRange = Math.max(rect.width, rect.height) * 0.95;
    if (distance > magneticRange) {
      reset();
      return;
    }

    const pullStrength = 0.34;
    x.set(deltaX * pullStrength);
    y.set(deltaY * pullStrength);

    const textPullStrength = 0.52;
    textX.set(deltaX * textPullStrength);
    textY.set(deltaY * textPullStrength);
  };

  return (
    <motion.div style={{ x: smoothX, y: smoothY }} className="inline-block">
      <Link
        href={href}
        onPointerMove={onPointerMove}
        onPointerLeave={reset}
        className="group inline-flex items-center justify-center rounded-full border border-accent/60 px-10 py-5 text-base uppercase tracking-[0.28em] text-foreground transition-colors duration-300 hover:border-accent hover:bg-accent/10"
      >
        <motion.span style={{ x: smoothTextX, y: smoothTextY }} className="inline-block">
          {label}
        </motion.span>
      </Link>
    </motion.div>
  );
}

const footerLinks = [
  { label: "Book Now", href: "#booking" },
  { label: "Location", href: "#location" },
  { label: "Contact", href: "#contact" },
];

export function ReservationFooter() {
  return (
    <footer id="reservation" className="border-t border-white/10 bg-black px-6 pb-14 pt-24 md:px-12 lg:px-20">
      <div className="mx-auto flex w-full max-w-7xl flex-col gap-14">
        <div
          id="booking"
          className="scroll-mt-20 rounded-2xl border border-white/15 bg-linear-to-br from-white/4 via-transparent to-accent/10 px-6 py-8 shadow-[0_24px_70px_rgba(0,0,0,0.45)] md:px-8 md:py-10 lg:flex lg:items-end lg:justify-between"
        >
          <div className="max-w-3xl">
            <p className="mb-4 text-xs uppercase tracking-[0.45em] text-accent-soft">
              Reservations
            </p>
            <h2 className="max-w-3xl text-5xl leading-[1.05] text-foreground md:text-7xl">
              Reserve Your Table
            </h2>
            <p className="mt-5 max-w-xl text-sm leading-relaxed text-muted md:text-base">
              An intimate 14-course experience begins nightly at 7:30 PM. Limited seating preserves
              the theater of service, so we recommend confirming your table in advance.
            </p>
            <div className="mt-6 flex flex-wrap gap-3 text-xs uppercase tracking-[0.18em] text-foreground/80">
              <span className="rounded-full border border-white/15 px-4 py-2">Chef&apos;s Counter</span>
              <span className="rounded-full border border-white/15 px-4 py-2">Private Dining</span>
              <span className="rounded-full border border-white/15 px-4 py-2">Wine Pairing</span>
            </div>
          </div>
          <div className="mt-10 lg:mt-0 lg:pl-8">
            <MagneticButton href="#booking" label="Book Now" />
          </div>
        </div>

        <div className="grid gap-6 border-t border-white/10 pt-10 md:grid-cols-2">
          <article
            id="location"
            className="scroll-mt-20 rounded-xl border border-white/10 bg-white/2 p-6 md:p-7"
          >
            <p className="mb-4 flex items-center gap-2 text-xs uppercase tracking-[0.42em] text-accent-soft">
              <MapPin className="h-4 w-4" /> Location
            </p>
            <p className="max-w-md text-sm leading-relaxed text-muted md:text-base">
              Noir et Or at Cloudmere House, a discreet boutique retreat nestled in Ella&apos;s
              misty tea hills, where moonlit terraces and mountain air frame every evening service.
            </p>
            <p className="mt-5 flex items-center gap-2 text-sm text-foreground/85">
              <Clock3 className="h-4 w-4 text-accent-soft" /> Open nightly from 6:00 PM - 11:30 PM
            </p>
          </article>

          <article
            id="contact"
            className="scroll-mt-20 rounded-xl border border-white/10 bg-white/2 p-6 md:p-7"
          >
            <p className="mb-4 flex items-center gap-2 text-xs uppercase tracking-[0.42em] text-accent-soft">
              <PhoneCall className="h-4 w-4" /> Contact
            </p>
            <p className="text-sm leading-relaxed text-muted md:text-base">
              Concierge Line: +94 57 900 2211
              <br />
              Private Dining: reservations@noiretor.com
            </p>
            <div className="mt-5">
              <Link
                href="#booking"
                className="group inline-flex items-center gap-2 text-xs uppercase tracking-[0.22em] text-foreground transition-colors duration-300 hover:text-accent-soft"
              >
                Confirm Reservation
                <span className="h-px w-8 bg-accent-soft transition-all duration-300 group-hover:w-12" />
              </Link>
            </div>
          </article>
        </div>

        <div className="flex flex-wrap items-center gap-8 border-t border-white/10 pt-8 text-sm uppercase tracking-[0.2em] text-muted">
          <a
            href="https://instagram.com"
            target="_blank"
            rel="noreferrer"
            className="group relative pb-1 transition-colors duration-300 hover:text-accent-soft"
          >
            Instagram
            <span className="absolute bottom-0 left-0 h-px w-full origin-left scale-x-0 bg-accent-soft transition-transform duration-500 group-hover:scale-x-100" />
          </a>
          {footerLinks.map((link) => (
            <Link
              key={link.label}
              href={link.href}
              className="group relative pb-1 transition-colors duration-300 hover:text-accent-soft"
            >
              {link.label}
              <span className="absolute bottom-0 left-0 h-px w-full origin-left scale-x-0 bg-accent-soft transition-transform duration-500 group-hover:scale-x-100" />
            </Link>
          ))}
        </div>
      </div>
    </footer>
  );
}
