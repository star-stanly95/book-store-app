import React from 'react-dom'
import { useSelector } from 'react-redux'

const CreateBook = () => {

    const isLoggedIn = useSelector((state) => state.userlogin.isLoggedIn);
    console.log(isLoggedIn)
    return (
        <div className='card'>
            <div className="card-header">Create Book</div>
            <div className="card-body">
                <h4 className="card-title">Card title</h4>
                <p className="card-text">
                    Some quick example text to build on the card title
                    and make up the bulk of the card's content.
                </p>
                <a href="#" className="btn btn-primary">Go somewhere</a>
            </div>
        </div>
    )
}

export default CreateBook;