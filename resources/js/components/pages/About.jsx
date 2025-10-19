import { Link } from 'react-router-dom';
import { useState, useEffect, useRef } from 'react';

function About() {
    const [isVisible, setIsVisible] = useState(false);
    const aboutRef = useRef(null);

    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        setIsVisible(true);
                    }
                });
            },
            {
                threshold: 0.1,
                rootMargin: '0px 0px -50px 0px'
            }
        );

        if (aboutRef.current) {
            observer.observe(aboutRef.current);
        }

        return () => {
            if (aboutRef.current) {
                observer.unobserve(aboutRef.current);
            }
        };
    }, []);

    return (
        <div ref={aboutRef} className="min-h-screen bg-gradient-to-br from-gray-50 to-white">
            {/* Hero Section */}
            <section className="py-20 bg-gradient-to-r from-gray-100 to-gray-200 relative overflow-hidden">
                <div className="absolute inset-0 opacity-10">
                    <div className="w-full h-full" style={{backgroundImage: 'radial-gradient(circle, rgba(15, 142, 105, 0.1) 1px, transparent 1px)', backgroundSize: '40px 40px'}}></div>
                </div>
                
                <div className="container mx-auto px-4 text-center relative z-10">
                    <h1 className={`text-6xl font-bold mb-6 transition-all duration-1000 ${isVisible ? 'animate-fade-in-up' : 'opacity-0 translate-y-8'}`} style={{color: '#463a64'}}>
                        About Mols Clothing
                    </h1>
                    <p className={`text-xl text-gray-600 max-w-3xl mx-auto transition-all duration-1000 delay-300 ${isVisible ? 'animate-fade-in-up' : 'opacity-0 translate-y-8'}`}>
                        Crafting African Fashion Excellence Since 2023
                    </p>
                </div>
            </section>

            {/* Main Content */}
            <section className="py-20">
                <div className="container mx-auto px-4">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
                        {/* Story Section */}
                        <div className={`transition-all duration-1000 delay-500 ${isVisible ? 'animate-fade-in-up' : 'opacity-0 translate-y-8'}`}>
                            <div className="bg-white shadow-xl rounded-2xl p-8 h-full">
                                <div className="flex items-center mb-6">
                                    <div className="w-12 h-12 rounded-full flex items-center justify-center mr-4" style={{backgroundColor: '#0F8E69'}}>
                                        <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"></path>
                                        </svg>
                                    </div>
                                    <h2 className="text-3xl font-bold text-gray-800">Our Story</h2>
                                </div>
                                <p className="text-lg text-gray-700 leading-relaxed mb-6">
                                    Mols Clothing is an Africa-based fashion brand dedicated to helping our clients look and feel their best. We believe true style begins with comfort — that's why it's our number one priority.
                                </p>
                                <p className="text-lg text-gray-700 leading-relaxed">
                                    Every piece we create is designed to keep you as comfortable as possible while looking effortlessly stylish, celebrating the rich heritage of African fashion.
                                </p>
                            </div>
                        </div>

                        {/* Mission Section */}
                        <div className={`transition-all duration-1000 delay-700 ${isVisible ? 'animate-fade-in-up' : 'opacity-0 translate-y-8'}`}>
                            <div className="bg-white shadow-xl rounded-2xl p-8 h-full">
                                <div className="flex items-center mb-6">
                                    <div className="w-12 h-12 rounded-full flex items-center justify-center mr-4" style={{backgroundColor: '#816bb9'}}>
                                        <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z"></path>
                                        </svg>
                                    </div>
                                    <h2 className="text-3xl font-bold text-gray-800">Our Mission</h2>
                                </div>
                                <p className="text-lg text-gray-700 leading-relaxed mb-6">
                                    To revolutionize African fashion by creating contemporary, comfortable, and culturally-inspired clothing that empowers individuals to express their unique style while celebrating their heritage.
                                </p>
                                <p className="text-lg text-gray-700 leading-relaxed">
                                    We are committed to bridging traditional African craftsmanship with modern design, ensuring every piece tells a story of quality, comfort, and cultural pride that resonates globally.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Values Section */}
            <section className="py-20 bg-gradient-to-r from-gray-100 to-gray-200">
                <div className="container mx-auto px-4">
                    <h2 className={`text-4xl font-bold text-center mb-16 transition-all duration-1000 delay-900 ${isVisible ? 'animate-fade-in-up' : 'opacity-0 translate-y-8'}`} style={{color: '#463a64'}}>
                        Our Core Values
                    </h2>
                    
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
                        <div className={`text-center group transition-all duration-1000 delay-1000 ${isVisible ? 'animate-fade-in-up' : 'opacity-0 translate-y-8'}`}>
                            <div className="w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300 shadow-lg" style={{backgroundColor: '#0F8E69'}}>
                                <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"></path>
                                </svg>
                            </div>
                            <h3 className="text-xl font-bold mb-4 text-gray-800">Quality First</h3>
                            <p className="text-gray-600">Exceptional craftsmanship and premium materials in every piece we create.</p>
                        </div>

                        <div className={`text-center group transition-all duration-1000 delay-1100 ${isVisible ? 'animate-fade-in-up' : 'opacity-0 translate-y-8'}`}>
                            <div className="w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300 shadow-lg" style={{backgroundColor: '#816bb9'}}>
                                <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"></path>
                                </svg>
                            </div>
                            <h3 className="text-xl font-bold mb-4 text-gray-800">African Heritage</h3>
                            <p className="text-gray-600">Celebrating and preserving the rich cultural heritage of African fashion.</p>
                        </div>

                        <div className={`text-center group transition-all duration-1000 delay-1200 ${isVisible ? 'animate-fade-in-up' : 'opacity-0 translate-y-8'}`}>
                            <div className="w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300 shadow-lg" style={{backgroundColor: '#B54274'}}>
                                <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197m13.5-9a2.5 2.5 0 11-5 0 2.5 2.5 0 015 0z"></path>
                                </svg>
                            </div>
                            <h3 className="text-xl font-bold mb-4 text-gray-800">Client Focus</h3>
                            <p className="text-gray-600">Dedicated to making every client look and feel their absolute best.</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Call to Action */}
            <section className="py-20">
                <div className="container mx-auto px-4 text-center">
                    <div className={`max-w-3xl mx-auto transition-all duration-1000 delay-1300 ${isVisible ? 'animate-fade-in-up' : 'opacity-0 translate-y-8'}`}>
                        <h2 className="text-4xl font-bold mb-6 text-gray-800">Ready to Experience Excellence?</h2>
                        <p className="text-xl text-gray-600 mb-8">
                            Join thousands of satisfied clients who trust Mols Clothing for their fashion needs
                        </p>
                        <div className="flex flex-col sm:flex-row gap-4 justify-center">
                            <Link 
                                to="/contact" 
                                className="px-8 py-4 rounded-lg font-semibold transition-all duration-300 transform hover:scale-105 hover:shadow-xl text-white"
                                style={{backgroundColor: '#463a64'}}
                                onMouseEnter={(e) => e.target.style.backgroundColor = '#816bb9'}
                                onMouseLeave={(e) => e.target.style.backgroundColor = '#463a64'}
                            >
                                Get in Touch
                            </Link>
                            <Link 
                                to="/gallery" 
                                className="px-8 py-4 rounded-lg font-semibold transition-all duration-300 transform hover:scale-105 hover:shadow-xl text-white border-2 border-transparent hover:border-white"
                                style={{backgroundColor: '#816bb9'}}
                                onMouseEnter={(e) => e.target.style.backgroundColor = '#463a64'}
                                onMouseLeave={(e) => e.target.style.backgroundColor = '#816bb9'}
                            >
                                View Our Work
                            </Link>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}

export default About;
