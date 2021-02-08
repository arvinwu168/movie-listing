
import React from 'react';
import PropTypes from 'prop-types';
import './MovieEntry.css';

class MovieEntry extends React.Component{
//   constructor(props) {
//     super(props);

//     this.name = props.name
//     this.rating = props.rating
//     this.category = props.category
//   }
    generateStar(numericalRating){
        const totalStars = 5
        const maxNumericalRating = 10
        let normalizedStarNum = Math.round(numericalRating * totalStars / maxNumericalRating)

        let result = String.fromCharCode(9733).repeat(normalizedStarNum) + String.fromCharCode(9734).repeat(totalStars - normalizedStarNum)
        return result
    }

    render(){
        const { name, rating, category } = this.props;

        return (
            <div className={'entry-div'} >
                <table>
                    <tr>{this.generateStar(rating)}</tr>
                    <tr>
                        <a href={`https://www.imdb.com/find?q=${name}`}>{name}</a>
                    </tr>
                </table>
            </div>
        );
    }
}

MovieEntry.propTypes = {
    name: PropTypes.string.isRequired,
    rating: PropTypes.number.isRequired,
    category: PropTypes.string.isRequired,
    
};

export default MovieEntry;
