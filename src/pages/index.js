import React from 'react'
import { graphql, Link } from 'gatsby'
import { GatsbyImage, getImage } from 'gatsby-plugin-image'
import { Carousel, List, Card, Typography, Row, Col } from 'antd'
import { User, ArrowRight, Calendar, MapPin } from 'lucide-react'
import SEO from '../components/seo'
import Layout from '../components/layout'

const { Title, Paragraph } = Typography

export const query = graphql`
  query {
    allContentfulSlide {
      nodes {
        id
        title
        url
        image {
          gatsbyImageData(
            layout: CONSTRAINED
            placeholder: DOMINANT_COLOR
            quality: 90
            formats: [AUTO, WEBP]
          )
        }
      }
    }

    allContentfulNews(sort: { date: DESC }, limit: 3) {
      nodes {
        id
        title
        slug
        tags
        date
        image {
          gatsbyImageData(
            layout: CONSTRAINED
            placeholder: DOMINANT_COLOR
            aspectRatio: 1
            quality: 90
            formats: [AUTO, WEBP]
          )
        }
        body {
          body
        }
      }
    }

    allContentfulEvent(sort: { date: DESC }, limit: 3) {
      nodes {
        id
        title
        slug
        tags
        location
        date
        image {
          gatsbyImageData(
            layout: FULL_WIDTH
            placeholder: DOMINANT_COLOR
            quality: 90
            formats: [AUTO, WEBP]
          )
        }
        body {
          body
        }
      }
    }
  }
`

