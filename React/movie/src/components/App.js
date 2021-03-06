import React from 'react';
import {data} from '../data';
import Navbar from './Navbar';
import MovieCard from './MovieCard'
import {addMovies} from '../actions/index'

class App extends React.Component {
  componentDidMount(){
    //make api call
    //dispatch an action to the 
    const {store} = this.props;
    console.log(store);
    store.subscribe( ()=>{
        console.log("Updated");
        this.forceUpdate();
    });
    store.dispatch(addMovies(data));
    
  }
  render(){
  const {list} = this.props.store.getState();
  return (
      <div className="main">
        <Navbar />
        <div className="main">
            <div className="tabs">
                <div className="tab">Movies</div>
                <div className="tab">Favourites</div>
            </div>

            <div className="list">
                {list.map((movie,index) =>(
                  <MovieCard movie={movie} key={`movies-${index}`} />
                ))}
            </div>
        </div>
      </div>
    );
  }
}

export default App;
