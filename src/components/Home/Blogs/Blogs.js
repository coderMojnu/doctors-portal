import React from 'react';
import Blog from '../Blog/Blog';
import wilson from '../../../images/doctor1.png'

const Blogs = () => {
    const blogData = [
        {
            title: 'Check at least a doctor in a year for your teeth',
            description: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ea, placeat totam laborum maiores, esse assumenda porro error natus sit ipsam.        ',
            author: 'Dr. Cudi',
            authorImg: wilson,
            date: '23 April 2019'
        },
        {
            title: 'Two time brush in a day can keep you healthy',
            description: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ea, placeat totam laborum maiores, esse assumenda porro error natus sit ipsam.        ',
            author: 'Dr. Sinthia',
            authorImg: wilson,
            date: '23 April 2019'
        },
        {
            title: 'The tooth cancer is taking a challenge',
            description: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ea, placeat totam laborum maiores, esse assumenda porro error natus sit ipsam.        ',
            author: 'Dr. Cudi',
            authorImg: wilson,
            date: '23 April 2019'
        },
    ]

    return (
        <div className="container mt-5 p-3">
            <div className="text-center mt-5 mb-5">
                <h5 className="blue-text">OUR BLOG</h5>
                <h2>From Our Blog News</h2>
            </div>
            <div className="row">
                {
                    blogData.map(blog => <Blog blog={blog}></Blog>)
                }
            </div>
        </div>
    );
};

export default Blogs;