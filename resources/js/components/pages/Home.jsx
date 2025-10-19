import { Link } from 'react-router-dom';
import { useState, useEffect, useRef } from 'react';

function Home() {
    const [currentSlide, setCurrentSlide] = useState(0);
    const [imageErrors, setImageErrors] = useState({});
    const [isZipAnimationTriggered, setIsZipAnimationTriggered] = useState(false);
    const ctaSectionRef = useRef(null);

    const slides = [
        {
            id: 1,
            title: "Mols Clothing",
            subtitle: "Africa-based fashion brand dedicated to helping our clients look and feel their best. True style begins with comfort.",
            buttonText: "Explore Our Services",
            buttonLink: "/services",
            secondaryButtonText: "View Gallery",
            secondaryButtonLink: "/gallery",
            backgroundImage: "/images/gallery/slider1.avif",
        },
        {
            id: 2,
            title: "African Heritage",
            subtitle: "Celebrating African culture through contemporary fashion design. Experience the beauty of traditional prints in modern styles.",
            buttonText: "Our Story",
            buttonLink: "/about",
            secondaryButtonText: "View Gallery",
            secondaryButtonLink: "/gallery",
            backgroundImage: "/images/gallery/slider2.jpeg",
        },
        {
            id: 3,
            title: "Premium Quality",
            subtitle: "Exceptional craftsmanship and attention to detail in every piece. From ready-to-wear to bespoke creations.",
            buttonText: "Our Services",
            buttonLink: "/services",
            secondaryButtonText: "View Pricing",
            secondaryButtonLink: "/pricing",
            backgroundImage: "/images/gallery/slider3.jpeg",
        },
    ];

    useEffect(() => {
        // Debug: Log image paths
        slides.forEach(slide => {
            console.log(`Slide ${slide.id} image path: ${slide.backgroundImage}`);
        });

        const timer = setInterval(() => {
            setCurrentSlide((prev) => (prev + 1) % slides.length);
        }, 5000); // Change slide every 5 seconds

        return () => clearInterval(timer);
    }, [slides.length]);

    // Intersection Observer for zip animation
    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting && !isZipAnimationTriggered) {
                        setIsZipAnimationTriggered(true);
                    }
                });
            },
            {
                threshold: 0.3, // Trigger when 30% of the section is visible
                rootMargin: '0px 0px -100px 0px' // Start animation slightly before the section is fully visible
            }
        );

        if (ctaSectionRef.current) {
            observer.observe(ctaSectionRef.current);
        }

        return () => {
            if (ctaSectionRef.current) {
                observer.unobserve(ctaSectionRef.current);
            }
        };
    }, [isZipAnimationTriggered]);

    const goToSlide = (index) => {
        setCurrentSlide(index);
    };

    const nextSlide = () => {
        setCurrentSlide((prev) => (prev + 1) % slides.length);
    };

    const prevSlide = () => {
        setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
    };

    const handleImageError = (slideId, imageSrc) => {
        console.log(`Image failed to load: ${imageSrc}`);
        setImageErrors(prev => ({ ...prev, [slideId]: true }));
    };

    return (
        <div className="min-h-screen">
            {/* Hero Carousel Section */}
            <section className="relative text-white py-20 overflow-hidden h-screen flex items-center">
                {/* Slides */}
                {slides.map((slide, index) => (
                    <div
                        key={slide.id}
                        className={`absolute inset-0 transition-all duration-1000 ease-in-out ${
                            index === currentSlide 
                                ? 'opacity-100 scale-100' 
                                : 'opacity-0 scale-105'
                        }`}
                        style={{ 
                            backgroundColor: slide.fallbackColor,
                            backgroundImage: `url(${slide.backgroundImage})`,
                            backgroundSize: 'cover',
                            backgroundPosition: 'center',
                            backgroundRepeat: 'no-repeat',
                            transform: index === currentSlide ? 'scale(1)' : 'scale(1.05)',
                            filter: index === currentSlide ? 'brightness(1)' : 'brightness(0.8)'
                        }}
                    >
                        
                        <div className="container mx-auto px-4 text-center relative z-10 h-full flex items-center">
                            <div className="max-w-4xl mx-auto">
                                <h1 className="text-4xl md:text-5xl font-bold mb-6">
                                    <span 
                                        className={`inline-block transition-all duration-700 ease-out ${
                                            index === currentSlide 
                                                ? 'animate-fade-in-up opacity-100 translate-y-0' 
                                                : 'opacity-0 translate-y-8'
                                        }`}
                                        style={{
                                            color: index === 0 ? '#DD943B' : 'white',
                                            textShadow: '2px 2px 4px rgba(0,0,0,0.8)',
                                            border: '3px solid rgba(255,255,255,0.3)',
                                            padding: '20px 40px',
                                            borderRadius: '15px',
                                            backgroundColor: 'rgba(0,0,0,0.2)',
                                            animationDelay: '0.2s'
                                        }}
                                    >
                                        {slide.title}
                                    </span>
                                </h1>
                                <p className={`text-xl md:text-2xl mb-8 max-w-3xl mx-auto leading-relaxed text-white transition-all duration-700 ease-out ${
                                    index === currentSlide 
                                        ? 'animate-fade-in-up opacity-100 translate-y-0' 
                                        : 'opacity-0 translate-y-8'
                                }`} style={{animationDelay: '0.4s'}}>
                                    {slide.subtitle}
                                </p>
                                <div className={`flex flex-col sm:flex-row gap-4 justify-center transition-all duration-700 ease-out ${
                                    index === currentSlide 
                                        ? 'animate-fade-in-up opacity-100 translate-y-0' 
                                        : 'opacity-0 translate-y-8'
                                }`} style={{animationDelay: '0.6s'}}>
                                    <Link 
                                        to={slide.buttonLink} 
                                        className="px-8 py-4 rounded-lg font-semibold transition-all duration-300 transform hover:scale-105 shadow-lg text-white"
                                        style={{backgroundColor: '#DD943B'}}
                                        onMouseEnter={(e) => e.target.style.backgroundColor = '#B54274'}
                                        onMouseLeave={(e) => e.target.style.backgroundColor = '#DD943B'}
                                    >
                                        {slide.buttonText}
                                    </Link>
                                    <Link 
                                        to={slide.secondaryButtonLink} 
                                        className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white hover:text-gray-900 transition-all duration-300 transform hover:scale-105"
                                    >
                                        {slide.secondaryButtonText}
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>
                ))}

                {/* Navigation Arrows */}
                <button
                    onClick={prevSlide}
                    className="absolute left-4 top-1/2 transform -translate-y-1/2 z-20 bg-white bg-opacity-20 hover:bg-opacity-40 text-white p-3 rounded-full transition-all duration-300 hover:scale-110 hover:shadow-lg backdrop-blur-sm"
                >
                    <svg className="w-6 h-6 transition-transform duration-300 hover:-translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 19l-7-7 7-7"></path>
                    </svg>
                </button>
                <button
                    onClick={nextSlide}
                    className="absolute right-4 top-1/2 transform -translate-y-1/2 z-20 bg-white bg-opacity-20 hover:bg-opacity-40 text-white p-3 rounded-full transition-all duration-300 hover:scale-110 hover:shadow-lg backdrop-blur-sm"
                >
                    <svg className="w-6 h-6 transition-transform duration-300 hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7"></path>
                    </svg>
                </button>

                {/* Dots Indicator */}
                <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-20 flex space-x-3">
                    {slides.map((_, index) => (
                        <button
                            key={index}
                            onClick={() => goToSlide(index)}
                            className={`rounded-full transition-all duration-500 ease-out hover:scale-125 ${
                                index === currentSlide 
                                    ? 'w-8 h-3 bg-white shadow-lg' 
                                    : 'w-3 h-3 bg-white bg-opacity-50 hover:bg-opacity-75'
                            }`}
                        />
                    ))}
                </div>

                {/* Decorative Elements */}
                {/* <div className="absolute bottom-0 left-0 w-full h-20 bg-gradient-to-t from-white to-transparent"></div> */}
            </section>

            {/* Quick Features Section */}
            <section className="py-20 bg-white overflow-hidden">
                <div className="container mx-auto px-4">
                    <h2 className="text-4xl font-bold text-center mb-12 text-gray-800 animate-fade-in-up">Why Choose Mols Clothing?</h2>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
                        <div className="text-center group animate-fade-in-up" style={{animationDelay: '0.2s'}}>
                            <div className="w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 group-hover:rotate-12 transition-all duration-500 ease-out shadow-lg group-hover:shadow-xl" style={{backgroundColor: '#0F8E69'}}>
                                <svg className="w-10 h-10 text-white group-hover:scale-110 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"></path>
                                </svg>
                            </div>
                            <h3 className="text-xl font-bold mb-4 text-gray-800 group-hover:text-green-600 transition-colors duration-300">African Heritage</h3>
                            <p className="text-gray-600 group-hover:text-gray-800 transition-colors duration-300">Celebrating African culture through contemporary fashion design</p>
                        </div>

                        <div className="text-center group animate-fade-in-up" style={{animationDelay: '0.4s'}}>
                            <div className="w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 group-hover:rotate-12 transition-all duration-500 ease-out shadow-lg group-hover:shadow-xl" style={{backgroundColor: '#DD943B'}}>
                                <svg className="w-10 h-10 text-white group-hover:scale-110 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                                </svg>
                            </div>
                            <h3 className="text-xl font-bold mb-4 text-gray-800 group-hover:text-yellow-600 transition-colors duration-300">Premium Quality</h3>
                            <p className="text-gray-600 group-hover:text-gray-800 transition-colors duration-300">Exceptional craftsmanship and attention to detail in every piece</p>
                        </div>

                        <div className="text-center group animate-fade-in-up" style={{animationDelay: '0.6s'}}>
                            <div className="w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 group-hover:rotate-12 transition-all duration-500 ease-out shadow-lg group-hover:shadow-xl" style={{backgroundColor: '#B54274'}}>
                                <svg className="w-10 h-10 text-white group-hover:scale-110 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"></path>
                                </svg>
                            </div>
                            <h3 className="text-xl font-bold mb-4 text-gray-800 group-hover:text-pink-600 transition-colors duration-300">Local & Global</h3>
                            <p className="text-gray-600 group-hover:text-gray-800 transition-colors duration-300">Serving clients from Ghana to the diaspora worldwide</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Call to Action Section */}
            <section ref={ctaSectionRef} className="py-20 bg-gradient-to-r from-gray-200 to-gray-100 text-white overflow-hidden relative">
                {/* Background Pattern */}
                <div className="absolute inset-0 opacity-5">
                    <div className="w-full h-full" style={{backgroundImage: 'radial-gradient(circle, rgba(0,0,0,0.1) 1px, transparent 1px)', backgroundSize: '30px 30px'}}></div>
                </div>
                
                <div className="container mx-auto px-4 text-center relative z-10 zip-teeth" style={{color: '#000000'}}>
                    {/* Zip Slider */}
                    {isZipAnimationTriggered && <div className="zip-slider"></div>}
                    
                    <div className={isZipAnimationTriggered ? 'animate-zip-open' : 'opacity-0'}>
                        <h2 className="text-4xl font-bold mb-6" style={{animationDelay: isZipAnimationTriggered ? '0.3s' : '0s'}}>Ready to Experience African Fashion Excellence?</h2>
                        <p className="text-xl mb-8 max-w-2xl mx-auto" style={{animationDelay: isZipAnimationTriggered ? '0.6s' : '0s', color: '#DD943B'}}>
                            Join thousands of satisfied clients who trust Mols Clothing for their fashion needs
                        </p>
                        <div className="flex flex-col sm:flex-row gap-4 justify-center" style={{animationDelay: isZipAnimationTriggered ? '0.9s' : '0s'}}>
                            <Link 
                                to="/contact" 
                                className="px-8 py-4 rounded-lg font-semibold transition-all duration-300 transform hover:scale-105 hover:shadow-xl text-white"
                                style={{backgroundColor: '#0F8E69'}}
                                onMouseEnter={(e) => e.target.style.backgroundColor = '#DD943B'}
                                onMouseLeave={(e) => e.target.style.backgroundColor = '#0F8E69'}
                            >
                                Get Started Today
                            </Link>
                            <Link 
                                to="/about" 
                                className="px-8 py-4 rounded-lg font-semibold transition-all duration-300 transform hover:scale-105 hover:shadow-xl text-white border-2 border-transparent hover:border-white"
                                style={{backgroundColor: '#B54274'}}
                                onMouseEnter={(e) => e.target.style.backgroundColor = '#DD943B'}
                                onMouseLeave={(e) => e.target.style.backgroundColor = '#B54274'}
                            >
                                Learn More About Us
                            </Link>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}

export default Home;
