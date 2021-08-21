import React from 'react'
import './App.css'
import {Link} from 'react-router-dom';
import BookShelf from './bookShelf';



const home = ({currently_reading,want_to_read,read,move_to}) =>{

    
    return (
        <div className="app">
          
          <div className="list-books">
          <div className="list-books-title">
              <h1>MyReads</h1>
          </div>
          <div className="list-books-content">
             
              <div>
             
                  <BookShelf shelfName='Currently Reading' books={currently_reading} move_to={move_to}/>
                  <BookShelf shelfName='Want to Read' books={want_to_read} move_to={move_to}/>
                  <BookShelf shelfName='Read' books={read} move_to={move_to}/>
                  

              </div>
          
          </div>
       
       
       
          <div className="open-search">
                  <Link to={'/search'}>
                      <button style={{textDecoration:'none',border:'none'}}>Add a book</button>
                  </Link>
          </div>
          </div>
          
        </div>
      )

}

export default home