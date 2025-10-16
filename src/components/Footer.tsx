import Link from 'next/link';
import {
  MapPinIcon,
  PhoneIcon,
  EnvelopeIcon,
  ClockIcon,
  HeartIcon,
  ShieldCheckIcon,
  TruckIcon,
  CreditCardIcon
} from '@heroicons/react/24/outline';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const quickLinks = [
    { href: '/', label: 'Home' },
    { href: '/collections', label: 'Collections' },
    { href: '/rings', label: 'Rings' },
    { href: '/necklaces', label: 'Necklaces' },
    { href: '/earrings', label: 'Earrings' },
    { href: '/about', label: 'About Us' }
  ];

  const customerService = [
    { href: '/contact', label: 'Contact Us' },
    { href: '/size-guide', label: 'Size Guide' },
    { href: '/shipping', label: 'Shipping Info' },
    { href: '/returns', label: 'Returns & Exchange' },
    { href: '/faq', label: 'FAQ' },
    { href: '/care-guide', label: 'Care Guide' }
  ];

  const legal = [
    { href: '/privacy', label: 'Privacy Policy' },
    { href: '/terms', label: 'Terms of Service' },
    { href: '/cookies', label: 'Cookie Policy' },
    { href: '/accessibility', label: 'Accessibility' }
  ];

  return (
    <footer className="relative bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900">
      {/* Decorative gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-amber-600/5 via-rose-500/5 to-purple-600/5"></div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Newsletter Section */}
        <div className="py-12 border-b border-gray-700/50">
          <div className="max-w-4xl mx-auto text-center">
            <h3 className="text-2xl lg:text-3xl font-bold text-white mb-4">
              Stay in Touch with
              <span className="bg-gradient-to-r from-amber-400 via-rose-400 to-purple-400 bg-clip-text text-transparent"> Elegance</span>
            </h3>
            <p className="text-gray-300 mb-8 max-w-2xl mx-auto">
              Be the first to discover our new collections, exclusive offers, and jewelry care tips. Join our community of jewelry enthusiasts.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-6 py-3 bg-white/10 border border-gray-600 rounded-full text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-amber-500 focus:border-transparent backdrop-blur-sm"
              />
              <button className="px-8 py-3 bg-gradient-to-r from-amber-500 to-rose-500 text-white font-semibold rounded-full hover:from-amber-600 hover:to-rose-600 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl">
                Subscribe
              </button>
            </div>
          </div>
        </div>

        {/* Main Footer Content */}
        <div className="py-16">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">

            {/* Brand Section */}
            <div className="lg:col-span-1">
              <Link href="/" className="inline-block mb-6 group">
                <span className="text-2xl font-bold bg-gradient-to-r from-amber-400 via-rose-400 to-purple-400 bg-clip-text text-transparent font-playfair">
                  ✨ Elegant Gems
                </span>
              </Link>
              <p className="text-gray-300 mb-6 leading-relaxed">
                Crafting timeless jewelry pieces that celebrate life's precious moments. Each piece tells a story of elegance, quality, and artisan craftsmanship.
              </p>

              {/* Key Features */}
              <div className="space-y-3">
                <div className="flex items-center space-x-3 text-gray-300">
                  <ShieldCheckIcon className="h-5 w-5 text-amber-400" />
                  <span className="text-sm">Lifetime Warranty</span>
                </div>
                <div className="flex items-center space-x-3 text-gray-300">
                  <TruckIcon className="h-5 w-5 text-amber-400" />
                  <span className="text-sm">Free Shipping Over $200</span>
                </div>
                <div className="flex items-center space-x-3 text-gray-300">
                  <HeartIcon className="h-5 w-5 text-amber-400" />
                  <span className="text-sm">Handcrafted with Love</span>
                </div>
              </div>
            </div>

            {/* Quick Links */}
            <div>
              <h4 className="text-lg font-semibold text-white mb-6">Collections</h4>
              <ul className="space-y-3">
                {quickLinks.map((link) => (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      className="text-gray-300 hover:text-amber-400 transition-colors duration-200 text-sm"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Customer Service */}
            <div>
              <h4 className="text-lg font-semibold text-white mb-6">Customer Care</h4>
              <ul className="space-y-3">
                {customerService.map((link) => (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      className="text-gray-300 hover:text-amber-400 transition-colors duration-200 text-sm"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Contact & Hours */}
            <div>
              <h4 className="text-lg font-semibold text-white mb-6">Get in Touch</h4>

              {/* Contact Info */}
              <div className="space-y-4 mb-6">
                <div className="flex items-start space-x-3">
                  <MapPinIcon className="h-5 w-5 text-amber-400 mt-0.5 flex-shrink-0" />
                  <address className="text-gray-300 text-sm not-italic leading-relaxed">
                    123 Karol Bagh<br />
                    New Delhi, Delhi 110005
                  </address>
                </div>

                <div className="flex items-center space-x-3">
                  <PhoneIcon className="h-5 w-5 text-amber-400 flex-shrink-0" />
                  <span className="text-gray-300 text-sm">+91 98765 43210</span>
                </div>

                <div className="flex items-center space-x-3">
                  <EnvelopeIcon className="h-5 w-5 text-amber-400 flex-shrink-0" />
                  <span className="text-gray-300 text-sm">hello@elegantgems.in</span>
                </div>

                <div className="flex items-start space-x-3">
                  <ClockIcon className="h-5 w-5 text-amber-400 mt-0.5 flex-shrink-0" />
                  <div className="text-gray-300 text-sm">
                    <p>Mon-Sat: 10am - 8pm</p>
                    <p>Sunday: 11am - 7pm</p>
                  </div>
                </div>
              </div>

              {/* Social Media */}
              <div>
                <h5 className="text-white font-medium mb-3">Follow Us</h5>
                <div className="flex space-x-3">
                  {[
                    { name: 'Instagram', href: '#', icon: '📷' },
                    { name: 'Facebook', href: '#', icon: '📘' },
                    { name: 'Pinterest', href: '#', icon: '📌' },
                    { name: 'YouTube', href: '#', icon: '📺' }
                  ].map((social) => (
                    <a
                      key={social.name}
                      href={social.href}
                      className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center text-lg hover:bg-amber-500 transition-all duration-300 transform hover:scale-110"
                      aria-label={social.name}
                    >
                      {social.icon}
                    </a>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Payment Methods & Bottom Bar */}
        <div className="border-t border-gray-700/50 py-8">
          <div className="flex flex-col lg:flex-row items-center justify-between space-y-4 lg:space-y-0">

            {/* Payment Methods */}
            <div className="flex items-center space-x-4">
              <span className="text-gray-400 text-sm">We Accept:</span>
              <div className="flex items-center space-x-3">
                <CreditCardIcon className="h-6 w-6 text-gray-400" />
                <span className="text-gray-400 text-sm">UPI • Paytm • GPay • Card • NetBanking</span>
              </div>
            </div>

            {/* Legal Links */}
            <div className="flex items-center space-x-6">
              {legal.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="text-gray-400 hover:text-amber-400 text-sm transition-colors duration-200"
                >
                  {link.label}
                </Link>
              ))}
            </div>
          </div>

          {/* Copyright */}
          <div className="mt-8 pt-8 border-t border-gray-700/30 text-center">
            <p className="text-gray-400 text-sm">
              © {currentYear} Elegant Gems. All rights reserved. |
              <span className="text-amber-400"> Crafted with passion since 2024</span>
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}