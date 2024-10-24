import PropTypes from 'prop-types';
import { IoBookmarkOutline } from "react-icons/io5";

const Blog = ({ propBlog, propHandleBookmarks, propForTimeInBlog}) => {
    // console.log(propBlog);
    const { id, cover_pic, author, author_image,
        published_date, reading_time, title, hash_tags } = propBlog;
    return (
        <div className='mb-10 space-y-3'>
            <img className='w-full rounded-md' src={cover_pic} alt={`cover picture of ${title}`} />
            <div className='flex justify-between items-center m-3'>
                <div className='flex gap-4 items-center'>
                    <img src={author_image} alt={`author of ${title}`} className='w-14 h-14' />
                    <div>
                        <h4 className='font-semibold text-xl'>{author}</h4>
                        <p>{published_date}</p>
                    </div>
                </div>
                <div className='flex gap-2 items-center'>
                    <p>{reading_time} minutes</p>
                    <button onClick={() => propHandleBookmarks(propBlog)} className='font-bold text-xl text-red-700'><IoBookmarkOutline></IoBookmarkOutline></button>
                </div>
            </div>

            <h2 className='font-bold text-3xl'>{title}</h2>
            <p className='text-blue-600'>
                {
                    hash_tags.map((hash, idx) => <span key={idx}> <a href="">{hash}</a></span>)
                }
            </p>

            <p onClick={() => propForTimeInBlog(reading_time, id)}
            className='font-bold text-purple-700 underline'>Mark As Read</p>

        </div>
    );
};

Blog.propTypes = {
    propBlog: PropTypes.object.isRequired,
    propHandleBookmarks: PropTypes.func,
    propForTimeInBlog: PropTypes.func
}

export default Blog;