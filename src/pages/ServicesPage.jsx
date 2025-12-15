import React from 'react';
import { Link } from 'react-router-dom';
import { Badge, Button, Card, SectionHeader } from '../components/common';

const ServicesPage = () => {
  const allServices = [
    {
      title: 'Website Development',
      price: '$999+',
      description: 'Custom responsive websites with modern design patterns and SEO optimization',
      features: [
        'Fully Responsive Design',
        'SEO Optimization',
        'CMS Integration',
        'E-commerce Functionality',
        'Performance Optimization',
        '24/7 Technical Support'
      ],
      delivery: '4-6 weeks',
      revisions: 'Unlimited',
      icon: '🌐',
      popular: true
    },
    {
      title: 'Poster Design',
      price: '$299+',
      description: 'Professional poster designs for events, marketing, and branding',
      features: [
        'Print Ready Files',
        'Unlimited Revisions',
        'Source Files Included',
        'Fast Delivery (24-48h)',
        'Multiple Formats',
        'Commercial Use License'
      ],
      delivery: '24-48 hours',
      revisions: 'Unlimited',
      icon: '🎨',
      popular: false
    },
    {
      title: 'Automation Solutions',
      price: '$499+',
      description: 'Automate your business processes with custom solutions',
      features: [
        'Workflow Automation',
        'API Integration',
        'Custom Dashboard',
        'Analytics & Reports',
        'Data Migration',
        'Monthly Maintenance'
      ],
      delivery: '2-3 weeks',
      revisions: '3 rounds',
      icon: '⚡',
      popular: false
    },
    {
      title: 'UI/UX Design',
      price: '$799+',
      description: 'User-centered design solutions for web and mobile applications',
      features: [
        'Wireframing & Prototyping',
        'User Research',
        'Interactive Design',
        'Design Systems',
        'Usability Testing',
        'Design Handoff'
      ],
      delivery: '3-4 weeks',
      revisions: '3 rounds',
      icon: '🎯',
      popular: false
    },
    {
      title: 'SEO Optimization',
      price: '$399/mo',
      description: 'Improve your website ranking and organic traffic',
      features: [
        'Keyword Research',
        'On-page Optimization',
        'Technical SEO Audit',
        'Content Strategy',
        'Backlink Building',
        'Monthly Reports'
      ],
      delivery: 'Ongoing',
      revisions: 'Continuous',
      icon: '📈',
      popular: false
    },
    {
      title: 'Branding Package',
      price: '$1299+',
      description: 'Complete brand identity development',
      features: [
        'Logo Design',
        'Brand Guidelines',
        'Color Palette',
        'Typography System',
        'Business Cards',
        'Social Media Kit'
      ],
      delivery: '4-5 weeks',
      revisions: 'Unlimited',
      icon: '🌟',
      popular: false
    },
  ];

  return (
    <main className="py-16 bg-gradient-to-b from-white to-gray-50">
      <div className="container mx-auto px-4 lg:px-8">
        <SectionHeader
          badge="SERVICES & PRICING"
          title="Our Comprehensive Services"
          highlight="Comprehensive"
          description="Choose from our premium range of digital solutions designed to elevate your business. Transparent pricing, exceptional quality, and measurable results."
        />

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {allServices.map((service, index) => (
            <div
              key={index}
              className={`group animate-fade-in-up hover-lift bg-white rounded-2xl shadow-lg p-8 border transition-all duration-500 ${
                service.popular 
                  ? 'border-2 border-blue-300 shadow-xl relative' 
                  : 'border-gray-200'
              }`}
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {service.popular && (
                <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                  <div className="px-6 py-2 bg-gradient-to-r from-blue-600 to-indigo-600 rounded-full text-sm font-semibold text-white shadow-lg">
                    Most Popular
                  </div>
                </div>
              )}

              {/* Service Icon & Title */}
              <div className="flex items-start justify-between mb-6">
                <div className="text-4xl mb-4">{service.icon}</div>
                <div className={`text-2xl font-bold ${
                  service.popular 
                    ? 'bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent' 
                    : 'text-gray-900'
                }`}>
                  {service.price}
                </div>
              </div>

              {/* Title */}
              <h3 className="text-2xl font-bold text-gray-900 mb-4">{service.title}</h3>

              {/* Description */}
              <p className="text-gray-600 mb-8 leading-relaxed">{service.description}</p>

              {/* Features */}
              <div className="mb-8">
                <h4 className="text-gray-700 font-semibold mb-4">What's included:</h4>
                <ul className="space-y-3">
                  {service.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center text-gray-600">
                      <svg className="w-4 h-4 text-green-500 mr-3 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Details */}
              <div className="grid grid-cols-2 gap-4 mb-8">
                <div className="text-center p-3 bg-blue-50 rounded-lg">
                  <div className="text-xs text-gray-500 font-medium">Delivery Time</div>
                  <div className="text-gray-900 font-semibold">{service.delivery}</div>
                </div>
                <div className="text-center p-3 bg-indigo-50 rounded-lg">
                  <div className="text-xs text-gray-500 font-medium">Revisions</div>
                  <div className="text-gray-900 font-semibold">{service.revisions}</div>
                </div>
              </div>

              {/* CTA Button */}
              <Button
                variant="primary"
                className="w-full btn-shine"
              >
                Select This Plan
              </Button>
            </div>
          ))}
        </div>

        {/* Comparison CTA */}
        <Card
          className="bg-gradient-to-r from-blue-50 to-indigo-50 text-center border-blue-200 mb-16"
          padding="lg"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-6 text-gray-900">
            Need a <span className="bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">Custom Solution</span>?
          </h2>
          <p className="text-lg text-gray-600 mb-10 max-w-2xl mx-auto">
            Every business is unique. Contact us for a tailored package that fits your specific
            requirements, timeline, and budget perfectly.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/contact">
              <Button variant="primary" size="lg">
                Get Custom Quote
              </Button>
            </Link>
            <Button variant="secondary" size="lg">
              Schedule Discovery Call
            </Button>
          </div>
        </Card>

        {/* FAQ Section */}
        <div className="max-w-4xl mx-auto">
          <h3 className="text-3xl font-bold text-center mb-12 text-gray-900">Frequently Asked Questions</h3>
          <div className="space-y-4">
            {[
              {
                question: 'What is your typical project timeline?',
                answer: 'Most projects take 2-6 weeks depending on complexity. We provide a detailed timeline during the discovery phase.'
              },
              {
                question: 'Do you offer ongoing support and maintenance?',
                answer: 'Yes, we offer various support packages including monthly maintenance, updates, and 24/7 emergency support.'
              },
              {
                question: 'Can I request revisions during the project?',
                answer: 'Absolutely! We include revision rounds in every package to ensure you\'re completely satisfied with the final deliverable.'
              },
              {
                question: 'What payment methods do you accept?',
                answer: 'We accept all major credit cards, bank transfers, and digital payment methods including PayPal and Stripe.'
              },
            ].map((faq, index) => (
              <div key={index} className="bg-white rounded-xl shadow-sm p-6 hover:shadow-md transition-all duration-300">
                <div className="flex items-start justify-between">
                  <h4 className="text-lg font-semibold text-gray-900 mb-2">{faq.question}</h4>
                  <svg className="w-5 h-5 text-blue-500 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </div>
                <p className="text-gray-600">{faq.answer}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </main>
  );
};

export default ServicesPage;