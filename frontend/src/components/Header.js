import React from 'react';

function Header() {
  return (
    <div>
      <nav className="nav">
        <div className="nav-left">
          <a className="brand">Task Manager</a>
        </div>
        <div className="nav-right">
          <div className="tabs">
            <a>Northspyre Assesment</a>
          </div>
        </div>
      </nav>
    </div>
  );
}

export default Header;
