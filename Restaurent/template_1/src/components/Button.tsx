import Link from "next/link";
import { cn } from "@/lib/utils";
import { ReactNode } from "react";

interface ButtonProps {
  children: ReactNode;
  href?: string;
  onClick?: () => void;
  variant?: "primary" | "secondary" | "outline";
  className?: string;
  type?: "button" | "submit";
}

export default function Button({
  children,
  href,
  onClick,
  variant = "primary",
  className,
  type = "button",
}: ButtonProps) {
  const baseStyles =
    "inline-flex items-center justify-center px-6 py-3 text-base font-medium rounded-lg transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-offset-gray-900 focus-visible:ring-white active:scale-95";

  const variants = {
    primary:
      "bg-gradient-to-r from-amber-500 via-amber-600 to-amber-700 text-white font-semibold hover:from-amber-600 hover:via-amber-700 hover:to-amber-800 hover:shadow-2xl hover:shadow-amber-500/50 hover:scale-105 active:scale-100 transition-all duration-300 relative overflow-hidden before:absolute before:inset-0 before:bg-gradient-to-r before:from-white/0 before:via-white/20 before:to-white/0 before:translate-x-[-100%] hover:before:translate-x-[100%] before:transition-transform before:duration-700",
    secondary:
      "bg-gray-800 text-white border border-gray-700 hover:bg-gray-700 hover:border-gray-600 hover:shadow-lg hover:shadow-gray-800/20",
    outline:
      "bg-transparent text-white border-2 border-white hover:bg-white/10 hover:border-white/80",
  };

  const classes = cn(baseStyles, variants[variant], className);

  if (href) {
    // Use regular anchor for external links (tel:, mailto:, http://, https://)
    const isExternalLink = href.startsWith("tel:") || href.startsWith("mailto:") || href.startsWith("http://") || href.startsWith("https://");
    
    if (isExternalLink) {
      return (
        <a href={href} className={classes}>
          {children}
        </a>
      );
    }
    
    return (
      <Link href={href} className={classes}>
        {children}
      </Link>
    );
  }

  return (
    <button type={type} onClick={onClick} className={classes}>
      {children}
    </button>
  );
}
