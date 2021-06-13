import './css/main.css';
// import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from './Navbar';
import Home from './Home';

const blogApp = () => {


  return (
    <div className="App">
      <Navbar></Navbar>
      <Home></Home>
    </div>
  )
};


export default blogApp;