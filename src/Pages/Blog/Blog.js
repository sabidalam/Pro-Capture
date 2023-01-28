import React from 'react';
import useTitle from '../../component/Hooks/useTitle';

const Blog = () => {
    useTitle('Blog');
    return (
        <div className='container mx-auto px-6 md:px-40'>
            <h1 className='text-3xl font-bold bg-gray-300 text-black text-center rounded md:w-1/6 py-3 mx-auto my-8'>FAQ</h1>
            <div className='bg-gray-300 text-left pl-12 p-12 rounded mb-8'>
                <h3 className='text-2xl font-bold mb-4'>What is the Difference between SQL and NoSQL?</h3>
                <p>
                    <b>SQL:</b> <br />
                    1.RELATIONAL DATABASE MANAGEMENT SYSTEM (RDBMS). <br />
                    2.These databases have fixed or static or predefined schema. <br />
                    3.These databases are not suited for hierarchical data storage. <br />
                    4.These databases are best suited for complex queries. <br />
                    <b>NoSQL:</b> <br />
                    1.Non-relational or distributed database system. <br />
                    2.They have dynamic schema. <br />
                    3.These databases are best suited for hierarchical data storage. <br />
                    4.These databases are not so good for complex queries
                </p>
            </div>
            <div className='bg-gray-300 text-left pl-12 p-12 rounded mb-8'>
                <h3 className='text-2xl font-bold mb-4'>What is JWT, and how does it work?</h3>
                <p>
                    JWT, or JSON Web Token, is an open standard used to share security information between two parties — a client and a server. Each JWT contains encoded JSON objects, including a set of claims. JWTs are signed using a cryptographic algorithm to ensure that the claims cannot be altered after the token is issued. <br />
                    <b>How it works:</b> <br />
                    The JOSE (JSON Object Signing and Encryption) header contains the type of token — JWT in this case — and the signing algorithm.
                    The payload contains the claims. This is displayed as a JSON string, usually containing no more than a dozen fields to keep the JWT compact. This information is typically used by the server to verify that the user has permission to perform the action they are requesting.
                    There are no mandatory claims for a JWT, but overlaying standards may make claims mandatory. For example, when using JWT as bearer access token under OAuth2.0, iss, sub, aud, and exp must be present. some are more common than others.
                    The signature ensures that the token hasn't been altered. The party that creates the JWT signs the header and payload with a secret that is known to both the issuer and receiver, or with a private key known only to the sender. When the token is used, the receiving party verifies that the header and payload match the signature.

                </p>
            </div>
            <div className='bg-gray-300 text-left pl-12 p-12 rounded mb-8'>
                <h3 className='text-2xl font-bold mb-4'>What is the difference between javascript and NodeJS?</h3>
                <p>
                    <b>Javascript:</b> <br />
                    1.Javascript is a programming language that is used for writing scripts on the website. <br />
                    2.Javascript can only be run in the browsers. <br />
                    3.It is basically used on the client-side. <br />
                    4.Javascript is capable enough to add HTML and play with the DOM. <br />
                    <b>NodeJs:</b> <br />
                    1.NodeJS is a Javascript runtime environment. <br />
                    2.We can run Javascript outside the browser with the help of NodeJS. <br />
                    3.It is mostly used on the server-side. <br />
                    4.Nodejs does not have capability to add HTML tags.
                </p>
            </div>
            <div className='bg-gray-300 text-left pl-12 p-12 rounded mb-8'>
                <h3 className='text-2xl font-bold mb-4'>How does NodeJS handle multiple requests at the same time?</h3>
                <p>
                    NodeJS receives multiple client requests and places them into EventQueue. NodeJS is built with the concept of event-driven architecture. NodeJS has its own EventLoop which is an infinite loop that receives requests and processes them. EventLoop is the listener for the EventQueue.

                    If NodeJS can process the request without I/O blocking then the event loop would itself process the request and sends the response back to the client by itself. But, it is possible to process multiple requests parallelly using the NodeJS cluster module or worker_threads module.

                </p>
            </div>
        </div>
    );
};

export default Blog;