import React from 'react';
import BookShelf from './BookShelf';


function ListBooks (props) {

  return (
    <div className="list-books">

      <div className="list-books-title">
        <h1>MyReads</h1>
      </div>

      <div className="list-books-content">
        <div>
        {Object.entries(props.shelves).map((shelf) => (
          <div key={shelf[0]}>
            <BookShelf
              shelfName={shelf[1]}
              books={props.books}
              bookShelfFilter={shelf[0]}
              onMoveBookShelf={props.onMoveBookShelf}
              shelves={props.shelves}
            />
          </div>
        ))}
        </div>
      </div>

      <div className="open-search">
        <a onClick={() => props.onPageChange()}>Add a book</a>
      </div>

    </div>
  )

};

export default ListBooks
