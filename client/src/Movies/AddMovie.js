import React from 'react';
import Axios from 'axios';



const AddMovie = () => {

    const handleSubmitAdd = e => {

        e.preventDefault();


        try {
            const response = Axios.post(`http://localhost:5000/api/movies`)
            console.log('', response);
        } catch (e) {
            console.log('Axios request failed')
        }


    };
    return (
        <div className="movie-card">
    
            <p>Please Fill out this form to Add the movie!</p>
    
            <form onSubmit={handleSubmitAdd}>
                <input
                placeholder="Movie Name"
                name="title"
                />
                 <input
                placeholder="Director"
                name="director"
                />
                 <input
                placeholder="Metascore"
                name="metascore"
               />
                 <input
                placeholder="Stars"
                name="stars"
                />
                <button type="submit">Add</button>
            </form>
        </div>
    )
}

export default AddMovie;