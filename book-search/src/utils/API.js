import axios from 'axios';

export default {
    searchBooks: (q)=> axios.get('/api/books/search', {q:q})
}