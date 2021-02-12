
import React from 'react';
import PropTypes from 'prop-types';
import './MovieEntry.css';

class MovieEntry extends React.Component{

    generateStar(numericalRating){
        const totalStars = 5
        const maxNumericalRating = 10
        let normalizedStarNum = Math.round(numericalRating * totalStars / maxNumericalRating)

        let result = String.fromCharCode(9733).repeat(normalizedStarNum) + String.fromCharCode(9734).repeat(totalStars - normalizedStarNum)
        return result
    }

    render(){
        const { name, rating } = this.props;

        return (
            <React.Fragment>
                <div className={'entry-div'}>
                    <div>{this.generateStar(rating)}</div>
                    <a href={`https://www.imdb.com/find?q=${name}`}>{name}</a>
                </div>
            </React.Fragment>
        );
    }
}

MovieEntry.propTypes = {
    name: PropTypes.string.isRequired,
    rating: PropTypes.number.isRequired,
    category: PropTypes.string.isRequired,
    
};

export default MovieEntry;
