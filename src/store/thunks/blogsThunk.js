import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from 'axios'

const blogs = [
    {
        'blogId': 1,
        'title':'Heading of blog',
        'username': 'Username',
        'email': 'email',
        'createdDate': 'createdDate',
        'content': `My Journey Growing up in a small town in Punjab, India,
                    I always had a fascination with technology. I spent hours tinkering
                    with gadgets and software, trying to understand how they worked and how I co…
                `,
        'likes': 78,
        'comments':78
    },
    {
        'username': 'Username',
        'email': 'email',
        'title':'Heading of blog',
        'createdDate': 'createdDate',
        'content': `My Journey Growing up in a small town in Punjab, India,
                    I always had a fascination with technology. I spent hours tinkering
                    with gadgets and software, trying to understand how they worked and how I co…
                `,
        'likes': 78,
        'comments':78,
        'blogId':2,
    },
    {
        'username': 'Username',
        'email': 'email',
        'title':'Heading of blog',
        'createdDate': 'createdDate',
        'content': `My Journey Growing up in a small town in Punjab, India,
                    I always had a fascination with technology. I spent hours tinkering
                    with gadgets and software, trying to understand how they worked and how I co…
                `,
        'likes': 18,
        'comments':78,
        'blogId':3,
    },
    {
        'username': 'Username',
        'email': 'email',
        'title':'Heading of blog',
        'createdDate': 'createdDate',
        'content': `My Journey Growing up in a small town in Punjab, India,
                    I always had a fascination with technology. I spent hours tinkering
                    with gadgets and software, trying to understand how they worked and how I co…
                `,
        'likes': 78,
        'comments':78,
        'blogId':4,
    }
]

const getBlogs = createAsyncThunk('blogs/get', async () => {
    // const response = await axios.get('URL',{
    //     headers: {
    //         'Content-Type':'application/json'
    //     }
    // })
    // return response.data;
    return blogs;
});


const getComments = createAsyncThunk('comments/get',async ()=>{
    const response = await axios.get('URL',{
        headers: {
            'Content-Type':'application/json'
        }
    })

    return response.data;

})

const postComment = createAsyncThunk('comments/post',async ()=>{
    const response = await axios.post('URL',{},{
        headers: {
            'Content-Type': 'application/json'
        }
    });
    return response.data;
})

export default { getBlogs, getComments,postComment };