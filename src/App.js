import logo from './logo.svg';
import './App.css';
import React from 'react';
import PropTypes from 'prop-types';
import MovieCategory from './MovieCategory'
import lodash from "lodash";

class App extends React.Component{
  constructor(props) {
    super(props);
    this.state = {searchTerm: ""};


    this.movies = [
      {'name': 'The Matrix' ,'rating': 7.5 , 'category':'Action' },
      {'name': 'Focus','rating': 6.9, 'category': 'Comedy' },
      {'name': 'The Lazarus Effect','rating':6.4 , 'category': 'Thriller'},
      {'name': 'Everly','rating': 5.0 , 'category': 'Action'},
      {'name': 'Maps to the Stars','rating': 7.5 , 'category': 'Drama'},
      // {'name': ,'rating': , 'category': },
      // {'name': ,'rating': , 'category': },
      // {'name': ,'rating': , 'category': },
      // {'name': ,'rating': , 'category': },
    ]

    this.inputHandler = this.inputHandler.bind(this)

    this.groupedMovies = lodash.groupBy(this.movies,'category');
    this.allCategories = Object.keys(this.groupedMovies)
    console.log(this.allCategories);

  }

  inputHandler = function (e) {
    console.log(e.target.value);
    this.setState({searchTerm: e.target.value});
  }

  
  // remember unmount
  componentDidMount(){
    const searchBar = document.getElementById('searchBar');
    searchBar.addEventListener('input', this.inputHandler);
  }

  render(){
    console.log(this.groupedMovies);
    
    return (
      <div className="App">
        <span>
          <input 
            id="searchBar"
            type="text" 
            placeholder="Search.."
          />
          
        </span>
        
        {this.allCategories.map((category) => 

            
            {
              console.log("curent search term",this.state.searchTerm);
            console.log(category,this.groupedMovies[category]);  
            return (<MovieCategory
            movies={this.groupedMovies[category]}
            category={category}
            searchTerm={this.state.searchTerm}
            />)}
          )}
        

        
      </div>
    );
  }
}

export default App;
