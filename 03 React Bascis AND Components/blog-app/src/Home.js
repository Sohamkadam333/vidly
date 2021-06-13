import './css/main.css';

import { useState } from 'react';

const Home = () => {
        const [blogs, setBlogs] = useState([
                { title: 'My new Website', body: 'lorem ipsum', author: 'john', id: 1 },
                { title: 'My new Website', body: 'lorem ipsum', author: 'marry', id: 2 },
                { title: 'My new Website', body: 'lorem ipsum', author: 'jane', id: 3 }
        ]);

        return (
                <div className="home my-5">
                        {blogs.map((blog) => (
                                <div className="blog-preview" key={blog.id}>
                                        <h1>{blog.title}</h1>
                                        <p>{blog.body}</p>
                                        <p>Wirtten By: {blog.author}</p>
                                </div>
                        ))}

                </div >
        );
};


export default Home;