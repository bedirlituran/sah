import React from 'react'

const Footer = () => {
  return (
    <footer className="bg-black text-white font-sans dark:bg-gray-900">
        
      <div className="container px-4 py-4 mx-auto">
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
          <div className="sm:col-span-2">
            <h1 className="text-lg font-semibold tracking-tight">Subscribe to our newsletter</h1>
            <div className="flex flex-col mt-2 gap-4 space-y-2 md:space-y-0 md:flex-row">
              <input 
                id="email" 
                type="text" 
                className="px-3 py-2 bg-gray-800 text-gray-300 border rounded-md focus:border-blue-400 focus:outline-none focus:ring focus:ring-opacity-40 focus:ring-blue-300" 
                placeholder="Email Address" 
              />
              <button className="w-[50%] px-4 py-2 text-sm font-medium tracking-wider bg-gray-800 rounded-lg hover:bg-gray-700 focus:ring focus:ring-gray-300 focus:ring-opacity-80">
                Subscribe
              </button>
            </div>
          </div>

          <div>
            <p className="font-semibold">Quick Links</p>
            <div className="flex flex-col items-start mt-3 space-y-1 text-sm">
              <p className="hover:underline hover:text-blue-500">Home</p>
              <p className="hover:underline hover:text-blue-500">Who We Are</p>
              <p className="hover:underline hover:text-blue-500">Our Philosophy</p>
            </div>
          </div>

          <div>
            <p className="font-semibold">Industries</p>
            <div className="flex flex-col items-start mt-3 space-y-1 text-sm">
              <p className="hover:underline hover:text-blue-500">Retail & E-Commerce</p>
              <p className="hover:underline hover:text-blue-500">Information Technology</p>
              <p className="hover:underline hover:text-blue-500">Finance & Insurance</p>
            </div>
          </div>
        </div>

        <hr className="my-4 border-gray-700" />

        <div className="sm:flex sm:items-center sm:justify-between">
          <div className="flex gap-2 hover:cursor-pointer">
            <img src="https://www.svgrepo.com/show/303139/google-play-badge-logo.svg" width="100" height="90" alt="Google Play" />
            <img src="https://www.svgrepo.com/show/303128/download-on-the-app-store-apple-logo.svg" width="100" height="90" alt="App Store" />
          </div>
          
          <div className="flex gap-3 mt-4 sm:mt-0 hover:cursor-pointer">
            <img src="https://www.svgrepo.com/show/303114/facebook-3-logo.svg" width="25" height="25" alt="Facebook" />
            <img src="https://www.svgrepo.com/show/303115/twitter-3-logo.svg" width="25" height="25" alt="Twitter" />
            <img src="https://www.svgrepo.com/show/303145/instagram-2-1-logo.svg" width="25" height="25" alt="Instagram" />
            <img src="https://www.svgrepo.com/show/94698/github.svg" width="25" height="25" alt="GitHub" />
            <img src="https://www.svgrepo.com/show/22037/path.svg" width="25" height="25" alt="Pinterest" />
            <img src="https://www.svgrepo.com/show/28145/linkedin.svg" width="25" height="25" alt="LinkedIn" />
            <img src="https://www.svgrepo.com/show/22048/dribbble.svg" width="25" height="25" alt="Dribbble" />
          </div>
        </div>
        <p className="p-1 text-center text-xs sm:text-sm">© 2024 Go Telecom. All rights reserved.</p>
      </div>
    </footer>
  )
}

export default Footer
