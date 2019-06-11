import React, {useState} from 'react';
import Movie from './Movie';

const MoviesList = () => {
    const [Movies, setMovies] = useState([
        {
            name:"Harry Potter",
            price:"$10",
            id: 21123
        },
        {
            name:"Game of Thrones",
            price:"$20",
            id: 22123
        },
        {
            name:"Inception",
            price:"$10",
            id: 23123
        }
    ]);

    return(
        <div>
            {Movies.map(movie => (
                <Movie name={movie.name} price={movie.price} key={movie.id} />
            ))}
        </div>
    );
};

export default MoviesList;
