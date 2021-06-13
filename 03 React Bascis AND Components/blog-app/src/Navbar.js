import './css/main.css';

const Navbar = () => {
        return (
                <nav className="navbar my-3">
                        <h1>The Blog Page</h1>
                        <ul>
                                <li><a href="#none">Home</a></li>
                                <li><a href="/create">New Blog</a></li>
                        </ul>

                </nav>
        )
};

export default Navbar;
