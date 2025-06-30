import React from 'react'
import SEO from '../../../../components/seo'
import Layout from "../../../../components/layout"
import { navigate } from 'gatsby'
import { isAuthenticated } from '../../../../lib/authenticate'

const Silver = () => {
  const handlePayNow = () => {
    if (!isAuthenticated()) {
    navigate("/login")
    return
  }
    navigate("https://www.zeffy.com/ticketing/iqco-platinum-membership")
  };

  const handleGoBack = () => {
    navigate("/membership/applyMembership")
  };

  const benefits = [
    "Subscription to ANSS email listserv (mailing lists)",
    "Access to ANSS What's Up groups",
    "Access to the online membership portal on the ANSS website",
    "Right to vote at General Assembly meetings",
    "One-time welcome message with member photo on ANSS website news, Facebook & Instagram",
    "Get the right to be nominated for the Board of Trustees"
  ];

  return (
    <Layout>
      <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 flex items-center justify-center p-4">
        <div className="bg-white rounded-xl shadow-xl max-w-3xl w-full overflow-hidden">
          {/* Silver Header Banner */}
          <div className="bg-gradient-to-r from-gray-600 via-gray-500 to-gray-600 py-8 px-8 text-center">
            <h1 className="text-3xl font-bold text-white mb-3 tracking-wide">
              Silver Membership
            </h1>
            <div className="inline-block bg-gradient-to-r from-gray-200 to-gray-300 text-gray-900 px-4 py-1 rounded-full text-sm font-semibold">
              Core Support & Engagement
            </div>
          </div>

          <div className="p-8">
            {/* Description */}
            <div className="mb-8 text-center">
              <p className="text-gray-700 leading-relaxed mb-4">
                Our Silver membership provides essential access to the ANSS Foundation community 
                and resources. Perfect for professionals seeking meaningful engagement and 
                foundational networking opportunities.
              </p>
              <p className="text-gray-700 leading-relaxed">
                As a Silver member, you&apos;ll join a network of like-minded individuals with access 
                to our core benefits, voting rights, and pathways to leadership roles.
              </p>
            </div>

            {/* Featured Benefit */}
            <div className="bg-gradient-to-r from-gray-100 to-gray-200 border border-gray-300 rounded-xl p-5 mb-8 text-center">
              <h3 className="text-xl font-bold text-gray-800 mb-2">
                Foundation Membership
              </h3>
              <p className="text-gray-700">
                All the essential benefits to participate in our community and governance
              </p>
            </div>

            {/* Key Benefits Section */}
            <div className="border border-gray-300 rounded-xl bg-gradient-to-br from-gray-50 to-gray-100 p-6 mb-8">
              <h2 className="text-xl font-bold text-gray-900 mb-5 text-center">
                Silver Membership Benefits:
              </h2>
              
              <ul className="space-y-4">
                {benefits.map((benefit, index) => (
                  <li key={index} className="flex items-start">
                    <div className="bg-gray-600 rounded-full p-1 mt-1 mr-3 flex-shrink-0">
                      <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                      </svg>
                    </div>
                    <span className="text-gray-800">{benefit}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Value Proposition */}
            <div className="bg-gray-800 text-white rounded-xl p-5 mb-8 text-center">
              <h3 className="text-xl font-bold text-gray-100 mb-2">
                Building Community Together
              </h3>
              <p className="text-gray-300">
                Your Silver membership directly supports our foundation&apos;s mission to create 
                opportunities and foster connections within our professional community.
              </p>
            </div>

            {/* Price Section */}
            <div className="bg-gradient-to-r from-gray-500 to-gray-600 rounded-xl p-6 mb-8 text-center">
              <p className="text-gray-200 text-sm uppercase tracking-wider mb-1">Annual Membership</p>
              <div className="flex items-baseline justify-center">
                <span className="text-5xl font-bold text-white">CA$120</span>
                <span className="text-gray-200 ml-2">/year</span>
              </div>
              <p className="text-gray-200 text-sm mt-2">Includes all core benefits and participation rights</p>
            </div>

            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
              <button
                onClick={handlePayNow}
                className="flex-1 bg-gradient-to-r from-gray-600 to-gray-700 hover:from-gray-700 hover:to-gray-800 text-white font-semibold py-4 px-6 rounded-lg transition-all duration-200 transform hover:scale-[1.02] shadow-lg"
              >
                Join Silver Membership
              </button>
              
              <button
                onClick={handleGoBack}
                className="flex-1 bg-gradient-to-r from-gray-200 to-gray-300 hover:from-gray-300 hover:to-gray-400 text-gray-800 font-semibold py-4 px-6 rounded-lg transition-colors duration-200"
              >
                View Other Plans
              </button>
            </div>

            {/* Membership Note */}
            <div className="mt-8 text-center text-sm text-gray-500">
              <p>Silver members form the foundation of our community and governance structure</p>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  )
}

export default Silver

export const Head = () => <SEO title="Silver Membership" pathname="/membership/applyMembership/silver" />