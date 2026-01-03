import React from "react";
import { CircularTestimonials } from './circular-testimonials';

const testimonials = [
  {
    quote:
      "I was impressed by the quality and professionalism! The team was friendly and attentive. I'll definitely recommend them!",
    name: "Tamar Mendelson",
    designation: "Home Owner",
    src: "/people1.jpg",
  },
  {
    quote:
      "This company exceeded all expectations! The staff truly goes above and beyond. I'll keep returning for more exceptional service.",
    name: "Joe Charlescraft",
    designation: "Frequent Client",
    src: "/people2.jpg",
  },
  {
    quote:
      "Virats BuildTech is a hidden gem! The impeccable service and attention to detail created a memorable experience. Highly recommended!",
    name: "Martina Edelweist",
    designation: "Satisfied Customer",
    src: "/people3.jpg",
  },
];

export const CircularTestimonialsDemo = () => (
  <section className="w-full flex justify-center items-center py-16 bg-[#f7f7fa]">
    <div className="flex items-center justify-center w-full max-w-6xl">
      <CircularTestimonials
        testimonials={testimonials}
        autoplay={true}
        colors={{
          name: "#0a0a0a",
          designation: "#454545",
          testimony: "#171717",
          arrowBackground: "#141414",
          arrowForeground: "#f1f1f7",
          arrowHoverBackground: "#00A6FB",
        }}
        fontSizes={{
          name: "28px",
          designation: "20px",
          quote: "20px",
        }}
      />
    </div>
  </section>
);
