import React from 'react'

function book({book,shelfName,move_to,i}) {


    const get_thumbnail=(book)=>{

        if(book.imageLinks){
            return book.imageLinks.thumbnail
        }else{
            return '' //image not found
        }
  
    }


    return (
        <li key={i}>
            <div className="book">
                <div className="book-top">
                <div className="book-cover" style={{ width: 128, height: 193, backgroundImage: 'url('+get_thumbnail(book)+')' }}></div>
                <div className="book-shelf-changer">
                    <select onChange={(e) => move_to(e,book,i)} value={shelfName==='Currently Reading' ? 'currentlyReading' : shelfName==='Want to Read' ? 'wantToRead' : shelfName==='Read' ? 'read' : 'move' }>
                        <option value="move" disabled>Move to...</option>
                        <option value="currentlyReading">Currently Reading</option>
                        <option value="wantToRead">Want to Read</option>
                        <option value="read">Read</option>
                        <option value="none">None</option>
                    </select>
                </div>
                </div>
                <div className="book-title">{book.title}</div>
                <div className="book-authors">{book.authors}</div>
            </div>
        </li>
    )
}

export default book
