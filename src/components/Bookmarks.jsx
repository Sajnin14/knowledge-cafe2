import PropTypes from "prop-types";
import Bookmark from "./Bookmark";


const Bookmarks = ({ propBookmarks, propForTimeinBookmarks }) => {

    return (


        <div className="w-1/3 bg-gray-300 p-4">
            <div className="p-5 bg-purple-100 my-4 rounded-lg">
                <h4 className="text-purple-700 font-bold text-2xl">Spent Time on Read: {propForTimeinBookmarks} minutes</h4>
            </div>

            <h4 className="font-bold text-2xl">Bookmarked Blogs: {propBookmarks.length}</h4>
            <div >
                {
                    propBookmarks.map(bookmark => <Bookmark
                        key={bookmark.id}
                        propBookmark={bookmark}
                    ></Bookmark>)
                }
            </div>
        </div>
    );
};


Bookmarks.propTypes = {
    propBookmarks: PropTypes.array,
    propForTimeinBookmarks: PropTypes.number
}
export default Bookmarks;
