import { useEffect, useState } from "react";
import Blog from "./Blog/Blog";
import PropTypes from "prop-types";


const Blogs = ({propBookmarks, propForTimeInBlogs}) => {
   const [blogs, setBlogs] = useState([])

   useEffect(() => {
      fetch('knowledge.json')
      .then(res => res.json())
      .then(data => setBlogs(data))
   },[])

    return (
        <div className="w-2/3">
            {/* <h4>blogs: {blogs.length}</h4> */}
            {
                blogs.map((blog, idx) => <Blog 
                    key={idx} 
                    propBlog = {blog}
                    propHandleBookmarks = {propBookmarks}
                    propForTimeInBlog = {propForTimeInBlogs}
                    ></Blog>)
            }
        </div>
    );
};

Blogs.propTypes = {
    propBookmarks:PropTypes.func,
    propForTimeInBlogs: PropTypes.func
}
export default Blogs;