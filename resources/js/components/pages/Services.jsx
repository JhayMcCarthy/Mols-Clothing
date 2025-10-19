import { Link } from 'react-router-dom';
import { useState, useEffect, useRef } from 'react';

function Services() {
    const [isVisible, setIsVisible] = useState(false);
    const servicesRef = useRef(null);

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

        if (servicesRef.current) {
            observer.observe(servicesRef.current);
        }

        return () => {
            if (servicesRef.current) {
                observer.unobserve(servicesRef.current);
            }
        };
    }, []);

    return (
        <div ref={servicesRef} className="min-h-screen bg-gradient-to-br from-gray-50 to-white">
            {/* Hero Section */}
            <section className="relative bg-gradient-to-r from-gray-100 to-gray-200 text-white py-20 overflow-hidden">
                <div className="absolute inset-0 opacity-10">
                    <div className="w-full h-full" style={{backgroundImage: 'radial-gradient(circle, rgba(15, 142, 105, 0.1) 1px, transparent 1px)', backgroundSize: '40px 40px'}}></div>
                </div>
                
                <div className="container mx-auto px-4 text-center relative z-10">
                    <h1 className={`text-6xl font-bold mb-6 transition-all duration-1000 ${isVisible ? 'animate-fade-in-up' : 'opacity-0 translate-y-8'}`} style={{color: '#463164'}}>
                        Our Services
                    </h1>
                    <p className={`text-xl text-gray-600 max-w-3xl mx-auto transition-all duration-1000 delay-300 ${isVisible ? 'animate-fade-in-up' : 'opacity-0 translate-y-8'}`}>
                        Comprehensive fashion solutions tailored to your unique style and needs
                    </p>
                </div>
            </section>

            {/* Main Services Section */}
            <section className="py-20">
                <div className="container mx-auto px-4">
                    <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
                        {/* Ready-to-Wear */}
                        <div className={`bg-white p-8 rounded-2xl shadow-xl border border-gray-100 hover:shadow-2xl transition-all duration-500 group transform hover:-translate-y-2 ${isVisible ? 'animate-fade-in-up' : 'opacity-0 translate-y-8'}`} style={{animationDelay: '0.5s'}}>
                            <div className="w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300 shadow-lg" style={{backgroundColor: '#463164'}}>
                                <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"></path>
                                </svg>
                            </div>
                            <h3 className="text-2xl font-bold mb-4 text-gray-800 text-center group-hover:text-purple-600 transition-colors duration-300">Ready-to-Wear</h3>
                            <p className="text-gray-600 mb-6 text-center leading-relaxed">
                                Stylish, well-fitted pieces you can wear instantly. Perfect for those who want quality African fashion without the wait.
                            </p>
                            <ul className="space-y-3 mb-8">
                                <li className="flex items-center group/item">
                                    <svg className="w-5 h-5 mr-3 transition-colors duration-300" style={{color: '#0F8E69'}} fill="currentColor" viewBox="0 0 20 20">
                                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"></path>
                                    </svg>
                                    <span className="group-hover/item:text-gray-800 transition-colors duration-300">Instant availability</span>
                                </li>
                                <li className="flex items-center group/item">
                                    <svg className="w-5 h-5 mr-3 transition-colors duration-300" style={{color: '#0F8E69'}} fill="currentColor" viewBox="0 0 20 20">
                                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"></path>
                                    </svg>
                                    <span className="group-hover/item:text-gray-800 transition-colors duration-300">Premium African fabrics</span>
                                </li>
                                <li className="flex items-center group/item">
                                    <svg className="w-5 h-5 mr-3 transition-colors duration-300" style={{color: '#0F8E69'}} fill="currentColor" viewBox="0 0 20 20">
                                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"></path>
                                    </svg>
                                    <span className="group-hover/item:text-gray-800 transition-colors duration-300">Various sizes available</span>
                                </li>
                                <li className="flex items-center group/item">
                                    <svg className="w-5 h-5 mr-3 transition-colors duration-300" style={{color: '#0F8E69'}} fill="currentColor" viewBox="0 0 20 20">
                                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"></path>
                                    </svg>
                                    <span className="group-hover/item:text-gray-800 transition-colors duration-300">Contemporary African designs</span>
                                </li>
                            </ul>
                            <div className="text-center">
                                <Link to="/gallery" className="px-8 py-3 rounded-lg font-semibold transition-all duration-300 transform hover:scale-105 hover:shadow-lg text-white" style={{backgroundColor: '#463164'}} onMouseEnter={(e) => e.target.style.backgroundColor = '#816bb9'} onMouseLeave={(e) => e.target.style.backgroundColor = '#463164'}>
                                    View Collection
                                </Link>
                            </div>
                        </div>

                        {/* Custom/Bespoke - Featured */}
                        <div className={`bg-gradient-to-br from-gray-900 to-gray-800 text-white p-8 rounded-2xl shadow-2xl transform scale-105 group hover:scale-110 transition-all duration-500 ${isVisible ? 'animate-fade-in-up' : 'opacity-0 translate-y-8'}`} style={{animationDelay: '0.7s'}}>
                            <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                                <span className="bg-gradient-to-r from-yellow-400 to-orange-500 text-gray-900 px-4 py-1 rounded-full text-sm font-bold">
                                    Most Popular
                                </span>
                            </div>
                            <div className="w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300 shadow-lg" style={{backgroundColor: '#DD943B'}}>
                                <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                                </svg>
                            </div>
                            <h3 className="text-2xl font-bold mb-4 text-center group-hover:text-yellow-400 transition-colors duration-300">Custom / Bespoke</h3>
                            <p className="mb-6 text-center text-gray-300 leading-relaxed">
                                Tailored garments made to suit your exact measurements and preferences. Every detail crafted to perfection with traditional African techniques.
                            </p>
                            <ul className="space-y-3 mb-8">
                                <li className="flex items-center group/item">
                                    <svg className="w-5 h-5 mr-3 text-yellow-400 transition-colors duration-300" fill="currentColor" viewBox="0 0 20 20">
                                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"></path>
                                    </svg>
                                    <span className="group-hover/item:text-white transition-colors duration-300">Personal measurements</span>
                                </li>
                                <li className="flex items-center group/item">
                                    <svg className="w-5 h-5 mr-3 text-yellow-400 transition-colors duration-300" fill="currentColor" viewBox="0 0 20 20">
                                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"></path>
                                    </svg>
                                    <span className="group-hover/item:text-white transition-colors duration-300">Premium African fabrics</span>
                                </li>
                                <li className="flex items-center group/item">
                                    <svg className="w-5 h-5 mr-3 text-yellow-400 transition-colors duration-300" fill="currentColor" viewBox="0 0 20 20">
                                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"></path>
                                    </svg>
                                    <span className="group-hover/item:text-white transition-colors duration-300">Perfect fit guarantee</span>
                                </li>
                                <li className="flex items-center group/item">
                                    <svg className="w-5 h-5 mr-3 text-yellow-400 transition-colors duration-300" fill="currentColor" viewBox="0 0 20 20">
                                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"></path>
                                    </svg>
                                    <span className="group-hover/item:text-white transition-colors duration-300">2-3 weeks delivery</span>
                                </li>
                            </ul>
                            <div className="text-center">
                                <Link to="/contact" className="bg-white text-gray-900 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-all duration-300 transform hover:scale-105 hover:shadow-lg">
                                    Get Quote
                                </Link>
                            </div>
                        </div>

                        {/* Made-to-Order */}
                        <div className={`bg-white p-8 rounded-2xl shadow-xl border border-gray-100 hover:shadow-2xl transition-all duration-500 group transform hover:-translate-y-2 ${isVisible ? 'animate-fade-in-up' : 'opacity-0 translate-y-8'}`} style={{animationDelay: '0.9s'}}>
                            <div className="w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300 shadow-lg" style={{backgroundColor: '#463164'}}>
                                <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 100 4m0-4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 100 4m0-4v2m0-6V4"></path>
                                </svg>
                            </div>
                            <h3 className="text-2xl font-bold mb-4 text-gray-800 text-center group-hover:text-purple-600 transition-colors duration-300">Made-to-Order</h3>
                            <p className="text-gray-600 mb-6 text-center leading-relaxed">
                                Personalized pieces crafted upon request for a perfect fit and finish. Your vision meets our African fashion expertise.
                            </p>
                            <ul className="space-y-3 mb-8">
                                <li className="flex items-center group/item">
                                    <svg className="w-5 h-5 mr-3 transition-colors duration-300" style={{color: '#463164'}} fill="currentColor" viewBox="0 0 20 20">
                                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"></path>
                                    </svg>
                                    <span className="group-hover/item:text-gray-800 transition-colors duration-300">Custom design consultation</span>
                                </li>
                                <li className="flex items-center group/item">
                                    <svg className="w-5 h-5 mr-3 transition-colors duration-300" style={{color: '#463164'}} fill="currentColor" viewBox="0 0 20 20">
                                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"></path>
                                    </svg>
                                    <span className="group-hover/item:text-gray-800 transition-colors duration-300">Luxury African materials</span>
                                </li>
                                <li className="flex items-center group/item">
                                    <svg className="w-5 h-5 mr-3 transition-colors duration-300" style={{color: '#463164'}} fill="currentColor" viewBox="0 0 20 20">
                                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"></path>
                                    </svg>
                                    <span className="group-hover/item:text-gray-800 transition-colors duration-300">Handcrafted details</span>
                                </li>
                                <li className="flex items-center group/item">
                                    <svg className="w-5 h-5 mr-3 transition-colors duration-300" style={{color: '#463164'}} fill="currentColor" viewBox="0 0 20 20">
                                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"></path>
                                    </svg>
                                    <span className="group-hover/item:text-gray-800 transition-colors duration-300">3-4 weeks delivery</span>
                                </li>
                            </ul>
                            <div className="text-center">
                                <Link to="/contact" className="px-8 py-3 rounded-lg font-semibold transition-all duration-300 transform hover:scale-105 hover:shadow-lg text-white" style={{backgroundColor: '#463164'}} onMouseEnter={(e) => e.target.style.backgroundColor = '#816bb9'} onMouseLeave={(e) => e.target.style.backgroundColor = '#463164'}>
                                    Start Design
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Process Section */}
            <section className="py-20 bg-gradient-to-r from-gray-100 to-gray-200">
                <div className="container mx-auto px-4">
                    <h2 className={`text-4xl font-bold text-center mb-16 transition-all duration-1000 delay-1100 ${isVisible ? 'animate-fade-in-up' : 'opacity-0 translate-y-8'}`} style={{color: '#463164'}}>
                        Our Process
                    </h2>
                    
                    <div className="grid grid-cols-1 md:grid-cols-4 gap-8 max-w-6xl mx-auto">
                        <div className={`text-center group transition-all duration-1000 delay-1200 ${isVisible ? 'animate-fade-in-up' : 'opacity-0 translate-y-8'}`}>
                            <div className="w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300 shadow-lg" style={{backgroundColor: '#D22B2B'}}>
                                <span className="text-white font-bold text-xl">1</span>
                            </div>
                            <h3 className="text-lg font-bold mb-2 text-gray-800">Consultation</h3>
                            <p className="text-gray-600 text-sm">Discuss your vision and requirements</p>
                        </div>

                        <div className={`text-center group transition-all duration-1000 delay-1300 ${isVisible ? 'animate-fade-in-up' : 'opacity-0 translate-y-8'}`}>
                            <div className="w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300 shadow-lg" style={{backgroundColor: '#FFC300'}}>
                                <span className="text-white font-bold text-xl">2</span>
                            </div>
                            <h3 className="text-lg font-bold mb-2 text-gray-800">Design</h3>
                            <p className="text-gray-600 text-sm">Create your custom design</p>
                        </div>

                        <div className={`text-center group transition-all duration-1000 delay-1400 ${isVisible ? 'animate-fade-in-up' : 'opacity-0 translate-y-8'}`}>
                            <div className="w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300 shadow-lg" style={{backgroundColor: '#047530'}}>
                                <span className="text-white font-bold text-xl">3</span>
                            </div>
                            <h3 className="text-lg font-bold mb-2 text-gray-800">Crafting</h3>
                            <p className="text-gray-600 text-sm">Expert artisans bring it to life</p>
                        </div>

                        <div className={`text-center group transition-all duration-1000 delay-1500 ${isVisible ? 'animate-fade-in-up' : 'opacity-0 translate-y-8'}`}>
                            <div className="w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300 shadow-lg" style={{backgroundColor: '#000000'}}>
                                <span className="text-white font-bold text-xl">4</span>
                            </div>
                            <h3 className="text-lg font-bold mb-2 text-gray-800">Delivery</h3>
                            <p className="text-gray-600 text-sm">Perfect fit delivered to you</p>
                        </div>
                    </div>
                </div>
            </section>
            
        </div>
    );
}

export default Services;
