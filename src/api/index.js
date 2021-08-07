import axios from 'axios';

const URL = 'http://localhost:5000';

export const fecthPosts = () => axios.get(`${URL}/posts`);