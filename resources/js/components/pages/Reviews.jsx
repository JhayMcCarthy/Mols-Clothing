import { useState, useEffect } from 'react';

function Reviews() {
    const [reviews, setReviews] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    const [newReview, setNewReview] = useState({
        name: '',
        text: '',
        rating: 5
    });
    const [isSubmitting, setIsSubmitting] = useState(false);

    useEffect(() => {
        loadReviews();
    }, []);

    const loadReviews = async () => {
        try {
            // Mock data for now - replace with actual API call
            const mockReviews = [
                {
                    id: 1,
                    name: 'Sarah Johnson',
                    text: 'Absolutely love my custom dress from Mols Clothing! The quality is exceptional and the fit is perfect.',
                    rating: 5,
                    created_at: '2024-01-15'
                },
                {
                    id: 2,
                    name: 'Kwame Asante',
                    text: 'Professional service and beautiful African-inspired designs. Highly recommended!',
                    rating: 5,
                    created_at: '2024-01-10'
                }
            ];
            setReviews(mockReviews);
        } catch (error) {
            console.error('Error loading reviews:', error);
        } finally {
            setIsLoading(false);
        }
    };

    const submitReview = async (e) => {
        e.preventDefault();
        setIsSubmitting(true);
        
        try {
            // Mock submission - replace with actual API call
            console.log('Submitting review:', newReview);
            alert('Thank you for your review!');
            setNewReview({ name: '', text: '', rating: 5 });
        } catch (error) {
            console.error('Error submitting review:', error);
            alert('Sorry, there was an error submitting your review. Please try again.');
        } finally {
            setIsSubmitting(false);
        }
    };

    const formatDate = (dateString) => {
        const date = new Date(dateString);
        return date.toLocaleDateString('en-US', {
            year: 'numeric',
            month: 'long',
            day: 'numeric'
        });
    };

    return (
        <div className="min-h-screen">
            <section className="relative bg-gradient-to-br from-amber-900 via-orange-800 to-red-900 text-white py-20">
                <div className="container mx-auto px-4 text-center">
                    <h1 className="text-5xl md:text-6xl font-bold mb-6">Customer Reviews</h1>
                    <p className="text-xl md:text-2xl max-w-3xl mx-auto">
                        What our valued clients say about their Mols Clothing experience
                    </p>
                </div>
            </section>

            <section className="py-20 bg-gray-50">
                <div className="container mx-auto px-4">
                    {isLoading ? (
                        <div className="text-center py-12">
                            <div className="inline-block animate-spin rounded-full h-12 w-12 border-b-2 border-yellow-500"></div>
                            <p className="mt-4 text-gray-600">Loading reviews...</p>
                        </div>
                    ) : (
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
                            {reviews.map((review) => (
                                <div key={review.id} className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300">
                                    <div className="flex items-center mb-4">
                                        <div className="w-12 h-12 bg-gradient-to-br from-yellow-400 to-orange-500 rounded-full flex items-center justify-center text-white font-bold">
                                            {review.name.charAt(0)}
                                        </div>
                                        <div className="ml-4">
                                            <h4 className="font-semibold text-gray-800">{review.name}</h4>
                                            <div className="flex text-yellow-400">
                                                {[...Array(5)].map((_, i) => (
                                                    <svg key={i} className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                                                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
                                                    </svg>
                                                ))}
                                            </div>
                                        </div>
                                    </div>
                                    <p className="text-gray-600 italic">"{review.text}"</p>
                                    <div className="mt-4 text-sm text-gray-500">
                                        {formatDate(review.created_at)}
                                    </div>
                                </div>
                            ))}
                        </div>
                    )}
                </div>
            </section>

            <section className="py-20 bg-white">
                <div className="container mx-auto px-4">
                    <div className="max-w-2xl mx-auto">
                        <div className="bg-gray-50 p-8 rounded-lg shadow-lg">
                            <h3 className="text-3xl font-bold text-center mb-6 text-gray-800">Share Your Experience</h3>
                            <form onSubmit={submitReview} className="space-y-6">
                                <div>
                                    <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">Your Name</label>
                                    <input
                                        type="text"
                                        id="name"
                                        value={newReview.name}
                                        onChange={(e) => setNewReview({...newReview, name: e.target.value})}
                                        required
                                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-yellow-500 focus:border-transparent transition-colors"
                                        placeholder="Enter your full name"
                                    />
                                </div>
                                
                                <div>
                                    <label htmlFor="rating" className="block text-sm font-medium text-gray-700 mb-2">Rating</label>
                                    <div className="flex space-x-2">
                                        {[1, 2, 3, 4, 5].map((i) => (
                                            <button
                                                key={i}
                                                type="button"
                                                onClick={() => setNewReview({...newReview, rating: i})}
                                                className={`w-10 h-10 rounded-full flex items-center justify-center transition-colors ${
                                                    i <= newReview.rating 
                                                        ? 'bg-yellow-400 text-white' 
                                                        : 'bg-gray-200 text-gray-400 hover:bg-gray-300'
                                                }`}
                                            >
                                                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                                                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
                                                </svg>
                                            </button>
                                        ))}
                                    </div>
                                </div>
                                
                                <div>
                                    <label htmlFor="text" className="block text-sm font-medium text-gray-700 mb-2">Your Review</label>
                                    <textarea
                                        id="text"
                                        value={newReview.text}
                                        onChange={(e) => setNewReview({...newReview, text: e.target.value})}
                                        required
                                        rows="5"
                                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-yellow-500 focus:border-transparent transition-colors"
                                        placeholder="Tell us about your experience with Mols Clothing..."
                                    ></textarea>
                                </div>
                                
                                <button
                                    type="submit"
                                    disabled={isSubmitting}
                                    className="w-full bg-gradient-to-r from-yellow-400 to-orange-500 text-white py-3 rounded-lg font-semibold hover:from-yellow-500 hover:to-orange-600 transition-all duration-300 transform hover:scale-105 disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none"
                                >
                                    {isSubmitting ? 'Submitting...' : 'Submit Review'}
                                </button>
                            </form>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}

export default Reviews;
