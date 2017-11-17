import React, { Component } from 'react';
import * as BooksAPI from './BooksAPI'
import SearchBooks from './SearchBooks';
import ListBooks from './ListBooks';
import './App.css';


class BooksApp extends Component {

  state = {
    /**
     * TODO: Use React-Router instead of showSearchPage
     */
    showSearchPage: false,
    books: [],
    /* Insert any shelves you desire in the format 'bookShelfFilter': 'Book Shelf Name' */
    shelves: {
      'currentlyReading': 'Currently Reading',
      'wantToRead': 'Want to Read',
      'read': 'Read'
    }
  }

  // TODO: Delete this function when you add the router
  changePage = () => {
    {this.state.showSearchPage ? (
        this.setState({ showSearchPage: false })
      ) : (
        this.setState({ showSearchPage: true })
      )
    }
  }

  componentDidMount() {
    BooksAPI.getAll().then((books) =>
      this.setState({books})
    )
  }

  changeShelf = (book, newShelf) => {
    // Ensure immutability in changing the state of the books
    const newBookList = this.state.books.filter((b) => b.id !== book.id)
    const updatedBook = {...book, shelf: newShelf}
    newBookList.push(updatedBook)
    this.setState({books: newBookList})
    BooksAPI.update(book, newShelf)
  }

  render() {
    return (
      <div className="app">
        {this.state.showSearchPage ? (
          // TODO: Change this.changePage for changing the page state when adding the router
          <SearchBooks
            onPageChange={this.changePage}
          />
        ) : (
          <div>
            <ListBooks
              onPageChange={this.changePage}
              books={this.state.books}
              onMoveBookShelf={this.changeShelf}
              shelves={this.state.shelves}
            />
          </div>
        )}
      </div>
    )
  }
}

export default BooksApp
