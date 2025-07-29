import React, { useState, useEffect } from 'react';
import SEO from '../../../../components/seo';
import Layout from "../../../../components/layout";
import { navigate } from 'gatsby';
import { motion, AnimatePresence } from 'framer-motion';
import { isAuthenticated } from '../../../../lib/authenticate';

const Platinum = () => {
  const [isHovered, setIsHovered] = useState(false);
  const [showPremiumBadge, setShowPremiumBadge] = useState(false);
  const [currentBenefitIndex, setCurrentBenefitIndex] = useState(0);
  
  const handlePayNow = () => {
    if (!isAuthenticated()) {
    navigate("/login")
    return
  }
    navigate(`/`);
  };

  const handleGoBack = () => {
    navigate("/membership/applyMembership");
  };

  const benefits = [
    "Subscription to ANSS email listserv (mailing lists)",
    "Access to ANSS What's Up groups",
    "Access to the online membership portal on the ANSS website",
    "Right to vote at General Assembly meetings",
    "One-time welcome message with a member photo on ANSS website news, Facebook & Instagram",
    "Right to be nominated for the Board of Trustees",
    "Access to community sponsorship programs",
    "Annual recognition of membership on the ANSS Foundation website news, Facebook, Instagram, Twitter, and LinkedIn",
    "Your name, 100-word bio, picture, and LinkedIn profile link will be featured on the PLATINUM members page",
    "Reserved PLATINUM Members Seats at our seated events, when RSVPed*",
    "Featured ANSS Interview to highlight member profile/business and social activity on YouTube Channel",
    "Exclusive access to ANSS Foundation exhibition opportunities"
  ];

  const premiumFeatures = [
    "Priority Event Access",
    "Leadership Pathways",
    "VIP Networking",
    "Premium Recognition"
  ];

  useEffect(() => {
    // Show premium badge after 1 second
    const badgeTimer = setTimeout(() => {
      setShowPremiumBadge(true);
    }, 1000);
    
    // Benefit highlight rotation
    const benefitTimer = setInterval(() => {
      setCurrentBenefitIndex((prev) => (prev + 1) % benefits.length);
    }, 4000);
    
    return () => {
      clearTimeout(badgeTimer);
      clearInterval(benefitTimer);
    };
  }, [benefits.length]);

  return (
    <Layout>
      <div className="min-h-screen bg-gradient-to-br from-gray-900 to-gray-800 flex items-center justify-center p-4">
        <div className="relative bg-gradient-to-br from-gray-800 to-gray-900 rounded-2xl shadow-2xl max-w-4xl w-full overflow-hidden border border-gray-700">
          {/* Premium Header Banner */}
          <div className="relative bg-gradient-to-r from-gray-800 via-gray-700 to-gray-800 py-10 px-8 text-center border-b border-gray-700">
            <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-yellow-400 via-yellow-300 to-yellow-400"></div>
            
            <AnimatePresence>
              {showPremiumBadge && (
                <motion.div 
                  initial={{ opacity: 0, scale: 0 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.5, type: "spring" }}
                  className="absolute top-8 right-8 bg-gradient-to-r from-yellow-400 to-yellow-300 text-gray-900 px-6 py-2 rounded-full text-sm font-bold uppercase tracking-wider shadow-lg z-10"
                >
                  Premium Tier
                </motion.div>
              )}
            </AnimatePresence>
            
            <div className="flex justify-center mb-4">
              <svg 
                className="w-12 h-12 text-yellow-400" 
                fill="currentColor" 
                viewBox="0 0 20 20" 
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
              </svg>
            </div>
            
            <motion.h1 
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="text-4xl font-bold text-white mb-3 tracking-tight"
            >
              Platinum Membership
            </motion.h1>
            
            <div className="inline-block bg-gradient-to-r from-yellow-500 to-yellow-400 text-gray-900 px-5 py-1.5 rounded-full text-md font-bold uppercase tracking-wide">
              Exclusive Access & Privileges
            </div>
          </div>

          <div className="p-8 relative">
            {/* Floating Features */}
            <div className="absolute inset-0 overflow-hidden pointer-events-none">
              {[...Array(5)].map((_, i) => (
                <motion.div
                  key={i}
                  className="absolute bg-yellow-400 rounded-full opacity-10"
                  initial={{ 
                    x: Math.random() * 100 - 50, 
                    y: Math.random() * 100 - 50,
                    width: Math.random() * 100 + 50,
                    height: Math.random() * 100 + 50
                  }}
                  animate={{
                    x: Math.random() * 100 - 50,
                    y: Math.random() * 100 - 50,
                    transition: {
                      duration: 15 + Math.random() * 10,
                      repeat: Infinity,
                      repeatType: "reverse"
                    }
                  }}
                />
              ))}
            </div>
            
            {/* Description */}
            <div className="mb-10 text-center relative z-10">
              <p className="text-gray-300 leading-relaxed mb-6 text-lg max-w-2xl mx-auto">
                Elevate your professional journey with our <span className="text-yellow-400 font-medium">exclusive Platinum membership</span> - 
                the pinnacle of ANSS Foundation engagement. Unlock unparalleled access, premium networking, 
                and distinguished recognition within our elite community.
              </p>
              
              <div className="bg-gradient-to-r from-gray-700 via-gray-800 to-gray-700 rounded-xl p-6 border border-gray-600">
                <div className="flex flex-wrap justify-center gap-6">
                  {premiumFeatures.map((feature, index) => (
                    <motion.div
                      key={index}
                      whileHover={{ scale: 1.05 }}
                      className="flex items-center gap-2 bg-gray-800/50 px-4 py-2 rounded-full border border-gray-700"
                    >
                      <svg className="w-5 h-5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                      </svg>
                      <span className="text-gray-200 font-medium">{feature}</span>
                    </motion.div>
                  ))}
                </div>
              </div>
            </div>

            {/* Rotating Highlight Benefit */}
            <div className="mb-10 relative z-10">
              <div className="bg-gradient-to-r from-yellow-900/30 to-yellow-800/30 border border-yellow-800/50 rounded-xl p-6 mb-6 text-center">
                <h3 className="text-lg font-bold text-yellow-400 mb-2">Featured Platinum Benefit</h3>
                <AnimatePresence mode="wait">
                  <motion.p
                    key={currentBenefitIndex}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    transition={{ duration: 0.3 }}
                    className="text-yellow-300 text-lg font-medium"
                  >
                    {benefits[currentBenefitIndex]}
                  </motion.p>
                </AnimatePresence>
              </div>
            </div>

            {/* Key Benefits Section */}
            <div className="border border-gray-700 rounded-xl bg-gradient-to-br from-gray-800/50 to-gray-900/50 p-6 mb-10 relative z-10">
              <div className="flex items-center justify-center gap-2 mb-6">
                <svg className="w-6 h-6 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                </svg>
                <h2 className="text-2xl font-bold text-gray-200 text-center">
                  Platinum Membership Benefits
                </h2>
                <svg className="w-6 h-6 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                </svg>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {benefits.map((benefit, index) => (
                  <motion.div
                    key={index}
                    whileHover={{ scale: 1.02 }}
                    className="flex items-start p-4 bg-gray-800/30 rounded-lg border border-gray-700"
                  >
                    <div className="bg-yellow-500 rounded-full p-1.5 mt-1 mr-3 flex-shrink-0">
                      <svg className="w-4 h-4 text-gray-900" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M5 13l4 4L19 7"></path>
                      </svg>
                    </div>
                    <span className="text-gray-300">{benefit}</span>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* Price Section */}
            <motion.div 
              whileHover={{ scale: 1.02 }}
              className="relative overflow-hidden rounded-2xl mb-10"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-yellow-500 to-yellow-600 opacity-20"></div>
              <div className="bg-gradient-to-r from-gray-800 to-gray-900 p-8 text-center relative z-10 border border-gray-700">
                <div className="mb-4">
                  <p className="text-yellow-400 text-sm uppercase tracking-widest mb-1">Annual Membership</p>
                  <div className="flex items-baseline justify-center">
                    <span className="text-6xl font-bold text-yellow-400">CA$500</span>
                    <span className="text-gray-400 ml-2">/year</span>
                  </div>
                  <p className="text-gray-400 mt-2">All premium benefits included</p>
                </div>
                
                <div className="mt-6 flex flex-col sm:flex-row gap-4 justify-center">
                  <motion.button
                    onClick={handlePayNow}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    onHoverStart={() => setIsHovered(true)}
                    onHoverEnd={() => setIsHovered(false)}
                    className="relative overflow-hidden bg-gradient-to-r from-yellow-500 to-yellow-600 hover:from-yellow-600 hover:to-yellow-700 text-gray-900 font-bold py-5 px-8 rounded-xl text-lg transition-all duration-300 shadow-lg"
                  >
                    {isHovered && (
                      <motion.span
                        className="absolute inset-0 bg-gradient-to-r from-transparent via-yellow-300/30 to-transparent"
                        initial={{ x: "-100%" }}
                        animate={{ x: "100%" }}
                        transition={{ duration: 1.5, repeat: Infinity }}
                      />
                    )}
                    <span className="relative z-10 flex items-center justify-center gap-2">
                      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M5 2a2 2 0 00-2 2v14l3.5-2 3.5 2 3.5-2 3.5 2V4a2 2 0 00-2-2H5zm4.707 5.707a1 1 0 00-1.414-1.414l-3 3a1 1 0 000 1.414l3 3a1 1 0 001.414-1.414L8.414 10l1.293-1.293zm4 0a1 1 0 011.414 0l3 3a1 1 0 010 1.414l-3 3a1 1 0 01-1.414-1.414L15.586 10l-1.293-1.293a1 1 0 010-1.414z" clipRule="evenodd" />
                      </svg>
                      Enroll in Platinum
                    </span>
                  </motion.button>
                  
                  <motion.button
                    whileHover={{ scale: 1.03 }}
                    whileTap={{ scale: 0.97 }}
                    onClick={handleGoBack}
                    className="bg-gradient-to-r from-gray-700 to-gray-800 hover:from-gray-800 hover:to-gray-900 text-gray-300 font-semibold py-5 px-8 rounded-xl text-lg transition-colors duration-200 border border-gray-600"
                  >
                    Compare Plans
                  </motion.button>
                </div>
              </div>
            </motion.div>

            {/* Exclusive Invitation */}
            <div className="bg-gradient-to-r from-gray-800 to-gray-900 border border-gray-700 rounded-xl p-6 mb-6 text-center">
              <div className="flex items-center justify-center gap-3 mb-4">
                <div className="w-12 h-12 bg-yellow-500 rounded-full flex items-center justify-center">
                  <svg className="w-6 h-6 text-gray-900" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M13 6a3 3 0 11-6 0 3 3 0 016 0zM18 8a2 2 0 11-4 0 2 2 0 014 0zM14 15a4 4 0 00-8 0v3h8v-3zM6 8a2 2 0 11-4 0 2 2 0 014 0zM16 18v-3a5.972 5.972 0 00-.75-2.906A3.005 3.005 0 0119 15v3h-3zM4.75 12.094A5.973 5.973 0 004 15v3H1v-3a3 3 0 013.75-2.906z" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-yellow-400">Exclusive Invitation</h3>
              </div>
              <p className="text-gray-400">
                Platinum members receive priority invitations to our annual leadership retreat, 
                featuring exclusive workshops with industry pioneers.
              </p>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  )
}

export default Platinum;

export const Head = () => <SEO title="Platinum Membership" pathname="/membership/applyMembership/Platinum" />