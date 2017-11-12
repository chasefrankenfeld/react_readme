import React, { Component } from 'react';
import BookShelf from './BookShelf';

class ListBooks extends Component {

  render() {
    return (
      <div className="list-books">

        <div className="list-books-title">
          <h1>MyReads</h1>
        </div>

        <div className="list-books-content">
          <div>
            <BookShelf
              shelfName='Currently Reading'
              books={this.props.books}
              bookShelfFilter='currentlyReading'
            />
            <BookShelf
              shelfName='Want to Read'
              books={this.props.books}
              bookShelfFilter='wantToRead'
            />
            <BookShelf
              shelfName='Read'
              books={this.props.books}
              bookShelfFilter='read'
            />
          </div>
        </div>

        <div className="open-search">
          <a onClick={() => this.props.onPageChange()}>Add a book</a>
        </div>

      </div>
    )
  }
};

export default ListBooks
