import { FaFacebook, FaTwitter, FaLinkedin, FaInstagram } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-gray-300 py-8">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* News Categories */}
          <div>
            <h3 className="text-lg font-semibold text-white">News Categories</h3>
            <ul className="mt-4 space-y-2">
              <li><a href="#" className="hover:text-blue-400">Politics</a></li>
              <li><a href="#" className="hover:text-blue-400">Sports</a></li>
              <li><a href="#" className="hover:text-blue-400">Technology</a></li>
              <li><a href="#" className="hover:text-blue-400">Health</a></li>
            </ul>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold text-white">Quick Links</h3>
            <ul className="mt-4 space-y-2">
              <li><a href="#" className="hover:text-blue-400">About Us</a></li>
              <li><a href="#" className="hover:text-blue-400">Contact</a></li>
              <li><a href="#" className="hover:text-blue-400">Privacy Policy</a></li>
              <li><a href="#" className="hover:text-blue-400">Terms of Service</a></li>
            </ul>
          </div>

          {/* Contact & Socials */}
          <div>
            <h3 className="text-lg font-semibold text-white">Follow Us</h3>
            <p className="mt-4 text-gray-400">Stay updated with the latest news!</p>
            <div className="flex space-x-4 mt-4">
              <a href="#" className="text-gray-400 hover:text-blue-400 text-xl"><FaFacebook /></a>
              <a href="#" className="text-gray-400 hover:text-blue-400 text-xl"><FaTwitter /></a>
              <a href="#" className="text-gray-400 hover:text-blue-400 text-xl"><FaLinkedin /></a>
              <a href="#" className="text-gray-400 hover:text-blue-400 text-xl"><FaInstagram /></a>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="border-t border-gray-700 mt-8 pt-4 text-center text-sm">
          © {new Date().getFullYear()} News Aggregator. All Rights Reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
