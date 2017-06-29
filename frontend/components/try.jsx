
const personalGreeting = (currentUser, logout, fetchSearchProjects) => (
  <hgroup className="header-group">
    <SearchBar fetchSearchProjects={fetchSearchProjects} />
    <div className="dropdown">
      <img src="http://res.cloudinary.com/ds1qfel8a/image/upload/v1497820642/Stock/avatar_nqzvi4.png"
      alt="User icon" className="dropbtn" />
      <div className="background" />
      <div className="dropdown-content">
        <p>Your Profile</p>
        <p>You're logged in as <span>{currentUser.username}</span>
          <button className="header-button" onClick={logout}>
            Log out</button>
        </p>
      </div>
    </div>
  </hgroup>
);
