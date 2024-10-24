
import PropTypes from 'prop-types';

const Bookmark = ({propBookmark}) => {
    // console.log(propBookmark);
    const {title} = propBookmark;
    return (
        <div className="bg-gray-100 rounded-lg text-center shadow-lg p-3 m-3">
            <p>{title}</p>
        </div>
    );
};

Bookmark.propTypes = {
    propBookmark: PropTypes.object
};

export default Bookmark;