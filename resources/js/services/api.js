import axios from 'axios';

const api = axios.create({
    baseURL: '/api',
    headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json',
    }
});

export default {
    // Reviews
    getReviews() {
        return api.get('/reviews');
    },
    
    createReview(data) {
        return api.post('/reviews', data);
    },
    
    // Contact
    sendContact(data) {
        return api.post('/contact', data);
    }
};
