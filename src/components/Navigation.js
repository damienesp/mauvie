import { NavLink } from "react-router-dom";

const Navigation = () => {
  return (
    <div className="navigation-wrapper">
      <div className="logo">
        <NavLink to="/home" activeClassName="active-logo">
          <h1>MAUVIE</h1>
        </NavLink>
      </div>
      <nav>
        <ul className="nav-links">
          <NavLink to="/home" activeClassName="active-nav">
            <li>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                height="24px"
                viewBox="0 0 24 24"
                width="24px"
                className="svg-nav"
              >
                <path d="M0 0h24v24H0V0z" fill="none" />
                <path d="M10 19v-5h4v5c0 .55.45 1 1 1h3c.55 0 1-.45 1-1v-7h1.7c.46 0 .68-.57.33-.87L12.67 3.6c-.38-.34-.96-.34-1.34 0l-8.36 7.53c-.34.3-.13.87.33.87H5v7c0 .55.45 1 1 1h3c.55 0 1-.45 1-1z" />
              </svg>
              Home
            </li>
          </NavLink>
          <NavLink to="/popular" activeClassName="active-nav">
            <li>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                height="24px"
                viewBox="0 0 24 24"
                width="24px"
                className="svg-nav"
              >
                <path d="M0 0h24v24H0V0z" fill="none" />
                <path d="M16.85 6.85l1.44 1.44-4.88 4.88-3.29-3.29c-.39-.39-1.02-.39-1.41 0l-6 6.01c-.39.39-.39 1.02 0 1.41.39.39 1.02.39 1.41 0L9.41 12l3.29 3.29c.39.39 1.02.39 1.41 0l5.59-5.58 1.44 1.44c.31.31.85.09.85-.35V6.5c.01-.28-.21-.5-.49-.5h-4.29c-.45 0-.67.54-.36.85z" />
              </svg>
              Popular
            </li>
          </NavLink>
          <NavLink to="/top-rated" activeClassName="active-nav">
            <li>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                height="24px"
                viewBox="0 0 24 24"
                width="24px"
                className="svg-nav"
              >
                <g>
                  <path d="M0,0h24v24H0V0z" fill="none" />
                  <path d="M0,0h24v24H0V0z" fill="none" />
                </g>
                <g>
                  <path d="M12,17.27l4.15,2.51c0.76,0.46,1.69-0.22,1.49-1.08l-1.1-4.72l3.67-3.18c0.67-0.58,0.31-1.68-0.57-1.75l-4.83-0.41 l-1.89-4.46c-0.34-0.81-1.5-0.81-1.84,0L9.19,8.63L4.36,9.04c-0.88,0.07-1.24,1.17-0.57,1.75l3.67,3.18l-1.1,4.72 c-0.2,0.86,0.73,1.54,1.49,1.08L12,17.27z" />
                </g>
              </svg>
              Top Rated
            </li>
          </NavLink>
          <NavLink to="/community" activeClassName="active-nav">
            <li>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                height="24px"
                viewBox="0 0 24 24"
                width="24px"
                className="svg-nav"
              >
                <path d="M0 0h24v24H0V0z" fill="none" />
                <path d="M16 11c1.66 0 2.99-1.34 2.99-3S17.66 5 16 5s-3 1.34-3 3 1.34 3 3 3zm-8 0c1.66 0 2.99-1.34 2.99-3S9.66 5 8 5 5 6.34 5 8s1.34 3 3 3zm0 2c-2.33 0-7 1.17-7 3.5V18c0 .55.45 1 1 1h12c.55 0 1-.45 1-1v-1.5c0-2.33-4.67-3.5-7-3.5zm8 0c-.29 0-.62.02-.97.05.02.01.03.03.04.04 1.14.83 1.93 1.94 1.93 3.41V18c0 .35-.07.69-.18 1H22c.55 0 1-.45 1-1v-1.5c0-2.33-4.67-3.5-7-3.5z" />
              </svg>
              Community
            </li>
          </NavLink>
          <NavLink to="/upcoming" activeClassName="active-nav">
            <li>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                height="24px"
                viewBox="0 0 24 24"
                width="24px"
                className="svg-nav"
              >
                <g>
                  <rect fill="none" height="24" width="24" />
                </g>
                <g>
                  <g>
                    <path d="M20.45,6.55L20.45,6.55c-0.38-0.38-1.01-0.38-1.39,0L16.89,8.7c-0.39,0.38-0.39,1.01,0,1.39l0.01,0.01 c0.39,0.39,1.01,0.39,1.4,0c0.62-0.63,1.52-1.54,2.15-2.17C20.83,7.55,20.83,6.93,20.45,6.55z" />
                    <path d="M12.02,3h-0.03C11.44,3,11,3.44,11,3.98v3.03C11,7.56,11.44,8,11.98,8h0.03C12.56,8,13,7.56,13,7.02V3.98 C13,3.44,12.56,3,12.02,3z" />
                    <path d="M7.1,10.11l0.01-0.01c0.38-0.38,0.38-1.01,0-1.39L4.96,6.54c-0.38-0.39-1.01-0.39-1.39,0L3.55,6.55 c-0.39,0.39-0.39,1.01,0,1.39c0.63,0.62,1.53,1.54,2.15,2.17C6.09,10.49,6.72,10.49,7.1,10.11z" />
                    <path d="M12,15c-1.24,0-2.31-0.75-2.76-1.83C8.92,12.43,8.14,12,7.34,12L4,12c-1.1,0-2,0.9-2,2l0,5c0,1.1,0.9,2,2,2h16 c1.1,0,2-0.9,2-2v-5c0-1.1-0.9-2-2-2l-3.34,0c-0.8,0-1.58,0.43-1.9,1.17C14.31,14.25,13.24,15,12,15" />
                  </g>
                </g>
              </svg>
              Upcoming
            </li>
          </NavLink>
        </ul>
      </nav>
    </div>
  );
};

export default Navigation;
