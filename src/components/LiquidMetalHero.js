import React from 'react';
import { motion } from 'framer-motion';

export default function LiquidMetalHero() {
  const features = [
    'Interior Designing',
    'Home Building',
    'Project Management Consultancy',
  ];

  return (
    <section style={{ minHeight: '100vh', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
      <div style={{ maxWidth: 900, width: '100%', padding: 24, textAlign: 'center' }}>
        <motion.h1 initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }} style={{ fontSize: 48, fontWeight: 'bold' }}>
          Virats BuildTech
        </motion.h1>
        <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.2, duration: 0.8 }} style={{ fontSize: 24, margin: '24px 0' }}>
          Excellence in Interior Designing, Home Building, and Project Management Consultancy
        </motion.p>
        <div style={{ display: 'flex', justifyContent: 'center', gap: 16, margin: '32px 0' }}>
          <button style={{ padding: '16px 32px', fontSize: 18, borderRadius: 8, background: '#222', color: '#fff', border: 'none' }}>
            Contact Us
          </button>
          <button style={{ padding: '16px 32px', fontSize: 18, borderRadius: 8, background: '#fff', color: '#222', border: '1px solid #222' }}>
            View Projects
          </button>
        </div>
        <div style={{ marginTop: 40 }}>
          <ul style={{ display: 'flex', justifyContent: 'center', gap: 32, listStyle: 'none', padding: 0 }}>
            {features.map((feature, idx) => (
              <li key={idx} style={{ fontSize: 20, fontWeight: 500 }}>{feature}</li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
