import React, { useEffect, useState } from 'react';

const ApiCall = () => {
    const [data, setData] = useState(null);

    useEffect(() => {
        const fetchPost = async () => {
            const response = await fetch('https://jsonplaceholder.typicode.com/comments?postId=1');
            const result = await response.json();
            setData(result);
        };
        fetchPost();
    }, []);

    return (
        <div className="container flex flex-col items-center h-screen pt-[320px] pb-[620px]">
            {data ? (
                <ul className='text-center w-[70vw]'>
                    {data.map((post) => (
                        <li key={post.id} className="py-5 text-center border-2  w-[70vw]">
                            <h2 className=' text-blue-500 font-bold '>Quote</h2>
                            {post.body}
                        </li>
                    ))}
                </ul>
            ) : (
                <p className='border-2 bg-red-400'>Loading...</p>
            )}
        </div>
    );
};

export default ApiCall;
