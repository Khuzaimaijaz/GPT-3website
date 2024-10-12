import React from 'react'
import './blog.css'
import { Artical } from '../../components'
import { blog1,blog2,blog3,blog4,blog5 } from './imports'
const Blog = () => {
  return (
    <div className='gpt3__blog section__padding' id='blog'>
      <div className="gpt3__blog-heading">
        <h1 className="gradient__text">A lot is happening, 
        We are blogging about it.</h1>
      </div>
      <div className="gpt3__blog-container">
        <div className="gpt3__blog-container_groupa">
          <Artical imgUrl={blog1} date="26sep-2024" title="GPT-3 and Open  AI is the future. Let us exlore how it is?" />

        </div>
        <div className="gpt3__blog-container_groupb">
        <Artical imgUrl={blog2}  date="26sep-2024" title="GPT-3 and Open  AI is the future. Let us exlore how it is?"/>
        <Artical imgUrl={blog3} date="26sep-2024" title="GPT-3 and Open  AI is the future. Let us exlore how it is?" />
         <Artical imgUrl={blog4} date="26sep-2024" title="GPT-3 and Open  AI is the future. Let us exlore how it is?" />
        <Artical imgUrl={blog5} date="26sep-2024" title="GPT-3 and Open  AI is the future. Let us exlore how it is?" />

        </div>
      </div>
      
    </div>
  )
}

export default Blog
