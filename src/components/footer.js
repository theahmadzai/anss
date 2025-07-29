import React from 'react'
import { Row, Col, Typography } from 'antd'
import { FacebookOutlined, TwitterOutlined, InstagramOutlined } from '@ant-design/icons'
import { Phone, MapPin, Heart, ExternalLink } from 'lucide-react'
import useSiteMetadata from '../hooks/use-sitemetadata'
import Subscribe from './subscribe'
import { Link } from 'gatsby'

const { Title, Paragraph } = Typography

const Footer = () => {
  const { title, description, social } = useSiteMetadata()
  
  return (
    <footer className="relative bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 text-white overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-pattern opacity-5"></div>
      
      {/* Decorative Top Wave */}
      <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-[#27458d] via-[#3459a6] to-[#27458d]"></div>
      
      {/* Main Footer Content */}
      <div className="relative z-10 container mx-auto px-6 py-16">
        <Row gutter={[32, 32]} className="mb-12">
          {/* About Section */}
          <Col span={24} md={10}>
            <div className="group">
              <Title 
                level={3} 
                className="text-white mb-6 font-bold text-2xl relative"
              >
                <span className="relative text-white z-10">About {title}</span>
                <div className="absolute -bottom-2 left-0 w-12 h-1 bg-gradient-to-r from-[#27458d] to-[#3459a6] rounded-full transform origin-left group-hover:scale-x-150 transition-transform duration-500"></div>
              </Title>

              <Paragraph className="text-white leading-relaxed text-base mb-6 group-hover:text-white transition-colors duration-300">
                {description}
              </Paragraph>
              
              {/* Contact Info */}
              <div className="space-y-3">
                <div className="flex items-center space-x-3 text-gray-400 hover:text-white transition-colors duration-300 group cursor-pointer">
                  <Phone className="w-5 h-5 text-[#27458d] group-hover:scale-110 transition-transform duration-300" />
                  <span className="text-sm">+1 (647) 349-6786</span>
                </div>
                <div className="flex items-center space-x-3 text-gray-400 hover:text-white transition-colors duration-300 group cursor-pointer">
                  <MapPin className="w-5 h-5 text-[#27458d] group-hover:scale-110 transition-transform duration-300" />
                  <span className="text-sm">100 McLevin Ave, Scarborough, ON</span>
                </div>
              </div>
            </div>
          </Col>

          {/* Newsletter Section */}
          <Col span={24} md={8}>
            <div className="group">
              <Title 
                level={3} 
                className="text-white mb-6 font-bold text-2xl relative"
              >
                <span className="relative text-white z-10">Stay Connected</span>
                <div className="absolute -bottom-2 left-0 w-12 h-1 bg-gradient-to-r from-[#27458d] to-[#3459a6] rounded-full transform origin-left group-hover:scale-x-150 transition-transform duration-500"></div>
              </Title>
              <Paragraph className="text-gray-300 leading-relaxed text-base mb-6 group-hover:text-gray-100 transition-colors duration-300">
                Subscribe to our newsletter and stay updated with our latest news, events, and community initiatives.
              </Paragraph>
              
              {/* Enhanced Subscribe Component Container */}
              <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-6 border border-white/10 hover:border-[#27458d]/30 transition-all duration-500 hover:bg-white/10">
                <Subscribe />
              </div>
            </div>
          </Col>

          {/* Social Links Section */}
          <Col span={24} md={6}>
            <div className="group">
              <Title 
                level={3} 
                className="text-white mb-6 font-bold text-2xl relative"
              >
                <span className="relative text-white z-10">Follow Us</span>
                <div className="absolute -bottom-2 left-0 w-12 h-1 bg-gradient-to-r from-[#27458d] to-[#3459a6] rounded-full transform origin-left group-hover:scale-x-150 transition-transform duration-500"></div>
              </Title>
              <Paragraph className="text-gray-300 leading-relaxed text-base mb-6 group-hover:text-gray-100 transition-colors duration-300">
                Join our community on social media and be part of the conversation. Share your experiences and connect with others.
              </Paragraph>
              
              {/* Enhanced Social Icons */}
              <div className="flex space-x-4">
                <a 
                  href={social.facebook} 
                  rel="noreferrer" 
                  target="_blank"
                  className="group/social relative"
                  title={`${title} Facebook`}
                >
                  <div className="w-12 h-12 bg-gradient-to-br from-blue-600 to-blue-700 rounded-xl flex items-center justify-center transform transition-all duration-300 hover:scale-110 hover:rotate-6 hover:shadow-lg hover:shadow-blue-500/25 group-hover/social:from-blue-500 group-hover/social:to-blue-600">
                    <FacebookOutlined className="text-white text-lg" />
                  </div>
                  <div className="absolute -inset-1 bg-gradient-to-r from-blue-600 to-blue-400 rounded-xl blur opacity-0 group-hover/social:opacity-20 transition-opacity duration-300"></div>
                </a>
                
                <a 
                  href={social.twitter} 
                  rel="noreferrer" 
                  target="_blank"
                  className="group/social relative"
                  title={`${title} Twitter`}
                >
                  <div className="w-12 h-12 bg-gradient-to-br from-sky-500 to-sky-600 rounded-xl flex items-center justify-center transform transition-all duration-300 hover:scale-110 hover:rotate-6 hover:shadow-lg hover:shadow-sky-500/25 group-hover/social:from-sky-400 group-hover/social:to-sky-500">
                    <TwitterOutlined className="text-white text-lg" />
                  </div>
                  <div className="absolute -inset-1 bg-gradient-to-r from-sky-500 to-sky-300 rounded-xl blur opacity-0 group-hover/social:opacity-20 transition-opacity duration-300"></div>
                </a>
                
                <a 
                  href={social.instagram} 
                  rel="noreferrer" 
                  target="_blank"
                  className="group/social relative"
                  title={`${title} Instagram`}
                >
                  <div className="w-12 h-12 bg-gradient-to-br from-pink-500 via-purple-500 to-orange-500 rounded-xl flex items-center justify-center transform transition-all duration-300 hover:scale-110 hover:rotate-6 hover:shadow-lg hover:shadow-pink-500/25 group-hover/social:from-pink-400 group-hover/social:via-purple-400 group-hover/social:to-orange-400">
                    <InstagramOutlined className="text-white text-lg" />
                  </div>
                  <div className="absolute -inset-1 bg-gradient-to-r from-pink-500 via-purple-500 to-orange-500 rounded-xl blur opacity-0 group-hover/social:opacity-20 transition-opacity duration-300"></div>
                </a>
              </div>

              {/* Quick Links */}
              <div className="mt-8">
                <h4 className="text-lg font-semibold text-white mb-4">Quick Links</h4>
                <div className="space-y-2">
                  <Link href="/about/who-we-are" className="flex items-center space-x-2 text-gray-400 hover:text-white transition-colors duration-300 group/link">
                    <ExternalLink className="w-4 h-4 group-hover/link:translate-x-1 transition-transform duration-300" />
                    <span>About Us</span>
                  </Link>
                  <Link href="/membership/applyMembership" className="flex items-center space-x-2 text-gray-400 hover:text-white transition-colors duration-300 group/link">
                    <ExternalLink className="w-4 h-4 group-hover/link:translate-x-1 transition-transform duration-300" />
                    <span>Membership</span>
                  </Link>
                  <Link href="/contact" className="flex items-center space-x-2 text-gray-400 hover:text-white transition-colors duration-300 group/link">
                    <ExternalLink className="w-4 h-4 group-hover/link:translate-x-1 transition-transform duration-300" />
                    <span>Contact</span>
                  </Link>
                </div>
              </div>
            </div>
          </Col>
        </Row>

        {/* Divider */}
        <div className="w-full h-px bg-gradient-to-r from-transparent via-gray-600 to-transparent mb-8"></div>

        {/* Bottom Section with Stats */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
          <div className="text-center group cursor-pointer">
            <div className="text-3xl font-bold text-[#27458d] mb-2 group-hover:scale-110 transition-transform duration-300">500+</div>
            <div className="text-gray-400 text-sm group-hover:text-white transition-colors duration-300">Active Members</div>
          </div>
          <div className="text-center group cursor-pointer">
            <div className="text-3xl font-bold text-[#27458d] mb-2 group-hover:scale-110 transition-transform duration-300">50+</div>
            <div className="text-gray-400 text-sm group-hover:text-white transition-colors duration-300">Events Hosted</div>
          </div>
          <div className="text-center group cursor-pointer">
            <div className="text-3xl font-bold text-[#27458d] mb-2 group-hover:scale-110 transition-transform duration-300">10+</div>
            <div className="text-gray-400 text-sm group-hover:text-white transition-colors duration-300">Years of Service</div>
          </div>
          <div className="text-center group cursor-pointer">
            <div className="text-3xl font-bold text-[#27458d] mb-2 group-hover:scale-110 transition-transform duration-300">1000+</div>
            <div className="text-gray-400 text-sm group-hover:text-white transition-colors duration-300">Lives Impacted</div>
          </div>
        </div>
      </div>

      {/* Copyright Section */}
      <div className="relative z-10 bg-black/20 backdrop-blur-sm border-t border-white/10">
        <div className="container mx-auto px-6 py-6">
          <div className="flex flex-col md:flex-row items-center justify-between space-y-4 md:space-y-0">
            <div className="flex items-center space-x-2 text-gray-400 text-sm">
              <span>&copy; Copyright {new Date().getFullYear()} by ANSS Foundation. All Rights Reserved.</span>
            </div>
            <div className="flex items-center space-x-2 text-gray-400 text-sm">
              <span>Made with</span>
              <Heart className="w-4 h-4 text-red-500 animate-pulse" />
              <span>for the community</span>
            </div>
          </div>
        </div>
      </div>

      <style>{`
        .bg-pattern {
          background-image: radial-gradient(circle at 2px 2px, rgba(255, 255, 255, 0.1) 1px, transparent 0);
          background-size: 30px 30px;
        }
        
        @keyframes float {
          0%, 100% {
            transform: translateY(0px);
          }
          50% {
            transform: translateY(-10px);
          }
        }
        
        .group:hover .animate-float {
          animation: float 3s ease-in-out infinite;
        }
      `}</style>
    </footer>
  )
}

export default Footer