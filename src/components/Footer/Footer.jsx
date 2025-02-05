import React from 'react';
import { Link } from 'react-router-dom';
import Logo from '../Logo';

function Footer() {
  return (
    <section className="relative overflow-hidden py-10 bg-gradient-to-r from-gray-700 via-gray-800 to-gray-900 text-white">
      <div className="relative z-10 mx-auto max-w-7xl px-4">
        <div className="-m-6 flex flex-wrap">
          {/* Logo and Copyright */}
          <div className="w-full p-6 md:w-1/2 lg:w-5/12">
            <div className="flex h-full flex-col justify-between">
              <div className="mb-4 inline-flex items-center">
                <Logo width="100px" />
              </div>
              <p className="text-sm text-gray-400">
                &copy; {new Date().getFullYear()} DevUI. All Rights Reserved.
              </p>
              <div className="mt-4 flex space-x-4">
                <a
                  href="https://facebook.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-400 hover:text-blue-500 transition"
                >
                  <i className="fab fa-facebook-f"></i>
                </a>
                <a
                  href="https://twitter.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-400 hover:text-blue-400 transition"
                >
                  <i className="fab fa-twitter"></i>
                </a>
                <a
                  href="https://linkedin.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-400 hover:text-blue-600 transition"
                >
                  <i className="fab fa-linkedin-in"></i>
                </a>
              </div>
            </div>
          </div>

          {/* Company Section */}
          <div className="w-full p-6 md:w-1/2 lg:w-2/12">
            <h3 className="mb-6 text-sm font-semibold uppercase text-gray-400 tracking-wide">
              Company
            </h3>
            <ul>
              <li className="mb-4">
                <Link
                  to="/features"
                  className="text-base font-medium hover:text-gray-200"
                >
                  Features
                </Link>
              </li>
              <li className="mb-4">
                <Link
                  to="/pricing"
                  className="text-base font-medium hover:text-gray-200"
                >
                  Pricing
                </Link>
              </li>
              <li className="mb-4">
                <Link
                  to="/affiliate"
                  className="text-base font-medium hover:text-gray-200"
                >
                  Affiliate Program
                </Link>
              </li>
              <li>
                <Link
                  to="/press-kit"
                  className="text-base font-medium hover:text-gray-200"
                >
                  Press Kit
                </Link>
              </li>
            </ul>
          </div>

          {/* Support Section */}
          <div className="w-full p-6 md:w-1/2 lg:w-2/12">
            <h3 className="mb-6 text-sm font-semibold uppercase text-gray-400 tracking-wide">
              Support
            </h3>
            <ul>
              <li className="mb-4">
                <Link
                  to="/account"
                  className="text-base font-medium hover:text-gray-200"
                >
                  Account
                </Link>
              </li>
              <li className="mb-4">
                <Link
                  to="/help"
                  className="text-base font-medium hover:text-gray-200"
                >
                  Help
                </Link>
              </li>
              <li className="mb-4">
                <Link
                  to="/contact-us"
                  className="text-base font-medium hover:text-gray-200"
                >
                  Contact Us
                </Link>
              </li>
              <li>
                <Link
                  to="/customer-support"
                  className="text-base font-medium hover:text-gray-200"
                >
                  Customer Support
                </Link>
              </li>
            </ul>
          </div>

          {/* Legal Section */}
          <div className="w-full p-6 md:w-1/2 lg:w-3/12">
            <h3 className="mb-6 text-sm font-semibold uppercase text-gray-400 tracking-wide">
              Legals
            </h3>
            <ul>
              <li className="mb-4">
                <Link
                  to="/terms"
                  className="text-base font-medium hover:text-gray-200"
                >
                  Terms &amp; Conditions
                </Link>
              </li>
              <li className="mb-4">
                <Link
                  to="/privacy-policy"
                  className="text-base font-medium hover:text-gray-200"
                >
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link
                  to="/licensing"
                  className="text-base font-medium hover:text-gray-200"
                >
                  Licensing
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Footer;
