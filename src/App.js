import React, { Component } from 'react';
import * as BooksAPI from './BooksAPI'
import SearchBooks from './SearchBooks';
import ListBooks from './ListBooks';
import './App.css';

class BooksApp extends Component {


  state = {
    /**
     * TODO: Instead of using this state variable to keep track of which page
     * we're on, use the URL in the browser's address bar. This will ensure that
     * users can use the browser's back and forward buttons to navigate between
     * pages, as well as provide a good URL they can bookmark and share.
     */
    showSearchPage: false,
    books: [],
    shelves: [
      {'currentlyReading': 'Currently Reading'},
      {'wantToRead': 'Want to Read'},
      {'read': 'Read'}
    ]
  }

  // TODO: Delete this function when you add the router
  changePage = () => {
    {this.state.showSearchPage ? (
        this.setState({ showSearchPage: false })
      ) : (
        this.setState({ showSearchPage: true })
      )
    }
  };

  componentDidMount() {
    BooksAPI.getAll().then((books) =>
      this.setState({books})
    )
  }

  changeShelf = (book, newShelf) => {
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
            />
          </div>
        )}
      </div>
    )
  }
}

export default BooksApp
