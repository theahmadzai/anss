import React, { useState } from 'react';
import { UserPlus } from 'lucide-react';
import { navigate } from 'gatsby';

const RegisterButton = () => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <button
      onClick={() => navigate('/register')}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className={`flex items-center space-x-1 px-4 py-2 rounded-md transition-all duration-200 ${
        isHovered 
          ? 'bg-[#2a4a8a] text-white shadow-md' 
          : 'bg-white text-[#3459a6] border border-[#3459a6] shadow-sm'
      }`}
      aria-label="Register"
    >
      <UserPlus size={18} className={isHovered ? 'animate-bounce' : ''} />
      <span className="text-sm font-medium">Sign Up</span>
    </button>
  );
};

export default RegisterButton;