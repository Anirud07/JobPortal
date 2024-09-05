import React from 'react';
import { motion } from 'framer-motion';

const FooterBanner = () => {
  return (
    <div className="flex flex-col md:flex-row w-full max-w-6xl mx-auto p-4 space-y-4 md:space-y-0 md:space-x-4">
      <motion.div 
        className="bg-blue-100 rounded-lg p-6 flex-1"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <h2 className="text-2xl font-bold mb-4">Download Unstop App</h2>
        <div className="flex space-x-2 mb-4">
          <img src="/api/placeholder/60/60" alt="App Store" className="w-12 h-12" />
          <img src="/api/placeholder/60/60" alt="Google Play" className="w-12 h-12" />
        </div>
        <div className="relative h-40">
          <img src="/api/placeholder/200/400" alt="Unstop App" className="absolute -bottom-4 left-0 w-32" />
          <img src="/api/placeholder/200/400" alt="Unstop App" className="absolute -bottom-4 left-20 w-32" />
        </div>
      </motion.div>
      
      <motion.div 
        className="bg-yellow-100 rounded-lg p-6 flex-1"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.2 }}
      >
        <h2 className="text-2xl font-bold mb-2">Refer & Win</h2>
        <p className="mb-4">MacBook, iPhone, Apple Watch, AirPods, Cash Rewards and more!</p>
        <button className="bg-gray-800 text-white px-4 py-2 rounded">Get Started</button>
        <div className="flex justify-between items-center mt-4">
          <div className="flex space-x-2">
            <img src="/api/placeholder/40/40" alt="MacBook" className="w-8 h-8 rounded-full" />
            <img src="/api/placeholder/40/40" alt="iPhone" className="w-8 h-8 rounded-full" />
            <img src="/api/placeholder/40/40" alt="Apple Watch" className="w-8 h-8 rounded-full" />
            <img src="/api/placeholder/40/40" alt="AirPods" className="w-8 h-8 rounded-full" />
          </div>
          <motion.div 
            className="relative w-32 h-32"
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            <img src="/api/placeholder/150/150" alt="Happy People" className="absolute right-0 bottom-0" />
          </motion.div>
        </div>
      </motion.div>
    </div>
  );
};

export default FooterBanner;