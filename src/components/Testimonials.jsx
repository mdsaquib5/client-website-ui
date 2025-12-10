import React from 'react';

const Testimonials = () => {
  const testimonials = [
    {
      name: 'Sarah Johnson',
      role: 'Marketing Director',
      company: 'TechNova Inc.',
      content: 'DigitalPro transformed our online presence completely. Our website performance improved by 60% and lead generation tripled within the first quarter.',
      rating: 5,
      avatar: 'SJ',
      color: 'from-blue-500 to-blue-600'
    },
    {
      name: 'Michael Chen',
      role: 'Startup Founder',
      company: 'InnovateLabs',
      content: 'The automation solutions they implemented saved us over 30 hours per week. Professional, timely, and exceptional quality throughout.',
      rating: 5,
      avatar: 'MC',
      color: 'from-green-500 to-green-600'
    },
    {
      name: 'Emma Rodriguez',
      role: 'Creative Director',
      company: 'Artistry Studio',
      content: 'Their poster designs were absolutely stunning! Our event attendance doubled and brand recognition skyrocketed. Highly recommend!',
      rating: 5,
      avatar: 'ER',
      color: 'from-purple-500 to-purple-600'
    },
  ];

  return (
    <section className="py-24 bg-gradient-to-b from-white to-gray-50">
      <div className="container mx-auto px-4 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16 animate-fade-in-up">
          <div className="inline-flex items-center px-4 py-2 bg-gradient-to-r from-indigo-50 to-purple-50 rounded-full border border-indigo-200 mb-6">
            <span className="text-sm font-semibold text-indigo-700">CLIENT TESTIMONIALS</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-gray-900">
            What Our <span className="bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent">Clients Say</span>
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Don't just take our word for it. Here's what businesses we've worked with have to say.
          </p>
        </div>

        {/* Testimonial Cards */}
        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="group animate-fade-in-up hover-lift bg-white shadow-lg p-8 transition-all duration-500"
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              {/* Rating */}
              <div className="flex mb-6">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <svg key={i} className="w-5 h-5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
              </div>

              {/* Content */}
              <div className="relative">
                <div className="text-6xl text-gray-200 absolute -top-8 -left-2">"</div>
                <p className="text-gray-700 mb-8 text-lg leading-relaxed relative z-10">
                  {testimonial.content}
                </p>
                <div className="text-6xl text-gray-200 absolute -bottom-12 -right-2">"</div>
              </div>

              {/* Client Info */}
              <div className="flex items-center pt-8 border-t border-gray-100">
                <div className={`w-14 h-14 rounded-xl bg-gradient-to-r ${testimonial.color} flex items-center justify-center text-white font-bold text-lg mr-4 shadow-md`}>
                  {testimonial.avatar}
                </div>
                <div>
                  <div className="font-bold text-gray-900 text-lg">{testimonial.name}</div>
                  <div className="text-gray-600">
                    {testimonial.role} • {testimonial.company}
                  </div>
                </div>
              </div>

              {/* Hover Effect Line */}
              <div className="absolute bottom-0 left-0 w-0 h-1 bg-gradient-to-r from-indigo-500 to-purple-500 group-hover:w-full transition-all duration-500 rounded-full"></div>
            </div>
          ))}
        </div>

        {/* Stats */}
        <div className="mt-20 pt-12 border-t border-gray-200">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {[
              { value: '4.9/5', label: 'Average Client Rating', icon: '⭐' },
              { value: '98%', label: 'Client Retention Rate', icon: '❤️' },
              { value: '250+', label: 'Projects Completed', icon: '✓' },
              { value: '24h', label: 'Average Response Time', icon: '⚡' },
            ].map((stat, index) => (
              <div key={index} className="text-center p-6 bg-white rounded-xl shadow-sm hover:shadow-md transition-all duration-300 hover-lift">
                <div className="text-4xl mb-4">{stat.icon}</div>
                <div className="text-3xl font-bold text-gray-900 mb-2">{stat.value}</div>
                <div className="text-gray-600">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;