import React from 'react'


const comments = [
    {
        'username': "Username",
        'comment':"This is an awesome blog"
    },
    {
        'username': "Username",
        'comment':"This is an awesome blog"
    },
    {
        'username': "Username",
        'comment':"This is an awesome blog"
    },
    {
        'username': "Username",
        'comment':"This is an awesome blog"
    },
    {
        'username': "Username",
        'comment':"This is an awesome blog"
    },
]

export default function Comments() {
    return (
        <div>
            {comments.map(comment => {
                return (
                    <div style={{padding:10,width:'75%',margin:'0 auto'}} className="border rounded ">
                
                        <span className='font-monospace fs-5 fw-semibold'>{comment.username}</span><br />
                        <span className='font-monospace'>{comment.comment}</span>
                    </div>   
                );
            })}
               
        </div>
    )
}
