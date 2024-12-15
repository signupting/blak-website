import React from 'react';
import Navbar from './Navbar';
import { AnimatePresence } from 'framer-motion';
import PageTransition from './PageTransition';

export default function Layout({ children }) {
  return (
    <div className="relative z-10">
      <Navbar />
      <AnimatePresence mode="wait">
        <PageTransition>
          <main>{children}</main>
        </PageTransition>
      </AnimatePresence>
    </div>
  );
}