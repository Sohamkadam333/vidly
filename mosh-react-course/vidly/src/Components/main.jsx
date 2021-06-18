import React from 'react';
import { getMovies } from '../Services/fakeMovieServices';
import '../../node_modules/bootstrap/dist/css/bootstrap.css';

class Main extends React.Component {
  state = {
    movies: getMovies(),
  };

  thead() {
    return (
      <tr>
        <th scope='col'>Title</th>
        <th scope='col'>Genre</th>
        <th scope='col'>Stock</th>
        <th scope='col'>Rate</th>
        <th></th>
      </tr>
    );
  }

  handleDeleteMovie = (movie) => {
    console.log('Delete btn clicked', movie);
    // e.target.parentElement.parentElement.remove();
    // this.setState({ movies: this.state.movies.length - 1 });
    // console.log(e.target);
    const movies = this.state.movies.filter((m) => m._id !== movie._id);
    this.setState({ movies: movies });
  };

  tbody() {
    const { movies } = this.state;
    const row = movies.map((movie, index) => (
      <tr key={index}>
        <td>{movie.title}</td>
        <td>{movie.genre.name}</td>
        <td>{movie.numberInStock}</td>
        <td>{movie.dailyRentalRate}</td>
        <td>
          <button
            onClick={() => {
              this.handleDeleteMovie(movie);
            }}
            className='btn btn-danger btn-sm'
          >
            Delete
          </button>
        </td>
      </tr>
    ));
    return row;
  }

  render() {
    // const moviesLength = this.state.moviesLength;
    return (
      <React.Fragment>
        <>
          {this.state.movies.length === 0 ? (
            <h3 className='text-center m-2'>No Movies in database</h3>
          ) : (
            <>
              <h4 className='text-center m-2'>{`Showing ${this.state.movies.length} in database`}</h4>
              <table className='table'>
                <thead>{this.thead()}</thead>
                <tbody>{this.tbody()}</tbody>
              </table>
            </>
          )}
        </>
      </React.Fragment>
    );
  }
}

export default Main;
