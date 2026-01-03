"use client";

import { Box, Lock, Settings } from "lucide-react";
import { GlowingEffect } from "./glowing-effect";
import { cn } from "../../lib/utils";

export function GlowingEffectDemo() {
  return (
    <ul className="grid grid-cols-1 gap-8 md:grid-cols-2 w-full max-w-5xl mx-auto">
      <GridItem
        icon={<Box className="h-7 w-7 text-cyan-400" />}
        title="Interior Designing"
        description="Transform your space with our expert interior design solutions."
      />
      <GridItem
        icon={<Settings className="h-7 w-7 text-cyan-400" />}
        title="Building Home"
        description="From concept to creation, we build your dream home."
      />
      <li className="col-span-1 md:col-span-2 flex justify-center mt-4">
        <div className="w-full max-w-md">
          <GridItem
            icon={<Lock className="h-7 w-7 text-cyan-400" />}
            title="Project Management Consultancy"
            description="Professional management for timely and quality project delivery."
          />
        </div>
      </li>
    </ul>
  );
}

interface GridItemProps {
  icon: React.ReactNode;
  title: string;
  description: React.ReactNode;
}

const GridItem = ({ icon, title, description }: GridItemProps) => {
  return (
    <div className={cn("min-h-[10rem] list-none")}> 
      <div className="relative h-full rounded-2xl p-[2.5px] bg-gradient-to-br from-cyan-400/90 via-fuchsia-500/70 to-purple-500/90 shadow-2xl">
        <div className="rounded-2xl bg-[#19191d] p-5 md:p-7 h-full flex flex-col justify-between border-2 border-[#35354a]">
          <GlowingEffect
            spread={45}
            glow={true}
            disabled={false}
            proximity={64}
            inactiveZone={0.01}
            borderWidth={1}
          />
          <div className="flex flex-1 flex-col justify-between gap-4">
            <div className="w-fit rounded-lg border border-[#23272f] bg-[#23232a] p-3 mb-3">
              {icon}
            </div>
            <div className="space-y-2">
              <h3 className="pt-0.5 text-2xl font-extrabold text-white">
                {title}
              </h3>
              <h2 className="text-base text-gray-300">
                {description}
              </h2>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
