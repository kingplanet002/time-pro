
import React from 'react';

const Header: React.FC = () => {
  return (
    <header className="bg-gray-900/50 backdrop-blur-sm sticky top-0 z-10 py-4 shadow-lg shadow-blue-500/10">
      <div className="container mx-auto px-4 text-center">
        <h1 className="text-4xl font-bold tracking-tight text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-teal-300">
          Global Time Hub
        </h1>
        <p className="text-gray-400 mt-1">Real-time clocks from around the world</p>
      </div>
    </header>
  );
};

export default Header;
