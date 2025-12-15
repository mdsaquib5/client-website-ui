import React from 'react';
import { Badge, Button, Card } from './common';

const CallToAction = () => {
  const benefits = [
    'Free 30-min Consultation',
    'Custom Solution Proposal',
    'Special Launch Discount'
  ];

  const companies = ['Google', 'Microsoft', 'Spotify', 'Slack', 'Adobe'];

  return (
    <section className="py-24 relative overflow-hidden">
      <div className="absolute inset-0">
        <div className="absolute top-0 left-0 w-full h-32 bg-gradient-to-b from-blue-50 to-transparent"></div>
        <div className="absolute bottom-0 left-0 w-full h-32 bg-gradient-to-t from-indigo-50 to-transparent"></div>
      </div>

      <div className="container mx-auto px-4 lg:px-8 relative z-10">
        <div className="max-w-4xl mx-auto">
          <Card
            className="bg-gradient-to-r from-white to-blue-50 text-center"
            padding="lg"
            shadow="lg"
          >
            <div className="absolute top-6 right-6 w-16 h-16 bg-blue-100 rounded-full opacity-20"></div>
            <div className="absolute bottom-6 left-6 w-12 h-12 bg-indigo-100 rounded-full opacity-20"></div>

            <Badge
              variant="gradient"
              size="lg"
              icon={<span className="w-2 h-2 bg-white rounded-full animate-pulse"></span>}
              className="mb-8"
            >
              LIMITED TIME OFFER
            </Badge>

            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-8 text-gray-900">
              Book Your <span className="bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">Website</span> Call Today
            </h2>

            <div className="max-w-2xl mx-auto mb-12">
              <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                Schedule a free strategy session with our experts and discover how we can
                help you achieve your digital goals with a custom solution.
              </p>
              <div className="bg-blue-50 rounded-xl p-4 border border-blue-100">
                <div className="flex items-center justify-center space-x-4 text-sm text-gray-700">
                  {benefits.map((benefit, index) => (
                    <span key={index} className="flex items-center">
                      <span className="w-2 h-2 bg-green-500 rounded-full mr-2"></span>
                      {benefit}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                variant="primary"
                size="lg"
                icon={
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                }
                iconPosition="left"
                className="btn-shine"
              >
                Book Your Free Strategy Call
              </Button>

              <Button
                variant="secondary"
                size="lg"
                icon={
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                }
                iconPosition="left"
              >
                View Success Stories
              </Button>
            </div>

            <div className="mt-12 pt-8 border-t border-gray-200">
              <p className="text-sm text-gray-500 mb-6">Trusted by industry leaders</p>
              <div className="flex flex-wrap justify-center items-center gap-8 opacity-60">
                {companies.map((company) => (
                  <div key={company} className="text-gray-400 font-bold text-lg">
                    {company}
                  </div>
                ))}
              </div>
            </div>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default CallToAction;