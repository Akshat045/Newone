'use client';

import Link from 'next/link';
import Image from 'next/image';
import { ChevronRightIcon, StarIcon, SparklesIcon } from '@heroicons/react/24/outline';

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-amber-50 via-rose-50 to-purple-50">
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-gradient-to-br from-amber-100/30 via-rose-100/30 to-purple-100/30"></div>
      <div className="absolute inset-0" style={{
        backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23f59e0b' fill-opacity='0.05'%3E%3Ccircle cx='30' cy='30' r='2'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
        opacity: 0.4
      }}></div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">

          {/* Left Content */}
          <div className="text-center lg:text-left space-y-8">
            {/* Badge */}
            <div className="inline-flex items-center space-x-2 bg-white/80 backdrop-blur-sm rounded-full px-6 py-3 shadow-lg border border-amber-200/50">
              <SparklesIcon className="h-5 w-5 text-amber-500" />
              <span className="text-sm font-medium text-gray-700">Handcrafted Excellence Since 2024</span>
            </div>

            {/* Main Heading */}
            <div className="space-y-4">
              <h1 className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold leading-tight">
                <span className="font-playfair bg-gradient-to-r from-amber-600 via-rose-600 to-purple-600 bg-clip-text text-transparent">
                  Timeless
                </span>
                <br />
                <span className="font-playfair text-gray-800">
                  Elegance
                </span>
                <br />
                <span className="font-playfair bg-gradient-to-r from-purple-600 via-rose-600 to-amber-600 bg-clip-text text-transparent">
                  Awaits
                </span>
              </h1>

              <p className="text-lg lg:text-xl text-gray-600 max-w-2xl leading-relaxed font-crimson">
                Discover exquisite jewelry pieces that tell your unique story. Each creation is meticulously crafted with passion, precision, and the finest materials from across India.
              </p>
            </div>

            {/* Stats */}
            <div className="flex flex-wrap justify-center lg:justify-start gap-8 py-6">
              <div className="text-center">
                <div className="text-3xl font-bold text-amber-600 font-playfair">5000+</div>
                <div className="text-sm text-gray-600">Happy Customers</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-rose-600 font-playfair">500+</div>
                <div className="text-sm text-gray-600">Unique Designs</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-purple-600 font-playfair">15+</div>
                <div className="text-sm text-gray-600">Years Crafting</div>
              </div>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <Link
                href="/collections"
                className="group relative inline-flex items-center justify-center px-8 py-4 bg-gradient-to-r from-amber-500 to-rose-500 text-white font-semibold rounded-full shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300"
              >
                <span>Explore Collections</span>
                <ChevronRightIcon className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform duration-200" />
                <div className="absolute inset-0 bg-gradient-to-r from-amber-600 to-rose-600 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </Link>

              <Link
                href="/about"
                className="group inline-flex items-center justify-center px-8 py-4 bg-white/90 backdrop-blur-sm text-gray-700 font-semibold rounded-full border-2 border-amber-200 hover:border-amber-300 hover:bg-white shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300"
              >
                <span>Our Story</span>
              </Link>
            </div>

            {/* Trust Indicators */}
            <div className="flex items-center justify-center lg:justify-start space-x-6 pt-6">
              <div className="flex items-center space-x-2">
                <div className="flex space-x-1">
                  {[...Array(5)].map((_, i) => (
                    <StarIcon key={i} className="h-4 w-4 fill-amber-400 text-amber-400" />
                  ))}
                </div>
                <span className="text-sm text-gray-600">4.9/5 (2,500+ reviews)</span>
              </div>
            </div>
          </div>

          {/* Right Images */}
          <div className="relative">
            <div className="grid grid-cols-2 gap-6">
              {/* Main Image */}
              <div className="col-span-2 relative">
                <div className="relative aspect-[4/3] rounded-3xl overflow-hidden shadow-2xl transform rotate-2 hover:rotate-0 transition-transform duration-500">
                  <Image
                    src="https://images.unsplash.com/photo-1605100804763-247f67b3557e?w=800&h=600&fit=crop&crop=center"
                    alt="Elegant diamond necklace collection"
                    fill
                    className="object-cover"
                    priority
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
                </div>
              </div>

              {/* Secondary Images */}
              <div className="relative aspect-square rounded-2xl overflow-hidden shadow-xl transform -rotate-3 hover:rotate-0 transition-transform duration-500">
                <Image
                  src="https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?w=400&h=400&fit=crop&crop=center"
                  alt="Gold engagement rings collection"
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/10 to-transparent"></div>
              </div>

              <div className="relative aspect-square rounded-2xl overflow-hidden shadow-xl transform rotate-3 hover:rotate-0 transition-transform duration-500">
                <Image
                  src="https://images.unsplash.com/photo-1544966503-7cc5ac882d5f?w=400&h=400&fit=crop&crop=center"
                  alt="Diamond earrings and jewelry"
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/10 to-transparent"></div>
              </div>
            </div>

            {/* Floating Elements */}
            <div className="absolute -top-6 -right-6 w-20 h-20 bg-gradient-to-br from-amber-400 to-rose-400 rounded-full opacity-20 animate-pulse"></div>
            <div className="absolute -bottom-8 -left-8 w-16 h-16 bg-gradient-to-br from-purple-400 to-pink-400 rounded-full opacity-20 animate-pulse delay-1000"></div>
            <div className="absolute top-1/2 -right-4 w-12 h-12 bg-gradient-to-br from-rose-400 to-amber-400 rounded-full opacity-30 animate-bounce"></div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-8 h-12 border-2 border-gray-400 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-gray-400 rounded-full mt-2 animate-pulse"></div>
        </div>
        <p className="text-xs text-gray-500 mt-2 text-center">Scroll</p>
      </div>
    </section>
  );
}