import { Link } from 'react-router-dom';

function Pricing() {
    return (
        <div className="min-h-screen">
            <section className="relative bg-gradient-to-br text-white py-20" style={{backgroundColor: '#0F8E69'}}>
                <div className="container mx-auto px-4 text-center">
                    <h1 className="text-5xl md:text-6xl font-bold mb-6">Pricing</h1>
                    <p className="text-xl md:text-2xl max-w-3xl mx-auto">
                        Transparent pricing for exceptional African fashion
                    </p>
                </div>
            </section>

            <section className="py-20 bg-white">
                <div className="container mx-auto px-4">
                    <div className="max-w-6xl mx-auto">
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                            <div className="bg-gray-50 p-8 rounded-lg shadow-lg border border-gray-200">
                                <h3 className="text-2xl font-bold mb-4 text-gray-800 text-center">Ready-to-Wear</h3>
                                <div className="mb-6 text-center">
                                    <span className="text-4xl font-bold text-gray-900">From GHS 100</span>
                                    <span className="text-gray-600">/piece</span>
                                </div>
                                <div className="text-center">
                                    <Link to="/gallery" className="w-full bg-gray-900 text-white py-3 rounded-lg font-semibold hover:bg-gray-800 transition-colors block">
                                        View Collection
                                    </Link>
                                </div>
                            </div>

                            <div className="bg-gray-900 text-white p-8 rounded-lg shadow-lg transform scale-105 relative">
                                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                                    <span className="bg-yellow-400 text-gray-900 px-4 py-1 rounded-full text-sm font-semibold">Most Popular</span>
                                </div>
                                <h3 className="text-2xl font-bold mb-4 text-center">Custom / Bespoke</h3>
                                <div className="mb-6 text-center">
                                    <span className="text-4xl font-bold">From GHS 200</span>
                                    <span className="text-gray-300">/piece</span>
                                </div>
                                <div className="text-center">
                                    <Link to="/contact" className="w-full bg-white text-gray-900 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors block">
                                        Get Quote
                                    </Link>
                                </div>
                            </div>

                            <div className="bg-gray-50 p-8 rounded-lg shadow-lg border border-gray-200">
                                <h3 className="text-2xl font-bold mb-4 text-gray-800 text-center">Made-to-Order</h3>
                                <div className="mb-6 text-center">
                                    <span className="text-4xl font-bold text-gray-900">From GHS 300</span>
                                    <span className="text-gray-600">/piece</span>
                                </div>
                                <div className="text-center">
                                    <Link to="/contact" className="w-full bg-gray-900 text-white py-3 rounded-lg font-semibold hover:bg-gray-800 transition-colors block">
                                        Start Design
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}

export default Pricing;
