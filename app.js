const express = require('express');
const axios = require('axios');
const app = express();

const port = 3000 || process.env.PORT;

const fetchPostsData = async () => {
    try {
        const response = await axios.get('https://jsonplaceholder.typicode.com/posts');
        return response.data;
    } catch (error) {
        console.error('Error fetching posts data:', error);
        return null;
    }
};

app.get('/', async (req, res) => {
    const postsData = await fetchPostsData();
    if (postsData) {
        res.json({
            message: "Here are some posts from JSONPlaceholder!",
            data: postsData
        });
    } else {
        res.status(500).json({
            message: "Failed to fetch posts data."
        });
    }
});

app.listen(port, () => {
    console.log(`Express app listening at http://localhost:${port}`);
});
