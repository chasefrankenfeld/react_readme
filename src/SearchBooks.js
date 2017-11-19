import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import SingleBook from './SingleBook';
import * as BooksAPI from './BooksAPI';


class SearchBooks extends Component {

  state = {
    query: '',
    searchBooks: []
  }

  updateQuery = (query) => {
    this.setState({ query: query.toLowerCase() })
    BooksAPI.search(this.state.query, 20).then((books) => {
      this.setState({ searchBooks: books })
    })
  }

  clearQuery = () => {
    this.setState({ query: '' })
    this.setState({ searchBooks: [] })
  }

  handleChange = (event) => {
    this.updateQuery(event.target.value)
  };

  render() {

    return(
      <div className="search-books">”
        <div className="search-books-bar">
          <Link className="close-search"
            to='/'
          />
          <div className="search-books-input-wrapper">
            <input
              type="text"
              placeholder="Search by title or author"
              value={this.state.query}
              onChange={this.handleChange}
            />
          </div>
          <a className="clear-search" onClick={this.clearQuery}>Close</a>
        </div>

        <div className="search-books-results">
          <ol className="books-grid">
            {this.state.searchBooks && this.state.searchBooks.map((book) => (
              <li key={book.id}>
                <SingleBook
                  book={book}
                  shelves={this.props.shelves}
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

export default SearchBooks;
