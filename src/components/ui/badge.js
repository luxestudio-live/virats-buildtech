import * as React from "react";

export function Badge({ children, variant = "default", className = "", ...props }) {
  const variantClass =
    variant === "secondary"
      ? "bg-gray-200 text-gray-800 border-gray-300"
      : "bg-blue-600 text-white border-transparent";
  return (
    <div
      className={`inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-offset-2 ${variantClass} ${className}`}
      {...props}
    >
      {children}
    </div>
  );
}
