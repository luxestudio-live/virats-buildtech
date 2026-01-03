import React from "react";
import { motion } from "framer-motion";
import { Button } from "./button";
import { Badge } from "./badge";

export default function LiquidMetalHero({
  badge,
  title,
  subtitle,
  primaryCtaLabel,
  secondaryCtaLabel,
  onPrimaryCtaClick,
  onSecondaryCtaClick,
  features = [],
}) {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        delayChildren: 0.2,
        staggerChildren: 0.15,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0 },
  };

  const buttonVariants = {
    hidden: { opacity: 0, scale: 0.9 },
    visible: { opacity: 1, scale: 1 },
  };

  // Premium hero with 3D house on right
  // Import HouseModel
  // ...existing code...
  const HouseModel = React.useMemo(() => require("../HouseModel").default, []);

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-gray-100 to-blue-100">
      <div className="container mx-auto px-6 lg:px-8 max-w-7xl">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-12">
          <motion.div
            className="flex-1 text-center lg:text-left space-y-8"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            transition={{ duration: 0.8, ease: [0.25, 0.1, 0.25, 1] }}
          >
            {badge && (
              <motion.div className="flex justify-center lg:justify-start" variants={itemVariants}>
                <Badge variant="secondary" className="bg-foreground/10 text-foreground border-foreground/20 hover:bg-foreground/20 transition-colors duration-300 backdrop-blur-sm">
                  {badge}
                </Badge>
              </motion.div>
            )}

            <motion.div className="space-y-6" variants={itemVariants}>
              <motion.h1
                role="heading"
                aria-level={1}
                className="text-5xl sm:text-6xl lg:text-7xl xl:text-8xl font-bold text-foreground leading-tight tracking-tight"
                variants={itemVariants}
              >
                {title}
              </motion.h1>
              <motion.p
                className="max-w-3xl mx-auto lg:mx-0 text-xl sm:text-2xl text-foreground/90 leading-relaxed"
                variants={itemVariants}
              >
                {subtitle}
              </motion.p>
            </motion.div>

            <motion.div
              className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start items-center"
              variants={buttonVariants}
            >
              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                <Button
                  onClick={onPrimaryCtaClick}
                  size="lg"
                  className="bg-foreground text-background hover:bg-foreground/90 transition-all duration-300 shadow-2xl text-lg px-8 py-6 font-semibold"
                >
                  {primaryCtaLabel}
                </Button>
              </motion.div>
              {secondaryCtaLabel && onSecondaryCtaClick && (
                <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                  <Button
                    onClick={onSecondaryCtaClick}
                    variant="outline"
                    size="lg"
                    className="border-foreground/30 text-foreground hover:bg-foreground/10 hover:border-foreground/50 transition-all duration-300 backdrop-blur-sm text-lg px-8 py-6 font-semibold"
                  >
                    {secondaryCtaLabel}
                  </Button>
                </motion.div>
              )}
            </motion.div>

            {features.length > 0 && (
              <motion.div className="pt-12" variants={itemVariants}>
                <div className="p-8">
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    {features.map((feature, index) => (
                      <motion.div
                        key={index}
                        className="flex items-center justify-center text-center"
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.6, delay: 0.8 + index * 0.1 }}
                      >
                        <p className="text-foreground/90 font-medium text-lg">
                          {feature}
                        </p>
                      </motion.div>
                    ))}
                  </div>
                </div>
              </motion.div>
            )}
          </motion.div>
          {/* 3D House Model on right */}
          <div className="flex-1 w-full h-[400px] md:h-[500px] lg:h-[600px] flex items-center justify-center">
            <HouseModel />
          </div>
        </div>
      </div>
    </section>
  );
}
