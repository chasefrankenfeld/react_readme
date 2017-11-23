import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import * as BooksAPI from './BooksAPI';
import SearchBooks from './SearchBooks';
import ListBooks from './ListBooks';
import './App.css';


class BooksApp extends Component {

  state = {
    books: [],
    /* Insert any shelves you desire in the format 'bookShelfFilter': 'Book Shelf Name' */
    shelves: {
      'currentlyReading': 'Currently Reading',
      'wantToRead': 'Want to Read',
      'read': 'Read'
    }
  }

  componentDidMount() {
    BooksAPI.getAll().then((books) =>
      this.setState({books})
    )
  }

  // Placed the state update inside the API call promise resolutio to ensure state only changes after API update
  changeShelf = (book, newShelf) => {
    BooksAPI.update(book, newShelf).then(() => {
      // Ensure immutability in changing the state of the books
      const newBookList = this.state.books.filter((b) => b.id !== book.id)
      const updatedBook = {...book, shelf: newShelf}
      newBookList.push(updatedBook)
      this.setState({ books: newBookList })
    }, () => {
      // Logging in the console should an error occur
      alert(`${book.title} did not chang shelf to ${newShelf}!`)
    })
  }

  render() {
    return (
      <div className="app">

        <Route exact path='/' render={() =>
          <div>
            <ListBooks
              books={this.state.books}
              onMoveBookShelf={this.changeShelf}
              shelves={this.state.shelves}
            />
          </div>
        } />

        <Route exact path='/search' render={() =>
          <SearchBooks
            books={this.state.books}
            shelves={this.state.shelves}
            onMoveBookShelf={this.changeShelf}
          />
        } />

      </div>
    )
  }
}

export default BooksApp
