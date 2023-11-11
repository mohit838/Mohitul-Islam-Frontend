import Link from "next/link";

const Header = () => {
  return (
    <section>
      <div className="section-padding">
        <div className="header-area">
          {/* Logo */}
          <div className="site-logo">
            <Link href={"/"}>
              <h2>Mohitul</h2>
            </Link>
          </div>

          {/* Nav Menu */}
          <div className="menu-and-theme">
            <nav className="nav-menu">
              <ul className="nav-items">
                <li>
                  <Link href={"#about"}>About</Link>
                </li>
                <li>
                  <Link href={"#experiencs"}>Experiencs</Link>
                </li>
                <li>
                  <Link href={"#works"}>Works</Link>
                </li>
                <li>
                  <Link href={"#contact"}>Contact</Link>
                </li>
              </ul>
            </nav>

            {/* Dark Mode Icon*/}
            <div className="header-icons">
              <div>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={2}
                  stroke="currentColor"
                  className="w-6 h-6"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M12 3v2.25m6.364.386l-1.591 1.591M21 12h-2.25m-.386 6.364l-1.591-1.591M12 18.75V21m-4.773-4.227l-1.591 1.591M5.25 12H3m4.227-4.773L5.636 5.636M15.75 12a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0z"
                  />
                </svg>
              </div>
              <div>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={2}
                  stroke="currentColor"
                  className="w-6 h-6"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M21.752 15.002A9.718 9.718 0 0118 15.75c-5.385 0-9.75-4.365-9.75-9.75 0-1.33.266-2.597.748-3.752A9.753 9.753 0 003 11.25C3 16.635 7.365 21 12.75 21a9.753 9.753 0 009.002-5.998z"
                  />
                </svg>
              </div>
            </div>

            {/* Mobile Menu Icon */}
            <div className="mobile-menu-bar">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={2}
                stroke="currentColor"
                className="w-6 h-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M3.75 5.25h16.5m-16.5 4.5h16.5m-16.5 4.5h16.5m-16.5 4.5h16.5"
                />
              </svg>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Header;
