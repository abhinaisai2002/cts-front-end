import React from 'react'


const comments = [
    {
        'commentId':1,
        'username': "Username",
        'comment':"This is an awesome blog"
    },
    {
        'username': "Username",
        'comment':"This is an awesome blog",
        'commentId':2,
    },
    {
        'username': "Username",
        'comment':"This is an awesome blog",
        'commentId':3,
    },
    {
        'username': "Username",
        'comment':"This is an awesome blog",
        'commentId':4,
    },
    {
        'username': "Username",
        'comment':"This is an awesome blog",
        'commentId':5,
    },
]

export default function Comments() {
    return (
        <div>
            {comments.map(comment => {
                return (
                    <div key={comment.commentId} style={{padding:10,width:'75%',margin:'0 auto'}} className="border rounded ">
                
                        <span className='font-monospace fs-5 fw-semibold'>{comment.username}</span><br />
                        <span className='font-monospace'>{comment.comment}</span>
                    </div>   
                );
            })}
               
        </div>
    )
}
