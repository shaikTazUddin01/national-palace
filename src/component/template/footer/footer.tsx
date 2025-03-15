import { FaFacebookF, FaWhatsapp, FaYoutube } from "react-icons/fa";
import { MdEmail, MdPhone } from "react-icons/md";

const Footer = () => {
  const date = new Date();

  return (
    <div className="bg-[#0b1b2e] text-white">
      <footer className="max-w-7xl mx-auto px-4 py-10">
        {/* Top Section */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pb-8 border-b border-gray-700">
          {/* Support Section */}
          <div>
            <h3 className="text-lg font-bold uppercase mb-4">Support</h3>
            <div className="flex items-center gap-4 mb-4">
              <div className="p-4 bg-[#16263b] rounded-full">
                <MdPhone className="text-2xl text-white" />
              </div>
              <div>
                <p className="text-sm text-gray-400">9AM - 8PM</p>
                <p className="text-lg font-bold">12345</p>
              </div>
            </div>
            <div className="flex items-center gap-4">
              <div className="p-4 bg-[#16263b] rounded-full">
                <MdEmail className="text-2xl text-white" />
              </div>
              <div>
                <p className="text-lg font-bold">Find Our Stores</p>
              </div>
            </div>
          </div>

          {/* About Us Section */}
          <div>
            <h3 className="text-lg font-bold uppercase mb-4">Menu</h3>
            <ul className="space-y-2 text-sm text-gray-400">
              <li>
                <a href="/" className="hover:text-white">
                  Home
                </a>
              </li>
              <li>
                <a href="/products" className="hover:text-white">
                  All Products
                </a>
              </li>
              <li>
                <a href="/cart" className="hover:text-white">
                  See Your Cart
                </a>
              </li>
              <li>
                <a href="/about" className="hover:text-white">
                  Privacy Policy
                </a>
              </li>
              <li>
                <a href="/user/dashboard" className="hover:text-white">
                  User Profile
                </a>
              </li>
            </ul>
          </div>

          {/* Stay Connected Section */}
          <div>
            <h3 className="text-lg font-bold uppercase mb-4">Stay Connected</h3>
            <p className="text-sm text-gray-400">
              National-Palace Ltd <br />
              24 RN Road, Jessore-7400 Bangladesh
            </p>
            <p className="mt-4 text-sm text-gray-400">
              Email:{" "}
              <a href="mailto:webteam@epicfit.com" className="hover:text-white">
                webteam@epicfit.com
              </a>
            </p>
            <div className="flex items-center gap-4 mt-4">
              <a href="#" className="p-3 bg-[#16263b] rounded-full">
                <FaWhatsapp className="text-lg text-white" />
              </a>
              <a href="#" className="p-3 bg-[#16263b] rounded-full">
                <FaFacebookF className="text-lg text-white" />
              </a>
              <a href="#" className="p-3 bg-[#16263b] rounded-full">
                <FaYoutube className="text-lg text-white" />
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="flex flex-col md:flex-row items-center justify-between mt-6 text-gray-400 text-sm">
          <p>&#169; {date.getFullYear()} National-Palace Ltd | All rights reserved</p>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
