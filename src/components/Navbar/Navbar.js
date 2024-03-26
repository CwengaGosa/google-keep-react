import "./Navbar.css";

const Navbar = () => {
  return (
    <nav>
      <div className="logo-area">
        <div className="tooltip">
          <span className="material-icons-outlined hover">menu</span>
          <span className="tooltip-text">Main Menu</span>
        </div>

        <img
          className="gb_uc gb_7d"
          src="https://www.gstatic.com/images/branding/product/1x/keep_2020q4_48dp.png"
          alt=""
          aria-hidden="true"
        />
        <span className="logo-text">Keep</span>
      </div>

      <div className="search-area">
        <div className="tooltip">
          <span className="material-icons-outlined hover">search</span>
          <span className="tooltip-text">Search</span>
        </div>
        <input type="text" placeholder="Search" />
      </div>
      <div className="settings-area">
        <div className="tooltip">
          <span className="material-icons-outlined hover">refresh</span>
          <span className="tooltip-text">Refresh</span>
        </div>
        <div className="tooltip">
          <span className="material-icons-outlined hover">view_agenda</span>
          <span className="tooltip-text">List View</span>
        </div>
        <div className="tooltip">
          <span className="material-icons-outlined hover">settings</span>
          <span className="tooltip-text">Settings</span>
        </div>
      </div>
      <div className="profile-actions-area">
        <div className="tooltip">
          <span className="material-icons-outlined hover">apps</span>
          <span className="tooltip-text">Apps</span>
        </div>
        <div className="tooltip logout">
          <span className="material-icons-outlined hover">account_circle</span>
          <span className="tooltip-text">Logout</span>
          <span className="auth-user"></span>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
