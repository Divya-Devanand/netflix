import React, { useState, useEffect } from 'react';
import axios from './axios';
import './Row.css';




const baseUrl = "https://image.tmdb.org/t/p/original/"; 

function Row({ title, fetchUrl, isLargeRow }) {
    const [movies, setMovies] = useState([]);
    // a snippet of code that runs based on a specific condition

    useEffect(()=> {
        async function fetchData() {
            const request = await axios.get(fetchUrl);
            setMovies(request.data.results);
            return request;
        }
        fetchData(fetchUrl);
    }, [fetchUrl]); 

    


    return (
        <div className="row">
            <h2>{title}</h2>
            <div className="row_posters">
                {/* several row poster */}

                {movies.map((movie)=> (
                    <img
                    key={movie.id}
                    className={`row_poster ${isLargeRow && "row_posterLarge"}`} 
                    src={`${baseUrl}${ isLargeRow ? movie.poster_path: movie.backdrop_path}`} 
                    alt={movie.name} 
                    />
                ))}
            </div>
        </div>
    )
}

export default Row;
