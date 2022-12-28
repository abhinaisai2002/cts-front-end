import React, { useState } from 'react'
import MDEditor from "@uiw/react-md-editor";
import './BlogForm.css'
import { Button } from '../components/button/Button';
import Comments from '../components/blogs/Comments';
import { Form } from 'react-bootstrap';
import { BiLike } from 'react-icons/bi';
import { modalActions } from '../store/slices/modalSlice';
import { useDispatch, useSelector } from 'react-redux';
import ModalComponent from '../components/modal/Modal';
import WriteComment from '../components/modal/blogs/WriteComment';

const mkdStr = `
# Title

---

**Hello world!!!**

[![](https://avatars.githubusercontent.com/u/1680273?s=80&v=4)](https://avatars.githubusercontent.com/u/1680273?v=4)

\`\`\`javascript
import React from "react";
import ReactDOM from "react-dom";
import MEDitor from '@uiw/react-md-editor';

\`\`\`
\`\`\`javascript
import React from "react";
import ReactDOM from "react-dom";
import MEDitor from '@uiw/react-md-editor';

\`\`\`
\`\`\`javascript
import React from "react";
import ReactDOM from "react-dom";
import MEDitor from '@uiw/react-md-editor';

\`\`\`
\`\`\`javascript
import React from "react";
import ReactDOM from "react-dom";
import MEDitor from '@uiw/react-md-editor';

\`\`\`
\`\`\`javascript
import React from "react";
import ReactDOM from "react-dom";
import MEDitor from '@uiw/react-md-editor';

\`\`\`
`;

export default function ViewBlog() {

    const [value] = React.useState(mkdStr);

    const [isThemeLight, setTheme] = useState(true);
    const {show} = useSelector(state => state.modal);

    const dispatch = useDispatch();

    console.log(show)

    const addCommentButtonHandler = ()=>{
        dispatch(modalActions.openModal({
            'title':'Comment the Blog. ',
            'body':<WriteComment />
        })); 
    }

    return (
        <>
            {show && <ModalComponent />}
            <div className='container p-2 border'>
                <div className='row my-5'>
                    <div className='col text-center'>
                        <h1 className='font-monospace'>Title</h1>
                        <p className='text-dark-50 fs-5'>username | createddate</p>  
                    </div>
                </div>
                <div className='row my-5'>
                    <div className='col'>
                        <div data-color-mode="dark rounded">
                            <div style={{ padding: 15, width: '75%', margin: '0 auto' }}
                            className="position-relative">
                                <div className='position-absolute end-0 bottom-50 d-flex'>
                                    <button className='btn btn-success text-white me-2 p-1'>
                                        78  <BiLike />
                                    </button>
                                    <Form>
                                        <Form.Check 
                                            type="switch"
                                            id="custom-switch"
                                            onChange={() => setTheme(p => !p)}
                                        />  
                                    </Form>
                                </div>
                            </div>
                            <div data-color-mode={`${isThemeLight ? 'light':'dark'}`}>
                                <MDEditor.Markdown  
                                    style={{ padding: 20,width:'75%',margin:'0 auto',border:'1px solid black',borderRadius:'10px' }}
                                    source={value}
                                    linkTarget="_blank"
                                />
                            </div>
                        </div>
                    </div>
                </div>
                <div className='row mt-5 '>
                    <div className='col '>
                        <div style={{padding: 15,width:'75%',margin:'0 auto'}} className="border rounded d-flex justify-content-between align-items-center">
                        <h5>Comments</h5>
                        <Button type='button' color='primary'
                                className='text-white'
                                text="Write Comment"
                                onClick={addCommentButtonHandler}
                        />  
                            
                        </div>
                    </div>      
                </div>  
                <div className='row my-5 '>
                    <div className='col '>
                            <Comments />
                    </div>      
                </div>  
            </div>
        </>
    )
}
