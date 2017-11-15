import React from 'react';
import SingleBook from './SingleBook';


function BookShelf (props) {

  return (
    <div className="bookshelf">
      <h2 className="bookshelf-title">{props.shelfName}</h2>
      <div className="bookshelf-books">
        <ol className="books-grid">
          {props.books.filter((book) => book.shelf === props.bookShelfFilter).map((book) => (
            <li key={book.id}>
              <SingleBook
                book={book}
                onMoveBookShelf={props.onMoveBookShelf}
                shelves={props.shelves}
              />
            </li>
          ))}
        </ol>
      </div>
    </div>
  )

};

export default BookShelf;
