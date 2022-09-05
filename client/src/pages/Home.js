import React from 'react';

const Home = () => {
    const token = localStorage.getItem('token');
    if (token) {
        return <div>Home</div>;
    } else {
        window.location.href = '/';
    }
};

export default Home;