const Footer = () => {
    return (
      <footer className="bg-black text-white mt-12">
        <div className="container mx-auto px-6">
          {/* Grid Layout */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* About Section */}
            <div>
              <h3 className="text-xl font-bold mb-4">About Us</h3>
              <p className="text-gray-400">
                BarberShop is your go-to destination for premium grooming services. We pride ourselves on delivering exceptional quality and customer satisfaction.
              </p>
            </div>
  
            {/* Contact Section */}
            <div>
              <h3 className="text-xl font-bold mb-4">Contact Us</h3>
              <ul className="space-y-2 text-gray-400">
                <li>
                  <span className="font-medium">Address:</span> 123 Barber Street, Cityville, Country
                </li>
                <li>
                  <span className="font-medium">Phone:</span> +123 456 7890
                </li>
                <li>
                  <span className="font-medium">Email:</span> info@barbershop.com
                </li>
              </ul>
            </div>
  
            {/* Social Media Section */}
            <div>
              <h3 className="text-xl font-bold mb-4">Follow Us</h3>
              <div className="flex space-x-4">
                {/* Facebook */}
                <a
                  href="https://facebook.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-400 hover:text-white transition-colors duration-300"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-6 w-6"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M12 2v2m0 16v2m-6-9h12a2 2 0 012 2v4a2 2 0 01-2 2H6a2 2 0 01-2-2v-4a2 2 0 012-2z"
                    />
                  </svg>
                </a>
  
                {/* Instagram */}
                <a
                  href="https://instagram.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-400 hover:text-white transition-colors duration-300"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-6 w-6"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M12 2c-3.314 0-6 2.686-6 6v7c0 3.314 2.686 6 6 6h7c3.314 0 6-2.686 6-6V8c0-3.314-2.686-6-6-6zm0 14c-2.206 0-4-1.794-4-4s1.794-4 4-4 4 1.794 4 4-1.794 4-4 4zm6-10h-2v2h2v-2zm0 4h-2v6h2v-6z"
                    />
                  </svg>
                </a>
  
                {/* Twitter */}
                <a
                  href="https://twitter.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-400 hover:text-white transition-colors duration-300"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-6 w-6"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M8 12c-2.206 0-4 1.794-4 4s1.794 4 4 4 4-1.794 4-4-1.794-4-4-4zm10 0c-2.206 0-4 1.794-4 4s1.794 4 4 4 4-1.794 4-4-1.794-4-4-4z"
                    />
                  </svg>
                </a>
              </div>
            </div>
          </div>
  
          {/* Copyright Section */}
          <div className="mt-8 border-t border-gray-700 pt-6 text-center text-gray-400">
            <p>&copy; BrayBarber. Create By DulsInspirations.</p>
          </div>
        </div>
      </footer>
    );
  };
  
  export default Footer;