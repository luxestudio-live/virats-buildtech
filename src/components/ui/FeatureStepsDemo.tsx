import { FeatureSteps } from "./feature-section";

const features = [
  {
    step: 'Step 1',
    title: 'Consultation & Planning',
    content: 'We listen to your needs and vision, then craft a tailored plan for your dream project with expert guidance at every step.',
    image: 'https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=800&q=80',
  },
  {
    step: 'Step 2',
    title: 'Design & Development',
    content: 'Our award-winning team brings your ideas to life with innovative design and quality construction, ensuring every detail is perfect.',
    image: 'https://images.unsplash.com/photo-1464983953574-0892a716854b?auto=format&fit=crop&w=800&q=80',
  },
  {
    step: 'Step 3',
    title: 'On-Time Delivery',
    content: 'We deliver your project on schedule with full transparency and a seamless, stress-free experience from start to finish.',
    image: 'https://images.unsplash.com/photo-1512918728675-ed5a9ecdebfd?auto=format&fit=crop&w=800&q=80',
  },
];

export function FeatureStepsDemo() {
  return (
    <FeatureSteps
      features={features}
      title="Why Choose Us"
      autoPlayInterval={4000}
      imageHeight="h-[400px]"
    />
  );
}
