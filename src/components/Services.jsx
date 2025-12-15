import { Link } from 'react-router-dom';
import { SectionHeader, ServiceCard, Button } from './common';

const Services = () => {
  const services = [
    {
      title: 'Website Development',
      price: '$999+',
      description: 'Custom responsive websites with modern design patterns and SEO optimization for maximum impact.',
      features: ['Responsive Design', 'SEO Optimized', 'CMS Integration', 'Performance Focused'],
      icon: <span className="text-2xl text-white">🌐</span>,
      iconColor: 'blue',
      popular: true
    },
    {
      title: 'Poster Design',
      price: '$299+',
      description: 'Professional poster designs that capture attention and communicate your message effectively.',
      features: ['Print Ready', 'Unlimited Revisions', 'Source Files', 'Fast Delivery'],
      icon: <span className="text-2xl text-white">🎨</span>,
      iconColor: 'purple',
      popular: false
    },
    {
      title: 'Automation Solutions',
      price: '$499+',
      description: 'Streamline your business processes with custom automation solutions that save time and resources.',
      features: ['Workflow Automation', 'API Integration', 'Dashboard', 'Analytics'],
      icon: <span className="text-2xl text-white">⚡</span>,
      iconColor: 'green',
      popular: false
    },
  ];

  return (
    <section className="py-24 bg-gradient-to-b from-white to-blue-50">
      <div className="container mx-auto px-4 lg:px-8">
        <SectionHeader
          badge="OUR SERVICES"
          title="Premium Digital Solutions"
          highlight="Digital Solutions"
          description="We deliver comprehensive digital services designed to elevate your brand and drive measurable results in today's competitive landscape."
        />

        {/* Service Cards */}
        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {services.map((service, index) => (
            <ServiceCard
              key={index}
              title={service.title}
              price={service.price}
              description={service.description}
              features={service.features}
              icon={service.icon}
              iconColor={service.iconColor}
              popular={service.popular}
              className="animate-fade-in-up"
              style={{ animationDelay: `${index * 0.2}s` }}
            />
          ))}
        </div>

        {/* View All Services Link */}
        <div className="text-center">
          <Link to="/services">
            <Button
              variant="ghost"
              icon={
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                </svg>
              }
              className="text-blue-600 hover:text-blue-700"
            >
              View All Services & Pricing
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Services;