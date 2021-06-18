import React from 'react';
import './main.css';

class Navbar extends React.Component {
  state = {
    heading: 'Main Heading',
    content: 'Main Content',
  };

  handleHomePage = () => {
    console.log('HomePage');
    this.setState({
      heading: 'Home Heading',
      content: 'Home Content',
    });
  };

  handleAbout = () => {
    console.log('AboutPage');
    this.setState({
      heading: 'About Heading',
      content: 'About Content',
    });
  };

  handleContact = () => {
    console.log('ContactPage');
    this.setState({
      heading: 'Contact Heading',
      content: 'Contact Content',
    });
  };

  navbar = () => {
    return (
      <div className='navbar'>
        <h1>Soham Kadam</h1>
        <ul>
          <li>
            <span onClick={this.handleHomePage}>Home</span>
          </li>
          <li>
            <span onClick={this.handleAbout}>About</span>
          </li>
          <li>
            <span onClick={this.handleContact}>Contact-Me</span>
          </li>
        </ul>
      </div>
    );
  };

  page = () => {
    return (
      <div className='page'>
        <h1>{this.state.heading}</h1>
        <p>{this.state.content}</p>
      </div>
    );
  };

  render() {
    return (
      <>
        {this.navbar()}
        {this.page()}
      </>
    );
  }
}

export default Navbar;
