import { Link } from "@tanstack/react-router";

export function Logo({ variant = "dark", showText = true }: { variant?: "dark" | "light"; showText?: boolean }) {
  return (
    <Link to="/" className="flex items-center gap-2 group">
      {showText && (
        <span
          className={`text-xl font-bold tracking-tight ${
            variant === "light" ? "text-white" : "text-primary"
          }`}
        >
          Melyno
        </span>
      )}
    </Link>
  );
}
