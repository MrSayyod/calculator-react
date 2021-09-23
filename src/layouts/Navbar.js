import React from 'react';

const Navbar = () => (
  <>
    <header>
      <nav>
        <div className="leftNav">Math Magicians</div>
        <div className="rightNav">
          <ul>
            <li>
              <a href="/">Home</a>
            </li>
            <li>
              <a href="/calculator">Calculator</a>
            </li>
            <li>
              <a href="/quotes">Quotes</a>
            </li>
          </ul>
        </div>
      </nav>
    </header>
  </>
);

export default Navbar;
