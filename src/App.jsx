
import { useState } from 'react'
import './App.css'
import Blogs from './components/Blogs'
import Bookmarks from './components/Bookmarks'
import Header from './components/Header'

function App() {
  
  const [bookmarks, setBookmarks] = useState([])

  const handleBookmarks = (propBlogsFromButton) =>{
    const newBookmarks = [...bookmarks, propBlogsFromButton];
    setBookmarks(newBookmarks);

  }

  const [time, setTime] = useState(0);

  const handleTime = (timeFromClickedButton, id) =>{
       setTime(time+timeFromClickedButton);
        console.log('remove bookmarks', id);
        const remainingBookmarks = bookmarks.filter(bookmark => bookmark.id !== id);
        setBookmarks(remainingBookmarks);
       
  }
  
  return (
    <>

      <Header className="max-w-7xl mx-auto"></Header>
      <div className='md:flex max-w-7xl mx-auto'>
        <Blogs propBookmarks= {handleBookmarks} propForTimeInBlogs = {handleTime}></Blogs>
        <Bookmarks propBookmarks ={bookmarks} propForTimeinBookmarks ={time}></Bookmarks>
      </div>

    </>
  )
}

export default App
