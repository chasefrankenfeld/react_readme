import React, { Component } from 'react';
import SingleBook from './SingleBook';


class BookShelf extends Component {

  render() {
    return (
      <div className="bookshelf">
        <h2 className="bookshelf-title">{this.props.shelfName}</h2>
        <div className="bookshelf-books">
          <ol className="books-grid">
            {this.props.books.filter((book) => book.shelf === this.props.bookShelfFilter).map((book) => (
              <li key={book.id}>
                <SingleBook
                  book={book}
                  onMoveBookShelf={this.props.onMoveBookShelf}
                />
              </li>
            ))}
          </ol>
        </div>
      </div>
    )
  }
};

export default BookShelf;
