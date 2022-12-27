import React from 'react'
import { Input } from '../components/input/Input';
import useInput from '../hooks/useInput'
import MDEditor from "@uiw/react-md-editor";
import './BlogForm.css'

const mkdStr = `
# Markdown Editor

---

**Hello world!!!**

[![](https://avatars.githubusercontent.com/u/1680273?s=80&v=4)](https://avatars.githubusercontent.com/u/1680273?v=4)

\`\`\`javascript
import React from "react";
import ReactDOM from "react-dom";
import MEDitor from '@uiw/react-md-editor';

\`\`\`
`;

export default function BlogForm() {

  const {
    value: titleValue,
    isTouched: titleIsTouched,
    handleChange: titleHandleChange,
    hasError: titleHasError,
    handleBlur: titleHandleBlur,
  } = useInput('', (title) => title.length > 5);
  
  const {
    value: categoryValue,
    isTouched: categoryIsTouched,
    handleChange: categoryHandleChange,
    hasError: categoryHasError,
    handleBlur: categoryHandleBlur,
  } = useInput('', (title) => title.length > 8);
  

  const [value, setValue] = React.useState(mkdStr);

  return (
    <div className='container h-100 overflow-scroll'>
      <div className='my-5 border-bottom border-primary border-3'>
        <div className=''>
          <h1>Write a Blog</h1>
        </div>
      </div>
      <form>
        <div className='row my-5'>
          <div className='col'>
            <Input
              label="Title"
              type="text"
              required
              placeholder="Give your blog a title."
              value={titleValue}
              onChange={titleHandleChange}
              error="Please give your blog a title."
              touched={titleIsTouched}
              errorCond={titleHasError}
              onBlur={titleHandleBlur}
            />
          </div>
          <div className='col'>
            <Input
              label="Category"
              type="text"
              required
              placeholder="Give your blog a category."
              value={categoryValue}
              onChange={categoryHandleChange}
              error="Please give your blog a category."
              touched={categoryIsTouched}
              errorCond={categoryHasError}
              onBlur={categoryHandleBlur}
            />
          </div>
        </div>

        <div className='row'>
          <div className='col'>
            <div data-color-mode="light">
              <h5 className='font-sans fw-bold'>Your content goes here...</h5>
              <MDEditor height={400} value={value} preview='edit'  onChange={setValue} />
            </div>
          </div>
        </div>
      </form>  
    </div>
  )
}
