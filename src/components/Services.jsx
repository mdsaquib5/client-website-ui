import React from 'react';
import { Link } from 'react-router-dom';

const Services = () => {
  const services = [
    {
      title: 'Website Development',
      price: '$999+',
      description: 'Custom responsive websites with modern design patterns and SEO optimization for maximum impact.',
      features: ['Responsive Design', 'SEO Optimized', 'CMS Integration', 'Performance Focused'],
      icon: (
        <div className="w-14 h-14 bg-gradient-to-br from-blue-500 to-blue-600 rounded-xl flex items-center justify-center shadow-lg">
          <span className="text-2xl text-white">🌐</span>
        </div>
      ),
      popular: true
    },
    {
      title: 'Poster Design',
      price: '$299+',
      description: 'Professional poster designs that capture attention and communicate your message effectively.',
      features: ['Print Ready', 'Unlimited Revisions', 'Source Files', 'Fast Delivery'],
      icon: (
        <div className="w-14 h-14 bg-gradient-to-br from-purple-500 to-purple-600 rounded-xl flex items-center justify-center shadow-lg">
          <span className="text-2xl text-white">🎨</span>
        </div>
      ),
      popular: false
    },
    {
      title: 'Automation Solutions',
      price: '$499+',
      description: 'Streamline your business processes with custom automation solutions that save time and resources.',
      features: ['Workflow Automation', 'API Integration', 'Dashboard', 'Analytics'],
      icon: (
        <div className="w-14 h-14 bg-gradient-to-br from-green-500 to-green-600 rounded-xl flex items-center justify-center shadow-lg">
          <span className="text-2xl text-white">⚡</span>
        </div>
      ),
      popular: false
    },
  ];

  return (
    <section className="py-24 bg-gradient-to-b from-white to-blue-50">
      <div className="container mx-auto px-4 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16 animate-fade-in-up">
          <div className="inline-flex items-center px-4 py-2 bg-gradient-to-r from-blue-50 to-indigo-50 rounded-full border border-blue-200 mb-6">
            <span className="text-sm font-semibold text-blue-700">OUR SERVICES</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-gray-900">
            Premium <span className="bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">Digital Solutions</span>
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            We deliver comprehensive digital services designed to elevate your brand 
            and drive measurable results in today's competitive landscape.
          </p>
        </div>

        {/* Service Cards */}
        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {services.map((service, index) => (
            <div
              key={index}
              className={`group animate-fade-in-up hover-lift ${
                service.popular 
                  ? 'relative bg-gradient-to-b from-white to-blue-50 border-2 border-blue-200 shadow-xl' 
                  : 'bg-white border border-gray-200 shadow-lg'
              } rounded-2xl p-8 transition-all duration-500`}
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              {service.popular && (
                <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                  <div className="px-4 py-1.5 bg-gradient-to-r from-blue-600 to-indigo-600 rounded-full text-sm font-semibold text-white shadow-lg">
                    Most Popular
                  </div>
                </div>
              )}

              {/* Icon */}
              <div className="mb-6">{service.icon}</div>

              {/* Title & Price */}
              <div className="flex justify-between items-start mb-4">
                <h3 className="text-2xl font-bold text-gray-900">{service.title}</h3>
                <div className="text-3xl font-bold bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">
                  {service.price}
                </div>
              </div>

              {/* Description */}
              <p className="text-gray-600 mb-8 leading-relaxed">{service.description}</p>

              {/* Features */}
              <ul className="space-y-3 mb-8">
                {service.features.map((feature, idx) => (
                  <li key={idx} className="flex items-center text-gray-700">
                    <div className="w-5 h-5 bg-green-100 rounded-full flex items-center justify-center mr-3">
                      <svg className="w-3 h-3 text-green-600" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                    </div>
                    {feature}
                  </li>
                ))}
              </ul>

              {/* CTA Button */}
              <button className="w-full group py-3.5 cursor-pointer bg-gradient-to-r from-blue-600 to-indigo-600 text-white font-semibold rounded-xl hover:shadow-xl hover:shadow-blue-500/30 transition-all duration-300 flex items-center justify-center space-x-2">
                <span>Get Started</span>
                <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                </svg>
              </button>
            </div>
          ))}
        </div>

        {/* View All Services Link */}
        <div className="text-center">
          <Link
            to="/services"
            className="inline-flex items-center text-blue-600 hover:text-blue-700 font-semibold group"
          >
            <span>View All Services & Pricing</span>
            <svg className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
            </svg>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Services;