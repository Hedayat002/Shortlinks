import React from 'react'

const page = () => {
return (
    
    <div className="flex min-h-[50%] flex-col items-center justify-center p-4">
        <div className="w-full max-w-md space-y-8 rounded-lg bg-white p-6 shadow-md">
            <h2 className="text-center text-3xl font-bold text-gray-900">Contact Us</h2>
            <form className="mt-8 space-y-6">
                <div className="space-y-4">
                    <div>
                        <label className="text-sm font-medium text-gray-700">Name</label>
                        <input
                            type="text"
                            className="mt-1 w-full rounded-md border p-2"
                            placeholder="Your name"
                        />
                    </div>
                    <div>
                        <label className="text-sm font-medium text-gray-700">Email</label>
                        <input
                            type="email"
                            className="mt-1 w-full rounded-md border p-2"
                            placeholder="your@email.com"
                        />
                    </div>
                    <div>
                        <label className="text-sm font-medium text-gray-700">Message</label>
                        <textarea
                            className="mt-1 w-full rounded-md border p-2"
                            rows="4"
                            placeholder="Your message"
                        />
                    </div>
                </div>
                <button
                    type="submit"
                    className="w-full rounded-lg bg-purple-600 px-4 py-2 text-white hover:bg-purple-700"
                >
                    Send Message
                </button>
            </form>
        </div>
        </div>


)
}

export default page