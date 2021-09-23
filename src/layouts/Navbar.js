import React from 'react';
import { BrowserRouter, Link } from 'react-router-dom';

const Navbar = () => (
  <BrowserRouter>
    <header>
      <nav>
        <div className="leftNav">Math Magicians</div>
        <div className="rightNav">
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/calculator">Calculator</Link>
            </li>
            <li>
              <Link to="/quotes">Quotes</Link>
            </li>
          </ul>
        </div>
      </nav>
    </header>
  </BrowserRouter>
);

export default Navbar;
