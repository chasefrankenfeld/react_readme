import React from 'react';


function BookShelfChanger (props) {
  return(
    <div className="book-shelf-changer">
      <select value={props.value} onChange={props.handleChange}>
        <option value="none" disabled>Move to...</option>
        {props.shelves.map((shelf) => (
          <option value={shelf[0]} key={shelf[0]}>{shelf[1]}</option>
        ))}
        <option value="none">None</option>
      </select>
    </div>
  )
}

export default BookShelfChanger
