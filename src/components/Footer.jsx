import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
    const currentYear = new Date().getFullYear();

    const socialLinks = [
        { name: 'Twitter', icon: '𝕏', url: '#', color: 'hover:bg-gray-900 hover:text-white' },
        { name: 'LinkedIn', icon: 'in', url: '#', color: 'hover:bg-blue-700 hover:text-white' },
        { name: 'Instagram', icon: 'IG', url: '#', color: 'hover:bg-pink-600 hover:text-white' },
        { name: 'Facebook', icon: 'f', url: '#', color: 'hover:bg-blue-600 hover:text-white' },
    ];

    const quickLinks = [
        { name: 'Home', path: '/' },
        { name: 'Services', path: '/services' },
        { name: 'Portfolio', path: '#' },
        { name: 'About Us', path: '#' },
        { name: 'Contact', path: '/contact' },
    ];

    const services = [
        'Website Development',
        'Poster Design',
        'Automation Solutions',
        'UI/UX Design',
        'SEO Optimization',
        'Brand Strategy'
    ];

    return (
        <footer className="bg-gray-900 text-white pt-16 pb-8">
            <div className="container mx-auto px-4 lg:px-8">
                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12">
                    {/* Company Info */}
                    <div>
                        <Link to="/" className="flex items-center space-x-3 mb-6 group">
                            <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-indigo-500 rounded-xl flex items-center justify-center shadow-lg group-hover:shadow-xl transition-all duration-300">
                                <span className="text-white font-bold text-2xl">D</span>
                            </div>
                            <div>
                                <span className="text-2xl font-bold bg-gradient-to-r from-blue-400 to-indigo-400 bg-clip-text text-transparent">
                                    BrandLogo
                                </span>
                                <div className="text-xs text-gray-400 font-medium tracking-wider mt-1">DIGITAL SOLUTIONS</div>
                            </div>
                        </Link>
                        <p className="text-gray-400 mb-8 leading-relaxed">
                            We deliver premium digital solutions that transform businesses and drive growth in today's competitive landscape.
                        </p>
                        <div className="flex space-x-3">
                            {socialLinks.map((social) => (
                                <a
                                    key={social.name}
                                    href={social.url}
                                    className={`w-10 h-10 rounded-lg bg-gray-800 flex items-center justify-center text-gray-300 font-semibold transition-all duration-300 ${social.color}`}
                                >
                                    {social.icon}
                                </a>
                            ))}
                        </div>
                    </div>

                    {/* Quick Links */}
                    <div>
                        <h4 className="text-white font-bold text-lg mb-8">Quick Links</h4>
                        <ul className="space-y-4">
                            {quickLinks.map((link) => (
                                <li key={link.name}>
                                    <Link
                                        to={link.path}
                                        className="text-gray-400 hover:text-white hover:translate-x-2 transition-all duration-300 flex items-center"
                                    >
                                        <svg className="w-4 h-4 mr-3 text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                                        </svg>
                                        {link.name}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Services */}
                    <div>
                        <h4 className="text-white font-bold text-lg mb-8">Our Services</h4>
                        <ul className="space-y-4">
                            {services.map((service) => (
                                <li key={service}>
                                    <a href="#" className="text-gray-400 hover:text-white transition-colors duration-300 flex items-center">
                                        <div className="w-2 h-2 bg-blue-500 rounded-full mr-3"></div>
                                        {service}
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Newsletter & Contact */}
                    <div>
                        <h4 className="text-white font-bold text-lg mb-8">Stay Updated</h4>
                        <div className="mb-8">
                            <p className="text-gray-400 mb-4">Subscribe to our newsletter for updates and insights.</p>
                            <div className="flex">
                                <input
                                    type="email"
                                    placeholder="Your email"
                                    className="flex-grow px-4 py-3 bg-gray-800 border border-gray-700 rounded-l-lg focus:outline-none focus:ring-2 focus:ring-blue-500 text-white"
                                />
                                <button className="cursor-pointer px-6 py-3 bg-gradient-to-r from-blue-600 to-indigo-600 text-white font-semibold rounded-r-lg hover:opacity-90 transition-all duration-300">
                                    →
                                </button>
                            </div>
                        </div>
                        <div className="space-y-4">
                            <div className="flex items-center text-gray-400">
                                <svg className="w-5 h-5 text-blue-400 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                                </svg>
                                <Link to={'tel:+1 (555) 123-4567'}>+1 (555) 123-4567</Link>
                            </div>
                            <div className="flex items-center text-gray-400">
                                <svg className="w-5 h-5 text-blue-400 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                                </svg>
                                <Link to={'mailto:hello@brandlogo.com'}>hello@brandlogo.com</Link>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Divider */}
                <div className="border-t border-gray-800 my-12"></div>

                {/* Bottom Bar */}
                <div className="flex flex-col md:flex-row justify-between items-center">
                    <div className="text-gray-400 text-sm mb-4 md:mb-0">
                        © {currentYear} BrandLogo Solutions. All rights reserved.
                    </div>
                    <div className="flex flex-wrap gap-6">
                        <a href="#" className="text-gray-400 hover:text-white text-sm transition-colors duration-300">
                            Privacy Policy
                        </a>
                        <a href="#" className="text-gray-400 hover:text-white text-sm transition-colors duration-300">
                            Terms of Service
                        </a>
                        <a href="#" className="text-gray-400 hover:text-white text-sm transition-colors duration-300">
                            Cookie Policy
                        </a>
                        <a href="#" className="text-gray-400 hover:text-white text-sm transition-colors duration-300">
                            GDPR Compliance
                        </a>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;