const IndexPage = ({
  data: {
    allContentfulSlide: { nodes: slides },
    allContentfulNews: { nodes: news },
    allContentfulEvent: { nodes: events },
  },
}) => {
  return (
    <Layout>
      {/* Enhanced Hero Carousel */}
      <div className="hero-section relative overflow-hidden">
        <Carousel 
          autoplay 
          dotPosition="bottom" 
          rows={1} 
          effect="fade"
          style={{ background: 'linear-gradient(135deg, #27458d 0%, #1d3876 100%)' }}
        >
          {slides.map(slide => (
            <div key={slide.id} className="slide-container">
              <div className="relative">
                <GatsbyImage
                  className="slideImage transform transition-all duration-700 hover:scale-105"
                  image={getImage(slide.image)}
                  alt={slide.title}
                  objectFit="cover"
                  style={{ height: '500px', filter: 'brightness(0.8)' }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                <div className="absolute bottom-0 left-0 right-0 p-8 text-center">
                  <Link 
                    to={slide.url} 
                    rel="nofollow" 
                    target="_blank"
                    className="group inline-block"
                  >
                    <Title
                      level={1}
                      className="text-white mb-4 transform transition-all duration-500 group-hover:scale-105 group-hover:text-yellow-300"
                      style={{
                        margin: 0,
                        fontSize: 'clamp(1.5rem, 4vw, 3rem)',
                        fontWeight: 700,
                        textShadow: '2px 2px 4px rgba(0,0,0,0.5)',
                      }}
                    >
                      {slide.title}
                    </Title>
                    <div className="flex items-center justify-center space-x-2 text-white/90 group-hover:text-yellow-300 transition-colors duration-300">
                      <span>Learn More</span>
                      <ArrowRight className="w-5 h-5 transform group-hover:translate-x-2 transition-transform duration-300" />
                    </div>
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </Carousel>
      </div>

      {/* Enhanced Wave Animation */}
      <div className="wavesWrapper relative -mt-1">
        <div className="waves">
          <svg viewBox="0 0 800 600" className="animate-pulse">
            <path
              d="M0,13 C66.6666667,-3.66666667 133.333333,-3.66666667 200,13 C266.666667,29.6666667 333.333333,29.6666667 400,13 C466.666667,-3.66666667 533.333333,-3.66666667 600,13 C666.666667,29.6666667 733.333333,29.6666667 800,13 L800,563 L0,563 L0,13 Z"
              fill="#27458D"
              className="wave-1"
            />
            <path
              d="M0,13 C66.6666667,-3.66666667 133.333333,-3.66666667 200,13 C266.666667,29.6666667 333.333333,29.6666667 400,13 C466.666667,-3.66666667 533.333333,-3.66666667 600,13 C666.666667,29.6666667 733.333333,29.6666667 800,13 L800,563 L0,563 L0,13 Z"
              fill="#3459a6"
              className="wave-2"
            />
            <path
              d="M0,13 C66.6666667,-3.66666667 133.333333,-3.66666667 200,13 C266.666667,29.6666667 333.333333,29.6666667 400,13 C466.666667,-3.66666667 533.333333,-3.66666667 600,13 C666.666667,29.6666667 733.333333,29.6666667 800,13 L800,563 L0,563 L0,13 Z"
              fill="#27458D"
              className="wave-3"
            />
          </svg>
        </div>
      </div>

      {/* Modern CTA Section */}
      <div className="cta-section py-16 bg-gradient-to-br from-gray-50 to-white relative overflow-hidden">
        <div className="absolute inset-0 bg-pattern opacity-5"></div>
        <div className="container mx-auto px-4 text-center relative z-10">
          <div className="max-w-2xl mx-auto mb-8">
            <h2 className="text-4xl font-bold text-gray-800 mb-4">Join Our Community</h2>
            <p className="text-lg text-gray-600 mb-8">
              Become part of a thriving community dedicated to making a positive impact. 
              Connect, contribute, and grow with like-minded individuals.
            </p>
          </div>
          
          <Link to="/membership/applyMembership" className="group inline-block">
            <button className="membership-btn relative overflow-hidden bg-gradient-to-r from-[#27458d] to-[#1d3876] text-white text-lg font-semibold py-4 px-8 rounded-full shadow-2xl transform transition-all duration-300 hover:scale-105 hover:shadow-3xl group-hover:from-[#1d3876] group-hover:to-[#27458d]">
              <div className="absolute inset-0 bg-white/20 transform -skew-x-12 -translate-x-full group-hover:translate-x-full transition-transform duration-700"></div>
              <div className="relative flex items-center space-x-3">
                <User className="h-6 w-6 transform group-hover:rotate-12 transition-transform duration-300" />
                <span>Become Our Member</span>
                <ArrowRight className="h-5 w-5 transform group-hover:translate-x-2 transition-transform duration-300" />
              </div>
            </button>
          </Link>
        </div>
      </div>

      {/* Enhanced Mission Section */}
      <div className="mission-section py-20 bg-white relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-50/50 to-transparent"></div>
        <div className="container mx-auto px-6 relative z-10">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-4">Our Foundation</h2>
            <div className="w-24 h-1 bg-gradient-to-r from-[#27458d] to-[#3459a6] mx-auto rounded-full"></div>
          </div>
          
          <Row gutter={[48, 48]} justify="center">
            <Col span={24} sm={12} md={8}>
              <div className="homeCard group bg-white rounded-2xl p-8 shadow-lg border border-gray-100 transform transition-all duration-500 hover:scale-105 hover:shadow-2xl hover:border-[#27458d]/20 relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-[#27458d]/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                <div className="relative z-10">
                  <div className="w-16 h-16 bg-gradient-to-br from-[#27458d] to-[#3459a6] rounded-xl flex items-center justify-center mb-6 transform group-hover:rotate-6 transition-transform duration-300">
                    <span className="text-2xl text-white font-bold">V</span>
                  </div>
                  <h3 className="text-2xl font-bold text-white mb-4 group-hover:text-white transition-colors duration-300">Vision</h3>
                  <p className="text-white leading-relaxed">Prosperous, connected and self-reliant communities</p>
                </div>
              </div>
            </Col>

            <Col span={24} sm={12} md={8}>
              <div className="homeCard group bg-white rounded-2xl p-8 shadow-lg border border-gray-100 transform transition-all duration-500 hover:scale-105 hover:shadow-2xl hover:border-[#27458d]/20 relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-[#27458d]/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                <div className="relative z-10">
                  <div className="w-16 h-16 bg-gradient-to-br from-[#3459a6] to-[#27458d] rounded-xl flex items-center justify-center mb-6 transform group-hover:rotate-6 transition-transform duration-300">
                    <span className="text-2xl text-white font-bold">M</span>
                  </div>
                  <h3 className="text-2xl font-bold text-white mb-4 group-hover:text-white transition-colors duration-300">Mission</h3>
                  <p className="text-white leading-relaxed">To provide quality social services for concerned communities</p>
                </div>
              </div>
            </Col>

            <Col span={24} sm={12} md={8}>
              <div className="homeCard group bg-white rounded-2xl p-8 shadow-lg border border-gray-100 transform transition-all duration-500 hover:scale-105 hover:shadow-2xl hover:border-[#27458d]/20 relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-[#27458d]/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                <div className="relative z-10">
                  <div className="w-16 h-16 bg-gradient-to-br from-[#27458d] to-[#3459a6] rounded-xl flex items-center justify-center mb-6 transform group-hover:rotate-6 transition-transform duration-300">
                    <span className="text-2xl text-white font-bold">C</span>
                  </div>
                  <h3 className="text-2xl font-bold text-white mb-4 group-hover:text-white transition-colors duration-300">Core Values</h3>
                  <ul className="text-white space-y-2">
                    <li className="flex items-center space-x-2 group-hover:translate-x-2 transition-transform duration-300">
                      <div className="w-2 h-2 bg-[#27458d] rounded-full"></div>
                      <span>Integrity</span>
                    </li>
                    <li className="flex items-center space-x-2 group-hover:translate-x-2 transition-transform duration-300 delay-75">
                      <div className="w-2 h-2 bg-[#3459a6] rounded-full"></div>
                      <span>Transparency</span>
                    </li>
                    <li className="flex items-center space-x-2 group-hover:translate-x-2 transition-transform duration-300 delay-150">
                      <div className="w-2 h-2 bg-[#27458d] rounded-full"></div>
                      <span>Professionalism</span>
                    </li>
                    <li className="flex items-center space-x-2 group-hover:translate-x-2 transition-transform duration-300 delay-225">
                      <div className="w-2 h-2 bg-[#3459a6] rounded-full"></div>
                      <span>Diversity</span>
                    </li>
                  </ul>
                </div>
              </div>
            </Col>
          </Row>
        </div>
      </div>

      {/* Enhanced News Section */}
      <div className="news-section py-20 bg-gradient-to-br from-gray-50 to-white">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <Title level={2} className="text-4xl font-bold text-gray-800 mb-4">
              Latest News
            </Title>
            <div className="w-24 h-1 bg-gradient-to-r from-[#27458d] to-[#3459a6] mx-auto rounded-full mb-4"></div>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Stay updated with our latest news, announcements, and community highlights.
            </p>
          </div>

          <List
            grid={{
              gutter: [32, 32],
              column: 3,
              xs: 1,
              sm: 2,
              md: 3,
            }}
            dataSource={news.slice(Math.max(news.length - 3, 0))}
            renderItem={newsItem => (
              <List.Item>
                <Link to={'/news/' + newsItem.slug} className="group block">
                  <Card
                    className="news-card h-full border-0 shadow-lg rounded-2xl overflow-hidden transform transition-all duration-500 hover:scale-105 hover:shadow-2xl"
                    cover={
                      <div className="relative overflow-hidden">
                        <GatsbyImage
                          style={{ height: '250px' }}
                          image={getImage(newsItem.image)}
                          alt={newsItem.title}
                          className="transform transition-all duration-700 group-hover:scale-110"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                        <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm rounded-full px-3 py-1 text-sm font-medium text-[#27458d] transform translate-x-full group-hover:translate-x-0 transition-transform duration-500">
                          <Calendar className="w-4 h-4 inline mr-1" />
                          {new Date(newsItem.date).toLocaleDateString()}
                        </div>
                      </div>
                    }
                  >
                    <Card.Meta
                      title={
                        <h3 className="text-lg font-bold text-gray-800 group-hover:text-[#27458d] transition-colors duration-300 line-clamp-2">
                          {newsItem.title}
                        </h3>
                      }
                      description={
                        <div>
                          <Paragraph 
                            ellipsis={{ rows: 3 }} 
                            className="text-gray-600 mb-4"
                          >
                            {newsItem.body.body}
                          </Paragraph>
                          <div className="flex items-center text-[#27458d] font-medium group-hover:translate-x-2 transition-transform duration-300">
                            <span>Read More</span>
                            <ArrowRight className="w-4 h-4 ml-2" />
                          </div>
                        </div>
                      }
                    />
                  </Card>
                </Link>
              </List.Item>
            )}
          />
        </div>
      </div>

      {/* Enhanced Events Section */}
      <div className="events-section py-20 bg-white">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <Title level={2} className="text-4xl font-bold text-gray-800 mb-4">
              Upcoming Events
            </Title>
            <div className="w-24 h-1 bg-gradient-to-r from-[#27458d] to-[#3459a6] mx-auto rounded-full mb-4"></div>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Join us at our upcoming events and be part of meaningful community activities.
            </p>
          </div>

          <List
            grid={{
              gutter: [32, 32],
              column: 3,
              xs: 1,
              sm: 2,
              md: 3,
            }}
            dataSource={events.slice(Math.max(events.length - 3, 0))}
            renderItem={event => (
              <List.Item>
                <Link to={'/events/' + event.slug} className="group block">
                  <Card
                    className="event-card h-full border-0 shadow-lg rounded-2xl overflow-hidden transform transition-all duration-500 hover:scale-105 hover:shadow-2xl"
                    cover={
                      <div className="relative overflow-hidden">
                        <GatsbyImage
                          style={{ height: '250px' }}
                          image={getImage(event.image)}
                          alt={event.title}
                          className="transform transition-all duration-700 group-hover:scale-110"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                        <div className="absolute top-4 left-4 bg-[#27458d] text-white rounded-full px-3 py-1 text-sm font-medium transform -translate-x-full group-hover:translate-x-0 transition-transform duration-500">
                          {new Date(event.date).toLocaleDateString()}
                        </div>
                      </div>
                    }
                  >
                    <Card.Meta
                      title={
                        <h3 className="text-lg font-bold text-gray-800 group-hover:text-[#27458d] transition-colors duration-300 line-clamp-2">
                          {event.title}
                        </h3>
                      }
                      description={
                        <div>
                          <div className="flex items-center text-gray-500 text-sm mb-3 space-x-4">
                            <div className="flex items-center">
                              <Calendar className="w-4 h-4 mr-1" />
                              {new Date(event.date).toLocaleDateString()}
                            </div>
                            {event.location && (
                              <div className="flex items-center">
                                <MapPin className="w-4 h-4 mr-1" />
                                {event.location}
                              </div>
                            )}
                          </div>
                          <Paragraph 
                            ellipsis={{ rows: 2 }} 
                            className="text-gray-600 mb-4"
                          >
                            {event.body.body}
                          </Paragraph>
                          <div className="flex items-center text-[#27458d] font-medium group-hover:translate-x-2 transition-transform duration-300">
                            <span>Learn More</span>
                            <ArrowRight className="w-4 h-4 ml-2" />
                          </div>
                        </div>
                      }
                    />
                  </Card>
                </Link>
              </List.Item>
            )}
          />
        </div>
      </div>

      <style>{`
        .hero-section {
          position: relative;
        }
        
        .slide-container {
          position: relative;
        }
        
        .membership-btn {
          background: linear-gradient(135deg, #27458d 0%, #1d3876 100%);
          box-shadow: 0 10px 30px rgba(39, 69, 141, 0.3);
        }
        
        .membership-btn:hover {
          box-shadow: 0 20px 40px rgba(39, 69, 141, 0.4);
        }
        
        .wave-1 {
          animation: wave 8s ease-in-out infinite;
        }
        
        .wave-2 {
          animation: wave 6s ease-in-out infinite reverse;
        }
        
        .wave-3 {
          animation: wave 10s ease-in-out infinite;
        }
        
        @keyframes wave {
          0%, 100% {
            transform: translateX(0);
          }
          50% {
            transform: translateX(-20px);
          }
        }
        
        .bg-pattern {
          background-image: radial-gradient(circle at 1px 1px, rgba(39, 69, 141, 0.1) 1px, transparent 0);
          background-size: 20px 20px;
        }
        
        .news-card:hover,
        .event-card:hover {
          transform: translateY(-8px);
        }
        
        .line-clamp-2 {
          display: -webkit-box;
          -webkit-line-clamp: 2;
          -webkit-box-orient: vertical;
          overflow: hidden;
        }
        
        @media (max-width: 768px) {
          .container {
            padding-left: 1rem;
            padding-right: 1rem;
          }
        }
      `}</style>
    </Layout>
  )
}

export default IndexPage

export const Head = () => <SEO title="Home" pathname="/" />