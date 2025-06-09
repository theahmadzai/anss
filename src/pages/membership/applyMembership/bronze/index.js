import React from 'react'
import SEO from '../../../../components/seo'
import Layout from "../../../../components/layout"
import { navigate } from 'gatsby'

const Bronze = () => {
  const handlePayNow = () => {
    navigate("https://www.zeffy.com/ticketing/iqco-platinum-membership")
  };

  const handleGoBack = () => {
    navigate("/membership/applyMembership")
  };

  const benefits = [
    "Subscription to ANSS email listserv (mailing lists)",
    "Access to ANSS What's Up groups",
    "Access to the online membership portal on the ANSS website",
    "Right to vote at General Assembly meetings"
  ];

  return (
    <Layout>
      <div className="min-h-screen bg-gradient-to-br from-amber-50 to-orange-50 flex items-center justify-center p-4">
        <div className="bg-white rounded-xl shadow-xl max-w-3xl w-full overflow-hidden">
          {/* Bronze Header Banner */}
          <div className="bg-gradient-to-r from-amber-800 via-amber-700 to-amber-800 py-8 px-8 text-center">
            <h1 className="text-3xl font-bold text-white mb-3 tracking-wide">
              Bronze Membership
            </h1>
            <div className="inline-block bg-gradient-to-r from-amber-300 to-yellow-300 text-gray-900 px-4 py-1 rounded-full text-sm font-semibold">
              Foundational Access & Participation
            </div>
          </div>

          <div className="p-8">
            {/* Description */}
            <div className="mb-8 text-center">
              <p className="text-gray-700 leading-relaxed mb-4">
                Start your journey with our Bronze membership - the essential entry point to 
                the ANSS Foundation community. Gain access to our core resources and participate 
                in shaping our organization&#39;s future.
              </p>
              <p className="text-gray-700 leading-relaxed">
                As a Bronze member, you&#39;ll connect with fellow professionals, stay informed 
                about industry developments, and have a voice in our community decisions.
              </p>
            </div>

            {/* Value Highlight */}
            <div className="bg-gradient-to-r from-amber-100 to-orange-100 border border-amber-200 rounded-xl p-5 mb-8 text-center">
              <h3 className="text-xl font-bold text-amber-800 mb-2">
                Community Starter Package
              </h3>
              <p className="text-amber-700">
                All the essential tools to connect, participate, and grow within our network
              </p>
            </div>

            {/* Key Benefits Section */}
            <div className="border border-amber-200 rounded-xl bg-gradient-to-br from-amber-50 to-orange-50 p-6 mb-8">
              <h2 className="text-xl font-bold text-gray-900 mb-5 text-center">
                Bronze Membership Benefits:
              </h2>
              
              <ul className="space-y-4">
                {benefits.map((benefit, index) => (
                  <li key={index} className="flex items-start">
                    <div className="bg-amber-700 rounded-full p-1 mt-1 mr-3 flex-shrink-0">
                      <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                      </svg>
                    </div>
                    <span className="text-gray-800">{benefit}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Community Impact */}
            <div className="bg-amber-800 text-white rounded-xl p-5 mb-8 text-center">
              <h3 className="text-xl font-bold text-amber-100 mb-2">
                Your Foundation for Growth
              </h3>
              <p className="text-amber-200">
                Bronze membership provides the essential foundation to build your professional 
                network and participate in our community&#39;s governance. It&#39;s the perfect starting 
                point for your journey with us.
              </p>
            </div>

            {/* Price Section */}
            <div className="bg-gradient-to-r from-amber-600 to-amber-700 rounded-xl p-6 mb-8 text-center">
              <p className="text-amber-100 text-sm uppercase tracking-wider mb-1">Annual Membership</p>
              <div className="flex items-baseline justify-center">
                <span className="text-5xl font-bold text-white">CA$60</span>
                <span className="text-amber-100 ml-2">/year</span>
              </div>
              <p className="text-amber-100 text-sm mt-2">Affordable access to our core community benefits</p>
            </div>

            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
              <button
                onClick={handlePayNow}
                className="flex-1 bg-gradient-to-r from-amber-600 to-amber-700 hover:from-amber-700 hover:to-amber-800 text-white font-semibold py-4 px-6 rounded-lg transition-all duration-200 transform hover:scale-[1.02] shadow-lg"
              >
                Join Bronze Membership
              </button>
              
              <button
                onClick={handleGoBack}
                className="flex-1 bg-gradient-to-r from-gray-200 to-gray-300 hover:from-gray-300 hover:to-gray-400 text-gray-800 font-semibold py-4 px-6 rounded-lg transition-colors duration-200"
              >
                Compare Plans
              </button>
            </div>

            {/* Membership Note */}
            <div className="mt-8 text-center text-sm text-amber-700">
              <p>Bronze membership provides the essential foundation for engagement with our community</p>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  )
}

export default Bronze

export const Head = () => <SEO title="Bronze Membership" pathname="/membership/applyMembership/bronze" />