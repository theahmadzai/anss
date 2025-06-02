import React from 'react';
import { Button } from 'antd';
import * as styles from "./membershipCard.module.less"

function MembershipCard() {
    return (
        <div className="bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
            <div className="max-w-7xl mx-auto text-center">
                <h1 className="text-3xl font-bold text-gray-900 mb-2">Membership Plans</h1>
                <h3 className="text-gray-600 mb-10">
                    Choose a plan that fits your journey and supports our mission.
                </h3>
            </div>

            {/* Flex container for membership cards */}
            <div className="flex flex-wrap justify-center">
                {/* Card 1: Platinum */}
                <div className="bg-white border rounded-xl shadow p-6 flex flex-col justify-between w-full sm:w-[25rem] h-[38.125rem] m-4">
                    <div>
                        <h2 className="font-bold text-lg text-blue-600">Platinum</h2>
                        <p className="text-3xl font-bold mt-2">
                            $200 <span className="text-base font-normal text-gray-600">/per year</span>
                        </p>
                        <p className="text-gray-600 my-2">Best for professional freelancers and small teams.</p>
                        <ul className="text-sm text-gray-700 space-y-1 mt-4">
                            <li>✅ Subscriptions</li>
                            <li>✅ Recognition</li>
                            <li>✅ Leadership</li>
                            <li>✅ GOLD Benefits</li>
                            <li>✅ Exclusives</li>
                        </ul>
                    </div>
                    <div className="mt-6 space-y-2">
                        <Button  className={styles.myButton1} type="primary" block>
                            Get Started
                        </Button>
                        <Button className={styles.myReadMe1}block>
                            Read More
                        </Button>
                    </div>
                </div>

                {/* Card 2: Gold */}
                <div className="bg-white border rounded-xl shadow p-6 flex flex-col justify-between w-full sm:w-[25rem] h-[38.125rem] m-4">
                    <div>
                        <h2 className="font-bold text-lg text-yellow-500">Gold</h2>
                        <p className="text-3xl font-bold mt-2">
                            $150 <span className="text-base font-normal text-gray-600">/per year</span>
                        </p>
                        <p className="text-gray-600 my-2">Best for professional freelancers and small teams.</p>
                        <ul className="text-sm text-gray-700 space-y-1 mt-4">
                            <li>✅ Subscriptions</li>
                            <li>✅ Recognition</li>
                            <li>✅ Leadership</li>
                            <li>✅ GOLD Perks</li>
                            <li>✅ Event Benefits</li>
                        </ul>
                    </div>
                    <div className="mt-6 space-y-2">
                        <Button  className={styles.myButton1} type="primary" block>
                            Get Started
                        </Button>
                        <Button className={styles.myReadMe1}block>
                            Read More
                        </Button>
                    </div>
                </div>
            </div>
            <div className="flex flex-wrap justify-center">


                {/* Card 3: Silver */}
                <div className="bg-white border rounded-xl shadow p-6 flex flex-col justify-between w-full sm:w-[25rem] h-[38.125rem] m-4">
                    <div>
                        <h2 className="font-bold text-lg text-gray-700">Silver</h2>
                        <p className="text-3xl font-bold mt-2">
                            $100 <span className="text-base font-normal text-gray-600">/per year</span>
                        </p>
                        <p className="text-gray-600 my-2">Great for trying out Frames X components and templates.</p>
                        <ul className="text-sm text-gray-700 space-y-1 mt-4">
                            <li>✅ Subscriptions</li>
                            <li>✅ Recognition</li>
                            <li>✅ Leadership</li>
                        </ul>
                    </div>
                    <div className="mt-6 space-y-2">
                        <Button  className={styles.myButton2} type="primary" block>
                            Get Started 
                        </Button>
                        <Button  className={styles.myReadMe2}type="primary" block>
                            Read More
                        </Button>
                    </div>
                </div>

                {/* Card 4: Bronze */}
                <div className="bg-white border rounded-xl shadow p-6 flex flex-col justify-between w-full sm:w-[25rem] h-[38.125rem] m-4">
                    <div>
                        <h2 className="font-bold text-lg text-gray-700">Bronze</h2>
                        <p className="text-3xl font-bold mt-2">
                            $50 <span className="text-base font-normal text-gray-600">/per year</span>
                        </p>
                        <p className="text-gray-600 my-2">Best for growing large company or enterprise design team.</p>
                        <ul className="text-sm text-gray-700 space-y-1 mt-4">
                            <li>✅ Subscriptions</li>
                            <li>✅ Voting</li>
                        </ul>
                    </div>
                    <div className="mt-6 space-y-2">
                        <Button  className={styles.myButton2} type="primary" block>
                            Get Started 
                        </Button>
                        <Button  className={styles.myReadMe2}type="primary" block>
                            Read More
                        </Button>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default MembershipCard;
