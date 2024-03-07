import React from 'react'
import { Route, Routes  } from 'react-router-dom';
import Book from '../components/book/book'
import CreateBook from '../components/book/createBook'


const BookRoutes =()=>{
    return(
        <Routes>
            <Route path='/Book' Component={Book} />
            <Route path='/createbook' Component={CreateBook} />
        </Routes>
    )
}

export default BookRoutes;