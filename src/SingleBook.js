import React from 'react';

function SingleBook (props) {

  return(
      <div className="book">
        <div className="book-top">
          <div className="book-cover" style={{ width: 128, height: 193, backgroundImage: `url(${props.book.imageLinks.smallThumbnail})` }}></div>
          <div className="book-shelf-changer">
            <select onChange={(event) => props.onMoveBookShelf(props.book, event.target.value)}>
              <option value="none" disabled>Move to...</option>
              {Object.entries(props.shelves).map((shelf) => (
                <option value={shelf[0]} key={shelf[0]}>{shelf[1]}</option>
              ))}
              <option value="none">None</option>
            </select>
          </div>
        </div>
        <div className="book-title">{props.book.title}</div>
        <div className="book-authors">{props.book.authors}</div>
      </div>
    )

};

export default SingleBook;
