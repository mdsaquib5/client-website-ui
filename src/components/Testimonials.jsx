import React from 'react';
import { SectionHeader, TestimonialCard, StatCard } from './common';

const Testimonials = () => {
  const testimonials = [
    {
      name: 'Sarah Johnson',
      role: 'Marketing Director',
      company: 'TechNova Inc.',
      content: 'DigitalPro transformed our online presence completely. Our website performance improved by 60% and lead generation tripled within the first quarter.',
      rating: 5,
      avatar: 'SJ',
      avatarColor: 'blue'
    },
    {
      name: 'Michael Chen',
      role: 'Startup Founder',
      company: 'InnovateLabs',
      content: 'The automation solutions they implemented saved us over 30 hours per week. Professional, timely, and exceptional quality throughout.',
      rating: 5,
      avatar: 'MC',
      avatarColor: 'green'
    },
    {
      name: 'Emma Rodriguez',
      role: 'Creative Director',
      company: 'Artistry Studio',
      content: 'Their poster designs were absolutely stunning! Our event attendance doubled and brand recognition skyrocketed. Highly recommend!',
      rating: 5,
      avatar: 'ER',
      avatarColor: 'purple'
    },
  ];

  const stats = [
    { value: '4.9/5', label: 'Average Client Rating', icon: '⭐' },
    { value: '98%', label: 'Client Retention Rate', icon: '❤️' },
    { value: '250+', label: 'Projects Completed', icon: '✓' },
    { value: '24h', label: 'Average Response Time', icon: '⚡' },
  ];

  return (
    <section className="py-24 bg-gradient-to-b from-white to-gray-50">
      <div className="container mx-auto px-4 lg:px-8">
        <SectionHeader
          badge="CLIENT TESTIMONIALS"
          title="What Our Clients Say"
          highlight="Clients Say"
          description="Don't just take our word for it. Here's what businesses we've worked with have to say."
        />

        {/* Testimonial Cards */}
        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <TestimonialCard
              key={index}
              name={testimonial.name}
              role={testimonial.role}
              company={testimonial.company}
              content={testimonial.content}
              rating={testimonial.rating}
              avatar={testimonial.avatar}
              avatarColor={testimonial.avatarColor}
              className="animate-fade-in-up"
              style={{ animationDelay: `${index * 0.2}s` }}
            />
          ))}
        </div>

        {/* Stats */}
        <div className="mt-20 pt-12 border-t border-gray-200">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <StatCard
                key={index}
                value={stat.value}
                label={stat.label}
                icon={stat.icon}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;