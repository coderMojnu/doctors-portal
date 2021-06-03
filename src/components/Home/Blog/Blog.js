import React from 'react';

const Blog = (props) => {
    const {authorImg, author, date, title, description} = props.blog;
    return (
        <div className="col-md-4">
            <div className="card p-3">
                <div className="d-flex align-items-center p-3">
                    <div>
                        <img src={authorImg} alt=""/>
                    </div>
                    <div className="p-3">
                        <h6>{author}</h6>
                        <p>{date}</p>
                    </div>
                </div>
                <p>{description}</p>
                <button className="btn btn-primary">Read More</button>
            </div>
        </div>
    );
};

export default Blog;