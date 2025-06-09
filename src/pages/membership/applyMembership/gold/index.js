import React from 'react'
import SEO from '../../../../components/seo'
import Layout from "../../../../components/layout"
import { navigate } from 'gatsby'

const Gold = () => {
  const handlePayNow = () => {
    navigate("https://www.zeffy.com/ticketing/iqco-platinum-membership")
  };

  const handleGoBack = () => {
    navigate("/membership/applyMembership")
  };

  const benefits = [
    "Subscription to ANSS email listserv (mailing lists)",
    "Access to ANSS What’s Up groups",
    "Access to the online membership portal on the ANSS website",
    "Right to vote at General Assembly meetings",
    "One-time welcome message with a member photo on ANSS website news, Facebook & Instagram",
    "Right to be nominated for the Board of Trustees",
    "Access to community sponsorship programs",
    "Annual recognition of membership on the ANSS Foundation website news, Facebook, Instagram, Twitter, and LinkedIn",
    "Your name, 100-word bio, picture, and LinkedIn profile link will be featured on the GOLD members page of the ANSS Foundation website",
    "Reserved GOLD Members Seats at our seated events, when RSVPed*"
  ];

  return (
    <Layout>
      <div className="min-h-screen bg-gradient-to-br from-yellow-50 to-amber-50 flex items-center justify-center p-4">
        <div className="bg-white rounded-xl shadow-xl max-w-3xl w-full overflow-hidden">
          {/* Gold Header Banner */}
          <div className="bg-gradient-to-r from-yellow-600 via-yellow-500 to-yellow-600 py-8 px-8 text-center">
            <h1 className="text-3xl font-bold text-white mb-3 tracking-wide">
              Gold Membership
            </h1>
            <div className="inline-block bg-gradient-to-r from-amber-200 to-yellow-200 text-gray-900 px-4 py-1 rounded-full text-sm font-semibold">
              Premium Support & Recognition
            </div>
          </div>

          <div className="p-8">
            {/* Description */}
            <div className="mb-8 text-center">
              <p className="text-gray-700 leading-relaxed mb-4">
                Elevate your professional journey with our Gold membership tier. Designed for 
                dedicated members who want enhanced visibility and networking opportunities 
                within the ANSS Foundation community.
              </p>
              <p className="text-gray-700 leading-relaxed">
                Gold members receive special recognition, priority access to key events, and 
                exclusive features that showcase your profile to our entire network.
              </p>
            </div>

            {/* Featured Benefit */}
            <div className="bg-gradient-to-r from-amber-100 to-yellow-100 border border-amber-200 rounded-xl p-5 mb-8 text-center">
              <h3 className="text-xl font-bold text-amber-800 mb-2">
                Featured Profile Highlight
              </h3>
              <p className="text-amber-700">
                Your professional profile will be showcased on our exclusive Gold Members page
              </p>
            </div>

            {/* Key Benefits Section */}
            <div className="border border-amber-200 rounded-xl bg-gradient-to-br from-amber-50 to-yellow-50 p-6 mb-8">
              <h2 className="text-xl font-bold text-gray-900 mb-5 text-center">
                Gold Membership Benefits:
              </h2>
              
              <ul className="space-y-4">
                {benefits.map((benefit, index) => (
                  <li key={index} className="flex items-start">
                    <div className="bg-amber-600 rounded-full p-1 mt-1 mr-3 flex-shrink-0">
                      <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                      </svg>
                    </div>
                    <span className="text-gray-800">{benefit}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Price Section */}
            <div className="bg-gradient-to-r from-amber-500 to-yellow-600 rounded-xl p-6 mb-8 text-center">
              <p className="text-amber-100 text-sm uppercase tracking-wider mb-1">Annual Membership</p>
              <div className="flex items-baseline justify-center">
                <span className="text-5xl font-bold text-white">CA$300</span>
                <span className="text-amber-100 ml-2">/year</span>
              </div>
              <p className="text-amber-100 text-sm mt-2">Includes all Gold-tier benefits and recognition</p>
            </div>

            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
              <button
                onClick={handlePayNow}
                className="flex-1 bg-gradient-to-r from-amber-500 to-yellow-600 hover:from-amber-600 hover:to-yellow-700 text-white font-semibold py-4 px-6 rounded-lg transition-all duration-200 transform hover:scale-[1.02] shadow-lg"
              >
                Join Gold Membership
              </button>
              
              <button
                onClick={handleGoBack}
                className="flex-1 bg-gradient-to-r from-gray-600 to-gray-700 hover:from-gray-700 hover:to-gray-800 text-white font-semibold py-4 px-6 rounded-lg transition-colors duration-200"
              >
                Compare Plans
              </button>
            </div>

            {/* Membership Note */}
            <div className="mt-8 text-center text-sm text-gray-500">
              <p>* RSVP required at least 72 hours prior to event for reserved seating</p>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  )
}

export default Gold

export const Head = () => <SEO title="Gold Membership" pathname="/membership/applyMembership/gold" />