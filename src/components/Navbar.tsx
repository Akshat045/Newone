'use client';

import Link from 'next/link';
import { useState, useEffect } from 'react';
import {
  MagnifyingGlassIcon,
  ShoppingBagIcon,
  UserIcon,
  Bars3Icon,
  XMarkIcon,
  HeartIcon
} from '@heroicons/react/24/outline';

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const navigationLinks = [
    { href: '/', label: 'Home' },
    { href: '/collections', label: 'Collections' },
    { href: '/rings', label: 'Rings' },
    { href: '/necklaces', label: 'Necklaces' },
    { href: '/earrings', label: 'Earrings' },
    { href: '/about', label: 'About' },
    { href: '/contact', label: 'Contact' },
  ];

  return (
    <nav className={`fixed w-full z-50 transition-all duration-300 ${
      isScrolled
        ? 'bg-white/95 backdrop-blur-md shadow-lg border-b border-gray-200/50'
        : 'bg-white/90 backdrop-blur-sm'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16 lg:h-20">

          {/* Logo */}
          <Link href="/" className="flex items-center group">
            <div className="relative">
              <span className="text-2xl lg:text-3xl font-bold bg-gradient-to-r from-amber-600 via-rose-500 to-purple-600 bg-clip-text text-transparent font-playfair">
                ✨ Elegant Gems
              </span>
              <div className="absolute -inset-1 bg-gradient-to-r from-amber-600/20 via-rose-500/20 to-purple-600/20 blur-sm opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-lg"></div>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-8">
            {navigationLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="relative text-gray-700 hover:text-amber-600 font-medium transition-colors duration-200 group py-2"
              >
                {link.label}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-amber-500 to-rose-500 group-hover:w-full transition-all duration-300"></span>
              </Link>
            ))}
          </div>

          {/* Desktop Actions */}
          <div className="hidden lg:flex items-center space-x-4">
            {/* Search */}
            <button className="p-2 text-gray-700 hover:text-amber-600 hover:bg-amber-50 rounded-full transition-all duration-200 group">
              <MagnifyingGlassIcon className="h-6 w-6 group-hover:scale-110 transition-transform duration-200" />
            </button>

            {/* Wishlist */}
            <button className="p-2 text-gray-700 hover:text-rose-600 hover:bg-rose-50 rounded-full transition-all duration-200 group relative">
              <HeartIcon className="h-6 w-6 group-hover:scale-110 transition-transform duration-200" />
              <span className="absolute -top-1 -right-1 bg-rose-500 text-white text-xs rounded-full h-5 w-5 flex items-center justify-center">2</span>
            </button>

            {/* Cart */}
            <button className="p-2 text-gray-700 hover:text-amber-600 hover:bg-amber-50 rounded-full transition-all duration-200 group relative">
              <ShoppingBagIcon className="h-6 w-6 group-hover:scale-110 transition-transform duration-200" />
              <span className="absolute -top-1 -right-1 bg-amber-500 text-white text-xs rounded-full h-5 w-5 flex items-center justify-center">3</span>
            </button>

            {/* Account */}
            <button className="p-2 text-gray-700 hover:text-purple-600 hover:bg-purple-50 rounded-full transition-all duration-200 group">
              <UserIcon className="h-6 w-6 group-hover:scale-110 transition-transform duration-200" />
            </button>
          </div>

          {/* Mobile Actions & Menu Button */}
          <div className="lg:hidden flex items-center space-x-3">
            {/* Mobile Cart */}
            <button className="p-2 text-gray-700 hover:text-amber-600 rounded-full relative">
              <ShoppingBagIcon className="h-6 w-6" />
              <span className="absolute -top-1 -right-1 bg-amber-500 text-white text-xs rounded-full h-5 w-5 flex items-center justify-center">3</span>
            </button>

            {/* Mobile Menu Toggle */}
            <button
              onClick={toggleMenu}
              className="p-2 text-gray-700 hover:text-amber-600 rounded-full transition-colors duration-200"
            >
              {isMenuOpen ? (
                <XMarkIcon className="h-6 w-6" />
              ) : (
                <Bars3Icon className="h-6 w-6" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <div className={`lg:hidden fixed inset-0 z-50 transition-all duration-300 ${
        isMenuOpen ? 'opacity-100 visible' : 'opacity-0 invisible'
      }`}>
        {/* Backdrop */}
        <div
          className={`absolute inset-0 bg-black/50 backdrop-blur-sm transition-opacity duration-300 ${
            isMenuOpen ? 'opacity-100' : 'opacity-0'
          }`}
          onClick={toggleMenu}
        ></div>

        {/* Menu Panel */}
        <div className={`absolute top-0 right-0 h-full w-80 max-w-[85vw] bg-white shadow-2xl transform transition-transform duration-300 ease-out ${
          isMenuOpen ? 'translate-x-0' : 'translate-x-full'
        }`}>
          <div className="p-6">
            {/* Mobile Menu Header */}
            <div className="flex items-center justify-between mb-8">
              <span className="text-xl font-bold bg-gradient-to-r from-amber-600 to-rose-500 bg-clip-text text-transparent font-playfair">
                Menu
              </span>
              <button
                onClick={toggleMenu}
                className="p-2 text-gray-500 hover:text-gray-700 rounded-full"
              >
                <XMarkIcon className="h-6 w-6" />
              </button>
            </div>

            {/* Mobile Navigation Links */}
            <nav className="space-y-1">
              {navigationLinks.map((link, index) => (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={toggleMenu}
                  className="block px-4 py-3 text-gray-700 hover:text-amber-600 hover:bg-amber-50 rounded-lg font-medium transition-all duration-200 transform hover:scale-105"
                  style={{ animationDelay: `${index * 50}ms` }}
                >
                  {link.label}
                </Link>
              ))}
            </nav>

            {/* Mobile Actions */}
            <div className="mt-8 pt-8 border-t border-gray-200">
              <div className="grid grid-cols-3 gap-4">
                <button className="flex flex-col items-center space-y-2 p-4 text-gray-700 hover:text-amber-600 hover:bg-amber-50 rounded-lg transition-all duration-200">
                  <MagnifyingGlassIcon className="h-6 w-6" />
                  <span className="text-sm font-medium">Search</span>
                </button>
                <button className="flex flex-col items-center space-y-2 p-4 text-gray-700 hover:text-rose-600 hover:bg-rose-50 rounded-lg transition-all duration-200 relative">
                  <HeartIcon className="h-6 w-6" />
                  <span className="text-sm font-medium">Wishlist</span>
                  <span className="absolute top-2 right-2 bg-rose-500 text-white text-xs rounded-full h-4 w-4 flex items-center justify-center">2</span>
                </button>
                <button className="flex flex-col items-center space-y-2 p-4 text-gray-700 hover:text-purple-600 hover:bg-purple-50 rounded-lg transition-all duration-200">
                  <UserIcon className="h-6 w-6" />
                  <span className="text-sm font-medium">Account</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
}