import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';

function Header() {
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
    const location = useLocation();

    const toggleMobileMenu = () => {
        setMobileMenuOpen(!mobileMenuOpen);
    };

    const isActive = (path) => {
        return location.pathname === path;
    };

    const navLinks = [
        { to: '/', label: 'Home' },
        { to: '/about', label: 'About Us' },
        { to: '/services', label: 'Services' },
        { to: '/gallery', label: 'Gallery' },
        { to: '/pricing', label: 'Pricing' },
        { to: '/reviews', label: 'Reviews' },
        { to: '/contact', label: 'Contact' },
    ];

    return (
        <header className="bg-white/95 backdrop-blur-md shadow-lg border-b border-gray-100 sticky top-0 z-40">
            <nav className="container mx-auto px-4 flex justify-between items-center py-4">
                {/* Logo */}
                <Link to="/" className="flex items-center group">
                    <div className="w-10 h-10 rounded-lg flex items-center justify-center mr-3 group-hover:scale-105 transition-transform duration-300" style={{backgroundColor: '#0F8E69'}}>
                        <span className="text-white font-bold text-lg">M</span>
                    </div>
                    <h1 className="text-2xl font-bold bg-gradient-to-r from-gray-800 to-gray-600 bg-clip-text text-transparent">
                        Mols Clothing
                    </h1>
                </Link>

                {/* Desktop Navigation */}
                <div className="hidden md:flex items-center space-x-1">
                    {navLinks.map((link) => (
                        <Link
                            key={link.to}
                            to={link.to}
                            className={`relative px-4 py-2 rounded-lg font-medium transition-all duration-300 ${
                                isActive(link.to)
                                    ? 'shadow-sm'
                                    : 'text-gray-700 hover:text-gray-900'
                            }`}
                            style={{
                                color: isActive(link.to) ? '#0F8E69' : undefined,
                                backgroundColor: isActive(link.to) ? '#f0f9f6' : undefined,
                            }}
                            onMouseEnter={(e) => {
                                if (!isActive(link.to)) {
                                    e.target.style.color = '#0F8E69';
                                    e.target.style.backgroundColor = '#f0f9f6';
                                }
                            }}
                            onMouseLeave={(e) => {
                                if (!isActive(link.to)) {
                                    e.target.style.color = '#374151';
                                    e.target.style.backgroundColor = 'transparent';
                                }
                            }}
                        >
                            {link.label}
                            {isActive(link.to) && (
                                <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-1 h-1 rounded-full" style={{backgroundColor: '#0F8E69'}}></div>
                            )}
                        </Link>
                    ))}
                </div>

                {/* Mobile menu button */}
                <div className="md:hidden">
                    <button 
                        onClick={toggleMobileMenu} 
                        className="p-2 rounded-lg text-gray-700 transition-all duration-300"
                        onMouseEnter={(e) => {
                            e.target.style.color = '#0F8E69';
                            e.target.style.backgroundColor = '#f0f9f6';
                        }}
                        onMouseLeave={(e) => {
                            e.target.style.color = '#374151';
                            e.target.style.backgroundColor = 'transparent';
                        }}
                    >
                        <svg 
                            className={`w-6 h-6 transition-transform duration-300 ${mobileMenuOpen ? 'rotate-90' : ''}`} 
                            fill="none" 
                            stroke="currentColor" 
                            viewBox="0 0 24 24"
                        >
                            {mobileMenuOpen ? (
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path>
                            ) : (
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7"></path>
                            )}
                        </svg>
                    </button>
                </div>
            </nav>

            {/* Mobile Navigation */}
            <div className={`md:hidden transition-all duration-300 ease-in-out overflow-hidden ${
                mobileMenuOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
            }`}>
                <div className="px-4 pb-4 bg-white/95 backdrop-blur-md border-t border-gray-100">
                    <div className="flex flex-col space-y-1 pt-4">
                        {navLinks.map((link) => (
                            <Link
                                key={link.to}
                                to={link.to}
                                className={`px-4 py-3 rounded-lg font-medium transition-all duration-300 ${
                                    isActive(link.to)
                                        ? 'shadow-sm'
                                        : 'text-gray-700'
                                }`}
                                style={{
                                    color: isActive(link.to) ? '#0F8E69' : undefined,
                                    backgroundColor: isActive(link.to) ? '#f0f9f6' : undefined,
                                }}
                                onMouseEnter={(e) => {
                                    if (!isActive(link.to)) {
                                        e.target.style.color = '#0F8E69';
                                        e.target.style.backgroundColor = '#f0f9f6';
                                    }
                                }}
                                onMouseLeave={(e) => {
                                    if (!isActive(link.to)) {
                                        e.target.style.color = '#374151';
                                        e.target.style.backgroundColor = 'transparent';
                                    }
                                }}
                                onClick={toggleMobileMenu}
                            >
                                {link.label}
                            </Link>
                        ))}
                    </div>
                </div>
            </div>
        </header>
    );
}

export default Header;
