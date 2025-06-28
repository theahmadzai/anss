import React, { useState } from 'react';
import { LogIn } from 'lucide-react';
import { navigate } from 'gatsby';

const LoginButton = () => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <button
      onClick={() => navigate('/login')}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className={`flex items-center space-x-1 px-4 py-2 rounded-md transition-all duration-200 ${
        isHovered 
          ? 'bg-[#2a4a8a] text-white shadow-md' 
          : 'bg-[#3459a6] text-white shadow-sm'
      }`}
      aria-label="Login"
    >
      <LogIn size={18} className={isHovered ? 'animate-pulse' : ''} />
      <span className="text-sm font-medium">Sign In</span>
    </button>
  );
};

export default LoginButton;