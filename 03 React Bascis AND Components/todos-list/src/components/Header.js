import React from 'react';
import PropTypes from 'prop-types';

function Header(props) {
  return (
    <div>
      <nav className='navbar navbar-expand-lg navbar-light bg-light'>
        <div className='container-fluid'>
          <p className='navbar-brand'>{props.title}</p>
          <button
            className='navbar-toggler'
            type='button'
            data-bs-toggle='collapse'
            data-bs-target='#navbarSupportedContent'
            aria-controls='navbarSupportedContent'
            aria-expanded='false'
            aria-label='Toggle navigation'
          >
            <span className='navbar-toggler-icon'></span>
          </button>
          <div className='collapse navbar-collapse' id='navbarSupportedContent'>
            <ul className='navbar-nav me-auto mb-2 mb-lg-0'>
              <li className='nav-item'>
                <p className='nav-link active' aria-current='page'>
                  Home
                </p>
              </li>
              <li className='nav-item'>
                <p className='nav-link'>Link</p>
              </li>
            </ul>
            {props.searchBar ? (
              <form className='d-flex'>
                <input
                  className='form-control me-2'
                  type='search'
                  placeholder='Search'
                  aria-label='Search'
                />
                <button className='btn btn-outline-success' type='submit'>
                  Search
                </button>
              </form>
            ) : (
              'No Search Bar'
            )}
          </div>
        </div>
      </nav>
    </div>
  );
}

Header.defaultProps = {
  title: 'Your Title Here',
};

Header.propTypes = {
  title: PropTypes.string,
};

export default Header;
