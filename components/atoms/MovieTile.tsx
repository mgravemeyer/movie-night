import {Movie} from "../../types/Movie";

type MovieTileProps = {
    movie: Movie
}

const MovieTile = ({movie}: MovieTileProps) => {
    return (
        <div className='flex flex-col'>
            <div className='w-48 h-64 bg-red-400 rounded-md'></div>
            <p className='text-white font-quicksandBook'>{movie.name}</p>
            <div className='flex flex-row'>
                <p className='text-white font-quicksandBook'>{movie.year} |</p>
                <div className='flex flex-row gap-x-1 mx-1'>
                    {movie.categories.map(category => {
                        return (
                            <p className='text-white font-quicksandBook'>{category}</p>
                        )
                    })}
                </div>
            </div>
        </div>
    )
}

export default MovieTile;