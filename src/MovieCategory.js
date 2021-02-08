
import React from 'react';
import PropTypes from 'prop-types';
import MovieEntry from './MovieEntry'
import './MovieCategory.css';

class MovieCategory extends React.Component{


  render(){
    const { category, movies, searchTerm } = this.props;
    console.log(searchTerm,"st");
    let filderedMovies = movies.filter(movie => (searchTerm.length == 0 || movie.name.toLowerCase().includes(searchTerm.toLowerCase())))

    return (
        <div>
            <h3 className={'category-title'}>{`${category} (${filderedMovies.length})`}</h3>
            <ul>
                {filderedMovies.map( (movie)=> 
                    <li key={movie}>
                        <MovieEntry 
                            name={movie.name}
                            rating={movie.rating}
                            category={movie.category}
                        />
                    </li>
                )}          
            </ul>
        </div>
    );
  }
}

MovieCategory.propTypes = {
    category: PropTypes.string.isRequired,
    movies: PropTypes.arrayOf(PropTypes.shape({
        name: PropTypes.string.isRequired,
        rating: PropTypes.number.isRequired,
        category: PropTypes.string.isRequired,
    })),
    searchTerm: PropTypes.string.isRequired,
};

export default MovieCategory;
