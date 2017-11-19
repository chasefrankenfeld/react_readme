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

  changeShelf = (book, newShelf) => {
    // Ensure immutability in changing the state of the books
    const newBookList = this.state.books.filter((b) => b.id !== book.id)
    const updatedBook = {...book, shelf: newShelf}
    newBookList.push(updatedBook)
    this.setState({ books: newBookList })
    BooksAPI.update(book, newShelf)
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
