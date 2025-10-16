'use client';

import { useState } from 'react';
import Image from 'next/image';
import {
  MapPinIcon,
  PhoneIcon,
  EnvelopeIcon,
  ClockIcon,
  ChatBubbleLeftRightIcon,
  SparklesIcon
} from '@heroicons/react/24/outline';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: ''
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
    console.log('Form submitted:', formData);
  };

  const contactInfo = [
    {
      icon: MapPinIcon,
      title: 'Visit Our Showroom',
      details: ['123 Karol Bagh', 'New Delhi, Delhi 110005', 'India'],
      color: 'text-amber-500'
    },
    {
      icon: PhoneIcon,
      title: 'Call Us',
      details: ['+91 98765 43210', '+91 11 4567 8900', 'Mon-Sat: 10am-8pm'],
      color: 'text-rose-500'
    },
    {
      icon: EnvelopeIcon,
      title: 'Email Us',
      details: ['hello@elegantgems.in', 'support@elegantgems.in', 'We reply within 24hrs'],
      color: 'text-purple-500'
    },
    {
      icon: ClockIcon,
      title: 'Store Hours',
      details: ['Monday - Saturday: 10am - 8pm', 'Sunday: 11am - 7pm', 'Closed on festivals'],
      color: 'text-green-500'
    }
  ];

  const locations = [
    {
      name: 'Delhi Flagship Store',
      address: '123 Karol Bagh, New Delhi 110005',
      phone: '+91 98765 43210',
      image: 'https://images.unsplash.com/photo-1556906781-9a412961c28c?w=400&h=300&fit=crop&crop=center'
    },
    {
      name: 'Mumbai Branch',
      address: '456 Linking Road, Bandra West, Mumbai 400050',
      phone: '+91 98765 43211',
      image: 'https://images.unsplash.com/photo-1580625503369-28a205e2019e?w=400&h=300&fit=crop&crop=center'
    },
    {
      name: 'Bangalore Branch',
      address: '789 Brigade Road, Bangalore 560001',
      phone: '+91 98765 43212',
      image: 'https://images.unsplash.com/photo-1594736797933-d0401ba2fe65?w=400&h=300&fit=crop&crop=center'
    }
  ];

  return (
    <section className="py-20 lg:py-32 bg-gradient-to-b from-gray-50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Header */}
        <div className="text-center max-w-4xl mx-auto mb-20">
          <div className="inline-flex items-center space-x-2 bg-amber-100 rounded-full px-6 py-3 mb-8">
            <ChatBubbleLeftRightIcon className="h-5 w-5 text-amber-600" />
            <span className="text-sm font-medium text-amber-800">Get in Touch</span>
          </div>

          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-8 font-playfair">
            Let's Create Something
            <span className="bg-gradient-to-r from-amber-600 via-rose-600 to-purple-600 bg-clip-text text-transparent"> Beautiful Together</span>
          </h2>

          <p className="text-xl text-gray-600 leading-relaxed font-crimson">
            Have questions about our collections? Need a custom design? Want to visit our showroom?
            We're here to help you find the perfect piece for your special moments.
          </p>
        </div>

        {/* Contact Form & Info */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 mb-20">

          {/* Contact Form */}
          <div className="bg-white rounded-3xl shadow-xl p-8 lg:p-10 border border-gray-100">
            <div className="mb-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-4 font-playfair">
                Send us a Message
              </h3>
              <p className="text-gray-600">
                Fill out the form below and we'll get back to you within 24 hours.
              </p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                    Full Name *
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    required
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-amber-500 focus:border-transparent transition-colors duration-200"
                    placeholder="Your full name"
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                    Email Address *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-amber-500 focus:border-transparent transition-colors duration-200"
                    placeholder="your@email.com"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-2">
                    Phone Number
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-amber-500 focus:border-transparent transition-colors duration-200"
                    placeholder="+91 98765 43210"
                  />
                </div>

                <div>
                  <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-2">
                    Subject
                  </label>
                  <select
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-amber-500 focus:border-transparent transition-colors duration-200"
                  >
                    <option value="">Select a subject</option>
                    <option value="general">General Inquiry</option>
                    <option value="custom">Custom Design</option>
                    <option value="appointment">Schedule Appointment</option>
                    <option value="support">Customer Support</option>
                    <option value="wholesale">Wholesale Inquiry</option>
                  </select>
                </div>
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                  Message *
                </label>
                <textarea
                  id="message"
                  name="message"
                  required
                  rows={6}
                  value={formData.message}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-amber-500 focus:border-transparent transition-colors duration-200 resize-none"
                  placeholder="Tell us about your requirements..."
                ></textarea>
              </div>

              <button
                type="submit"
                className="w-full bg-gradient-to-r from-amber-500 to-rose-500 text-white font-semibold py-4 px-8 rounded-xl shadow-lg hover:shadow-xl transform hover:scale-[1.02] transition-all duration-300 group"
              >
                <span className="flex items-center justify-center space-x-2">
                  <span>Send Message</span>
                  <SparklesIcon className="h-5 w-5 group-hover:rotate-12 transition-transform duration-200" />
                </span>
              </button>
            </form>
          </div>

          {/* Contact Information */}
          <div className="space-y-8">
            {contactInfo.map((info, index) => {
              const IconComponent = info.icon;
              return (
                <div key={index} className="flex items-start space-x-6 p-6 bg-white rounded-2xl shadow-lg border border-gray-100 hover:shadow-xl transition-shadow duration-300">
                  <div className={`p-4 rounded-2xl bg-gray-50`}>
                    <IconComponent className={`h-8 w-8 ${info.color}`} />
                  </div>
                  <div>
                    <h4 className="text-xl font-semibold text-gray-900 mb-3 font-playfair">
                      {info.title}
                    </h4>
                    <div className="space-y-1">
                      {info.details.map((detail, idx) => (
                        <p key={idx} className="text-gray-600">
                          {detail}
                        </p>
                      ))}
                    </div>
                  </div>
                </div>
              );
            })}

            {/* Quick Contact CTA */}
            <div className="bg-gradient-to-r from-amber-500 via-rose-500 to-purple-500 rounded-2xl p-6 text-white">
              <h4 className="text-xl font-semibold mb-3 font-playfair">
                Need Immediate Assistance?
              </h4>
              <p className="mb-4 opacity-90">
                Call our customer service team for instant support.
              </p>
              <a
                href="tel:+919876543210"
                className="inline-flex items-center space-x-2 bg-white/20 backdrop-blur-sm rounded-lg px-6 py-3 hover:bg-white/30 transition-colors duration-200"
              >
                <PhoneIcon className="h-5 w-5" />
                <span className="font-semibold">+91 98765 43210</span>
              </a>
            </div>
          </div>
        </div>

        {/* Store Locations */}
        <div>
          <h3 className="text-3xl font-bold text-center text-gray-900 mb-12 font-playfair">
            Visit Our Showrooms
          </h3>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {locations.map((location, index) => (
              <div key={index} className="group bg-white rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300 overflow-hidden border border-gray-100">
                <div className="relative aspect-[4/3] overflow-hidden">
                  <Image
                    src={location.image}
                    alt={location.name}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
                  <div className="absolute bottom-4 left-4 text-white">
                    <h4 className="text-lg font-semibold font-playfair">{location.name}</h4>
                  </div>
                </div>

                <div className="p-6">
                  <div className="space-y-3">
                    <div className="flex items-start space-x-3">
                      <MapPinIcon className="h-5 w-5 text-amber-500 mt-0.5 flex-shrink-0" />
                      <p className="text-gray-600 text-sm">{location.address}</p>
                    </div>
                    <div className="flex items-center space-x-3">
                      <PhoneIcon className="h-5 w-5 text-amber-500 flex-shrink-0" />
                      <p className="text-gray-600 text-sm">{location.phone}</p>
                    </div>
                  </div>

                  <button className="w-full mt-4 bg-amber-50 text-amber-700 font-semibold py-3 px-4 rounded-xl hover:bg-amber-100 transition-colors duration-200">
                    Get Directions
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Map Placeholder */}
        <div className="mt-16 bg-gray-200 rounded-3xl h-96 flex items-center justify-center">
          <div className="text-center text-gray-500">
            <MapPinIcon className="h-12 w-12 mx-auto mb-4 opacity-50" />
            <p className="text-lg font-semibold">Interactive Map</p>
            <p className="text-sm">Embed Google Maps or similar service</p>
          </div>
        </div>
      </div>
    </section>
  );
}