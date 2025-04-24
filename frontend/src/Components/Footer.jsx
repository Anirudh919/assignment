import React from 'react'

const Footer = () => {
  return (
  <footer className="bg-gray-800 text-white py-4 mt-8">
    <div className="container mx-auto text-center">
      <p className="text-sm">© 2025 Hotel Mate. All rights reserved.</p>
      <ul className="flex justify-center space-x-4 mt-2">
        <li><a href="#" className="hover:underline">Privacy Policy</a></li>
        <li><a href="#" className="hover:underline">Terms of Service</a></li>
        <li><a href="#" className="hover:underline">Contact Us</a></li>
      </ul>
    </div>
    </footer>
  )
}

export default Footer
