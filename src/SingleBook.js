import React, { Component } from 'react';
import BookShelfChanger from './BookShelfChanger';


class SingleBook extends Component {

  state = {
    shelf: '',
    shelves: []
  }

  componentDidMount() {
    this.setState({
      shelves: Object.entries(this.props.shelves),
      shelf: this.props.book.shelf
    })
  }

  handleChange = (event) => {
    this.setState({value: event.target.value})
    this.props.onMoveBookShelf(this.props.book, event.target.value)
  };

  render() {

    return(
        <div className="book">
          <div className="book-top">
            <div className="book-cover" style={{ width: 128, height: 193, backgroundImage: `url(${this.props.book.imageLinks.smallThumbnail})` }}></div>
            <BookShelfChanger
              value={this.state.shelf}
              handleChange={this.handleChange}
              shelves={this.state.shelves}
            />
          </div>
          <div className="book-title">{this.props.book.title}</div>
          <div className="book-authors">{this.props.book.authors}</div>
        </div>
    )
  }

};

export default SingleBook;
