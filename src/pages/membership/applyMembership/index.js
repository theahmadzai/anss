import * as React from "react"
import SEO from '../../../components/seo'
import Layout from "../../../components/layout"
import { Button } from 'antd';
import * as styles from "./membershipCard.module.less"
import CheckIcon from "../../../components/checkicon"
import { navigate } from "gatsby";
import PageHeader from "../../../components/page-header";
import { isAuthenticated } from "../../../lib/authenticate";


export default function membershipCard () {

const handleNextPage = (href) => () => {
  navigate(href)
}

const handlePaymentPage = (href) => () => {
  if (!isAuthenticated()) {
    navigate("/login")
    return
  }

  if (href.startsWith('http')) {
    window.open(href, '_blank')
  } else {
    navigate(href)
  }
}

  return(
    <Layout>
        <PageHeader title={"Membership Plans"}></PageHeader>
        <div className="bg-gradient-to-br from-gray-50 to-gray-100 py-16 px-4 sm:px-6 lg:px-8">
            <div className="max-w-7xl mx-auto text-center">
                <h3 className="text-lg text-gray-600 mb-12 max-w-2xl mx-auto">
                    Choose a plan that fits your journey and supports our mission. Each tier offers unique benefits designed to enhance your experience.
                </h3>
            </div>

            {/* First row: Platinum and Gold */}
            <div className="flex flex-wrap justify-center mb-8">
                {/* Card 1: Platinum */}
                <div className="bg-white border-2 border-blue-200 rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300 p-8 flex flex-col justify-between w-full sm:w-[26rem] h-[42rem] m-4 relative overflow-hidden">
                    {/* Premium badge */}
                    <div className="absolute top-4 right-4 bg-blue-600 text-white text-xs font-bold px-3 py-1 rounded-full">
                        PREMIUM
                    </div>
                    
                    <div>
                        <h2 className="font-bold text-2xl text-blue-600 mt-2 mb-1">Platinum</h2>
                        <p className="text-4xl font-bold mt-3 mb-2">
                            CA$500 <span className="text-lg font-normal text-gray-600">/per year</span>
                        </p>
                        <p className="text-gray-600 mb-6 text-sm leading-relaxed">Enjoy the highest level of access, recognition, and exclusive privileges.</p>
                        
                        <div className="border-t border-gray-200 my-6"></div>
                        
                        <ul className="text-sm text-gray-700 space-y-3 mt-[4rem]">
                            <li className="relative pl-8 flex items-start">
                                <CheckIcon className="absolute left-0 top-0.5 w-5 h-5 text-blue-600" />
                                <span className='ml-2 font-medium'>Premium Subscriptions</span>
                            </li>
                            <li className="relative pl-8 flex items-start">
                                <CheckIcon className="absolute left-0 top-0.5 w-5 h-5 text-blue-600" />
                                <span className='ml-2 font-medium'>Priority Recognition</span>
                            </li>
                            <li className="relative pl-8 flex items-start">
                                <CheckIcon className="absolute left-0 top-0.5 w-5 h-5 text-blue-600" />
                                <span className='ml-2 font-medium'>Leadership Opportunities</span>
                            </li>
                            <li className="relative pl-8 flex items-start">
                                <CheckIcon className="absolute left-0 top-0.5 w-5 h-5 text-blue-600" />
                                <span className='ml-2 font-medium'>All GOLD Benefits</span>
                            </li>
                            <li className="relative pl-8 flex items-start">
                                <CheckIcon className="absolute left-0 top-0.5 w-5 h-5 text-blue-600" />
                                <span className='ml-2 font-medium'>Exclusive Events & Content</span>
                            </li>
                        </ul>
                    </div>
                    
                    <div className="mt-8 space-y-3">

                       <Button className={styles.myButton1} onClick={handlePaymentPage("https://www.zeffy.com/ticketing/iqco-platinum-membership")} type="primary" size="large" block>
                          Get Started
                      </Button>

                      <Button className={styles.myReadMe1} onClick={handleNextPage("platinum")} size="large" block>
                          Read More
                      </Button>

                    </div>
                </div>

                {/* Card 2: Gold */}
                <div className="bg-white border-2 border-yellow-200 rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300 p-8 flex flex-col justify-between w-full sm:w-[26rem] h-[42rem] m-4 relative overflow-hidden">
                    {/* Popular badge */}
                    <div className="absolute top-4 right-4 bg-yellow-500 text-white text-xs font-bold px-3 py-1 rounded-full">
                        POPULAR
                    </div>
                    
                    <div>
                        <h2 className="font-bold text-2xl text-yellow-600 mt-2 mb-1">Gold</h2>
                        <p className="text-4xl font-bold mt-3 mb-2">
                            CA$300 <span className="text-lg font-normal text-gray-600">/per year</span>
                        </p>
                        <p className="text-gray-600 mb-6 text-sm leading-relaxed">Step up with priority perks, leadership access, and exclusive rewards.</p>
                        
                        <div className="border-t border-gray-200 my-6"></div>
                        
                        <ul className="text-sm text-gray-700 space-y-3 mt-[4rem]">
                            <li className="relative pl-8 flex items-start">
                                <CheckIcon className="absolute left-0 top-0.5 w-5 h-5 text-yellow-600" />
                                <span className='ml-2 font-medium'>Standard Subscriptions</span>
                            </li>
                            <li className="relative pl-8 flex items-start">
                                <CheckIcon className="absolute left-0 top-0.5 w-5 h-5 text-yellow-600" />
                                <span className='ml-2 font-medium'>Member Recognition</span>
                            </li>
                            <li className="relative pl-8 flex items-start">
                                <CheckIcon className="absolute left-0 top-0.5 w-5 h-5 text-yellow-600" />
                                <span className='ml-2 font-medium'>Leadership Access</span>
                            </li>
                            <li className="relative pl-8 flex items-start">
                                <CheckIcon className="absolute left-0 top-0.5 w-5 h-5 text-yellow-600" />
                                <span className='ml-2 font-medium'>Gold Member Perks</span>
                            </li>
                            <li className="relative pl-8 flex items-start">
                                <CheckIcon className="absolute left-0 top-0.5 w-5 h-5 text-yellow-600" />
                                <span className='ml-2 font-medium'>Special Event Benefits</span>
                            </li>
                        </ul>
                    </div>
                    
                    <div className="mt-8 space-y-3">
                       <Button className={styles.myButton1} onClick={handlePaymentPage("#")} type="primary" size="large" block>
                            Get Started
                        </Button>
                      <Button className={styles.myReadMe1} onClick={handleNextPage("gold")} size="large" block>
                            Read More
                        </Button>
                    </div>
                </div>
            </div>

            {/* Second row: Silver and Bronze */}
            <div className="flex flex-wrap justify-center">
                {/* Card 3: Silver */}
                <div className="bg-white border border-gray-300 rounded-2xl shadow-md hover:shadow-lg transition-shadow duration-300 p-8 flex flex-col justify-between w-full sm:w-[26rem] h-[42rem] m-4">
                    <div>
                        <h2 className="font-bold text-2xl text-gray-700 mt-2 mb-1">Silver</h2>
                        <p className="text-4xl font-bold mt-3 mb-2">
                            CA$120 <span className="text-lg font-normal text-gray-600">/per year</span>
                        </p>
                        <p className="text-gray-600 mb-6 text-sm leading-relaxed">Experience a strong start with core benefits and leadership involvement.</p>
                        
                        <div className="border-t border-gray-200 my-6"></div>
                        
                        <ul className="text-sm text-gray-700 space-y-3 mt-[4rem]">
                            <li className="relative pl-8 flex items-start">
                                <CheckIcon className="absolute left-0 top-0.5 w-5 h-5 text-gray-600" />
                                <span className='ml-2 font-medium'>Basic Subscriptions</span>
                            </li>
                            <li className="relative pl-8 flex items-start">
                                <CheckIcon className="absolute left-0 top-0.5 w-5 h-5 text-gray-600" />
                                <span className='ml-2 font-medium'>Community Recognition</span>
                            </li>
                            <li className="relative pl-8 flex items-start">
                                <CheckIcon className="absolute left-0 top-0.5 w-5 h-5 text-gray-600" />
                                <span className='ml-2 font-medium'>Leadership Participation</span>
                            </li>
                        </ul>
                    </div>
                    
                    <div className="mt-8 space-y-3">
                       <Button className={styles.myButton1} onClick={handlePaymentPage("#")} type="primary" size="large" block>
                            Get Started 
                        </Button>
                      <Button className={styles.myReadMe1} onClick={handleNextPage("silver")} size="large" block>
                            Read More
                        </Button>
                    </div>
                </div>

                {/* Card 4: Bronze */}
                <div className="bg-white border border-gray-300 rounded-2xl shadow-md hover:shadow-lg transition-shadow duration-300 p-8 flex flex-col justify-between w-full sm:w-[26rem] h-[42rem] m-4">
                    <div>
                        <h2 className="font-bold text-2xl text-amber-700 mt-2 mb-1">Bronze</h2>
                        <p className="text-4xl font-bold mt-3 mb-2">
                            CA$60 <span className="text-lg font-normal text-gray-600">/per year</span>
                        </p>
                        <p className="text-gray-600 mb-6 text-sm leading-relaxed"> Join the community with essential tools and member voting rights.</p>
                        
                        <div className="border-t border-gray-200 my-6"></div>
                        
                        <ul className="text-sm text-gray-700 space-y-3 mt-[4rem]">
                            <li className="relative pl-8 flex items-start">
                                <CheckIcon className="absolute left-0 top-0.5 w-5 h-5 text-amber-700" />
                                <span className='ml-2 font-medium'>Essential Subscriptions</span>
                            </li>
                            <li className="relative pl-8 flex items-start">
                                <CheckIcon className="absolute left-0 top-0.5 w-5 h-5 text-amber-700" />
                                <span className='ml-2 font-medium'>Community Voting Rights</span>
                            </li>
                        </ul>
                    </div>
                    
                    <div className="mt-8 space-y-3">
                       <Button className={styles.myButton1} onClick={handlePaymentPage("#")} type="primary" size="large" block>
                            Get Started 
                        </Button>
                      <Button className={styles.myReadMe1} onClick={handleNextPage("bronze")} size="large" block>
                            Read More
                        </Button>
                    </div>
                </div>
            </div>
        </div>

    </Layout>
  )
}

export const Head = () => <SEO title="Apply Membership" pathname="/membership/applyMembership" />