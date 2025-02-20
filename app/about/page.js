import React from 'react'

const page = () => {
return (
    <div className="min-h-screen bg-gray-100 py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
            <h1 className="text-4xl font-bold text-center text-gray-900 mb-8">
                About Us
            </h1>
            <div className="bg-white shadow-lg rounded-lg p-8">
                <h2 className="text-2xl font-semibold mb-4 text-gray-800">
                    Welcome to Our Platform
                </h2>
                <p className="text-gray-600 mb-6 leading-relaxed">
                    We are dedicated to providing the best URL shortening service. 
                    Our platform helps you create shorter, more manageable links 
                    while tracking their performance.
                </p>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="border-l-4 border-blue-500 pl-4">
                        <h3 className="font-bold text-lg mb-2">Our Mission</h3>
                        <p className="text-gray-600">
                            To simplify link sharing and provide powerful analytics 
                            for better digital communication.
                        </p>
                    </div>
                    <div className="border-l-4 border-green-500 pl-4">
                        <h3 className="font-bold text-lg mb-2">Why Choose Us</h3>
                        <p className="text-gray-600">
                            Fast, reliable, and secure link shortening with advanced 
                            tracking capabilities.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    </div>
)
}

export default page