import React from 'react';
import { motion } from 'framer-motion';

export default function Footer() {
  return (
    <footer className="py-16 bg-gradient-to-b from-green-900 via-red-900 to-green-900 text-white relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid md:grid-cols-4 gap-8">
          <div>
            <h3 className="christmas-title text-2xl font-bold mb-4">BLAS</h3>
            <p className="text-white/80">
              Rewriting holiday legends, one meme at a time.
            </p>
          </div>
          
          <div>
            <h4 className="font-bold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li><a href="#about" className="text-white/80 hover:text-white">About</a></li>
              <li><a href="#roadmap" className="text-white/80 hover:text-white">Roadmap</a></li>
              <li><a href="#community" className="text-white/80 hover:text-white">Community</a></li>
              <li><a href="#nft" className="text-white/80 hover:text-white">NFTs</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-bold mb-4">Community</h4>
            <ul className="space-y-2">
              <li><a href="#" className="text-white/80 hover:text-white">Telegram</a></li>
              <li><a href="#" className="text-white/80 hover:text-white">Twitter</a></li>
              <li><a href="#" className="text-white/80 hover:text-white">Discord</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-bold mb-4">Resources</h4>
            <ul className="space-y-2">
              <li><a href="#" className="text-white/80 hover:text-white">Whitepaper</a></li>
              <li><a href="#" className="text-white/80 hover:text-white">Audit</a></li>
              <li><a href="#" className="text-white/80 hover:text-white">Media Kit</a></li>
            </ul>
          </div>
        </div>
        
        <div className="mt-12 pt-8 border-t border-white/10 text-center text-white/60">
          <p>This is a meme coin and should not be considered financial advice.</p>
          <p className="mt-2">© 2023 BLAS. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}