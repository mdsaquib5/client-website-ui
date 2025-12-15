import React from 'react';
import { Badge, Button, StatCard } from './common';

const Hero = () => {
    const stats = [
        { value: '200+', label: 'Projects Delivered' },
        { value: '99%', label: 'Client Satisfaction' },
        { value: '24/7', label: 'Support' },
        { value: '50+', label: 'Happy Clients' },
    ];

    return (
        <div className="relative overflow-hidden py-20 md:py-32">
            {/* Background Effects */}
            <div className="absolute inset-0">
                <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl"></div>
                <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl"></div>
                <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-gradient-to-r from-blue-600/5 to-purple-600/5 rounded-full blur-3xl"></div>
            </div>

            <div className="container mx-auto px-4 relative z-10">
                <div className="max-w-4xl mx-auto text-center">
                    <Badge
                        variant="ghost"
                        size="lg"
                        icon={<span className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></span>}
                        className="mb-8 text-gray-300"
                    >
                        🚀 Premium Web Solutions • 24/7 Support
                    </Badge>

                    {/* Main Heading */}
                    <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
                        <span className="bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent animate-gradient">
                            Transform Your Digital
                        </span>
                        <br />
                        <span className="text-white">Presence Instantly</span>
                    </h1>

                    {/* Subheading */}
                    <p className="text-xl md:text-2xl text-gray-400 mb-10 max-w-2xl mx-auto leading-relaxed">
                        We craft stunning websites, eye-catching posters, and smart automation
                        solutions that drive results and elevate your brand.
                    </p>

                    {/* CTA Buttons */}
                    <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                        <Button
                            variant="primary"
                            size="lg"
                            icon={
                                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                                </svg>
                            }
                            className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 hover:scale-105 hover:shadow-2xl hover:shadow-blue-500/25 rounded-full"
                        >
                            Start Your Project
                        </Button>

                        <Button
                            variant="ghost"
                            size="lg"
                            icon={
                                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z" />
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                                </svg>
                            }
                            iconPosition="left"
                            className="rounded-full hover:scale-105"
                        >
                            Watch Demo
                        </Button>
                    </div>

                    {/* Stats */}
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-20">
                        {stats.map((stat, index) => (
                            <StatCard
                                key={index}
                                value={stat.value}
                                label={stat.label}
                                valueClassName="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent"
                                labelClassName="text-gray-400"
                                className="backdrop-blur-md bg-white/5 border border-white/10 hover:bg-white/10 hover:scale-105"
                            />
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Hero;