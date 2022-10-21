import {useState} from "react";
import MovieTile from "./atoms/MovieTile";
import {Movie} from "../types/Movie";

const MovieList = () => {

    const [movies, setMovies] = useState<Movie[]>([
        {
            name: 'Spiderman 2',
            imageURL: '',
            year: 2022,
            categories: ['action', 'drama']
        },
        {
            name: 'Pulp Fiction',
            imageURL: '',
            year: 2010,
            categories: ['popo', 'klatscher']
        },
        {
            name: 'Deine Mudda',
            imageURL: '',
            year: 1998,
            categories: ['some', 'category']
        }
    ]);

    return (
        <div className='flex flex-row w-full h-full p-8'>
            <div className='flex flex-col bg-black w-full h-full gap-2'>
                <p className='w-96 flex text-white text-xl font-quicksandBook'>All Time</p>
                <div className='flex flex-row gap-4'>
                    {movies.map(movie => {
                        return (
                            <MovieTile movie={movie}/>
                        )
                    })}
                </div>
            </div>
            <div className='w-96 h-full flex p-8 text-white text-xl font-quicksandBook'>
                <p>Activity</p>
            </div>
        </div>

    )
}

export default MovieList;
