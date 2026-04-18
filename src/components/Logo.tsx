import logo from "@/assets/melyna-logo.png";
import { Link } from "@tanstack/react-router";

export function Logo({ variant = "dark", showText = true }: { variant?: "dark" | "light"; showText?: boolean }) {
  return (
    <Link to="/" className="flex items-center gap-2 group">
      <img
        src={logo}
        alt="Melyna logo"
        width={40}
        height={40}
        className="h-9 w-9 object-contain transition-transform group-hover:scale-110"
      />
      {showText && (
        <span
          className={`text-xl font-bold tracking-tight ${
            variant === "light" ? "text-white" : "text-primary"
          }`}
        >
          Melyna
        </span>
      )}
    </Link>
  );
}
