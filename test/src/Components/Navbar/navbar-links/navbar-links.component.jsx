const NavbarLinks = () => {
  return (
    <div>
      <ul>
        <li>
          <button onClick={setData()}>Home</button>
        </li>
        <li>
          <button>About</button>
        </li>
        <li>
          <button>Profile</button>
        </li>
        <li>
          <button>Contact Us</button>
        </li>
      </ul>
    </div>
  );
};

export default NavbarLinks;
