import React from 'react'
import Book from './book'

function bookShelf({shelfName,books,move_to}) {

    return (
        <div className="bookshelf">
            <h2 className="bookshelf-title">{shelfName}</h2>

            {

                books.length !== 0 ? (

                  <div className="bookshelf-books">
                      <ol className="books-grid">{

                          books.map((book,i)=>{

                              return(
  
                                      <Book book={book} shelfName={shelfName} move_to={move_to} i={i} key={i} />                                
  
                              );
                          
  
                          })


                      }

                      </ol>
                  </div>
                    

                ) : <h3 style={{textAlign:'center'}}>No Books</h3>
                

            }
        


            
        </div>
    )
}

export default bookShelf
