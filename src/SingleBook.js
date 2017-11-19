import React, { Component } from 'react';
import PropTypes from 'prop-types';
import BookShelfChanger from './BookShelfChanger';


class SingleBook extends Component {

  static propTypes = {
    books: PropTypes.array.isRequired,
    shelves: PropTypes.object.isRequired,
    onMoveBookShelf: PropTypes.func.isRequired
  }

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
            shelves={this.state.shelves}
            handleChange={this.handleChange}
          />
        </div>
        <div className="book-title">{this.props.book.title}</div>
        <div className="book-authors">{this.props.book.authors}</div>
      </div>
    )
  }

};

export default SingleBook;
