import React from 'react';

const CallToAction = () => {
  return (
    <section className="py-24 relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-0 w-full h-32 bg-gradient-to-b from-blue-50 to-transparent"></div>
        <div className="absolute bottom-0 left-0 w-full h-32 bg-gradient-to-t from-indigo-50 to-transparent"></div>
      </div>

      <div className="container mx-auto px-4 lg:px-8 relative z-10">
        <div className="max-w-4xl mx-auto">
          <div className="bg-gradient-to-r from-white to-blue-50 rounded-3xl shadow-2xl p-8 md:p-12 text-center border border-gray-200 hover-lift transition-all duration-500">
            
            {/* Decorative Elements */}
            <div className="absolute top-6 right-6 w-16 h-16 bg-blue-100 rounded-full opacity-20"></div>
            <div className="absolute bottom-6 left-6 w-12 h-12 bg-indigo-100 rounded-full opacity-20"></div>

            {/* Badge */}
            <div className="inline-flex items-center justify-center px-6 py-2.5 bg-gradient-to-r from-blue-600 to-indigo-600 rounded-full mb-8 shadow-lg">
              <span className="w-2 h-2 bg-white rounded-full animate-pulse mr-2"></span>
              <span className="text-sm font-semibold text-white tracking-wider">LIMITED TIME OFFER</span>
            </div>

            {/* Heading */}
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-8 text-gray-900">
              Ready to <span className="bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">Transform</span> Your Business?
            </h2>

            {/* Description */}
            <div className="max-w-2xl mx-auto mb-12">
              <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                Schedule a free strategy session with our experts and discover how we can 
                help you achieve your digital goals with a custom solution.
              </p>
              <div className="bg-blue-50 rounded-xl p-4 border border-blue-100">
                <div className="flex items-center justify-center space-x-4 text-sm text-gray-700">
                  <span className="flex items-center">
                    <span className="w-2 h-2 bg-green-500 rounded-full mr-2"></span>
                    Free 30-min Consultation
                  </span>
                  <span className="flex items-center">
                    <span className="w-2 h-2 bg-green-500 rounded-full mr-2"></span>
                    Custom Solution Proposal
                  </span>
                  <span className="flex items-center">
                    <span className="w-2 h-2 bg-green-500 rounded-full mr-2"></span>
                    Special Launch Discount
                  </span>
                </div>
              </div>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="group relative px-10 py-4 bg-gradient-to-r cursor-pointer from-blue-600 to-indigo-600 text-white font-semibold rounded-xl hover:shadow-2xl hover:shadow-blue-500/30 transition-all duration-300 hover:-translate-y-0.5 overflow-hidden btn-shine">
                <span className="relative flex items-center justify-center space-x-3">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  <span className="text-lg">Book Your Free Strategy Call</span>
                </span>
              </button>

              <button className="px-10 py-4 bg-white border-2 cursor-pointer border-gray-300 text-gray-700 font-semibold rounded-xl hover:border-blue-500 hover:text-blue-600 transition-all duration-300 hover:-translate-y-0.5 flex items-center justify-center space-x-2">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                <span>View Success Stories</span>
              </button>
            </div>

            {/* Trust Badges */}
            <div className="mt-12 pt-8 border-t border-gray-200">
              <p className="text-sm text-gray-500 mb-6">Trusted by industry leaders</p>
              <div className="flex flex-wrap justify-center items-center gap-8 opacity-60">
                {['Google', 'Microsoft', 'Spotify', 'Slack', 'Adobe'].map((company) => (
                  <div key={company} className="text-gray-400 font-bold text-lg">
                    {company}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CallToAction;