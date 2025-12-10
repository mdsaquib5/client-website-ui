import React from 'react';
import ContactForm from '../components/ContactForm';

const ContactPage = () => {
  const contactMethods = [
    {
      icon: (
        <div className="w-12 h-12 bg-gradient-to-r from-blue-100 to-blue-200 rounded-xl flex items-center justify-center">
          <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
          </svg>
        </div>
      ),
      title: 'Email Us',
      details: ['hello@digitalpro.com', 'support@digitalpro.com'],
      action: 'mailto:hello@digitalpro.com',
      description: 'We typically respond within 2-4 hours during business days'
    },
    {
      icon: (
        <div className="w-12 h-12 bg-gradient-to-r from-green-100 to-green-200 rounded-xl flex items-center justify-center">
          <svg className="w-6 h-6 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z" />
          </svg>
        </div>
      ),
      title: 'WhatsApp',
      details: ['+1 (555) 123-4567', 'Available 24/7'],
      action: 'https://wa.me/15551234567',
      description: 'Instant messaging for quick questions and support'
    },
    {
      icon: (
        <div className="w-12 h-12 bg-gradient-to-r from-purple-100 to-purple-200 rounded-xl flex items-center justify-center">
          <svg className="w-6 h-6 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
          </svg>
        </div>
      ),
      title: 'Visit Office',
      details: ['123 Business Avenue', 'San Francisco, CA 94107'],
      action: 'https://maps.google.com',
      description: 'Schedule an in-person meeting with our team'
    },
  ];

  return (
    <main className="py-16 bg-gradient-to-b from-white to-gray-50">
      <div className="container mx-auto px-4 lg:px-8">
        {/* Page Header */}
        <div className="text-center mb-16 animate-fade-in-up">
          <div className="inline-flex items-center px-6 py-2.5 bg-gradient-to-r from-blue-50 to-indigo-50 rounded-full border border-blue-200 mb-6">
            <span className="text-sm font-semibold text-blue-700">CONTACT US</span>
          </div>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-8 text-gray-900">
            Let's <span className="bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">Work Together</span>
          </h1>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Have a project in mind? We'd love to hear about it. Get in touch and let's discuss 
            how we can help you achieve your digital goals.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-12">
          {/* Left Column - Contact Information */}
          <div className="space-y-8">
            <div className="bg-white rounded-2xl shadow-lg p-8 border border-gray-200">
              <h3 className="text-2xl font-bold text-gray-900 mb-8">
                Contact <span className="bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">Information</span>
              </h3>
              
              <div className="space-y-8">
                {contactMethods.map((method, index) => (
                  <a
                    key={index}
                    href={method.action}
                    target={method.title === 'WhatsApp' || method.title === 'Visit Office' ? '_blank' : '_self'}
                    rel="noopener noreferrer"
                    className="group flex items-start space-x-4 p-4 rounded-xl hover:bg-blue-50 transition-all duration-300 hover-lift"
                  >
                    <div className="flex-shrink-0">
                      {method.icon}
                    </div>
                    <div className="flex-grow">
                      <h4 className="text-gray-900 font-semibold mb-1 group-hover:text-blue-600 transition-colors">
                        {method.title}
                      </h4>
                      {method.details.map((detail, idx) => (
                        <p key={idx} className="text-gray-700">
                          {detail}
                        </p>
                      ))}
                      <p className="text-sm text-gray-500 mt-2">{method.description}</p>
                    </div>
                    <svg className="w-5 h-5 text-gray-400 group-hover:text-blue-600 mt-1 transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                    </svg>
                  </a>
                ))}
              </div>
            </div>

            {/* Business Hours */}
            <div className="bg-white rounded-2xl shadow-lg p-8 border border-gray-200">
              <h4 className="text-xl font-bold text-gray-900 mb-6">Business Hours</h4>
              <div className="space-y-4">
                {[
                  { day: 'Monday - Friday', hours: '9:00 AM - 6:00 PM PST', status: 'Available' },
                  { day: 'Saturday', hours: '10:00 AM - 4:00 PM PST', status: 'Limited' },
                  { day: 'Sunday', hours: 'Emergency Support Only', status: 'On Call' },
                ].map((schedule, index) => (
                  <div key={index} className="flex justify-between items-center p-4 rounded-lg bg-gray-50">
                    <div>
                      <span className="text-gray-900 font-medium">{schedule.day}</span>
                      <div className="text-gray-600 text-sm">{schedule.hours}</div>
                    </div>
                    <span className={`px-3 py-1 rounded-full text-xs font-semibold ${
                      schedule.status === 'Available' 
                        ? 'bg-green-100 text-green-700' 
                        : schedule.status === 'Limited'
                        ? 'bg-yellow-100 text-yellow-700'
                        : 'bg-blue-100 text-blue-700'
                    }`}>
                      {schedule.status}
                    </span>
                  </div>
                ))}
              </div>
              
              <div className="mt-8 p-4 bg-gradient-to-r from-blue-50 to-indigo-50 rounded-xl border border-blue-200">
                <div className="flex items-center">
                  <span className="w-2 h-2 bg-green-500 rounded-full mr-3 animate-pulse"></span>
                  <p className="text-gray-700">
                    <span className="font-semibold text-blue-600">Emergency Support:</span> 
                    {' '}Available 24/7 for critical issues
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column - Contact Form */}
          <div className="lg:col-span-2">
            <ContactForm />
            
            {/* Additional Info */}
            <div className="mt-12 grid md:grid-cols-3 gap-6">
              <div className="text-center p-6 bg-white rounded-xl shadow-sm border border-gray-200 hover-lift">
                <div className="text-3xl mb-4">⏱️</div>
                <h4 className="font-bold text-gray-900 mb-2">Quick Response</h4>
                <p className="text-gray-600 text-sm">We respond within 2-4 hours during business days</p>
              </div>
              <div className="text-center p-6 bg-white rounded-xl shadow-sm border border-gray-200 hover-lift">
                <div className="text-3xl mb-4">🔒</div>
                <h4 className="font-bold text-gray-900 mb-2">Secure & Private</h4>
                <p className="text-gray-600 text-sm">Your information is protected with 256-bit encryption</p>
              </div>
              <div className="text-center p-6 bg-white rounded-xl shadow-sm border border-gray-200 hover-lift">
                <div className="text-3xl mb-4">💼</div>
                <h4 className="font-bold text-gray-900 mb-2">NDA Ready</h4>
                <p className="text-gray-600 text-sm">We sign NDAs to protect your ideas and projects</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default ContactPage;