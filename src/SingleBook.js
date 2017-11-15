import React, { Component } from 'react';


class SingleBook extends Component {

  render() {
    return(

        <div className="book">
          <div className="book-top">
            <div className="book-cover" style={{ width: 128, height: 193, backgroundImage: `url(${this.props.book.imageLinks.smallThumbnail})` }}></div>
            <div className="book-shelf-changer">
              <select onChange={(event) => this.props.onMoveBookShelf(this.props.book, event.target.value)}>
                <option value="none" disabled>Move to...</option>
                <option value="currentlyReading" selected>Currently Reading</option>
                <option value="wantToRead">Want to Read</option>
                <option value="read">Read</option>
                <option value="none">None</option>
                <option value="none">// TODO: Add selected through shelf name to relevant value</option>
              </select>
            </div>
          </div>
          <div className="book-title">{this.props.book.title}</div>
          <div className="book-authors">{this.props.book.authors}</div>
        </div>
    )
  }
};

export default SingleBook;
