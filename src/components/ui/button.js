import * as React from "react";

export function Button({
  children,
  onClick,
  size = "default",
  variant = "default",
  className = "",
  ...props
}) {
  const sizeClass = size === "lg" ? "h-11 rounded-md px-8" : "h-10 px-4 py-2";
  const variantClass =
    variant === "outline"
      ? "border border-gray-400 bg-white hover:bg-gray-100 text-gray-800"
      : "bg-blue-600 text-white hover:bg-blue-700";
  return (
    <button
      className={`inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium transition-colors focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-offset-2 disabled:opacity-50 ${sizeClass} ${variantClass} ${className}`}
      onClick={onClick}
      {...props}
    >
      {children}
    </button>
  );
}
